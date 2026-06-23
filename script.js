// Questions are loaded from perguntas.js (must define `allQuestions`)

// ════════════════════════════════════════════════════
// PRIZES
// ════════════════════════════════════════════════════
const prizes = [
  "R$ 1.000.000 🌽🌽🌽",
  "R$ 500.000",
  "R$ 250.000",
  "R$ 125.000",
  "R$ 64.000 ⭐",
  "R$ 32.000",
  "R$ 16.000",
  "R$ 8.000",
  "R$ 4.000 ⭐",
  "R$ 2.000",
  "R$ 1.000",
  "R$ 500",
  "R$ 300 ⭐",
  "R$ 200",
  "R$ 150",
  "R$ 100",
  "R$ 50",
  "R$ 0"
];
const milestones = [0, 4, 8, 12]; // indices of guaranteed prizes (0-based from top)

// ════════════════════════════════════════════════════
// GAME STATE
// ════════════════════════════════════════════════════
let questions = [];
let currentQ = 0;
let lifelines = { uni: true, cards: true, audience: true };
let eliminatedOpts = [];
let selectedOpt = null;
let answering = false;
let pendingCards = [];

// ════════════════════════════════════════════════════
// INIT
// ════════════════════════════════════════════════════
function initCategories() {
  const categories = [...new Set(allQuestions.map(q => q.categoria).filter(c => c))];
  const list = document.getElementById('category-list');
  if (list) {
    list.innerHTML = '';
    categories.forEach(cat => {
      const label = document.createElement('label');
      label.innerHTML = `<input type="checkbox" class="cat-checkbox" value="${cat}" checked onchange="updateCatAll()"> ${cat}`;
      list.appendChild(label);
    });
  }
}

function toggleAllCategories() {
  const allChecked = document.getElementById('cat-all').checked;
  const checkboxes = document.querySelectorAll('.cat-checkbox');
  checkboxes.forEach(cb => cb.checked = allChecked);
}

function updateCatAll() {
  const checkboxes = document.querySelectorAll('.cat-checkbox');
  const allChecked = Array.from(checkboxes).every(cb => cb.checked);
  document.getElementById('cat-all').checked = allChecked;
}

window.addEventListener('DOMContentLoaded', initCategories);

function startGame() {
  const selectedCategories = Array.from(document.querySelectorAll('.cat-checkbox:checked')).map(cb => cb.value);
  if (selectedCategories.length === 0) {
    alert("Por favor, selecione pelo menos uma categoria!");
    return;
  }

  let filteredQuestions = allQuestions.filter(q => selectedCategories.includes(q.categoria));

  if (filteredQuestions.length === 0) {
    alert("Nenhuma pergunta encontrada para as categorias selecionadas!");
    return;
  }

  // pick a randomized set of up to 17 questions each round
  questions = shuffle([...filteredQuestions]).slice(0, Math.min(17, filteredQuestions.length));
  currentQ = 0;
  lifelines = { uni: true, cards: true, audience: true };
  document.getElementById('screen-start').style.display = 'none';
  document.getElementById('screen-game').style.display = 'block';
  buildPrizeLadder();
  updateLifelineButtons();
  // initialize audio on game start (user gesture)
  initAudio();
  playSound('start');
  loadQuestion();
}

function restartGame() {
  ['modal-result', 'modal-stop', 'modal-uni', 'modal-cards', 'modal-audience'].forEach(closeModal);
  document.getElementById('screen-end').style.display = 'none';
  document.getElementById('screen-game').style.display = 'none';
  document.getElementById('screen-start').style.display = 'flex';
}

// ════════════════════════════════════════════════════
// PRIZE LADDER
// ════════════════════════════════════════════════════
function buildPrizeLadder() {
  const list = document.getElementById('prize-ladder-list');
  list.innerHTML = '';
  prizes.forEach((p, i) => {
    const d = document.createElement('div');
    d.className = 'prize-item' + (milestones.includes(i) ? ' milestone' : '');
    d.id = 'prize-' + i;
    // row i is earned by answering question (prizes.length - 2 - i)
    const qNum = prizes.length - 2 - i + 1; // 1-based question number
    const label = i === prizes.length - 1 ? '–' : `P${qNum}`;
    d.innerHTML = `<span class="prize-num">${label}</span><span class="prize-val">${p}</span>`;
    list.appendChild(d);
  });
  updatePrizeLadder();
}

