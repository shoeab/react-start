/**
 * Created by shoeab on 9/7/16.
 */
import React from "react";

export class Home extends React.Component{
    constructor(props){
        super();
        this.state = {
            age: props.initialAge,
            status: 0,
            homeLink: "Changed Home"
        };
        setTimeout(()=>{
            this.setState({
               status: 1
            });
        }, 3000);
    }

    onMakeOlder(){
        this.setState({
            age: this.state.age + 3
        });
    }

    onChangeLink(){
        this.props.changeLink(this.state.homeLink);
    }

    handleSubmit(event) {
        event.preventDefault();
        alert('Hello')
    }

    render(){
        console.log(this.props);
        return(
          <div>
			<p>In a new Component!</p>
			<p>My name is {this.props.name} </p>
			<p>Hello, Now I am  {this.state.age} years old. and initial age is {this.props.initialAge} </p>
			<p>Status: {this.state.status} </p>

			<button className="btn btn-primary" onClick={() => this.onMakeOlder()} >Make me older!</button>
			{/*<button className="btn btn-primary" onClick={this.onMakeOlder.bind(this)} >Make me older!</button>*/}
			<hr/>
			<button onClick={this.props.greet} className="bt btn-primary">Greet</button>
			<hr/>
			<button onClick={this.onChangeLink.bind(this)} className="bt btn-primary">  Change Header Link</button>
          </div>
        );
    }
}

Home.propTypes = {
  name: React.PropTypes.string,
  initialAge: React.PropTypes.number,
    greet: React.PropTypes.func
};