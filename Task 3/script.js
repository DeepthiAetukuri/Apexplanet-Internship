const form = document.getElementById("patientForm");
const table = document.getElementById("patientTable");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;
  const condition = document.getElementById("condition").value;

  const row = table.insertRow();
  row.insertCell(0).textContent = name;
  row.insertCell(1).textContent = age;
  row.insertCell(2).textContent = gender;
  row.insertCell(3).textContent = condition;

  form.reset();
});

function getJoke() {
  fetch("https://official-joke-api.appspot.com/jokes/general/random")
    .then(response => response.json())
    .then(data => {
      document.getElementById("joke").textContent = data[0].setup + " - " + data[0].punchline;
    });
}