function updatePrizeLadder() {
  prizes.forEach((_, i) => {
    const el = document.getElementById('prize-' + i);
    if (!el) return;
    el.classList.remove('active', 'done');
    // prize row i corresponds to question (prizes.length - 2 - i)
    const qIndex = prizes.length - 2 - i;
    if (qIndex === currentQ) el.classList.add('active');
    else if (qIndex < currentQ) el.classList.add('done');
  });
}

// prizes[0] = R$1.000.000 (top), prizes[17] = R$0 (bottom, starting point)
// Question 0 (first) earns prizes[16] = R$50 if correct
// Question 17 (last) earns prizes[0] = R$1.000.000 if correct
function getPrizeForQuestion(qIndex) {
  // The prize awarded for answering question qIndex correctly
  const prizeIndex = prizes.length - 2 - qIndex; // q0->index16, q17->index0
  return prizes[Math.max(0, prizeIndex)];
}

function getCurrentPrize() { return getPrizeForQuestion(currentQ); }

function getEarnedPrize() {
  // What the player has secured (last correct answer's prize)
  if (currentQ === 0) return prizes[prizes.length - 1]; // R$0, nothing earned yet
  return getPrizeForQuestion(currentQ - 1);
}

// ════════════════════════════════════════════════════
// SHUFFLE QUESTION OPTIONS
// ════════════════════════════════════════════════════
function shuffleQuestionOptions(q) {
  // Create a copy to avoid modifying the original
  const shuffled = { ...q, opts: [...q.opts] };

  // Create array of indices [0, 1, ..., n-1] based on number of options
  const indices = Array.from({ length: q.opts.length }, (_, i) => i);

  // Shuffle indices
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }

  // Create new shuffled options array
  const newOpts = [];
  let newCorrectIndex = -1;

  for (let i = 0; i < indices.length; i++) {
    const oldIdx = indices[i];
    newOpts.push(q.opts[oldIdx]);
    // Track where the correct answer ended up
    if (oldIdx === q.correct) {
      newCorrectIndex = i;
    }
  }

  shuffled.opts = newOpts;
  shuffled.correct = newCorrectIndex;
  return shuffled;
}

// ════════════════════════════════════════════════════
// LOAD QUESTION
// ════════════════════════════════════════════════════
function loadQuestion() {
  if (currentQ >= questions.length) { endGame(true); return; }
  eliminatedOpts = [];
  selectedOpt = null;
  answering = false;
  pendingCards = [];

  let q = questions[currentQ];
  // Shuffle the options for this question and persist the shuffled copy
  q = shuffleQuestionOptions(q);
  questions[currentQ] = q;
  document.getElementById('question-text').textContent = q.q;
  document.getElementById('q-counter').textContent = `Pergunta ${currentQ + 1} / ${questions.length}`;
  document.getElementById('current-prize').textContent = getCurrentPrize();
  document.getElementById('progress-bar').style.width = `${(currentQ / questions.length) * 100}%`;

  const grid = document.getElementById('options-grid');
  grid.innerHTML = '';
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  q.opts.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.id = 'opt-' + i;
    btn.innerHTML = `<span class="opt-letter">${letters[i]}</span><span>${opt}</span>`;
    btn.onclick = () => selectOption(i);
    grid.appendChild(btn);
  });

  updatePrizeLadder();
  updateLifelineButtons();
}

