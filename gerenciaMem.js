rl = require('readline');

var prompt = rl.createInterface(process.stdin, process.stdout);

memoria=[0,0,0,0];

function recursiva(){
	prompt.question("Qual processo deseja executar (entre A e B), digite 0 para sair: ",function(resposta){
		if(resposta == "A"){
			base=0;
			limite=2;

			for(i=base;i<limite;i++){
				if(memoria[i]==0){
					memoria[i]=1;
					console.log(memoria);
					resposta==null;
					recursiva();
				}
				if(memoria[limite]==1){
					console.log("Memória cheia");
					console.log(memoria);
					recursiva();
				}
			}
		}

		else if(resposta == "B"){
			msg = "Processo B escolhido";
			console.log(msg);
			recursiva();
		}

		else if(resposta == "0"){
			msg = "Inté o/"
			console.log(msg);
			process.exit();	
		}

		else{
			msg = "Digite um processo válido";
			console.log(msg);
			recursiva();
		}

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

