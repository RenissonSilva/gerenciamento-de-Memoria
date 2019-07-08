//limpa o console
console.clear();

//importa o readline para poder ter a interação com console
readline = require('readline');

//importa File System para poder manipular arquivos
fs = require('fs');

//criação de interface que vai mostrar coisas no console e guardar o que usuário digitar
rl = readline.createInterface(process.stdin, process.stdout);

//realiza leitura do arquivo de processos
var lerArquivo = fs.createReadStream('processos.txt', {encoding: 'ascii'});

//coloca em uma variável o conteúdo das linhas do arquivo, aqui se cria a base de cada processo
lerArquivo.on("data", function(data){
	baseA = parseInt(data[0]-1);
	baseB = parseInt(data[2]);
	baseC = parseInt(data[4]);
});

//array que simula a memória sem nenhum processo ativo
memoria=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

//função para criar uma lista , mostrando os processos ativos e em que endereço estão
function impressaoLista(array){
	console.log();
	console.log("**** Lista de processos ****");
	console.log("Espaço da memória | Conteúdo");

	//laço para percorrer o array e mostrar seu conteúdo caso tenha algo no índice
	for (i=0;i<array.length;i++){
		if(array[i]==0){
			console.log("  	"+ i)
		}else{
			console.log("  	"+ i + "	   	" +array[i])
		}
	}
	console.log();
}

//Função onde pode escolher qual processo será executado e em qual endereço ficará
function recursiva(){

	//chama função para mostrar a lista atualizada
	impressaoLista(memoria);

	//Mostra mensagem no terminal e guarda sua resposta
	rl.question("Qual processo deseja executar (entre A e C), digite 0 para sair: ",function(resposta){

		//Se a resposta for 0 para de executar o código, se for uma das letras ele mostra a base e limite de acordo com o arquivo txt que criamos
		if(resposta==0){
			process.exit();
		}else if(resposta=="a" || resposta=="A"){
			console.log(" Base:0 | Limite: " , baseA);
		}else if(resposta=="b" || resposta=="B"){
			console.log(" Base:" , baseA+1 , " | Limite: ", baseA+baseB);
		}else if(resposta=="c" || resposta=="C"){
			console.log(" Base:", baseA+baseB+1," | Limite: ", baseA+baseB+baseC);
		}else{
			console.clear();
			console.log("Digite um processo válido.");
			recursiva();
		}

		if(resposta=='a' || resposta=='b' || resposta=='c' || resposta=='A' ||resposta=='B' ||resposta=='C'){

		//Mostra mensagem no terminal e guarda sua resposta sobre em qual endereço guardar
			rl.setPrompt(`Deseja colocar em que endereço? `);
			rl.prompt();

				//função que verifica se a resposta de endereço está dentro do range de base e limite, 
				//se tiver guarda na memória, caso não esteja mostra mensagem de erro e chama novamente a função
				rl.on('line',function(respostaEnd){
				if(resposta == "A" || resposta == "a"){
					base=0;
					limite=baseA;

					if(respostaEnd>=base && respostaEnd<=limite){
						memoria[respostaEnd]="A";
						console.clear();
						recursiva();
					}else{
						console.clear();
						console.log("Endereço inválido");
						recursiva();
					}
				}
				else if(resposta == "B" || resposta == "b"){
					base=baseA+1;
					limite=baseA+baseB;
					if(respostaEnd>=base && respostaEnd<=limite){
						memoria[respostaEnd]="B";
						console.clear();
						recursiva();
					}else{
						console.clear();
						console.log("Endereço inválido");
						recursiva();
					}
				}

				else if(resposta == "C" || resposta == "c"){
					base=baseA+baseB+1;
					limite=baseA+baseB+baseC;
					if(respostaEnd>=base && respostaEnd<=limite){
						memoria[respostaEnd]="C";
						console.clear();
						recursiva();
					}else{
						console.clear();
						console.log("Endereço inválido");
						recursiva();
					}
				}

				
			})
			//else criado pra caso o usuário digite algum processo que não seja A, B ou C.
		}else{
			console.clear();
				console.log("Digite um processo válido");
				recursiva();
		}

	})
}

//Chamada da função
recursiva();