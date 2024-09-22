'use client';

import React from 'react'
import './deleteTaskModal.scss'

export default function DeleteTaskModal({isOpen , onClose, deleteTodo, taskId}) {

  const closeModalOnOverlay = (e) =>{
    if(e.target === e.currentTarget){
        onClose();
    }
  } 
  if(!isOpen) return null

  const handleDelete = () => {
    deleteTodo(taskId);
    onClose();
  }

  return (
    <div onClick={closeModalOnOverlay} className='modalOverlay'>
      <div className='modalContainer'>
        <p className='modalTitle'>Deletar tarefa</p>
        <p className='modalMessage'>Tem certeza que você deseja deletar esta tarefa?</p>
        <div className='buttonModalContainer'>
            <button onClick={onClose} className='buttonModal buttonModalCancel'>Cancelar</button>
            <button onClick={handleDelete} className='buttonModal buttonModalDelete'>Deletar</button>
        </div>    
      </div>
    </div>
  )
}
