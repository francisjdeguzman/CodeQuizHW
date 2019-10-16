

var start = confirm ("Press OK to start the quiz!");
if (start == true) {
    alert("You're the captain now");
}
else {
    alert("Come back when you grow a pair!");
}


(function()
    {
        var allQuestions = [{
        question: "Of the following, which is not a programming language?",
        options: ["HTML", "CSS", "BMW", "Ruby"],
        answer: 2
    }, {
        question: "What does "<p>" represent?" ,
        options: ["Panini", "Paragraph", "Pizza", "Paralyzed"],
        answer: 1
    }, {
        question: "What was the first high-level programming language?",
        options: ["FORTRAN", "FARTNITE", "IBM", "GARTHKEITH"],
        answer: 0
    }, {
        question: "What year was the first computer virus created?",
        options: ["1999", "1991", "1985", "1983"],
        answer: 3
    }, {
        question: "User stories are prioritized by whom?",
        options: ["the developer", "the customer", "the seller", "the marketer"],
        answer: 1
    }, {
        question: "Who defined ACCEPTANCE CRITERIA as 'notes about what the story must do in order for the project ownder to accept it as complete.'?",
        options: ["Mike Cohn", "Daniel Craig", "Roy Stewart", "Stewie Douglas"],
        answer: 0
    }, {
        question: "Which process uses the 'Double Diamond' rule?",
        options: ["SHEQC", "JAVA", "PYTHON", "NCIS"],
        answer: 0
    }];

var quesCounter = 0;
var selectOptions = [];
var quizSpace = $('#quiz');
  
nextQuestion();
  
$('#next').click(function () 
  {
      chooseOption();
      if (isNaN(selectOptions[quesCounter])) 
      {
          alert('Please select an option !');
      } 
      else 
      {
        quesCounter++;
        nextQuestion();
      }
  });

$('#prev').click(function () 
  {
      chooseOption();
      quesCounter--;
      nextQuestion();
  });

function createElement(index) 
  {
      var element = $('<div>',{id: 'question'});
      var header = $('<h2>Question No. ' + (index + 1) + ' :</h2>');
      element.append(header);

      var question = $('<p>').append(allQuestions[index].question);
      element.append(question);

      var radio = radioButtons(index);
      element.append(radio);

      return element;
  }

function radioButtons(index) 
  {
      var radioItems = $('<ul>');
      var item;
      var input = '';
      for (var i = 0; i < allQuestions[index].options.length; i++) {
        item = $('<li>');
        input = '<input type="radio" name="answer" value=' + i + ' />';
        input += allQuestions[index].options[i];
        item.append(input);
        radioItems.append(item);
      }
      return radioItems;
}

function chooseOption() 
  {
      selectOptions[quesCounter] = +$('input[name="answer"]:checked').val();
  }
 
function nextQuestion() 
  {
      quizSpace.fadeOut(function() 
          {
            $('#question').remove();
            if(quesCounter < allQuestions.length)
              {
                  var nextQuestion = createElement(quesCounter);
                  quizSpace.append(nextQuestion).fadeIn();
                  if (!(isNaN(selectOptions[quesCounter]))) 
                  {
                    $('input[value='+selectOptions[quesCounter]+']').prop('checked', true);
                  }
                  if(quesCounter === 1)
                  {
                    $('#prev').show();
                  } 
                  else if(quesCounter === 0)
                  {
                    $('#prev').hide();
                    $('#next').show();
                  }
              }
            else 
              {
                  var scoreRslt = displayResult();
                  quizSpace.append(scoreRslt).fadeIn();
                  $('#next').hide();
                  $('#prev').hide();
              }
      });
  }

function displayResult() 
  {
      var score = $('<p>',{id: 'question'});
      var correct = 0;
      for (var i = 0; i < selectOptions.length; i++) 
      {
        if (selectOptions[i] === allQuestions[i].answer) 
        {
          correct++;
        }
      }
      score.append('You scored ' + correct + ' out of ' +allQuestions.length);
      return score;
}
})();