// ════════════════════════════════════════════════════
// SELECT / CONFIRM
// ════════════════════════════════════════════════════
function selectOption(i) {
  if (answering) return;
  if (eliminatedOpts.includes(i)) return;

  initAudio();
  playSound('select');

  // deselect previous
  if (selectedOpt !== null) {
    document.getElementById('opt-' + selectedOpt).classList.remove('selected');
  }
  selectedOpt = i;
  document.getElementById('opt-' + i).classList.add('selected');

  // After 800ms auto-confirm (simulate double-click mechanic with delay)
  // Actually: first click selects, second click confirms (classic show do milhão)
  if (document.getElementById('opt-' + i)._confirming) {
    clearTimeout(document.getElementById('opt-' + i)._confirmTimer);
    document.getElementById('opt-' + i)._confirming = false;
    confirmAnswer(i);
    return;
  }
  document.getElementById('opt-' + i)._confirming = true;
  document.getElementById('opt-' + i)._confirmTimer = setTimeout(() => {
    document.getElementById('opt-' + i)._confirming = false;
  }, 3000);
  // Show confirm hint
  confirmAnswer(i); // single click confirms for usability
}

function confirmAnswer(i) {
  if (answering) return;
  answering = true;
  initAudio();
  playSound('confirm');
  const q = questions[currentQ];
  const correct = q.correct;
  const isCorrect = i === correct;

  // disable all buttons
  document.querySelectorAll('.option-btn').forEach(b => b.disabled = true);

  setTimeout(() => {
    if (isCorrect) {
      document.getElementById('opt-' + i).classList.add('correct');
      document.getElementById('opt-' + i).classList.remove('selected');
    } else {
      document.getElementById('opt-' + i).classList.add('wrong');
      document.getElementById('opt-' + i).classList.remove('selected');
      // reveal correct
      setTimeout(() => {
        document.getElementById('opt-' + correct).classList.add('correct');
      }, 600);
    }

    setTimeout(() => showResult(isCorrect, correct), 1200);
  }, 400);
}

// ════════════════════════════════════════════════════
// RESULT
// ════════════════════════════════════════════════════
function showResult(isCorrect, correctIdx) {
  initAudio();
  playSound(isCorrect ? 'correct' : 'wrong');
  const q = questions[currentQ];
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const modal = document.getElementById('modal-result');
  const isLastQuestion = currentQ + 1 >= questions.length;

  // Reset stop button to default behaviour first
  const stopBtn = document.getElementById('result-stop-btn');
  stopBtn.onclick = stopGame;
  stopBtn.textContent = '🏃 Parar com o prêmio atual';

  if (isCorrect) {
    document.getElementById('result-emoji').textContent = '✅';
    document.getElementById('result-title').textContent = 'CORRETO! 🌽';
    document.getElementById('result-text').textContent = `Excelente! A resposta certa é: ${letters[correctIdx]}) ${q.opts[correctIdx]}`;
    document.getElementById('result-prize').textContent = getCurrentPrize();

    if (isLastQuestion) {
      // Won the whole game — just show a single "Ver prêmio" button
      document.getElementById('result-next-btn').style.display = 'none';
      stopBtn.textContent = '🏆 VER MEU PRÊMIO!';
      stopBtn.style.display = 'inline-block';
      stopBtn.onclick = () => {
        closeModal('modal-result');
        currentQ++;
        endGame(true);
      };
      playSound('jackpot');
    } else {
      document.getElementById('result-next-btn').style.display = 'inline-block';
      stopBtn.style.display = 'inline-block';
    }
  } else {
    document.getElementById('result-emoji').textContent = '❌';
    document.getElementById('result-title').textContent = 'ERRADO!';
    document.getElementById('result-text').textContent = `A resposta correta era: ${letters[correctIdx]}) ${q.opts[correctIdx]}`;
    document.getElementById('result-prize').textContent = `Você sai com: ${getEarnedPrize()}`;
    document.getElementById('result-next-btn').style.display = 'none';
    stopBtn.textContent = '😔 Ver resultado';
    stopBtn.style.display = 'inline-block';
    stopBtn.onclick = () => {
      closeModal('modal-result');
      endGame(false);
    };
  }

  modal.classList.add('show');
}

function nextQuestion() {
  currentQ++;
  closeModal('modal-result');
  if (currentQ >= questions.length) { endGame(true); return; }
  loadQuestion();
}

function stopGame() {
  document.getElementById('stop-prize-text').textContent = getEarnedPrize();
  closeModal('modal-result');
  openModal('modal-stop');
}

