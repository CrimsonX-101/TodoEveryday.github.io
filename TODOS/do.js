const addform = document.querySelector('.add');

const list = document.querySelector('.todos');

const search = document.querySelector('.search input');

const TemplateGenerator = (todo) => {
 
  const html = `
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <span>${todo}</span>
                  <i class="fas fa-trash-alt delete"></i>            
                 </li>
              `;
                
  list.innerHTML += html;
};

addform.addEventListener('submit', e => {
  
  e.preventDefault();

  const todo = addform.add.value.trim();
//console.log(todo);

if(todo.length){          
  TemplateGenerator(todo); // if the length of todo is zero then it wont dsplay.
  addform.reset();
}

//TemplateGenerator(todo);

});

//Delete Todos

list.addEventListener('click', e => {
  
  if(e.target.classList.contains('delete')){
     e.target.parentElement.remove();
  }

});

//key event stage 2
const filterTodos = (term) => {

Array.from(list.children)
.filter((todo) => !todo.textContent.toLowerCase().includes(term))
.forEach((todo) => todo.classList.add('filtered'));

Array.from(list.children)
.filter((todo) => todo.textContent.includes(term))
.forEach((todo) => todo.classList.remove('filtered'));
};


//keyevent 1
search.addEventListener('keyup', () => {
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});