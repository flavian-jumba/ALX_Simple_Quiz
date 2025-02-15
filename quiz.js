function checkAnswer(){
    //correct answer 
    let correctAnswer='4';
    //Retrieving the user's answer
    const userAnswer=document.querySelector('input[name="quiz"]:checked')?.value;
    //Checking if the user's answer is correct
    const feedbackElement=document.getElementById('feedback');
    if (userAnswer === correctAnswer){
        feedbackElement.textContent="Correct! Well done.";
    }else{
        feedbackElement.textContent=["That's incorrect. Try again!"];
    }
}
//Adding an event listener to the submit button
document.getElementById('submit-answer').addEventListener('click',checkAnswer);
