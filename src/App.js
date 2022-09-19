import logo from './logo.svg';
import './App.css';
import ClickCounter from './ClickCounter'
import TextBoxCounter from './TextBoxCounter'
import HoverCounter from './HoverCounter'

function App(){
  return (<>
      <ClickCounter name="KD" />
      <TextBoxCounter />
      <HoverCounter />
  </>)
}

export default App;



