let name = "Luke Jones";
let education = "Oral Roberts University";
let experience = "Serving, Communication, Team-Leading";

console.log("Hello, my name is " + name);

document.getElementById("name").textContent = name;
document.getElementById("education").textContent = "Education: " + education;
document.getElementById("experience").textContent = "Experience: " + experience;

// Create a list of skills dynamically using a loop

let skills = ["Business", "Computer Building", "Communication", "Team Leadership", "Problem Solving"];

let skillsList = document.createElement("ul");
for (let i = 0; i < skills.length; i++) {
  let li = document.createElement("li");
  li.textContent = skills[i];
  skillsList.appendChild(li);
}
document.body.appendChild(skillsList);

// Add interactivity with a button

function showFunFact() {
  alert("Fun Fact: I Build Computers!");
}
