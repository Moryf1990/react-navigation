var React = require('react');
var Backbone = require('backbone');

module.exports = React.createClass({
	render: function() {
		var link=[];


		if(Parse.User.current() ){
			link.push(<li key="home"><a href="#">Home</a></li>),
			link.push(<li key="dashboard"><a href="#dashboard">Dashboard</a></li>),
			link.push(<li key="logout"><a href="#logout">Logout</a></li>)	
		}
		else {
			link.push(<li key="home"><a href="#">Home</a></li>),
			link.push(<li key="login"><a href="#login">Login</a></li>),
			link.push(<li key="register"><a href="#register">Register</a></li>)
		}
		return (
			<div className="nav-wrapper">
				<a href="#" className="brand-logo left">Login Example</a>
				<ul id="nav-mobile" className="right">
					{link}
				</ul>
			</div>
		);
	}
})