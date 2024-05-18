import './App.css';
import Tabs from '../Tabs/Tabs';

function App() {
  const tabs = [
    { label: 'Tab 1', content: 'This is the content of Tab 1.'},
    { label: 'Tab 2', content: 'This is the content of Tab 2.'},
    { label: 'Tab 3', content: 'This is the content of Tab 3.' }
  ];

  return (
    <div className='App'>
      <Tabs tabs={tabs} />
    </div>
  ) 
}

export default App;
