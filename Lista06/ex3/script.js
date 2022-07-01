const inputElement = document.querySelector(".new-task");
const addTask = document.querySelector("#add-new-task");

const tasksContainer = document.querySelector(".tasks-container");

const validateInput = () => inputElement.value.trim().length > 0;

const addNewTask = () => {
    const inputIsValid = validateInput();

    if (!inputIsValid) {
        return;
    }

    const taskItemContainer = document.createElement("div");
    taskItemContainer.classList.add("task-item");

    const taskContent = document.createElement("p");
    taskContent.innerText = inputElement.value;

    taskContent.addEventListener("click", () => checkItem(taskContent));

    const deleteTask = document.createElement("i");
    deleteTask.classList.add("far");
    deleteTask.classList.add("fa-trash-alt");

    deleteTask.addEventListener("click", () => removeTask(taskItemContainer, taskContent));

    taskItemContainer.appendChild(taskContent);
    taskItemContainer.appendChild(deleteTask);

    tasksContainer.appendChild(taskItemContainer);

    inputElement.value = '';
};

const checkItem = (taskContent) => {
  const tasks = tasksContainer.childNodes;

  for (const task of tasks) {
    if (task.firstChild.isSameNode(taskContent)) {
      task.firstChild.classList.toggle("task-done");
    }
  }
};

const removeTask = (taskItemContainer, taskContent) => {
  const tasks = tasksContainer.childNodes;

  for (const task of tasks) {
    if (task.firstChild.isSameNode(taskContent)) {
      taskItemContainer.remove();
    }
  }
};

addTask.addEventListener("click", () => addNewTask());