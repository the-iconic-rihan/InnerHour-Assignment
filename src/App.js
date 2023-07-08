import './App.css';
import ListComparison from './components/ListComparison';
import PomodoroClock from './components/PomodoroClock';

function App() {
  return (
    <>
    <div className="mainBox">
    <ListComparison></ListComparison>
    <PomodoroClock workTime={25} breakTime={5} cycleLimit={3}/>
    </div>
    
    </>
  );
}

export default App;
