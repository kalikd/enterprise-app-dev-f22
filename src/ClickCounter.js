function ClickCounter(props){
    return (<>
    <button onClick={()=>props.handleIncrementChange()}>PLUS-{props.count}</button>
    </>)
}
export default ClickCounter;