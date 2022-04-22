const coffeesPerDay = [3, 1, 2, 1, 3, 2, 10];
const reusableCupDiscount = 0.5;
const coffeePrice = 3;
const dailySavings = document.getElementById("daily-savings");
let savingsPerDayArr = [];

// Task: Based on the number of coffees bought and the reusable cup discount, calculate and render each day's savings in the dailySavings element.

function calculateDisc(a) {
    let totalCoffeePrice = coffeesPerDay[a] * reusableCupDiscount;
    return totalCoffeePrice;
}

// Stretch Goal 1️⃣: Show the total savings.
let totSav = 0;
let x = 0;
while (x != coffeesPerDay.length) {
    dailySavings.innerHTML += `☕️️Day ${x + 1}: ${toDollars(
        calculateDisc(x)
    )}<br><br>`;
    totSav += calculateDisc(x);
    x += 1;
}

dailySavings.innerHTML += `Total Savings: ${toDollars(totSav)}`;
// Stretch Goal 3️⃣: Improve the formatting of the numbers, e.g. $1.5 = $1.50.
function toDollars(num) {
    const dollars = new Intl.NumberFormat(`en-US`, {
        currency: `USD`,
        style: "currency",
    }).format(num);
    return dollars;
}

// Stretch Goal 2️⃣: Add an input to add more entries to coffeesPerDay.
