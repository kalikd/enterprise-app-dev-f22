import getCounterHOC from './CounterHOC'
function HoverCounter({increment, count}){
   
    return (<>
        <span onMouseEnter={increment}>You hovered me {count} times!</span>
    </>)
}

export default getCounterHOC(HoverCounter);