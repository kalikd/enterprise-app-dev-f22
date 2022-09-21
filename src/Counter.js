import { useState } from 'react'
function Counter(props){
    const [count,setCount] = useState(0)
    function handleIncrementChange(){
        setCount(count+5)
    }
    return (<>
        {props.children(count,handleIncrementChange)}
    </>)
}
export default Counter;