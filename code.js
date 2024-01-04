let book, pages, author;
const formElement = document.getElementById("myForm"),
      library = document.getElementById('library');

function handleSubmit(event) {
  event.preventDefault();

  book = formElement.elements["book"].value;
  pages = formElement.elements["pages"].value;
  author = formElement.elements["author"].value;
  ReadingStatus = document.getElementById('reading').textContent;
  var div = document.createElement('div');
  div.className = 'book';

  var titleDiv = document.createElement('div');
  titleDiv.className = 'title';
  titleDiv.textContent = book;

  var authorDiv = document.createElement('div');
  authorDiv.className = 'autherName';
  authorDiv.textContent = author;

  var pagesDiv = document.createElement('div');
  pagesDiv.className = 'totalPages';
  pagesDiv.textContent = pages;

  var statusButtonDiv = document.createElement('button');
  statusButtonDiv.type = 'button';
  statusButtonDiv.className = 'reading';
  statusButtonDiv.name = 'reading';
  statusButtonDiv.textContent = ReadingStatus;
  statusButtonDiv.onclick = cycleStatusDiv;

  var deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', function() {
    div.remove();
  });

  div.append(titleDiv, authorDiv, pagesDiv, statusButtonDiv, deleteButton);

  library.appendChild(div);
  formElement.reset();
}

var statusOptionsDiv = ['Not Started', 'Started', 'Read'];
var currentStatusIndexDiv = 0;

function cycleStatusDiv() {
  currentStatusIndexDiv = (currentStatusIndexDiv + 1) % statusOptionsDiv.length;
  this.textContent = statusOptionsDiv[currentStatusIndexDiv];
}

var statusButtonForm = document.getElementById('reading');
var statusOptionsForm = ['Not Started', 'Started', 'Read'];
var currentStatusIndexForm = 0;

function cycleStatusForm() {
  currentStatusIndexForm = (currentStatusIndexForm + 1) % statusOptionsForm.length;
  statusButtonForm.textContent = statusOptionsForm[currentStatusIndexForm];
}

document.getElementById("myForm").addEventListener("submit", handleSubmit);
statusButtonForm.addEventListener('click', cycleStatusForm);
