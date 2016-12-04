import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Footer } from "./components/Footer";
import { Form } from "./components/Form";

class App extends React.Component{
	constructor(){
		super();
		this.state = {
			homeLink: "Home",
			footerText: "Copyright",
			formText: "Your form"
		};
	}

	onGreet(){
		alert("Hello");
	}

	onChangeLinkName(newName){
		this.setState({
			homeLink: newName
		});
	}

	handleChange(e) {
        let change = {};
        change[e.target.name] = e.target.value;
        this.setState(change);
    }

	handleSubmit(e) {
        e.preventDefault();
        var formData = this.state;
        var url = "http://127.0.0.1:3000/api/question-add"
        
        /*var jqxhr = $.post( url, formData, function() {
		  alert( "success" );
		})
		.done(function() {
		alert( "second success" );
		})
		.fail(function() {
		alert( "error" );
		})
		.always(function() {
		alert( "finished" );
		});*/
		console.log(formData)

		$.post( url, formData)
		  .done(function( data ) {
		    console.log( data );
		  })
		  .fail(function() {
			alert( "error" );
		  })
		  .always(function() {
			alert( "finished" );
		  });

        console.log(formData);
    }

	render(){

		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1">
						<Header homeLink={this.state.homeLink} />
					</div>
				</div>
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1">
						<Home
							name={"Shoeab"}
							initialAge={26}
							greet={this.onGreet}
							changeLink = {this.onChangeLinkName.bind(this)}
						/>

					<form onSubmit={ this.handleSubmit.bind(this)} encType='multipart/form-data'>
						<input name="title" label="Email" type="text" placeholder="Title" value={this.state.title} onChange={this.handleChange.bind(this)} />
	                    <input name="description" label="Password" type="text" placeholder="description" value={this.state.description} onChange={this.handleChange.bind(this)}/>
	                    <button type="submit" value="Login" >Login </button>
					</form>

					</div>
				</div>
				<div className="col-xs-10 col-xs-offset-1">
					<Footer footerText={[this.state.footerText]} />
				</div>
			</div>
		);
	}
}

render(<App/>, window.document.getElementById("app"));