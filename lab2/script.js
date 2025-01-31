function checkAge() {
    const ageInput = document.getElementById('age-input').value;
    const age = Number(ageInput);

    let errorMessage = "";
    if (isNaN(age)) {
        errorMessage = "Invalid input, not a number."
    }
    else if (age % 1 != 0){
        errorMessage = "Invalid input, not an integer."
    }
    else if (age < 18) {
        errorMessage = "You are under 18, you are not allowed to enter."
    } 
    else if (age > 120) {
        errorMessage = "You are over 120, that is an invalid age."
    } 
    else {
        errorMessage = "";
    }

    if (errorMessage === "") {
        document.getElementById("main-content").style.visibility = "visible";
        document.getElementById("error-content").style.visibility = "hidden";
    } else {
        
        document.getElementById("error-message").innerHTML = errorMessage;
        document.getElementById("error-content").style.visibility = "visible";
    }

}