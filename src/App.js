import { useState } from 'react';
import CountDown from './components/CountDown';
import Header from './components/Header';
import SetTimeLeft from './components/SetTimeLeft';
import SetTitle from './components/SetTitle';
import ValidateTimerButton from './components/ValidateTimerButton';
import './style.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <SetTitle />
      <SetTimeLeft />
      <ValidateTimerButton />
      {/* <CountDown /> */}
    </div>
  );
}

export default App;
