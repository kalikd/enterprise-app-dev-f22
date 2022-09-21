import logo from './logo.svg';
import './App.css';
import Counter from './Counter'
import ClickCounter from './ClickCounter';
/**
 * Example One (Render Props)
 */
// function MyComponent(props){
//   return (<h4>Hello {props.render('KD')}!</h4>)
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1> Render Props</h1>
//         <MyComponent render={(name)=>name} />
//       </header>
//     </div>
//   );
// }

function App(){
  return (<>
    <Counter>
   {(count,handleIncrementChange)=> <ClickCounter count={count} handleIncrementChange={handleIncrementChange} />}
    </Counter>
  </>)
}

export default App;
