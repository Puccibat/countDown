import CountDown from './components/CountDown';
import Header from './components/Header';
import SetTimeLeft from './components/SetTimeLeft';

import { useAppContext } from './hooks/useAppContext';
import './style.css';

function App() {
  const { timer } = useAppContext();
  console.log(timer);
  return (
    <div className='App'>
      {!timer ? (
        <>
          <Header />
          <SetTimeLeft />
        </>
      ) : (
        <CountDown />
      )}
    </div>
  );
}

export default App;
