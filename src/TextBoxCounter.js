import getCounterHOC from './CounterHOC'
function TextBoxCounter({increment,count}){
   
    return (<>
        <h3>I am TextboxCounter!</h3>
        <input type="text" name="counter"  onKeyDown={increment}/>
        <span>You pressed {count} times!</span>
    </>)
}

export default getCounterHOC(TextBoxCounter);