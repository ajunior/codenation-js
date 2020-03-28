// Step 1 - O primeiro passo é você salvar o conteúdo do JSON em um arquivo com o nome answer.json, que irá usar no restante do desafio.
// Criar um arquivo

const fs = require('fs');
const http = require('http')

fs.writeFile('answer.json');

// Step 2 - Fazer requisição http

let url = "https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=18ca0c18782522629e51f583c89a23c4086c6518"

let resposta = http.get(url);
console.log()



// Step 3





// Step 4




// Step 5





// Step 6







var cifraCesar = function(str, numb) {

	if (numb < 0)
		return cifraCesar(str, numb + 26);

	var output = '';

	for (var i = 0; i < str.length; i ++) {

		var c = str[i];

		if (c.match(/[a-z]/i)) {

			var code = str.charCodeAt(i);

			if ((code >= 65) && (code <= 90))
				c = String.fromCharCode(((code - 65 + numb) % 26) + 65);

			else if ((code >= 97) && (code <= 122))
				c = String.fromCharCode(((code - 97 + numb) % 26) + 97);

		}

		output += c;

	}

	return output;

};

// Invoque a função colocando a cifra e a quantidade de casas, tanto para criptografar quando para descriptografar
//console.log(função('string ou crifra', quantidade de casas));
console.log(cifraCesar('zpv ibwf up mfbso uif svmft pg uif hbnf. boe uifo zpv ibwf up qmbz cfuufs uibo bozpof fmtf. bmcfsu fjotufjo', -1));
