'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import NewTaskModal from "@/componentes/newTaskModal/newTaskModal";
import DeleteTaskModal from '../deleteTaskModal/deleteTaskModal';
import './toDoList.scss'

export default function ToDoList() {
  
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    const savedItems = localStorage.getItem('items');
    if (savedItems) {
      setTodoItems(JSON.parse(savedItems));
    }
  }, []);
  
  useEffect(()=> {
    localStorage.setItem('items' , JSON.stringify(todoItems))
  },[todoItems])

  const addTodo = (item) => {
    setTodoItems((prevItems) => [...prevItems, item]);
  };

  const handleDelete = (id) => {
    setDeleteTaskModal(true);
    setTaskToDelete(id);
  };

  const deleteTodo = (id) => {
    const updatedItems = todoItems.filter(item => item.id !== id);
    setTodoItems(updatedItems);
    localStorage.setItem('items', JSON.stringify(updatedItems));
  };
  

  const toggleChecked = (id) => {

    const updatedItems = todoItems.map((item) => 
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setTodoItems(updatedItems);
  };

  const [newTaskModal , setNewTaskModal] = useState(false);
  const toggleNewTaskModal = () => {setNewTaskModal(!newTaskModal)};

  const [deleteTaskModal , setDeleteTaskModal] = useState(false);
  const toggleDeleteTaskModal = () => {setDeleteTaskModal(!deleteTaskModal)};

  const [taskToDelete, setTaskToDelete] = useState(null);

  return (
    <div className='todoContainer' >
        <div className='todoGroup'>
          <p className='groupTaskTitle'>Suas tarefas de hoje</p>
          <ul className='taskContainer'>
            {todoItems.filter((item) => !item.checked).map((item) => (
              <li key={item.id} className='taskGroup'>
                <label className='customCheckbox'>
                  <input 
                    type='checkbox'
                    checked={item.checked}
                    onChange={() => toggleChecked(item.id)}
                  />
                  <span></span>
                </label>
                <p className='taskText'>{item.text}</p>
                <button onClick={()=>{handleDelete(item.id); toggleDeleteTaskModal()}} className='trashButton'>
                  <Image
                    src="/images/trash.svg"
                    alt='excluir item'
                    width={24}
                    height={24}
                  />
                </button>
              </li>
            ))}
          </ul>
          <p className='groupTaskTitle groupTaskTitleDone'>Tarefas finalizadas</p>
          <ul className='taskContainer'>
            {todoItems.filter((item) => item.checked).map((item) => (
              <li key={item.id} className='taskGroup'>
                <label className='customCheckbox'>
                  <input 
                    type='checkbox'
                    checked={item.checked}
                    onChange={() => toggleChecked(item.id)}
                  />
                  <span></span>
                </label>                
                <p className='taskText taskTextDone'>{item.text}</p>
                <button onClick={()=>{handleDelete(item.id); toggleDeleteTaskModal()}} className='trashButton'>
                  <Image
                    src="/images/trash.svg"
                    alt='excluir item'
                    width={24}
                    height={24}
                  />
                </button>
              </li>
            ))}        
          </ul>
        </div>
        <button onClick={toggleNewTaskModal} className='buttonAddTask'>Adicionar nova tarefa</button>
        <NewTaskModal 
          isOpen={newTaskModal} 
          onClose={toggleNewTaskModal} 
          addTodo={addTodo}/>
        <DeleteTaskModal 
          isOpen={deleteTaskModal} 
          onClose={toggleDeleteTaskModal} 
          deleteTodo={deleteTodo}
          taskId={taskToDelete}
        />
    </div>  
  );
}
