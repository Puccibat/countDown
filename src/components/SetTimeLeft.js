import React, { useState } from 'react';
import { useAppContext } from '../hooks/useAppContext';

const SetTimeLeft = () => {
  const { dispatch } = useAppContext();
  const [timerTitle, setTimerTitle] = useState('');
  const [timerTime, setTimerTime] = useState('');
  const [timerDate, setTimerDate] = useState('');

  const handleChangeTitle = (e) => {
    setTimerTitle(e.target.value);
  };

  const handleChangeTime = (e) => {
    setTimerTime(e.target.value);
  };

  const handleChangeDate = (e) => {
    setTimerDate(e.target.value);
  };

  const handleClickValidate = () => {
    dispatch({
      type: 'SET_TIMER',
      payload: { time: timerTime, date: timerDate, title: timerTitle },
    });
  };

  return (
    <>
      <div className='setTitle'>
        <h1>Set your timer's title</h1>
        <input type='text' value={timerTitle} onChange={handleChangeTitle} />
      </div>
      <div className='setTimer'>
        <h1>Set your timer</h1>
        <input type='date' value={timerDate} onChange={handleChangeDate} />{' '}
        <input type='time' value={timerTime} onChange={handleChangeTime} />
      </div>
      <div className='valid-btn'>
        <button onClick={handleClickValidate}>GO !!!</button>
      </div>
    </>
  );
};

export default SetTimeLeft;
