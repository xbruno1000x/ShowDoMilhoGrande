const allQuestions = [

  // ============================================
  // QUESTÕES IOT
  // ============================================

  {
    q: "Qual camada do modelo da Internet é responsável pela comunicação entre processos?",
    opts: ["Rede", "Transporte", "Enlace", "Física"],
    correct: 1,
    categoria: 'IoT'
  },

  {
    q: "Qual camada é responsável pelo roteamento de pacotes?",
    opts: ["Aplicação", "Transporte", "Rede", "Enlace"],
    correct: 2,
    categoria: 'IoT'
  },

  {
    q: "Qual camada representa os bits em uma grandeza física transmissível?",
    opts: ["Rede", "Física", "Aplicação", "Transporte"],
    correct: 1,
    categoria: 'IoT'
  },

  {
    q: "Nos blocos da IoT, qual elemento coleta dados do ambiente?",
    opts: ["Serviços", "Semântica", "Sensores", "Comunicação"],
    correct: 2,
    categoria: 'IoT'
  },

  {
    q: "Qual bloco da IoT garante a troca de dados entre dispositivos?",
    opts: ["Comunicação", "Serviços", "Identificação", "Computação"],
    correct: 0,
    categoria: 'IoT'
  },

  {
    q: "Qual bloco é responsável pela identificação única de objetos?",
    opts: ["Sensores", "Comunicação", "Identificação", "Serviços"],
    correct: 2,
    categoria: 'IoT'
  },

  {
    q: "O que é um Digital Twin?",
    opts: [
      "Um sensor virtual",
      "Uma réplica virtual de um sistema físico",
      "Um protocolo de IoT",
      "Um roteador inteligente"
    ],
    correct: 1,
    categoria: 'IoT'
  },

  {
    q: "Qual benefício do Digital Twin?",
    opts: [
      "Aumento da latência",
      "Manutenção preditiva",
      "Maior consumo energético",
      "Redução de sensores"
    ],
    correct: 1,
    categoria: 'IoT'
  },

  {
    q: "Qual componente IoT realiza ações físicas?",
    opts: ["Sensor", "Rádio", "Atuador", "Memória"],
    correct: 2,
    categoria: 'IoT'
  },

  {
    q: "Qual componente fornece energia ao dispositivo?",
    opts: ["Sensor", "Fonte de Energia", "Atuador", "Rádio"],
    correct: 1,
    categoria: 'IoT'
  },

  {
    q: "Energy Harvesting pode utilizar:",
    opts: [
      "Luz solar",
      "Vibração mecânica",
      "Ondas de rádio",
      "Todas as anteriores"
    ],
    correct: 3,
    categoria: 'IoT'
  },

  {
    q: "A camada de Percepção da IoT é responsável por:",
    opts: [
      "Coletar dados",
      "Rotear pacotes",
      "Executar aplicações",
      "Gerenciar negócios"
    ],
    correct: 0,
    categoria: 'IoT'
  },

  {
    q: "Qual camada do modelo de 5 camadas processa e integra dados?",
    opts: [
      "Middleware",
      "Rede",
      "Aplicação",
      "Percepção"
    ],
    correct: 0,
    categoria: 'IoT'
  },

  {
    q: "Qual protocolo da camada de adaptação IoT da IETF?",
    opts: ["MQTT", "6LoWPAN", "HTTP", "AMQP"],
    correct: 1,
    categoria: 'IoT'
  },

  {
    q: "O que caracteriza um RTOS?",
    opts: [
      "Baixo consumo",
      "Resposta determinística",
      "Uso de nuvem",
      "Execução serial"
    ],
    correct: 1,
    categoria: 'IoT'
  },

  {
    q: "O FreeRTOS suporta:",
    opts: [
      "Semáforos e filas",
      "Apenas uma tarefa",
      "Somente Linux",
      "Nenhuma sincronização"
    ],
    correct: 0,
    categoria: 'IoT'
  },

  {
    q: "Qual vantagem do Edge Computing?",
    opts: [
      "Maior latência",
      "Processamento local",
      "Maior consumo",
      "Menor segurança"
    ],
    correct: 1,
    categoria: 'IoT'
  },

  {
    q: "Qual tecnologia surgiu na Segunda Guerra Mundial?",
    opts: ["Bluetooth", "RFID", "Wi-Fi", "NFC"],
    correct: 1,
    categoria: 'IoT'
  },

  {
    q: "Qual tecnologia possui alcance de dezenas de quilômetros?",
    opts: ["Bluetooth", "Wi-Fi", "LoRa", "Zigbee"],
    correct: 2,
    categoria: 'IoT'
  },

  {
    q: "Qual tecnologia oferece menor latência?",
    opts: ["5G", "Sigfox", "LoRa", "NB-IoT"],
    correct: 0,
    categoria: 'IoT'
  },

  {
    q: "O Plano Nacional de IoT busca:",
    opts: [
      "Proibir IoT",
      "Fomentar IoT no Brasil",
      "Eliminar padrões",
      "Restringir conectividade"
    ],
    correct: 1,
    categoria: 'IoT'
  },

  {
    q: "Função do Edge Router no 6LoWPAN:",
    opts: [
      "Converter IPv6 para redes de sensores",
      "Criptografar dados",
      "Executar MQTT",
      "Controlar sensores"
    ],
    correct: 0,
    categoria: 'IoT'
  },

  {
    q: "Quais cabeçalhos o 6LoWPAN comprime?",
    opts: [
      "IPv6 e UDP",
      "HTTP e TCP",
      "MQTT e CoAP",
      "TLS e DTLS"
    ],
    correct: 0,
    categoria: 'IoT'
  },

  {
    q: "Por que o 6LoWPAN utiliza fragmentação?",
    opts: [
      "Pacotes IPv6 são maiores que os quadros IEEE 802.15.4",
      "Para criptografia",
      "Para QoS",
      "Para roteamento"
    ],
    correct: 0,
    categoria: 'IoT'
  },

  {
    q: "Qual protocolo de roteamento do 6LoWPAN?",
    opts: ["OSPF", "BGP", "RPL", "RIP"],
    correct: 2,
    categoria: 'IoT'
  },

  {
    q: "Qual protocolo é sem conexão?",
    opts: ["TCP", "UDP", "SCTP", "QUIC"],
    correct: 1,
    categoria: 'IoT'
  },

  {
    q: "Qual protocolo garante entrega confiável?",
    opts: ["UDP", "DCCP", "TCP", "CoAP"],
    correct: 2,
    categoria: 'IoT'
  },

  {
    q: "Qual protocolo foi criado pelo Google?",
    opts: ["QUIC", "TCP", "UDP", "SCTP"],
    correct: 0,
    categoria: 'IoT'
  },

  {
    q: "TLS opera sobre:",
    opts: ["UDP", "TCP", "MQTT", "CoAP"],
    correct: 1,
    categoria: 'IoT'
  },

  {
    q: "DTLS opera sobre:",
    opts: ["TCP", "UDP", "HTTP", "AMQP"],
    correct: 1,
    categoria: 'IoT'
  },

  {
    q: "Qual vantagem do modelo Publish/Subscribe?",
    opts: [
      "Menor acoplamento",
      "Maior latência",
      "Mais cabeçalhos",
      "Dependência direta"
    ],
    correct: 0,
    categoria: 'IoT'
  },

  {
    q: "Qual protocolo utiliza Publish/Subscribe?",
    opts: ["HTTP", "MQTT", "CoAP", "FTP"],
    correct: 1,
    categoria: 'IoT'
  },

  {
    q: "Qual protocolo é baseado em UDP?",
    opts: ["HTTP", "MQTT", "CoAP", "AMQP"],
    correct: 2,
    categoria: 'IoT'
  },

  {
    q: "Qual protocolo oferece comunicação bidirecional persistente?",
    opts: ["HTTP", "CoAP", "WebSocket", "AMQP"],
    correct: 2,
    categoria: 'IoT'
  },

  {
    q: "MQTT utiliza qual protocolo de transporte?",
    opts: ["UDP", "TCP", "ICMP", "IPX"],
    correct: 1,
    categoria: 'IoT'
  },

  {
    q: "Qual protocolo foi projetado para dispositivos extremamente limitados?",
    opts: ["HTTP", "MQTT", "HTTPS", "FTP"],
    correct: 1,
    categoria: 'IoT'
  },

  {
    q: "Qual camada do modelo da Internet é responsável pela comunicação entre processos?",
    opts: ["Rede", "Transporte", "Enlace", "Física"],
    correct: 1,
    categoria: 'IoT'
  },

  // ============================================
  // QUESTÕES TÉCNICAS DE APRENDIZADO DE MÁQUINA
  // ============================================


  {
    q: "Qual é a principal diferença entre aprendizado supervisionado e não-supervisionado?",
    opts: [
      "O supervisionado usa dados rotulados, o não-supervisionado não",
      "O não-supervisionado é mais rápido",
      "O supervisionado não requer pré-processamento",
      "Não há diferença prática"
    ],
    correct: 0,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "No aprendizado supervisionado, os algoritmos são treinados com dados rotulados ou não rotulados?",
    opts: [
      "Não rotulados",
      "Rotulados",
      "Ambos igualmente",
      "Depende do algoritmo"
    ],
    correct: 1,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "No aprendizado não supervisionado, os dados de treinamento estão:",
    opts: [
      "Sempre rotulados",
      "Não rotulados",
      "Parcialmente rotulados",
      "Criptografados"
    ],
    correct: 1,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "Qual é o objetivo principal da normalização de dados em machine learning?",
    opts: [
      "Aumentar o tamanho do dataset",
      "Transformar dados para escala similar",
      "Remover outliers",
      "Criptografar informações"
    ],
    correct: 1,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "A técnica de padronização (Z-score) transforma os dados para ter:",
    opts: [
      "Intervalo entre 0 e 1",
      "Intervalo entre -1 e 1",
      "Média 0 e desvio padrão 1",
      "Distribuição uniforme"
    ],
    correct: 2,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "Qual técnica de normalização transforma dados para o intervalo [0, 1]?",
    opts: [
      "Z-score",
      "Min-Max Scaling",
      "Log-scaling",
      "Quantilização"
    ],
    correct: 1,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "O que é um valor faltante (missing value) em um dataset?",
    opts: [
      "Um valor incorreto",
      "Um atributo ausente em uma instância",
      "Um rótulo não definido",
      "Um algoritmo inválido"
    ],
    correct: 1,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "Qual estratégia é apropriada para lidar com valores faltantes em dados contínuos?",
    opts: [
      "Remover sempre todas as linhas com valores faltantes",
      "Preencher com a média, mediana ou moda",
      "Substituir por zero sempre",
      "Ignorar completamente"
    ],
    correct: 1,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "Por que é importante separar dados em conjunto de treinamento e teste?",
    opts: [
      "Para reduzir o tamanho total do dataset",
      "Para avaliar o desempenho real em dados nunca vistos",
      "Para economizar memória",
      "Essa separação é opcional"
    ],
    correct: 1,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "Qual proporção é comumente usada para dividir dados de treino e teste?",
    opts: [
      "50% treino, 50% teste",
      "75% treino, 25% teste",
      "90% treino, 10% teste",
      "Sempre 60/40"
    ],
    correct: 1,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "O que é overfitting em machine learning?",
    opts: [
      "O modelo treina muito rápido",
      "O modelo aprende demais os padrões específicos dos dados de treino",
      "O modelo não converge",
      "O modelo usa muitos atributos"
    ],
    correct: 1,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "O que é underfitting em machine learning?",
    opts: [
      "O modelo memoriza os dados",
      "O modelo é muito complexo",
      "O modelo é muito simples e não captura padrões",
      "O modelo treina lentamente"
    ],
    correct: 2,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "Tarefas de classificação e regressão são exemplos de qual tipo de aprendizado?",
    opts: [
      "Não supervisionado",
      "Por reforço",
      "Supervisionado",
      "Não ensinado"
    ],
    correct: 2,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "Qual é a principal característica do algoritmo Naive Bayes?",
    opts: [
      "Usa hiperplanos para classificação",
      "Assume independência entre atributos",
      "Agrupa dados em clusters",
      "Usa árvores de decisão"
    ],
    correct: 1,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "O que é uma Árvore de Decisão?",
    opts: [
      "Um grafo acíclico dirigido",
      "Uma estrutura que classifica dados usando testes sequenciais",
      "Uma matriz de confusão",
      "Um kernel de SVM"
    ],
    correct: 1,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "O algoritmo K-NN faz previsões baseado em:",
    opts: [
      "Probabilidades condicionais",
      "Hiperplanos ótimos",
      "Distância aos K vizinhos mais próximos",
      "Centroides de clusters"
    ],
    correct: 2,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "Qual é o princípio fundamental da Support Vector Machine (SVM)?",
    opts: [
      "Minimizar variância dentro de clusters",
      "Encontrar o hiperplano ótimo com maior margem",
      "Calcular probabilidades bayesianas",
      "Criar árvores de decisão"
    ],
    correct: 1,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "Qual é o objetivo da Regressão Linear?",
    opts: [
      "Classificar em categorias discretas",
      "Encontrar a reta que minimiza o erro entre valores preditos e reais",
      "Agrupar dados similares",
      "Detectar anomalias"
    ],
    correct: 1,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "A Regressão Não-Linear é apropriada quando:",
    opts: [
      "Os dados têm relação reta",
      "Os dados têm relação não-reta ou curva",
      "Não há relação entre variáveis",
      "Os dados são categóricos"
    ],
    correct: 1,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "Qual é a função de um neurônio em uma Rede Neural?",
    opts: [
      "Apenas armazenar dados",
      "Processar entradas ponderadas e produzir saída",
      "Criptografar informações",
      "Dividir dados"
    ],
    correct: 1,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "O que é backpropagation em redes neurais?",
    opts: [
      "O algoritmo de inicialização",
      "O algoritmo para ajustar pesos durante o treinamento",
      "O método de codificação",
      "A função de ativação"
    ],
    correct: 1,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "Qual é a principal característica do K-Means?",
    opts: [
      "É supervisionado",
      "Agrupa dados em K clusters iterativamente",
      "Usa probabilidades",
      "Cria árvores"
    ],
    correct: 1,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "O DBSCAN é um algoritmo de clusterização que:",
    opts: [
      "Requer definir K previamente",
      "Detecta clusters de formato arbitrário e identifica outliers",
      "Usa probabilidades gaussianas",
      "Cria árvores hierárquicas"
    ],
    correct: 1,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "Qual é a vantagem principal do DBSCAN sobre K-Means?",
    opts: [
      "Maior velocidade",
      "Melhor para clusters de formato arbitrário",
      "Requer menos memória",
      "Não precisa de pré-processamento"
    ],
    correct: 1,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "Qual é o objetivo da seleção de atributos em machine learning?",
    opts: [
      "Aumentar o número de características",
      "Manter apenas atributos relevantes e reduzir dimensionalidade",
      "Removar todos os dados categóricos",
      "Normalizar os dados"
    ],
    correct: 1,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "O que são medidas de similaridade em clustering?",
    opts: [
      "Métricas para avaliar acurácia",
      "Métodos para medir quanto dois objetos são semelhantes",
      "Técnicas de normalização",
      "Algoritmos de classificação"
    ],
    correct: 1,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "Qual métrica de distância é mais usada em algoritmos de clustering?",
    opts: [
      "Distância de Manhattan",
      "Distância Euclidiana",
      "Distância de Hamming",
      "Todas são igualmente usadas"
    ],
    correct: 1,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "O que é Clustering Hierárquico?",
    opts: [
      "Agrupamento com probabilidades",
      "Agrupamento que cria uma estrutura hierárquica de clusters",
      "Agrupamento supervisionado",
      "Agrupamento por regressão"
    ],
    correct: 1,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "O aprendizado por reforço é caracterizado por:",
    opts: [
      "Dados rotulados",
      "Um agente que recebe recompensas/punições",
      "Identificação de padrões não supervisionada",
      "Nenhuma interação com ambiente"
    ],
    correct: 1,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "Qual é o papel de um hiperparâmetro em machine learning?",
    opts: [
      "É o peso ajustado durante o treinamento",
      "É um parâmetro configurado antes do treinamento",
      "É a função de ativação",
      "É o rótulo dos dados"
    ],
    correct: 1,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "A validação cruzada (Cross-Validation) é usada para:",
    opts: [
      "Aumentar o tamanho do dataset",
      "Avaliar o desempenho do modelo de forma mais robusta",
      "Remover valores faltantes",
      "Normalizar dados"
    ],
    correct: 1,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "Qual técnica evita que um modelo memorize os dados de treinamento?",
    opts: [
      "Aumentar a complexidade",
      "Regularização (L1 e L2)",
      "Remover dados",
      "Usar mais atributos"
    ],
    correct: 1,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "O que é a matriz de confusão em classificação?",
    opts: [
      "Uma distribuição normal",
      "Uma matriz que mostra verdadeiros/falsos positivos e negativos",
      "Uma técnica de normalização",
      "Um algoritmo de clustering"
    ],
    correct: 1,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "Qual métrica mede a proporção de predições corretas?",
    opts: [
      "Precisão",
      "Recall",
      "Acurácia",
      "F1-Score"
    ],
    correct: 2,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "Precisão em classificação mede:",
    opts: [
      "Proporção de predições corretas totais",
      "Proporção de predições positivas que estão corretas",
      "Proporção de casos positivos identificados",
      "Média harmônica entre precisão e recall"
    ],
    correct: 1,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "Recall em classificação mede:",
    opts: [
      "Proporção de predições positivas corretas",
      "Proporção de casos positivos identificados",
      "Proporção de predições corretas totais",
      "Média harmônica entre precisão e recall"
    ],
    correct: 1,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "O F1-Score é a:",
    opts: [
      "Proporção de verdadeiros positivos",
      "Soma de precisão e recall",
      "Média harmônica entre precisão e recall",
      "Raiz quadrada da acurácia"
    ],
    correct: 2,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "Qual algoritmo é mais apropriado para dados categóricos em árvores de decisão?",
    opts: [
      "Regressão Linear",
      "Algoritmo ID3 ou C4.5",
      "K-Means",
      "Redes Neurais profundas"
    ],
    correct: 1,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "Qual é a diferença entre Random Forest e uma Árvore de Decisão simples?",
    opts: [
      "Random Forest usa apenas uma árvore",
      "Random Forest é uma ensemble de múltiplas árvores",
      "Random Forest não faz classificação",
      "Não há diferença"
    ],
    correct: 1,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "O que é a curva ROC em avaliação de classificadores?",
    opts: [
      "Uma visualização da relação taxa de verdadeiros positivos vs falsos positivos",
      "Um método de normalização",
      "Um algoritmo de clustering",
      "Uma técnica de pré-processamento"
    ],
    correct: 0,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "AUC (Area Under Curve) mede:",
    opts: [
      "A área sob a curva ROC",
      "A proporção de acurácia",
      "O número de atributos",
      "A velocidade de treinamento"
    ],
    correct: 0,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "Qual é um benefício do pré-processamento de dados?",
    opts: [
      "Diminui a qualidade do modelo",
      "Melhora a qualidade e desempenho do modelo",
      "Não tem impacto significativo",
      "Sempre aumenta a complexidade"
    ],
    correct: 1,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "One-Hot Encoding é uma técnica para:",
    opts: [
      "Normalizar dados contínuos",
      "Converter variáveis categóricas em numéricas",
      "Remover outliers",
      "Dividir dados em treino/teste"
    ],
    correct: 1,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "Label Encoding é uma técnica para:",
    opts: [
      "Criar múltiplas colunas por categoria",
      "Atribuir números inteiros a categorias",
      "Normalizar dados",
      "Identificar valores faltantes"
    ],
    correct: 1,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "Qual algoritmo é baseado em instâncias (instance-based)?",
    opts: [
      "Regressão Linear",
      "K-NN",
      "SVM",
      "Naive Bayes"
    ],
    correct: 1,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "O que é Feature Engineering?",
    opts: [
      "Remoção de todas as características",
      "Criação, seleção e transformação de características para melhorar o modelo",
      "Apenas normalização de dados",
      "Algoritmo de clustering"
    ],
    correct: 1,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "Qual framework de Python é mais usado para machine learning?",
    opts: [
      "Django",
      "Scikit-learn",
      "Flask",
      "BeautifulSoup"
    ],
    correct: 1,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "TensorFlow é uma biblioteca principalmente para:",
    opts: [
      "Processamento de texto",
      "Redes Neurais profundas e Deep Learning",
      "Análise estatística básica",
      "Visualização de dados"
    ],
    correct: 1,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "Keras é uma API de alto nível para:",
    opts: [
      "Processar imagens apenas",
      "Construir redes neurais de forma simplificada",
      "Fazer Web scraping",
      "Análise estatística"
    ],
    correct: 1,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "O que é Batch Normalization em redes neurais?",
    opts: [
      "Divisão dos dados em lotes",
      "Normalização das entradas de cada camada",
      "Remoção de neurônios",
      "Aumento de regularização"
    ],
    correct: 1,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "Qual função de ativação é mais usada em redes neurais modernas?",
    opts: [
      "Sigmoid",
      "Tanh",
      "ReLU",
      "Linear"
    ],
    correct: 2,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "Dropout é uma técnica de regularização que:",
    opts: [
      "Remove neurônios aleatoriamente durante o treinamento",
      "Normaliza os dados",
      "Aumenta o número de camadas",
      "Reduz a taxa de aprendizagem"
    ],
    correct: 0,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "O que é Data Augmentation?",
    opts: [
      "Remoção de dados",
      "Aumento artificial do dataset através de transformações",
      "Normalização de dados",
      "Divisão de dados"
    ],
    correct: 1,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "Qual problema ocorre quando o modelo aprende ruído nos dados?",
    opts: [
      "Underfitting",
      "Overfitting",
      "Regularização",
      "Normalização"
    ],
    correct: 1,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "Transfer Learning é útil para:",
    opts: [
      "Remover dados",
      "Reutilizar conhecimento de modelos pré-treinados",
      "Normalizar dados",
      "Criar novos algoritmos"
    ],
    correct: 1,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "Qual é o propósito da função de perda (loss function)?",
    opts: [
      "Normalizar os dados",
      "Medir o erro entre predições e valores reais",
      "Dividir dados em treino/teste",
      "Criar visualizações"
    ],
    correct: 1,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "Otimizadores como Adam e SGD são usados para:",
    opts: [
      "Remover outliers",
      "Ajustar pesos durante o treinamento",
      "Normalizar dados",
      "Selecionar atributos"
    ],
    correct: 1,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "Qual é a taxa de aprendizagem (learning rate) em redes neurais?",
    opts: [
      "O número de épocas",
      "O tamanho do batch",
      "O tamanho do passo na atualização de pesos",
      "A proporção treino/teste"
    ],
    correct: 2,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "Redes Neurais Convolucionais (CNN) são especializadas em:",
    opts: [
      "Séries temporais",
      "Dados tabulares",
      "Processamento de imagens",
      "Apenas classificação textual"
    ],
    correct: 2,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "Redes Neurais Recorrentes (RNN) são apropriadas para:",
    opts: [
      "Apenas imagens",
      "Dados sequenciais e séries temporais",
      "Apenas dados tabulares",
      "Clustering"
    ],
    correct: 1,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "O que é LSTM em redes neurais?",
    opts: [
      "Um tipo de função de ativação",
      "Uma variante de RNN com memória de longo prazo",
      "Um algoritmo de clustering",
      "Uma métrica de avaliação"
    ],
    correct: 1,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "Qual é o objetivo da análise de componentes principais (PCA)?",
    opts: [
      "Classificar dados",
      "Reduzir dimensionalidade preservando variância",
      "Agrupar dados em clusters",
      "Normalizar dados"
    ],
    correct: 1,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "Qual problema ocorre quando o modelo tem pouca complexidade?",
    opts: [
      "Overfitting",
      "Underfitting",
      "Regularização excessiva",
      "Taxa de aprendizagem alta"
    ],
    correct: 1,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "O que é ensemble learning?",
    opts: [
      "Usar apenas um modelo",
      "Combinar múltiplos modelos para melhor desempenho",
      "Normalizar dados",
      "Remover atributos"
    ],
    correct: 1,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "Qual é a diferença entre Bagging e Boosting?",
    opts: [
      "Ambos são iguais",
      "Bagging é paralelo, Boosting é sequencial e corrige erros anteriores",
      "Bagging usa mais dados",
      "Boosting é mais rápido"
    ],
    correct: 1,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "Gradient Boosting é uma técnica que:",
    opts: [
      "Remove atributos",
      "Constrói árvores sequencialmente para corrigir erros",
      "Normaliza dados",
      "Divide dados em treino/teste"
    ],
    correct: 1,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "XGBoost é uma implementação eficiente de:",
    opts: [
      "Regressão Linear",
      "K-Means",
      "Gradient Boosting",
      "K-NN"
    ],
    correct: 2,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "Qual bibliotecas é recomendada para análise exploratória de dados?",
    opts: [
      "TensorFlow",
      "Pandas e Matplotlib",
      "Keras",
      "Scikit-image"
    ],
    correct: 1,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "Qual é a importância da documentação de modelos de machine learning?",
    opts: [
      "Nenhuma importância",
      "Apenas para pesquisa acadêmica",
      "Essencial para reprodutibilidade e manutenção",
      "Apenas se usar deep learning"
    ],
    correct: 2,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "O que é deslocamento estatístico (data drift)?",
    opts: [
      "Movimento físico de dados",
      "Mudança nas características dos dados ao longo do tempo",
      "Erro de normalização",
      "Problema de armazenamento"
    ],
    correct: 1,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "Sobre Aprendizado de Máquina, qual afirmação está correta?",
    opts: [
      "K-Means é utilizado para classificação supervisionada",
      "Redes neurais artificiais podem ser usadas tanto para classificação quanto para regressão",
      "Regressão Linear é uma técnica não supervisionada para redução de dimensionalidade",
      "Árvores de Decisão servem exclusivamente para regressão"
    ],
    correct: 1,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "O algoritmo Naive Bayes é baseado em qual princípio?",
    opts: [
      "Agrupamento por densidade",
      "Teorema de Bayes e independência condicional entre atributos",
      "Redução de dimensionalidade",
      "Aprendizado por reforço"
    ],
    correct: 1,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "As Árvores de Decisão podem ser utilizadas para:",
    opts: [
      "Apenas classificação",
      "Apenas regressão",
      "Classificação e regressão",
      "Somente agrupamento"
    ],
    correct: 2,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "Como o algoritmo K-Nearest Neighbors (KNN) realiza classificações?",
    opts: [
      "Utilizando regras previamente definidas",
      "Analisando os exemplos mais próximos do conjunto de treinamento",
      "Criando grupos de dados semelhantes",
      "Aplicando funções de ativação"
    ],
    correct: 1,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "Sobre Support Vector Machines (SVM), é correto afirmar que:",
    opts: [
      "Só podem ser usadas para classificação",
      "São algoritmos não supervisionados",
      "Podem ser usadas para classificação e regressão",
      "São utilizadas apenas em redes neurais"
    ],
    correct: 2,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "Qual algoritmo é normalmente utilizado para modelar relações lineares entre variáveis?",
    opts: [
      "Naive Bayes",
      "K-Means",
      "Regressão Linear",
      "DBSCAN"
    ],
    correct: 2,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "Um modelo Keras com saída linear utilizado para prever valores contínuos é um exemplo de:",
    opts: [
      "Classificação",
      "Agrupamento",
      "Regressão",
      "Seleção de atributos"
    ],
    correct: 2,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "Qual dos algoritmos abaixo é considerado uma técnica de aprendizado não supervisionado?",
    opts: [
      "Naive Bayes",
      "SVM",
      "K-Means",
      "Regressão Linear"
    ],
    correct: 2,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "Qual é o principal objetivo do algoritmo K-Means?",
    opts: [
      "Classificar dados rotulados",
      "Prever valores contínuos",
      "Agrupar dados semelhantes em clusters",
      "Selecionar atributos"
    ],
    correct: 2,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "O algoritmo DBSCAN é conhecido por:",
    opts: [
      "Ser um método supervisionado",
      "Realizar agrupamento baseado em densidade",
      "Utilizar o Teorema de Bayes",
      "Executar regressão linear"
    ],
    correct: 1,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "Qual dos algoritmos abaixo NÃO é um método de clusterização?",
    opts: [
      "K-Means",
      "DBSCAN",
      "K-Medoids",
      "Regressão Linear"
    ],
    correct: 3,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "Qual dos pares abaixo contém apenas algoritmos supervisionados?",
    opts: [
      "Naive Bayes e Árvores de Decisão",
      "K-Means e DBSCAN",
      "PCA e K-Means",
      "DBSCAN e SVM"
    ],
    correct: 0,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "O que significa pré-processamento de dados?",
    opts: [
      "Executar o algoritmo final",
      "Preparar os dados antes do treinamento do modelo",
      "Criar redes neurais",
      "Agrupar dados automaticamente"
    ],
    correct: 1,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "Qual é o objetivo do tratamento de dados faltantes?",
    opts: [
      "Eliminar o modelo",
      "Aumentar a dimensionalidade",
      "Lidar com valores ausentes na base de dados",
      "Criar clusters"
    ],
    correct: 2,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "A normalização de dados é utilizada para:",
    opts: [
      "Colocar atributos em escalas comparáveis",
      "Remover todas as variáveis",
      "Criar árvores de decisão",
      "Executar regressão"
    ],
    correct: 0,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "Qual a principal diferença entre aprendizado supervisionado e não supervisionado?",
    opts: [
      "O supervisionado utiliza dados rotulados",
      "O supervisionado utiliza apenas redes neurais",
      "O não supervisionado usa apenas regressão",
      "Não existe diferença"
    ],
    correct: 0,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "Qual técnica é normalmente utilizada para separar dados em conjunto de treinamento e teste?",
    opts: [
      "Cross Validation",
      "Data Mining",
      "Web Scraping",
      "DBSCAN"
    ],
    correct: 0,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "Redes Neurais Artificiais são inspiradas em:",
    opts: [
      "Sistemas operacionais",
      "Bancos de dados",
      "Funcionamento dos neurônios biológicos",
      "Protocolos de rede"
    ],
    correct: 2,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "Qual algoritmo assume independência entre atributos?",
    opts: [
      "KNN",
      "Naive Bayes",
      "DBSCAN",
      "K-Means"
    ],
    correct: 1,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  },

  {
    q: "Em KNN, o parâmetro K representa:",
    opts: [
      "Quantidade de atributos",
      "Número de vizinhos considerados",
      "Número de clusters",
      "Quantidade de classes"
    ],
    correct: 1,
    categoria: 'Tecnicas de Aprendizado de Maquina'
  }
];