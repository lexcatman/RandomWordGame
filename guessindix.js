$(document).ready(function(){
	String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}
	var numGuesses = 0; 
	var revealed = "";
		var words = ["dog", "cat", "fish", "iguana", "goat", "sheep", "cow", "flamingo", "koi", "crab", "shark", "tiger", "cougar", "chicken", "lizard"];
		var answer = words[Math.floor(Math.random() * words.length)];
		//var answer = 'rabbit';
		var n = answer.length;
		var guessed = new Array(n);  //The array and its length
		var randomNum;
		var blanks = answer;
		var i=0;
		var used = false;
		blanks = blanks.replace(/./g,'_');
		var blankssub = blanks.substring;
		var blankslength = blanks.length;
		var answerstring = new Array(blankslength);
		var replacing = blanks;
		

		
		for(i=0; i < n; i++){
			
			guessed[i]= false;    //setting all to false
		}
		$("#blankspace").html(blanks);
		$("#numletters").html(n);
		$("#button").click(function() {
			used = false;
			var inputword = document.getElementById('thingie').value;                              //DON'T FORGET ;
			var b = inputword;
			var numBlanks = blanks.length;
			randomNum = Math.floor((Math.random()*n - 1)+1);
			numGuesses++;
				if (b != answer) { //right answer
					var res = answer.substring (numGuesses - 1, numGuesses);
					if(numGuesses >= n){
					$("#noti").html('Gameover. You Suck. Answer was: ' + answer);	
					$("#blankspace").html(answer);
									}
				else {  //wrong answer
					$("#noti").html(inputword + ' is incorrect. Current number of guesses is ' + numGuesses);
					if (numGuesses < n) {
					/*blanks = blanks.substring (0, randomNum - 1) + answer.substring (randomNum - 1, randomNum) + blanks.substring(randomNum + 1, n);
					$("#blankspace").html(revealed + blanks); */
						while(used == false){
							$("#debug").append(randomNum + "<br />");
							if(guessed[randomNum] == true){
								randomNum = Math.floor((Math.random()*n - 1)+1);	
							
							}
							else{
								replacing = replacing.replaceAt(randomNum,answer[randomNum])
								$("#blankspace").html(replacing); /*------------------ Printing ------------------------*/
								guessed[randomNum] = true;
								used= true;	
							
						
							
						}
						
					}
					 
				}
			}
		}
			else{
			$("#blankspace").html(answer);
			$("#noti").html(inputword + ' is correct. Current numebr of guesses is '+numGuesses);	
			numGuesses = 0; 
		}; 
	});
});