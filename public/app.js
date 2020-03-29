$(document).ready(function(){
    //global variables
    var score = 0;
    var attempts = localStorage.getItem("total_attempts");
    var previousScores = localStorage.getItem("previous_scores");
    
    //event listeners
    $("button").on("click", gradeQuiz);
    
    //Question 5 images
    
    $(".q5Choice").on("click", function(){
        $(".q5Choice").css("background", "");
        $(this).css("background", "rgb(255, 255, 0)");
    });
    
    displayQ4Choices();
    
    function displayQ4Choices(){
        let q4ChoicesArray = ["Maine", "Rhode Island",  "Maryland", "Delaware"];
        q4ChoicesArray = _.shuffle(q4ChoicesArray);
        
        for(let i = 0; i < q4ChoicesArray.length; i++){
            //$("#q4Choices").append("RAWR");
            $(    ` <input type="radio" name="q4" id="${q4ChoicesArray[i]}"
            value="${q4ChoicesArray[i]}"> <label for="${q4ChoicesArray[i]}"> ${
                q4ChoicesArray[i]}</label>`).appendTo('#q4Choices');
        }
            
    // ` <input type="radio" name="q4" id="${q4ChoicesArray[i]}"
    //         value="${q4ChoicesArray[i]}"> <label for="${q4ChoicesArray[i]}"> ${
    //             q4ChoicesArray[i]}</label>`
    }//q4 choices
    
    displayQ6Choices();
    
    function displayQ6Choices(){
        let q6ChoicesArray = ["30 million", "40 million", "50 million"];
        q6ChoicesArray = _.shuffle(q6ChoicesArray);
        
        for(let i = 0; i < q6ChoicesArray.length; i++){
            $("#q6Choices").append(` <input type="radio" name="q6" id="${q6ChoicesArray[i]}"
            value="${q6ChoicesArray[i]}"> <label for="${q6ChoicesArray[i]}"> ${
                q6ChoicesArray[i]}</label>`);
            }
    }
    
    //functions
    function isFormValid(){
        let isValid = true;
        if ($("#q1").val() == ""){
            isValid = false;
            $("#validationFdbk").html("Question 1 was not answered");
        }
        return isValid;
    }
    
    function rightAnswer(index){
        $(`#q${index}Feedback`).html("Correct!");
        $(`#q${index}Feedback`).attr("class", "bg-success text-white");
        $(`#markImg${index}`).html("<img src ='img/checkmark.png' alt='checkmark'>");
        score += 12.5;
    }
    
    function wrongAnswer(index){
        $(`#q${index}Feedback`).html("Incorrect!");
        $(`#q${index}Feedback`).attr("class", "bg-warning text-white");
        $(`#markImg${index}`).html("<img src ='img/xmark.png' alt='xmark'>");
    }
    
    function gradeQuiz(){
        $("#validationFdbk").html("");//resets validation feedback
        if(!isFormValid()){
            return;
        }
        
        //variables
        score = 0;
        let q1Response = $("#q1").val().toLowerCase();
        let q2Response = $("#q2").val();
        let q4Response = $("input[name=q4]:checked").val();
        let q6Response = $("input[name=q6]:checked").val();
        let q7Response = $("#q7").val();
        let q8Response = $("#q8").val();
        
        //Question 1
        if(q1Response == "sacramento"){
            rightAnswer(1);
        }else{
            wrongAnswer(1);
        }
        
        if(q2Response == "mo"){
            rightAnswer(2);
        }else{
            wrongAnswer(2);
        }
        
        if($("#Jefferson").is(":checked") && $("#Roosevelt").is(":checked") && !$("#Jackson").is(":checked")
        && !$("#Franklin").is(":checked")){
            rightAnswer(3);
        }
        else{
            wrongAnswer(3);
        }
        
        if(q4Response == "Rhode Island"){
            rightAnswer(4);
        }else{
            wrongAnswer(4);
        }
        
        if($("#seal2").css("background-color") == "rgb(255, 255, 0)"){
            rightAnswer(5);
        }else{
            wrongAnswer(5);
        }
        
        if(q6Response == "40 million"){
            rightAnswer(6);
        }else{
            wrongAnswer(6);
        }
        
        if(q7Response == "wd"){
            rightAnswer(7);
        }else{
            wrongAnswer(7);
        }
        
        if(q8Response == "50"){
            rightAnswer(8);
        }else{
            wrongAnswer(8);
        }
        
        if(score > 80){
            if(score == 100){
                $("#totalScore").html(`Congratulations! Total Score: ${score}`);
                $("#totalScore").css('color', 'green');
                $("#totalAttempts").html(`Total Attempts: ${++attempts}`);
                $("#previousScores").html("Previous score: " + localStorage.getItem("previous_scores"))
                localStorage.setItem("previous_scores", score);
                localStorage.setItem("total_attempts", attempts);
            }else{
                //$("#totalScore").css('color', 'green');
                $("#totalScore").html(`Total Score: ${score}`);
                $("#totalScore").css('color', 'green');
                $("#totalAttempts").html(`Total Attempts: ${++attempts}`);
                $("#previousScores").html("Previous score: " + localStorage.getItem("previous_scores"))
                localStorage.setItem("previous_scores", score);
                localStorage.setItem("total_attempts", attempts);
            }
        }else{
            $("#totalScore").css('color', 'red');
            $("#totalScore").html(`Total Score: ${score}`);
            $("#totalAttempts").html(`Total Attempts: ${++attempts}`);
            $("#previousScores").html("Previous score: " + localStorage.getItem("previous_scores"))
            localStorage.setItem("previous_scores", score);
            localStorage.setItem("total_attempts", attempts);
        }
        
        // $("#totalScore").html(`Total Score: ${score}`);
        // $("#totalAttempts").html(`Total Attempts: ${++attempts}`);
        // localStorage.setItem("total_attempts", attempts);
    }
});