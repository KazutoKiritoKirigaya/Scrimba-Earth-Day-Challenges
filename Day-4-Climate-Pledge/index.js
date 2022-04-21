const body = document.body;
const formSubmit = document.getElementById("form-submit");
const checkboxes = document.getElementsByClassName("checkbox");
const checkboxesContainer = document.getElementById("checkboxes-container");
const form = document.getElementById("form");
document.getElementById("signed-pledge-paragraph").style.visibility = "hidden";
var climatePledge = document.getElementById("climate-pledge");

// Task:
// Part 1: Add validation to check that the name and email fields are filled in and display a warning message if not (you might not need JS for this 😜). ✅
/* PART 1: ADDED "required" TO THE INPUT TAG. */
// Part 2: Hide the form and show a thank you message on submit.

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let user = document.getElementById("name").value;
    form.style.display = "none";
    // Stretch Goal 2️⃣:  Personalise the thank you message with the user's name. ✅
    climatePledge.innerHTML = `Hey, <span id="user-name">${user}</span>! Thanks for committing to a climate pledge!`;
    document.getElementById("signed-pledge-paragraph").style.visibility =
        "visible";
});

// Stretch Goal 1️⃣:  Add warning styling if the name and email fields are empty (you might not need JS for this either).

// Stretch Goal 3️⃣:  Disable the button when no checkboxes are checked.