function confirmStop() {
  closeModal('modal-stop');
  endGame('stop');
}

// ════════════════════════════════════════════════════
// END GAME
// ════════════════════════════════════════════════════
function endGame(won) {
  // Close any open modals
  ['modal-result', 'modal-stop', 'modal-uni', 'modal-cards', 'modal-audience'].forEach(closeModal);

  document.getElementById('screen-game').style.display = 'none';
  const end = document.getElementById('screen-end');
  end.style.display = 'flex';

  if (won === true) {
    document.getElementById('end-emoji').textContent = '🌽🏆🌽';
    document.getElementById('end-title').textContent = 'VOCÊ GANHOU TUDO!';
    document.getElementById('end-prize').textContent = prizes[0];
    document.getElementById('end-sub').textContent = 'Mestre absoluto em Sistemas de Informação! A espiga é toda sua!';
  } else if (won === 'stop') {
    document.getElementById('end-emoji').textContent = '💰';
    document.getElementById('end-title').textContent = 'VOCÊ PAROU!';
    document.getElementById('end-prize').textContent = getEarnedPrize();
    document.getElementById('end-sub').textContent = 'Decisão sábia. Estude mais e volte mais forte!';
  } else {
    document.getElementById('end-emoji').textContent = '😔';
    document.getElementById('end-title').textContent = 'QUE PENA!';
    document.getElementById('end-prize').textContent = getEarnedPrize();
    document.getElementById('end-sub').textContent = 'Revise o conteúdo e tente novamente!';
  }

  initAudio();
  // applause for win/stop, sad for loss
  if (won === true || won === 'stop') playSound('applause'); else playSound('wrong');
}

// ════════════════════════════════════════════════════
// LIFELINES
// ════════════════════════════════════════════════════
function updateLifelineButtons() {
  document.getElementById('ll-uni').disabled = !lifelines.uni || answering;
  document.getElementById('ll-cards').disabled = !lifelines.cards || answering;
  document.getElementById('ll-audience').disabled = !lifelines.audience || answering;
  if (!lifelines.uni) document.getElementById('ll-uni').classList.add('used');
  if (!lifelines.cards) document.getElementById('ll-cards').classList.add('used');
  if (!lifelines.audience) document.getElementById('ll-audience').classList.add('used');
}

// ── UNIVERSITY ────────────────────────────────────
const uniStudents = [
  { avatar: '👨‍🎓', name: 'Felipe, Eng. de Computação' },
  { avatar: '👩‍🎓', name: 'Juliana, Ciência da Computação' },
  { avatar: '🧑‍🎓', name: 'Rafael, Redes de Computadores' },
  { avatar: '👩‍🏫', name: 'Mariana, Sistemas de Informação' },
  { avatar: '👨‍🔬', name: 'Thiago, Engenharia Elétrica' }
];

function useUniversity() {
  if (!lifelines.uni) return;
  lifelines.uni = false;
  updateLifelineButtons();

  initAudio(); playSound('lifeline');

  const q = questions[currentQ];
  const student = uniStudents[Math.floor(Math.random() * uniStudents.length)];
  document.getElementById('uni-avatar').textContent = student.avatar;
  document.getElementById('uni-name').textContent = student.name;

  // 80% chance correct, 20% wrong
  let hint;
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  if (Math.random() < 0.82) {
    hint = `Hmm, analisando bem a questão, acredito que a resposta é a alternativa <strong>${letters[q.correct]}) ${q.opts[q.correct]}</strong>. Estou razoavelmente confiante nisso, mas confirme com seu material de estudo!`;
  } else {
    // pick a wrong one
    const wrongs = q.opts.map((_, i) => i).filter(i => i !== q.correct && !eliminatedOpts.includes(i));
    const wrong = wrongs[Math.floor(Math.random() * wrongs.length)];
    hint = `Olha, não tenho certeza absoluta, mas acho que pode ser a <strong>${letters[wrong]}) ${q.opts[wrong]}</strong>. Não sou especialista nesse tópico específico, use com cautela!`;
  }

  document.getElementById('uni-text').innerHTML = hint;
  openModal('modal-uni');
}

