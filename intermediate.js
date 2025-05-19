// JavaScript Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMessage = document.getElementById("formMessage");

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!name || !email || !message) {
    formMessage.textContent = "All fields are required!";
    formMessage.style.color = "red";
  } else if (!emailPattern.test(email)) {
    formMessage.textContent = "Invalid email format!";
    formMessage.style.color = "red";
  } else {
    formMessage.textContent = "Form submitted successfully!";
    formMessage.style.color = "green";
    document.getElementById("contactForm").reset();
  }
});

// To-Do List Logic
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.onclick = () => li.remove();

  li.appendChild(removeBtn);
  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
}
