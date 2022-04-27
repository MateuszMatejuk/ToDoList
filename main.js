const form = document.querySelector('form');
const inputAddTask = document.querySelector('input.add');
const ul = document.querySelector('ul');
const lis = document.getElementsByClassName('task');
const listTasks = [];
const quanityTask = document.querySelector('h2 span');
const search = document.querySelector('.search');

const addTask = (e) => {
  e.preventDefault();
  const contetntsInput = inputAddTask.value;
  if (contetntsInput === '') return;
  const liElement = document.createElement('li');
  liElement.classList = 'task';
  liElement.innerHTML = contetntsInput + ' <button>Usuń</button>';
  listTasks.push(liElement);
  listTasks.forEach((task, key) => {
    task.dataset.key = key;
    ul.appendChild(task);
  })
  ul.appendChild(liElement)
  inputAddTask.value = '';
  quanityTask.textContent = listTasks.length
  liElement.querySelector('button').addEventListener('click', remove);
}

const remove = (e) => {
  e.target.parentNode.remove();
  const index = e.target.parentNode.dataset.key;
  listTasks.splice(index, 1);
  quanityTask.textContent = listTasks.length
  ul.textContent = '';
  listTasks.forEach((task, key) => {
    task.dataset.key = key;
    ul.appendChild(task);
  })
}

const searchTask = (e) => {
  const searchText = e.target.value.toLowerCase();
  let searchTasksArr = listTasks
  searchTasksArr = searchTasksArr.filter(task => task.textContent.toLowerCase().includes(searchText));
  ul.textContent = '';
  searchTasksArr.forEach(task => ul.appendChild(task))
}

search.addEventListener('input', searchTask);

form.addEventListener('submit', addTask);