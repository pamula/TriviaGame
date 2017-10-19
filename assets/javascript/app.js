


$('#button').click(function(){
	$('.wrapper').show();
});
$('#img1').click(function(){
	$('.wrapper1').show();
	$('.wrapper').hide();
});
$('#img2').click(function(){
	$('.wrapper2').show();
	$('.wrapper').hide();
});

var number = 30;
var intervalId;
 $("#button1").on("click", run);

 $("#button2").on("click", run);
 
  


function run() {
      intervalId = setInterval(decrement, 1000);
    }

    //  The decrement function.
    function decrement() {

      //  Decrease number by one.
      number--;

      //  Show the number in the #show-number tag.
      $("#show-number").html("<h2>" + number + "</h2>");

  $("#show-number1").html("<h2>" + number + "</h2>");

      //  Once number hits zero...
      if (number === 0) {

        //  ...run the stop function.
        stop();

        //  Alert the user that time is up.
        alert("Time Up!press finish to check your result!!!");
      }
    }

    //  The stop function
    function stop() {

      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
    }
    stop();

    // function for quiz1
    function check(){
    	var question1 = document.quiz1.question1.value;
    	var question2 = document.quiz1.question2.value;
    	var question3 = document.quiz1.question3.value;
    	var question4 = document.quiz1.question4.value;
    	var correct =0 ;

    	if (question1 == "march"){
    		correct++ ;
    	}
    	if(question2 == "Yellowstone National Park in U.S."){
    		correct++;
    	}
    	if(question3 == "Saint Francis"){
    		correct++;
    	}
    	if(question4 == "all of the above"){
    		correct++;
    	}


    	var messages = ["Great Job!!" , "Good Luck Next Time" , "Need to do Better"];

    	var pictures=["assets/images/giphy2.gif","assets/images/giphy.gif",
    	               "assets/images/giphy3.gif"];




    	var range ;
    	if (correct < 3){
    		range = 2;
    	}
    	if(correct >0 && correct < 4){
    		range = 1 ;
    	}
    	if(correct >=4){
    		range = 0;
    	}
    	document.getElementById("after_submit").style.visibility = "visible";
    	document.getElementById("message").innerHTML = messages[range];
    	document.getElementById("number_correct").innerHTML = "You got" + correct + "correct";
    	document.getElementById("picture").src = pictures[range];


    }


    // function for quiz 2..
    function check1(){
    	var question1 = document.quiz2.question1.value;
    	var question2 = document.quiz2.question2.value;
    	var question3 = document.quiz2.question3.value;
    	
    	var correct =0 ;

    	if (question1 == "Wrong prescription or dose"){
    		correct++ ;
    	}
    	if(question2 == "300"){
    		correct++;
    	}
    	if(question3 == "laughing"){
    		correct++;
    	}
    	


    	var messages = ["Great Job!!" , "Good Luck Next Time" , "Need to do Better"];

    	var pictures=["assets/images/giphy2.gif","assets/images/giphy.gif",
    	               "assets/images/giphy3.gif"];
    	var range ;
    	if (correct < 2){
    		range = 2;
    	}
    	if(correct >0 && correct < 3){
    		range = 1 ;
    	}
    	if(correct >=3){
    		range = 0;
    	}
    	document.getElementById("after_submit").style.visibility = "visible";
    	document.getElementById("message").innerHTML = messages[range];
    	document.getElementById("number_correct").innerHTML = "You got" + correct + "correct";
    	document.getElementById("picture").src = pictures[range];




    }
    // /..........

    


	
	