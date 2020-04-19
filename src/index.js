import './styles.css';

import { Todo, TodoList } from './classes';
import { creaTodoHtml } from './js/componentes';


export const todoList = new TodoList();

//console.log(todoList.todos);

todoList.todos.forEach(todo => creaTodoHtml(todo));