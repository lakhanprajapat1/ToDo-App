function addTask() {
    const task = document.getElementById('task').value;
    const time = document.getElementById('time').value;
    const priority = document.getElementById('priority').value;
  
    if (task === "" || time === "") {
      alert("Please fill in all fields");
      return;
    }
  
    const taskItem = document.createElement('li');
    taskItem.innerText = `${task} - ${time}`;
  
    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('task-buttons');
  
    const doneButton = document.createElement('button');
    doneButton.classList.add('done-btn');
    doneButton.innerText = 'Done';
    doneButton.onclick = function() {
      taskItem.classList.toggle('completed');
    };
  
    const removeButton = document.createElement('button');
    removeButton.classList.add('remove-btn');
    removeButton.innerText = 'Remove';
    removeButton.onclick = function() {
      taskItem.remove();
    };
  
    buttonsContainer.appendChild(doneButton);
    buttonsContainer.appendChild(removeButton);
    taskItem.appendChild(buttonsContainer);
  
    switch (priority) {
      case "1":
        document.getElementById('first-tasks').appendChild(taskItem);
        break;
      case "2":
        document.getElementById('next-tasks').appendChild(taskItem);
        break;
      case "3":
        document.getElementById('delegated-tasks').appendChild(taskItem);
        break;
      case "4":
        document.getElementById('later-tasks').appendChild(taskItem);
        break;
      default:
        alert("Invalid priority selected");
    }
  
    document.getElementById('task').value = "";
    document.getElementById('time').value = "";
    document.getElementById('priority').value = "1";
  }
  