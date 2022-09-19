import getCounterHOC from './CounterHOC'
function ClickCounter(props){
    return (<>
        <h1>Hello, {props.name}</h1>
        <h3 onClick={props.increment}>Click Me!</h3>
        <span>You clicked me {props.count} times!</span>

    </>)
}

export default getCounterHOC(ClickCounter);