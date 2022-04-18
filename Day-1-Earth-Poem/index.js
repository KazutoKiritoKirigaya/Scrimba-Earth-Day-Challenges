// POEM: Forests are green, oceans are blue. Keep the earth clean, for me and for you

const obj = {
  color1: "green",
  color2: "blue",
  planet: "Earth",
  adjective: "clean",
  emojis: ["🚂", "🌍", "🛼", "🍩", "🏖", "🎠", "🔮"],
  sentence: function() {
    //maybe some code here 🤔
    let sentence = `<span style="color: ${obj.color1}">Forests 🌲</span> are <span style="color: ${obj.color1}">${obj.color1}</span>, <span style="color: purple">oceans</span> ${obj.emojis[4]} are <span style="color: purple">${obj.color2}</span>. Keep the  <span style="background: linear-gradient(lightgreen, lightblue);">${obj.planet}</span> ${obj.emojis[1]} ${obj.adjective}, for <span style="color: hsl(320, 100%, 50%)">me</span> and for <span style="color: hsl(340, 100%, 50%)">you<span>!`;
    return sentence;
  }
};
document.getElementById("poem").innerHTML = obj.sentence();

// Task: Changing only the code ABOVE (lines 1-15), complete the poem and render it on the page.

// stretch goal 1️⃣: Render the most suitable emoji from the emojis array in the object somewhere in our poem.

// stretch goal 2️⃣: Without changing the object declaration above, change sea color to purple!

// stretch goal 3️⃣: Without changing the CSS file, style the values added from the object. 





