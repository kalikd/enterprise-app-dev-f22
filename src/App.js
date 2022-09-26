import logo from './logo.svg';
import './App.css';
import ComponentA from './ComponentA';
import {StudentProvider} from './StudentContext';
import { FacultyProvider } from './FacultyContext'

function App() {
  const user = {name:'Sanaullah', age:26, gender:'Male'}
  const name = 'Ali Ahmed'
  return (
    <div className="App">
      <StudentProvider value={user} >
        <FacultyProvider value={{name}}>
            <ComponentA/>
        </FacultyProvider>
      </StudentProvider>
      
    </div>
  );
}

export default App;
