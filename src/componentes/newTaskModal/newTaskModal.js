'use client';

import React, { useState , useEffect } from 'react'
import './newTaskModal.scss'

export default function NewTaskModal({isOpen , onClose , addTodo}) {

  const closeModalOnOverlay = (e) =>{
    if(e.target === e.currentTarget){
        onClose();
    }
  } 
  if(!isOpen) return null

  const [inputText , setInputText] = useState('');
  const handleInputTextChange = (e) => {
    setInputText(e.target.value);
  }

  const [items, setItems] = useState([]);

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem('items')) || [];
    setItems(savedItems);
  }, []);

  const addTask = () => {
    if (inputText.trim() === '') {
      onClose();
      return;
    }

    const existingIds = items.map(item => item.id);
    const newId = existingIds.length > 0 ? Math.max(...existingIds) + 1 : 1;
    const newTask = {
      id: newId,
      text: inputText,
      checked: false
    };
    const updatedItems = [...items, newTask];
    
    localStorage.setItem('items', JSON.stringify(updatedItems));
    addTodo(newTask);
    onClose();
  };
  return (
    <div onClick={closeModalOnOverlay} className='modalNewTaskOverlay'>
      <div className='modalNewTaskContainer'>
        <p className='modalNewTaskTitle'>Nova tarefa</p>
        <div className='modalNewTaskInputContainer'>
          <label for="taskText">Título</label>
          <input type='text' placeholder='Digite' id='taskText' value={inputText} onChange={handleInputTextChange}></input>
        </div>
        <div className='buttonModalNewTaskContainer'>
            <button onClick={onClose} className='buttonModalNewTask buttonModalNewTaskCancel'>Cancelar</button>
            <button onClick={() => addTask(items)} className='buttonModalNewTask buttonModalNewTaskAdd'>Adicionar</button>
        </div>    
      </div>
    </div>
  )
}
