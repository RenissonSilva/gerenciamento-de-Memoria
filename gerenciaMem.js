console.clear();

readline = require('readline');
fs = require('fs');
rl = readline.createInterface(process.stdin, process.stdout);

var lerArquivo = fs.createReadStream('processos.txt', {encoding: 'ascii'});
lerArquivo.on("data", function(data){
	baseA = parseInt(data[0]-1);
	baseB = parseInt(data[2]);
	baseC = parseInt(data[4]);
});

memoria=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

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
		}else if(resposta=="a" || resposta=="A"){
			console.log(" Base:0 | Limite: " , baseA);
		}else if(resposta=="b" || resposta=="B"){
			console.log(" Base:" , baseA+1 , " | Limite: ", baseA+baseB);
		}else if(resposta=="c" || resposta=="C"){
			console.log(" Base:", baseA+baseB+1," | Limite: ", baseA+baseB+baseC)
		}else{
			console.clear();
			console.log("Digite um processo válido.");
			recursiva();
		}

		rl.setPrompt(`Deseja colocar em que endereço? `);
		rl.prompt();
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
			else{
				console.clear();
				console.log("Digite um processo válido");
				recursiva();
			}
		})

		})
}
recursiva();