// ── CARDS (Eliminar 2) ───────────────────────────
function useCards() {
  if (!lifelines.cards) return;
  lifelines.cards = false;
  updateLifelineButtons();

  initAudio(); playSound('lifeline');

  const q = questions[currentQ];
  const wrongs = q.opts.map((_, i) => i).filter(i => i !== q.correct && !eliminatedOpts.includes(i));
  // pick 2 random wrong
  const toElim = shuffle(wrongs).slice(0, 2);
  pendingCards = toElim;

  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const display = document.getElementById('cards-display');
  display.innerHTML = '';
  q.opts.forEach((opt, i) => {
    const d = document.createElement('div');
    d.className = 'card-opt' + (toElim.includes(i) ? ' eliminated-card' : '');
    d.innerHTML = `<span style="font-size:1.4rem">${letters[i]}</span><span>${letters[i]}</span>`;
    display.appendChild(d);
  });

  document.getElementById('cards-text').textContent =
    `Eliminadas: alternativas ${toElim.map(i => letters[i]).join(' e ')}`;

  openModal('modal-cards');
}

function applyCards() {
  pendingCards.forEach(i => {
    eliminatedOpts.push(i);
    const btn = document.getElementById('opt-' + i);
    if (btn) {
      btn.classList.add('eliminated');
      btn.disabled = true;
    }
  });
  pendingCards = [];
  closeModal('modal-cards');
}

// ── AUDIENCE ─────────────────────────────────────
function useAudience() {
  if (!lifelines.audience) return;
  lifelines.audience = false;
  updateLifelineButtons();

  initAudio(); playSound('lifeline');

  const q = questions[currentQ];
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  // Generate audience percentages biased toward correct
  let pcts = generateAudiencePcts(q.correct, q.opts.length, eliminatedOpts);

  // Build bars
  const barsDiv = document.getElementById('audience-bars');
  const labelsDiv = document.getElementById('audience-labels');
  barsDiv.innerHTML = '';
  labelsDiv.innerHTML = '';

  const maxPct = Math.max(...pcts);

  q.opts.forEach((opt, i) => {
    if (eliminatedOpts.includes(i)) return;
    const wrap = document.createElement('div');
    wrap.className = 'bar-wrap';
    const bar = document.createElement('div');
    // Use letter as class (A,B,C,...) — CSS defines styles for at least A..E
    bar.className = 'bar ' + letters[i];
    bar.style.height = '4px';
    wrap.innerHTML = `<span class="bar-pct">${pcts[i]}%</span>`;
    wrap.appendChild(bar);
    wrap.innerHTML += `<span class="bar-label">${letters[i]}</span>`;
    const pctSpan = wrap.querySelector('.bar-pct');
    wrap.insertBefore(bar, pctSpan);
    barsDiv.appendChild(wrap);

    // animate
    setTimeout(() => {
      bar.style.height = `${(pcts[i] / maxPct) * 130}px`;
    }, 100);

    const lbl = document.createElement('span');
    lbl.style.cssText = 'font-size:.8rem; color:var(--muted);';
    lbl.textContent = `${letters[i]}: ${opt.substring(0, 25)}${opt.length > 25 ? '…' : ''}`;
    labelsDiv.appendChild(lbl);
  });

  openModal('modal-audience');
}

function generateAudiencePcts(correct, total, eliminated) {
  const active = Array.from({ length: total }, (_, i) => i).filter(i => !eliminated.includes(i));
  let pcts = Array(total).fill(0);
  let remaining = 100;
  // give correct ~55-75%
  const correctPct = Math.floor(55 + Math.random() * 20);
  pcts[correct] = correctPct;
  remaining -= correctPct;
  // distribute rest
  const others = active.filter(i => i !== correct);
  others.forEach((i, idx) => {
    if (idx === others.length - 1) {
      pcts[i] = remaining;
    } else {
      const share = Math.floor(Math.random() * remaining * 0.7);
      pcts[i] = share;
      remaining -= share;
    }
  });
  return pcts;
}

