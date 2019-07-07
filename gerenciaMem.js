readline = require('readline');

rl = readline.createInterface(process.stdin, process.stdout);

memoria=[0,0,0,0];

function recursiva(){
	rl.question("Qual processo deseja executar (entre A e B), digite 0 para sair: ",function(resposta){
		rl.setPrompt(`Deseja colocar em que endereço? `);
		rl.prompt();
		rl.on('line',function(respostaEnd){
			if(resposta == "A"){
				base=0;
				limite=2;

				if(respostaEnd>=base && respostaEnd<limite){
					memoria[respostaEnd]=1;
					console.log(memoria);
					recursiva();
				}else{
					console.log("Endereço inválido");
					recursiva();
				}
			}
		})

			// else if(resposta == "B"){
			// 	console.log("Processo B escolhido");
			// 	recursiva();
			// }

			// else if(resposta == "0"){
			// 	console.log("Inté o/");
			// 	process.exit();	
			// }

			// else{
			// 	console.log("Digite um processo válido");
			// 	recursiva();
			// }
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

