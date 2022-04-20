const pointsEl = document.getElementById("points-p");
const btnsContainer = document.getElementById("btns-container");

const actionsArr = [
    {
        name: "recycledPaper",
        emoji: "📄",
        text: "recycled paper",
        good: true,
    },
    {
        name: "boughtSecondHand",
        emoji: "🛍",
        text: "bought 2nd hand",
        good: true,
    },
    {
        name: "tookTrain",
        emoji: "🚂",
        text: "took train",
        good: true,
    },
    {
        name: "leftLightsOn",
        emoji: "💡",
        text: "left lights on",
        good: false,
    },
    {
        name: "drippingTap",
        emoji: "🚰",
        text: "let tap drip",
        good: false,
    },
    {
        name: "leftCarRunningWhileDucksCrossed",
        emoji: "🦆",
        text: "left car running while ducks crossed road",
        good: false,
    },
];

let count = 0;
let activeCount = 0;

// Task: For each action in actionsArr, render a button on the page which matches the design on the slide.
// The button should show:
// 1. The emoji
// 2. The action name
// 3. Add +5 points to the user’s score for good actions, and -5 for bad actions on click
// 4. Update the points total in the DOM on click

function renderBtns() {
    // 1. Render buttons onto page
    actionsArr.forEach((el) => {
        // Stretch Goal 1️⃣: Change each button color, green for good activities, red for bad.
        if (el.good == true) {
            btnsContainer.innerHTML += `<button class="btn btn-good">${el.emoji} ${el.text}</button>`;
        } else {
            btnsContainer.innerHTML += `<button class="btn btn-bad">${el.emoji} ${el.text}</button>`;
        }
    });
    // 2. Update points
    pointsEl.textContent = `${count} points today!`;
}

renderBtns();

function changeBackgroundColour() {
    // Stretch Goal 2️⃣: Change the background color to reflect the user's total points. 0 or above = green, below 0 = red.
    count > 0
        ? (document.body.style.backgroundColor = "var(--yellow-green-crayola)")
        : (document.body.style.backgroundColor = "lightpink");
}

document.querySelectorAll(".btn").forEach((i) => {
    i.addEventListener("click", (e) => {
        i.className == "btn btn-good" ? (count += 5) : (count -= 5);

        // Stretch Goal 3️⃣: Add an activity count.
        activeCount += 1;
        changeBackgroundColour();
        pointsEl.innerHTML = `${count} points today!<br>${activeCount} activities done today!`;
    });
});