// ════════════════════════════════════════════════════
// MODAL HELPERS
// ════════════════════════════════════════════════════
function openModal(id) { document.getElementById(id).classList.add('show'); }
function closeModal(id) { document.getElementById(id).classList.remove('show'); }

// close on backdrop click
document.querySelectorAll('.overlay').forEach(ov => {
  ov.addEventListener('click', e => {
    if (e.target === ov) {
      // Don't close result modal on backdrop
      if (ov.id !== 'modal-result') closeModal(ov.id);
    }
  });
});

// ════════════════════════════════════════════════════
// UTILS
// ════════════════════════════════════════════════════
// AUDIO: simple WebAudio-based sound effects (no external files)
let audioCtx = null;
function initAudio() {
  if (audioCtx) return;
  try { audioCtx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { audioCtx = null; }
}

function playTone(freq, duration = 0.12, type = 'sine', when = 0, vol = 0.12) {
  if (!audioCtx) return;
  const o = audioCtx.createOscillator();
  const g = audioCtx.createGain();
  o.type = type;
  o.frequency.value = freq;
  g.gain.setValueAtTime(vol, audioCtx.currentTime + when);
  o.connect(g);
  g.connect(audioCtx.destination);
  o.start(audioCtx.currentTime + when);
  o.stop(audioCtx.currentTime + when + duration);
}

function playSequence(seq) {
  if (!audioCtx) return;
  let t = 0;
  seq.forEach(it => {
    playTone(it.freq, it.dur || 0.12, it.type || 'sine', t, it.vol || 0.12);
    t += (it.dur || 0.12) + (it.delay || 0.02);
  });
}

function playSound(name) {
  if (!audioCtx) return;
  switch (name) {
    case 'select': playTone(1200, 0.06, 'square', 0, 0.06); break;
    case 'confirm': playSequence([{ freq: 900, dur: 0.06 }, { freq: 1200, dur: 0.09 }]); break;
    case 'correct': playSequence([{ freq: 880, dur: 0.07 }, { freq: 1100, dur: 0.07 }, { freq: 1320, dur: 0.1 }]); break;
    case 'wrong': playSequence([{ freq: 220, dur: 0.18, type: 'saw' }, { freq: 130, dur: 0.25, type: 'saw' }]); break;
    case 'lifeline': playSequence([{ freq: 700, dur: 0.06 }, { freq: 900, dur: 0.06 }]); break;
    case 'start': playSequence([{ freq: 600, dur: 0.06 }, { freq: 800, dur: 0.06 }, { freq: 1000, dur: 0.08 }]); break;
    case 'applause': playSequence([{ freq: 880, dur: 0.05 }, { freq: 1320, dur: 0.05 }, { freq: 1560, dur: 0.06 }]); break;
    case 'jackpot': playSequence([{ freq: 880, dur: 0.05 }, { freq: 1100, dur: 0.05 }, { freq: 1320, dur: 0.08 }, { freq: 1760, dur: 0.12 }]); break;
    default: break;
  }
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ENTER para avançar quando algum modal estiver aberto
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Enter') return;

  // Modal de resultado
  const resultModal = document.getElementById('modal-result');
  if (resultModal.classList.contains('show')) {
    const nextBtn = document.getElementById('result-next-btn');
    const stopBtn = document.getElementById('result-stop-btn');

    if (nextBtn && nextBtn.style.display !== 'none') {
      nextQuestion();
    } else if (stopBtn && stopBtn.style.display !== 'none') {
      stopBtn.click();
    }

    e.preventDefault();
    return;
  }

  // Modal Universitários
  if (document.getElementById('modal-uni').classList.contains('show')) {
    closeModal('modal-uni');
    e.preventDefault();
    return;
  }

  // Modal Plateia
  if (document.getElementById('modal-audience').classList.contains('show')) {
    closeModal('modal-audience');
    e.preventDefault();
    return;
  }

  // Modal Eliminar 2
  if (document.getElementById('modal-cards').classList.contains('show')) {
    applyCards();
    e.preventDefault();
    return;
  }

  // Modal Parar
  if (document.getElementById('modal-stop').classList.contains('show')) {
    closeModal('modal-stop');
    e.preventDefault();
  }
});
