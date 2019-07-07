readline = require('readline');

rl = readline.createInterface(process.stdin, process.stdout);

memoria=[0,0,0,0,0,0];

function impressaoLista(array){
	console.log();
	console.log("**** Lista de processos ****");
	console.log("Espaço da memória | Conteúdo");
	for (i=0;i<array.length;i++){
		if(array[i]==0){
			console.log("  	"+ i)
		}else{
			console.log("  	"+ i + "	   	" +array[i])
		}
	}
	console.log();
}

function recursiva(){
	impressaoLista(memoria);
	rl.question("Qual processo deseja executar (entre A e C), digite 0 para sair: ",function(resposta){
		if(resposta==0){
			process.exit();
		}

		rl.setPrompt(`Deseja colocar em que endereço? `);
		rl.prompt();
		rl.on('line',function(respostaEnd){
			if(resposta == "A" || resposta == "a"){
				base=0;
				limite=1;

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
				base=2;
				limite=3;
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
				base=4;
				limite=5;
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

			else{
				console.clear();
				console.log("Digite um processo válido");
				recursiva();
			}
		})

		})
}
recursiva();

