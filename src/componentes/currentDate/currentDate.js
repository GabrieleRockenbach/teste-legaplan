import React from 'react';
import './currentDate.scss'

const CurrentDate = () => {
  const formatDate = (date) => {
    const daysOfWeek = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const months = [
      'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
      'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
    ];

    const dayOfWeek = daysOfWeek[date.getDay()];
    const dayOfMonth = date.getDate().toString().padStart(2, '0');
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${dayOfWeek}, ${dayOfMonth} de ${month} de ${year}`;
  };

  const currentDate = new Date();
  const formattedDate = formatDate(currentDate);

  return (
    <div className='headerDate'>
      {formattedDate}
    </div>
  );
};

export default CurrentDate;