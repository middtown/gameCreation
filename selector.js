$(document).ready(function(){
console.log('hello world');


  var turn = 1;

  $("#gameboard tr td").click(function() {
  	//wait for click on game board and pieces
    if ($(this).text()=="") {
      if ((turn%2)==1) { 
      	$(this).append("X").css(); 
      	} else { 
      	$(this).append("O"); }
      turn++;
    }
  });

// Resent board's text to replay game
$("#resetButton").click(function() {
  $("#gameboard tr td").text("");
});
});


  //event.preventDefault();

// 	var clicks = 0;
// 	var name1 = "Jim";
// 	var name2 = "Bo";
// 	var player1 = 0;
// 	var player2 = 0;
	  
// //alert( "Handler for .click() called." );
// $("#cell1a").click(function() {
// 	if ( clicks < 1){
// 		// is player1's turn
// 		//player1 = "o"
// 		$( "cell1a" ).append( "<p>X</p>" );
// 			console.log("x");

// 	} else {
// 		//player2's turn
// 		//player2 = "o"
// 		$( "cell1a" ).append( "<p>O</p>" );
// 			console.log("o");
// 	}


// 	$("#gameboard td").click(function(){
// 		console.log("Player select");
// 		alert ("X plays first");
// 	});
// 	});
		//console.log("x");

