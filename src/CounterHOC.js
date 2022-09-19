import {Component} from 'react'
function getCounterHOC(WrappedComponent){
    class newComponent extends Component{
        constructor(props){
            super(props)

            this.state = {count:0}
            this.increment = this.increment.bind(this)
        }

        increment(){
            this.setState(state =>  ({count:state.count+1}))
        }
        render(){
            return (<>
                    <WrappedComponent increment={this.increment} count={this.state.count} {...this.props} />
                </>)
        }
        
    }

    return newComponent

}

export default getCounterHOC