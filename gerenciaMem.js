readline = require('readline');

rl = readline.createInterface(process.stdin, process.stdout);

memoria=[0,0,0,0,0,0];

function recursiva(){
	console.log(memoria);
	rl.question("Qual processo deseja executar (entre A e C), digite 0 para sair: ",function(resposta){
		if(resposta==0){
			process.exit();
		}

		rl.setPrompt(`Deseja colocar em que endereço? `);
		rl.prompt();
		rl.on('line',function(respostaEnd){
			if(resposta == "A"){
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
			else if(resposta == "B"){
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

			else if(resposta == "C"){
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
				console.log("Digite um processo válido");
				recursiva();
			}
		})

		})
}

recursiva();




// function add(){
// 	if(resposta=="A"){
// 		base=0;
// 		limite=4;

// 		for(i=0;i<memoria.length;i++){
// 			if(memoria[i]==0){
// 				return memoria[i]=="A";
// 			}
// 		}
// 		console.log(memoria);
// 	}
// }

