import React from "react";
class ClassBased extends React.Component{
    constructor(props){
        super(props);

        this.state={
            count:2,
        }
    }

    render(){
        return(
            <div>
                <h2>Name:{this.props.name}</h2>
                <h3>Location:{this.props.location}</h3>
                <h3>Count:{this.state.count}</h3>
                <button onClick={()=>{
                    this.setState({
                        count: this.state.count +1,
                    })
                }}>Increase Count</button>
            </div>
        )
    }

}
export default ClassBased;