const API = 'http://localhost:8080/tasks';

const form      = document.getElementById('taskForm');
const loading   = document.getElementById('loading');
const empty     = document.getElementById('empty');
const container = document.getElementById('tasksContainer');

let editingId = null;           // track karne ke liye kon-sa task edit ho raha hai

// Fetch all
async function fetchTasks() {
  showLoading(true);
  try {
    const res  = await fetch(API);
    const { data } = await res.json();
    renderTasks(data);
  } catch (err) {
    console.error(err);
    alert('Error loading tasks');
  } finally {
    showLoading(false);
  }
}

// Render list
function renderTasks(tasks) {
  container.innerHTML = '';
  if (!tasks.length) {
    empty.classList.remove('hidden');
    return;
  }
  empty.classList.add('hidden');
  tasks.forEach(task => {
    const card = document.createElement('div');
    card.className = 'task-card';
    card.dataset.id = task._id;
    card.innerHTML = `
      <span class="task-name">${task.taskName}</span>
      <div class="btn-group">
        <button class="edit-btn"   data-id="${task._id}">Edit</button>
        <button class="delete-btn" data-id="${task._id}">Delete</button>
      </div>
    `;
    container.appendChild(card);
  });
}

function showLoading(show) {
  loading.style.display = show ? 'block' : 'none';
}

// Add / Update task
form.addEventListener('submit', async e => {
  e.preventDefault();
  const name = form.taskName.value.trim();
  if (!name) return;

  try {
    if (editingId) {      // update mode
      await fetch(`${API}/${editingId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ taskName: name })
      });
      editingId = null;
      form.querySelector('button[type="submit"]').innerText = 'Add Task';
    } else {             // add mode
      await fetch(API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ taskName: name, isDone: false })
      });
    }
    form.reset();
    fetchTasks();
  } catch (err) {
    alert('Error saving task');
  }
});

// Edit / Delete
container.addEventListener('click', async e => {
  const id = e.target.dataset.id;
  if (!id) return;

  if (e.target.classList.contains('edit-btn')) {
    editingId = id;
    const text = e.target.parentElement.previousElementSibling.innerText;
    form.taskName.value = text;
    form.querySelector('button[type="submit"]').innerText = 'Update Task';
    form.taskName.focus();
  }

  if (e.target.classList.contains('delete-btn')) {
    await fetch(`${API}/${id}`, { method: 'DELETE' });
    if (editingId === id) {          // agar delete kiya ja raha edit mode mein
      editingId = null;
      form.reset();
      form.querySelector('button[type="submit"]').innerText = 'Add Task';
    }
    fetchTasks();
  }
});

// initial load
fetchTasks();