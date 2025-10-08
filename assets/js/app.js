
//Don't store DOM property values (like .value or .placeholder) in a simple variable if your goal is to change the element itself.
//
//A variable only holds a copy of the text (a plain string), not a live link to the HTML element.
//
//To manipulate an input field, always use the full element reference and property directly:
//
//Good: storedInput.value = 'New Name'; (This updates the visible element.)
//
//Confusing: let storedInputValue = storedInput.value; 
//           storedInputValue = 'New Name'; (This only updates the temporary variable, not the input box.)
//                                   (Also it is re-asigning a new value on that variable not changing value of .value property)


//The .value property in JavaScript is primarily used for HTML elements designed to store or collect data.
//
//This includes all form controls (like <input>, <textarea>, <select>)
//
//And tags that represent a specific quantifiable state (like <meter> 
// 
//or <progress>).
//
//Simple Rule: If the element either holds user input or represents a specific data measure, you use .value.

/*======= Notes End======*/



/*============ gradeConverter SECTION START ================*/

//Grade System Using Conditional Statement

let marksInput = document.querySelector(".marksInput");
let result = document.querySelector(".result span");
let marksButton = document.querySelector(".marksButton");
let studentName = document.querySelector(".studentName span");
let studentsInput = document.querySelector(".studentsInput");

let showHide = document.querySelector(".showHide");
let closedEye = document.querySelector(".closedEye");
let openedEye = document.querySelector(".openedEye");

// anonymous function
showHide.addEventListener('click', function () {

    if (!(closedEye.classList.contains("closedEyeReverse")) && !(openedEye.classList.contains("openedEyeReverse"))) {

        closedEye.classList.add("closedEyeReverse");
        openedEye.classList.add("openedEyeReverse");

        marksInput.type = "text";

    }
    else {

        closedEye.classList.remove("closedEyeReverse");
        openedEye.classList.remove("openedEyeReverse");

        marksInput.type = "password";
    }


})

//arrow function
document.addEventListener('click', () => {

    let clickInside = showHide.contains(event.target);
    let marksInputShadow = "inset 2px 5px 12px 0.01px #2424241a, 2px 6px 10px 0.5px #3a746c69";

    if (clickInside) {

        marksInput.style.boxShadow = marksInputShadow;
    }
    else {
        
        marksInput.style.boxShadow = "";
    }
})


//general function
function gradeCon() {
    
    marksButton.classList.add("focus");

    if (isNaN(studentsInput.value) && !(isNaN(marksInput.value))) {


        if (marksInput.value >= 80 && marksInput.value <= 100) {

            studentName.innerText = studentsInput.value;
            result.innerText = 'A+';

        }
        else if (marksInput.value >= 70 && marksInput.value <= 79) {

            studentName.innerText = studentsInput.value;
            result.innerText = 'A';

        }
        else if (marksInput.value >= 60 && marksInput.value <= 69) {

            studentName.innerText = studentsInput.value;
            result.innerText = 'A-';

        }
        else if (marksInput.value >= 50 && marksInput.value <= 59) {

            studentName.innerText = studentsInput.value;
            result.innerText = 'B';

        }
        else if (marksInput.value >= 40 && marksInput.value <= 49) {

            studentName.innerText = studentsInput.value;
            result.innerText = 'C';

        }
        else if (marksInput.value >= 33 && marksInput.value <= 39) {

            studentName.innerText = studentsInput.value;
            result.innerText = 'D';

        }
        else if (marksInput.value >= 0 && marksInput.value <= 32) {

            studentName.innerText = studentsInput.value;
            result.innerText = 'F (Fail)';

        }

        else if (marksInput.value == '') {

            marksInput.classList.add("marksRequired");
            marksInput.placeholder = "*Required";

        }

        else {

            marksInput.value = '';
            marksInput.classList.add("marksRequired");
            marksInput.placeholder = "*Marks must be 0-100";

        }

    }
    else if (marksInput.value == '' && studentsInput.value == '') {

        marksInput.classList.add("marksRequired");
        marksInput.placeholder = "*Required";

        studentsInput.classList.add("nameRequired");
        studentsInput.placeholder = "*Required";
    }
    else if (!(isNaN(studentsInput.value)) && isNaN(marksInput.value)) {

        studentsInput.value = '';
        studentsInput.classList.add("nameRequired");
        studentsInput.placeholder = "*A name must contain letters.";

        marksInput.value = '';
        marksInput.classList.add("marksRequired");
        marksInput.placeholder = "*Must provide NUMBERS";
    }
    else if (!(isNaN(studentsInput.value)) && !(isNaN(marksInput.value))) {
        if (studentsInput.value == '') {

            studentsInput.classList.add("nameRequired");
            studentsInput.placeholder = "*Required";

        } else {

            studentsInput.value = '';
            studentsInput.classList.add("nameRequired");
            studentsInput.placeholder = "*A name must contain letters.";
        }

    }
    else if (isNaN(studentsInput.value) && isNaN(marksInput.value)) {

        marksInput.value = '';
        marksInput.classList.add("marksRequired");
        marksInput.placeholder = "*Must provide NUMBERS";
    }

}

//different Events
marksButton.addEventListener('mousedown', gradeCon);

marksButton.addEventListener('mouseup', function(){
    
    marksButton.classList.remove("focus");
})
marksButton.addEventListener('mouseleave', function(){
    
    marksButton.classList.remove("focus");
})


/*============ gradeConverter SECTION END ================*/


/*============ bulb SECTION START ================*/

let btnOn = document.querySelector(".btn_on");
let image = document.querySelector('img');
let btnOff = document.querySelector(".btn_off");

// Store the initial styles for both buttons

btnOn.addEventListener('click', function () {
    image.src = "./assets/images/turn_on.png";
    btnOn.style.background = "linear-gradient( #d6d0d0, #eeeeeeb6)";
    btnOn.style.color = "rgba(85, 85, 85, 0.93)";
    

    btnOff.style.background = "linear-gradient(#a39e9e, #d8ceceb6)";
    btnOff.style.color = " #3f3f3f";
});

btnOff.addEventListener('click', () => {
    image.src = "./assets/images/turn_off.png";
    btnOff.style.background = "linear-gradient( #d6d0d0, #eeeeeeb6)";
    btnOff.style.color = "rgba(85, 85, 85, 0.93)";
    
    
    btnOn.style.background = "linear-gradient(#a39e9e, #d8ceceb6)";
    btnOn.style.color = " #3f3f3f";
});


image.addEventListener('mouseover', function() {
    image.src = "./assets/images/turn_on.png";
    image.style.cursor = "grab";
})

image.addEventListener('mouseout', function() {
    image.src = "./assets/images/turn_off.png";
})

/*============ bulb SECTION START ================*/
