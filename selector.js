$(document).ready(function(){
console.log('hello world');


  var turn = 1;

  $("#gameboard tr td").click(function() {
  	//wait for click on game board and pieces
    if ($(this).text()=="") {
      if ((turn%2)==1) { 
      	$(this).html("<h2>X</h2>"); 
      	} else { 
      	$(this).html("<h2>O</h2>"); }
                console.log($(this).html());
      turn++;
        checkForWinner();
    }
  });

  // check for winner function
  // The nth-child pseudo-class is specified with a single argument, 
  //   which represents the pattern for matching elements.
  function checkForWinner() {
        console.log("checking for winner");
      var cell1 = $("#cell1a").html();
        console.log(cell1);
      var cell2 = $("#cell1b").html();
        console.log(cell2);
      var cell3 = $("#cell1c").html();
        console.log(cell3);
      var cell4 = $("#cell2a").html();
        console.log(cell4);
      var cell5 = $("#cell2b").html();
        console.log(cell5);
      var cell6 = $("#cell2c").html();
        console.log(cell6);
      var cell7 = $("#cell3a").html();
        console.log(cell7);
      var cell8 = $("#cell3b").html();
        console.log(cell8);
      var cell9 = $("#cell3c").html();
        console.log(cell9);
    if ((cell1===cell2) && (cell2===cell3)) {
        //return cell3;
        console.log(cell3);
     } else if 
        ((cell4===cell5) && (cell5===cell6)) {
        //return cell6;
                console.log(cell6);
      }else if 
        ((cell7===cell8) && (cell8===cell9)) {
        //return cell9;
                console.log(cell9);
      }else if 
        ((cell1===cell4) && (cell4===cell7)) {
        //return cell7;
                console.log(cell7);
      }else if 
        ((cell2===cell5) && (cell5===cell8)) {
        //return cell8;
                console.log(cell8);
      }else if 
        ((cell3===cell6) && (cell6===cell9)) {
        //return cell9;
                console.log(cell9);
      }else if 
        ((cell1===cell5) && (cell5===cell9)) {
        //return cell9;
                console.log(cell9);
      }else if 
        ((cell3===cell5) && (cell5===cell7)) 
        //return cell7;
                console.log(cell7);
      // }else
      //   return ("no winner");
      // console.log("these cells match");
      //console.log(cell1);
      //console.log(cell2);
      //console.log(cell3);
    }

 // if (checkForWinner()=="X") { 
 //        alert("Player 1 wins!"); }
 //        else { alert("Player 2 wins!"); }
  


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

