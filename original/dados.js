const perguntas = [
    {
        pergunta: "MapReduce é um modelo de programação amplamente utilizado em Big Data para processar e analisar grandes conjuntos de dados de maneira distribuída. Desta forma, assinale a opção que apresenta o sistema MapReduce mais utilizado de acordo com Grus(2016).",
        resposta: "d",
        alternativas: {
            a: "Apache Flink",
            b: "Apache Hive",
            c: "Apache Tomcat",
            d: "Hadoop",
            e: "MongoDB"
        }
    },
    {
        pergunta: "Sobre os conceitos de Business Intelligence, de acordo com Barbieri (2011), assinale a opção correta.",
        resposta: 'b',
        alternativas: {
            a: "O DRILL-ACROSS é utilizado para atingir um nível maior de generalização que o disponível na tabela fato.",
            b: "O DRILL-THROUGH é utilizado quando há necessidade de informação em um nível de detalhe menor que o disponível na tabela fato.",
            c: "O ROLL-UP é utilizado para buscar informações mais detalhadas que o disponível na tabela fato.",
            d: "O DRILL-DOWN é utilizado para ir de um esquema para o outro desde que ambos tenham algumas dimensões em conformidade.",
            e: "O DRILL-LEFT é utilizado para mostrar os valores que são maiores que os disponíveis na tabela fato."
        }
    },
    {
        pergunta: "Considere o código abaixo, escrito na linguagem JAVA." +
        `<code>
public class Main {
    public static int[] AlgumCalculo (int[] arr) {
        int[] result = new int[arr.length];
        for(int i = 0; i < arr.length; i++) {
            result[i] = (int) Math.pow(arr[i], 2);
        }
        return result;
    }
    public static void main(String[] args) {
        int[] numeros = [1, 2, 3, 4, 5];
        int[] calculouNumeros = AlgumCalculo(numeros);

        System.out.print("Os números são: ");
        for(int num : calculouNumeros) {
            System.out.print(num + " ");
        }
    }
}
        </code>` +
        "Assinale a opção que apresenta o resultado que será exibido na tela após a execução do código acima.",
        resposta: 'e',
        alternativas: {
            a: "Os números são: 1 2 3 4 5",
            b: "Os números são: 2 4 6 8 10",
            c: "Os números são: 0 1 1 2 2",
            d: "Os números são: 4 8 12 16 20",
            e: "Os números são: 1 4 9 16 25"
        }
    },
    {
        pergunta: "Sobre tratamento de exceções, de acordo com Deitel (2016), assinale a opção correta.",
        resposta: 'b',
        alternativas: {
            a: "Se um bloco <em>catch</em> lançar uma exceção, o bloco <em>finally</em> correspondente não executará.",
            b: "O bloco <em>finally</em> será executado se uma exceção for ou não lançada no bloco <em>try</em> correspondente.",
            c: "O bloco <em>finally</em> não será executado se um bloco <em>try</em> for fechado usando uma instrução break.",
            d: "O bloco <em>finally</em> somente executará se uma exceção for lançada no bloco <em>try</em> correspondente.",
            e: "O bloco <em>finally</em> é obrigatório. Se estiver presente, ele é colocado depois do último bloco <em>catch</em>."
        }
    },
    {
        pergunta: "Segundo Valente (2020), considerando o desenvolvimento ágil, assinale a opção que apresenta corretamente as características fundamentais que definem os processos ágeis.",
        resposta: 'a',
        alternativas: {
            a: "Menor ênfase em documentação e planos detalhados, desenvolvimento em times pequenos, programação em pares, testes automatizados e integração contínua.",
            b: "Menor ênfase no planejamento detalhado, documentação extensiva, aprovações formais, rigidez nas mudanças e estrutura hierárquica.",
            c: "Maior ênfase em contratos detalhados, especificações completas no início do projeto, desenvolvimento sequencial, resistência a alterações e revisões formais.",
            d: "Maior controle estrito de mudanças, desenvolvimento em times pequenos, ênfase na conformidade com processos, papéis e responsabilidades definidos, documentação detalhada e avaliação formal.",
            e: "Maior ênfase em planejamento detalhado, atividades sequenciais, testes automatizados, minimização da interação cliente-desenvolvedor e processo altamente controlado."
        }
    },
    {
        pergunta: "Segundo Valente (2020), correlacione os Padrões de Projetos às suas respectivas categorias e assinale a opção correta.<br><br>" +
        "PADRÃO DE PROJETO<br>" +
        "( ) Abstract Factory<br>( ) Adapter<br>( ) Builder<br>( ) Façade<br>( ) Iterator<br>( ) Observer<br>( ) Proxy<br>( ) Singleton<br>( ) Strategy<br><br>" +
        "CATEGORIA<br>" +
        "I- Criacional<br>II- Estrutural<br>III- Comportamental",
        resposta: 'd',
        alternativas: {
            a: "(I) (II) (I) (III) (II) (III) (II) (I) (III)",
            b: "(III) (II) (I) (II) (I) (III) (II) (I) (III)",
            c: "(I) (II) (III) (II) (I) (III) (I) (III) (III)",
            d: "(I) (II) (I) (II) (III) (III) (II) (I) (III)",
            e: "(II) (III) (II) (III) (I) (I) (III) (II) (I)"
        }
    },
    {
        pergunta: "Analise o circuito lógico abaixo." +
        "<div><img src='img/qt-info2024-q8.png' alt='circuito lógico'></div>" +
        "Considerando os valores binários A = 011, B = 010 e C = 110, assinale a opção que apresenta o valor de S.",
        resposta: 'd',
        alternativas: {
            a: "111",
            b: "110",
            c: "100",
            d: "101",
            e: "011"
        }
    },
    {
        pergunta: "Considere a classe escrita em linguagem JAVA abaixo." +
        `<code>
class Registrador {
    private Registrador() {}
    private static Registrador instance;
    public static Registrador getInstance() {
        if(instance == null)
            instance = new Registrador();
        return instance;
    }
}
        </code>` +
        "A classe Registrador foi elaborada para atender a um padrão de projeto específico. Assim, assinale a opção correta para o padrão de projeto representado pelo código acima.",
        resposta: 'd',
        alternativas: {
            a: "Decorator",
            b: "Observador",
            c: "Proxy",
            d: "Singleton",
            e: "Visitor"
        }
    },
    {
        pergunta: "Segundo Tanenbaum (2013), para se resguardar contra erros, algumas memórias usam códigos de detecção de erros. Acerca desses códigos, é correto afirmar que:",
        resposta: 'b',
        alternativas: {
            a: "algoritmos de criptografia são utilizados para mascarar erros.",
            b: "bits extras são adicionados a cada palavra de memória de modo especial, que são verificados para ver se ocorreu um erro.",
            c: "todos os dados são armazenados em duplicatas para comparação e correção.",
            d: "técnicas de compressão são empregadas para minimizar erros durante a transmissão.",
            e: "o tamanho da memória é incrementado para compensar possíveis falhas de armazenamento."
        }
    },
    {
        pergunta: "Analise as afirmativas abaixo, assinalando a seguir a opção que apresenta corretamente árvores binárias de busca." +
        "<div><img src='img/qt-info2024-q11.png' alt='árvores binárias de busca'></div>",
        resposta: 'd',
        alternativas: {
            a: "Apenas as afirmativas I e II são verdadeiras.",
            b: "Apenas as afirmativas II e III são verdadeiras.",
            c: "Apenas as afirmativas III e IV são verdadeiras.",
            d: "Apenas as afirmativas IV e V são verdadeiras.",
            e: "Apenas as afirmativas I e V são verdadeiras"
        }
    },
    {
        pergunta: "Um militar implementou uma função em linguagem JAVA para resolver um problema hipotético do Centro de Dados da Marinha." +
        `<code>
public class Main {
    public static int somaTriangular(int[] matriz) {
        int n = matriz.length;
        int soma = 0;

        for(int i = 0; i < n; i++) {
            for(int j = 0; j <= i; j++) {
                soma += matriz[i][j];
            }
        }
        return soma;
    }
    public static void main(String[] args) {
        int[][] exemploMatriz = [[1, 0, 0], [4, 5, 0], [7, 8, 9]];
        int result = somaTriangular(exemploMatriz);
        System.out.println(result);
    }
}
        </code>` +
        "Assinale a opção que apresenta corretamente a complexidade em notação O da função somaTriangular, de acordo com Szwarcfiter (2010).",
        resposta: 'd',
        alternativas: {
            a: "O(n log n)",
            b: "O(log n)",
            c: "O(n)",
            d: "O(n²)",
            e: "O(n³)"
        }
    },
    {
        pergunta: "Sobre o cabeamento óptico, assinale a opção correta.",
        resposta: 'e',
        alternativas : {
            a: "A fibra multimodo pode transmitir dados a 100 Gbps por 100 km sem aplificação.",
            b: "A fibra monomodo tem o núcleo normalmente de 50 micra de diâmetro e permite o uso de equipamento de fibra óptica relativamente mais barato.",
            c: "A fibra monomodo disponível no momento pode transmitir dados a 1000 Gbps por 10 km com amplificação.",
            d: "A fibra multimodo pode transmitir sinais para distâncias aproximadamente de 50 vezes maiores que a fibra monomodo.",
            e: "A fibra multimodo pode ser usado para transmissões de até cerca de 15 km e permite o uso de equipamento de fibra óptica relativamente mais barato."
        }
    },
    {
        pergunta: "No contexto de sistemas computacionais, segundo Tanenbaum (2013), é correto afirmar que a memória cache:",
        resposta: 'e',
        alternativas : {
            a: "é um tipo de memória de longo prazo utilizada para armazenar permanentemente dados e programas.",
            b: "é responsável por armazenar as configurações do sistema operacional para melhorar o desempenho geral do computador.",
            c: "é uma memória volátil que armazena permanentemente os dados em execução para acesso rápido pela CPU.",
            d: "é uma área de armazenamento secundário utilizada para manter backups de arquivos importantes.",
            e: "é responsável por guardar as palavras de memória usadas mais recentemente em uma pequena memória rápida, o que acelera o acesso a elas."
        }
    },
    {
        pergunta: "Assinale a opção que apresenta corretamente a ação mais adequada para um gerente acelerar o andamento de um projeto que esteja com restrições orçamentárias e que precisa ser entregue em um prazo menor do que foi acordado inicialmente, de acordo com Heldman (2015).",
        resposta: 'a',
        alternativas : {
            a: "Revisar o plano de gerenciamento do projeto em busca de possíveis sobreposições de fases e ajustá-lo para refletir a redução do cronograma.",
            b: "Analisar o plano de custos do projeto para solicitar mais financiamento e terceirizar fases que inicialmente estavam planejadas para serem realizadas com recursos internos.",
            c: "Usar habilidades de negociação para influenciar seus superiores a aumentarem o prazo de entrega.",
            d: "Examinar o plano de gerenciamento de recursos humanos a fim de contratar mais pessoas para finalizar o trabalho mais rápido.",
            e: "Não agir, porque as reações são tão insignificantes que o projeto não será atingido."
        }
    },
    {
        pergunta: "Segundo Tanenbaum (2021), sobre o Gigabit Ethernet, é correto afirmar que o:",
        resposta: 'd',
        alternativas : {
            a: "Gigabit Ethernet pode ser implementado apenas pelo cabo de par trançado.",
            b: "cabeamento 1000Base-SX é o padrão UTP categoria 5",
            c: "Gigabit Ethernet é mil vezes mais rápido que o Ethernet tradicional.",
            d: "cabeamento 1000Base-CX permite distância máxima do segmento de 25m.",
            e: "Gigabit Ethernet suporta somente operação full-duplex."
        }
    },
    {
        pergunta: "Conforme Stallings (2014), no contexto de segurança da informação, o texto claro é encriptado em blocos, com cada um tendo um valor binário menor que algum número n. Ou seja, o tamanho do bloco precisa ser menor ou igual a log2(n) + 1. Assim, assinale a opção que apresenta corretamente o protocolo que utiliza uma expressão com exponenciais.",
        resposta: 'a',
        alternativas : {
            a: "RSA",
            b: "AES",
            c: "Diffie-Hellman",
            d: "SHA-256",
            e: "SSL/TLS"
        }
    },
    {
        pergunta: "Assinale a opção que apresenta um nome de variável INVÁLIDO na linguagem Python, de acordo com Menezes (2019).",
        resposta: 'd',
        alternativas : {
            a: "qt1",
            b: "quadro_tecnico",
            c: "_qt",
            d: "quadro tecnico",
            e: "quadrotecnico01"
        }
    },
    {
        pergunta: "Segundo Sebesta (2018), considere uma estrutura de dados do tipo PILHA, inicialmente vazia, que possui as operações típicas de inserção e remoção de elementos. Nessa estrutura, foram executadas as seguintes operações, de modo ordenado:<br><br>" +
        "PUSH 1<br>PUSH 2<br>POP<br>PUSH 3<br>POP<br>PUSH 4<br>POP<br>PUSH 5<br>PUSH 6<br>POP<br>PUSH 7<br><br>" +
        "Assinale a opção que apresenta corretamente o número de elementos na pilha e o valor armazenado no topo da pilha, respectivamente, após a realização de todas as operações.",
        resposta: 'e',
        alternativas : {
            a: "0 e 1",
            b: "3 e 1",
            c: "2 e 6",
            d: "4 e 7",
            e: "3 e 7"
        }
    },
    {
        pergunta: "Segundo Kurose (2021), referente à transmissão de pacotes, é correto afirmar que:",
        resposta: 'c',
        alternativas : {
            a: "o modo de comunicação orientado a conexão não exige a confirmação do recebimento de pacotes.",
            b: "no modo orientado a conexão, os pacotes são enviados independentemente do estado da rede.",
            c: "no modo orientado a conexão, cliente e servidor precisam primeiro se apresentar e estabelecer uma conexão TCP.",
            d: "o modo sem conexão utiliza um protocolo mais robusto, tornando-o mais adequado para redes de alta velocidade.",
            e: "no modo orientado a conexão, a transmissão de dados ocorre sem a necessidade de estabelecer uma conexão prévia, proporcionando maior eficiência na entrega de pacotes."
        }
    },
    {
        pergunta: "Considere o código abaixo em linguagem Python." +
        `<code>
def calculo_misterioso(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * calculo_misterioso(n-1)

numero = 5
resultado = calculo_misterioso(numero)
print(f'O resultado é: {resultado}')
        </code>` +
        "Assinale a opção que apresenta corretamente o resultado que será exibido na tela após a execução do código acima.",
        resposta: 'a',
        alternativas : {
            a: "O resultado é: 120",
            b: "O resultado é: 20",
            c: "O resultado é: 1",
            d: "O resultado é: 60",
            e: "O resultado é: 720"
        }
    },
    {
        pergunta: "Considere o código abaixo em linguagem Python, que implementa um algoritmo de ordenação." +
        `<code>
def ordenacao_especial(lista):
    n = len(lista)

    for i in range(n - 1):
        for j in range(0, n - i - 1):
            if lista[j] > lista[j + 1]:
                lista[j], lista[j + 1] = lista[j + 1], lista[j]

    return lista

lista_entrada = [4, 7, 1, 9, 3, 5, 8]
lista_ordenada = ordenacao_especial(lista_entrada)
print(f'A lista ordenada é: {lista_ordenada}')
        </code>` +
        "Assinale a opção que apresenta corretamente o método de ordenação implementado pelo código acima.",
        resposta: 'b',
        alternativas : {
            a: "Ordenação em Heap (Heapsort).",
            b: "Ordenação Bolha (Bubblesort).",
            c: "Ordenação por intercalação (Mergesort).",
            d: "Ordenação por Inserção (Insertionsort).",
            e: "Ordenação Rápida (Quicksort)."
        }
    },
    {
        pergunta: "Segundo Ward (2015), assinale a opção correta acerca do local de armazenamento das senhas criptografadas para usuários dos sistemas Linux.",
        resposta: 'c',
        alternativas : {
            a: "/etc/password",
            b: "/etc/user",
            c: "/etc/shadow",
            d: "/etc/group",
            e: "/etc/systemd"
        }
    },
    {
        pergunta: "Segundo Tanenmbaum (2013), qual método está diretamente associado à arquitetura de computadores paralela?",
        resposta: 'a',
        alternativas : {
            a: "Processador SIMD",
            b: "Máquina de Turing",
            c: "Algoritmo de Ordenação Bubble Sort",
            d: "Multiprogramação",
            e: "Máquina de Von Neumann"
        }
    },
    {
        pergunta: "Segundo Barbieri (2011), a árvore de decisão é uma técnica utilizada em Data Mining. Assinale a opção que apresenta corretamente a abordagem empregada na utilização dessa técnica correspondente à criação de regras para aplicação em eventos futuros.",
        resposta: 'c',
        alternativas : {
            a: "Estratificação.",
            b: "Identificação de Interações.",
            c: "Predição.",
            d: "Redução de Dados.",
            e: "Segmentação."
        }
    },
    {
        pergunta: "",
        resposta: '',
        alternativas : {
            a: "",
            b: "",
            c: "",
            d: "",
            e: ""
        }
    },
    {
        pergunta: "",
        resposta: '',
        alternativas : {
            a: "",
            b: "",
            c: "",
            d: "",
            e: ""
        }
    },
    {
        pergunta: "",
        resposta: '',
        alternativas : {
            a: "",
            b: "",
            c: "",
            d: "",
            e: ""
        }
    },
    {
        pergunta: "",
        resposta: '',
        alternativas : {
            a: "",
            b: "",
            c: "",
            d: "",
            e: ""
        }
    },
    {
        pergunta: "",
        resposta: '',
        alternativas : {
            a: "",
            b: "",
            c: "",
            d: "",
            e: ""
        }
    },
    {
        pergunta: "",
        resposta: '',
        alternativas : {
            a: "",
            b: "",
            c: "",
            d: "",
            e: ""
        }
    },
    {
        pergunta: "",
        resposta: '',
        alternativas : {
            a: "",
            b: "",
            c: "",
            d: "",
            e: ""
        }
    },
    {
        pergunta: "",
        resposta: '',
        alternativas : {
            a: "",
            b: "",
            c: "",
            d: "",
            e: ""
        }
    },
    {
        pergunta: "",
        resposta: '',
        alternativas : {
            a: "",
            b: "",
            c: "",
            d: "",
            e: ""
        }
    },
    {
        pergunta: "",
        resposta: '',
        alternativas : {
            a: "",
            b: "",
            c: "",
            d: "",
            e: ""
        }
    },
    {
        pergunta: "",
        resposta: '',
        alternativas : {
            a: "",
            b: "",
            c: "",
            d: "",
            e: ""
        }
    },
    {
        pergunta: "",
        resposta: '',
        alternativas : {
            a: "",
            b: "",
            c: "",
            d: "",
            e: ""
        }
    },
    {
        pergunta: "",
        resposta: '',
        alternativas : {
            a: "",
            b: "",
            c: "",
            d: "",
            e: ""
        }
    },
    {
        pergunta: "",
        resposta: '',
        alternativas : {
            a: "",
            b: "",
            c: "",
            d: "",
            e: ""
        }
    },
    {
        pergunta: "",
        resposta: '',
        alternativas : {
            a: "",
            b: "",
            c: "",
            d: "",
            e: ""
        }
    },
    {
        pergunta: "",
        resposta: '',
        alternativas : {
            a: "",
            b: "",
            c: "",
            d: "",
            e: ""
        }
    },
    {
        pergunta: "",
        resposta: '',
        alternativas : {
            a: "",
            b: "",
            c: "",
            d: "",
            e: ""
        }
    },
    {
        pergunta: "",
        resposta: '',
        alternativas : {
            a: "",
            b: "",
            c: "",
            d: "",
            e: ""
        }
    },
    {
        pergunta: "",
        resposta: '',
        alternativas : {
            a: "",
            b: "",
            c: "",
            d: "",
            e: ""
        }
    },
    {
        pergunta: "",
        resposta: '',
        alternativas : {
            a: "",
            b: "",
            c: "",
            d: "",
            e: ""
        }
    },
    {
        pergunta: "",
        resposta: '',
        alternativas : {
            a: "",
            b: "",
            c: "",
            d: "",
            e: ""
        }
    },
    {
        pergunta: "",
        resposta: '',
        alternativas : {
            a: "",
            b: "",
            c: "",
            d: "",
            e: ""
        }
    },
    {
        pergunta: "",
        resposta: '',
        alternativas : {
            a: "",
            b: "",
            c: "",
            d: "",
            e: ""
        }
    },
    {
        pergunta: "",
        resposta: '',
        alternativas : {
            a: "",
            b: "",
            c: "",
            d: "",
            e: ""
        }
    },
    {
        pergunta: "",
        resposta: '',
        alternativas : {
            a: "",
            b: "",
            c: "",
            d: "",
            e: ""
        }
    },
    {
        pergunta: "",
        resposta: '',
        alternativas : {
            a: "",
            b: "",
            c: "",
            d: "",
            e: ""
        }
    },
    {
        pergunta: "",
        resposta: '',
        alternativas : {
            a: "",
            b: "",
            c: "",
            d: "",
            e: ""
        }
    },
    {
        pergunta: "",
        resposta: '',
        alternativas : {
            a: "",
            b: "",
            c: "",
            d: "",
            e: ""
        }
    }
]