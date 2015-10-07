'use strict';
var React = require('react');
var Backbone = require('backbone');
window.$ = require('jquery');
window.jQuery = $;
var Backbone = require('backbone');
var _ = require('backbone/node_modules/underscore');
Parse.initialize('OAin30pjfN6VbrDGkSeEq7SZ1YCWGj6mlppw8cGS', 'XUehvIhPzP0B5E83CMBuxuYF6b31WyqGxYqA4BSx');

var NavigationComponent = require('./components/NavigationComponent');
var HomeComponent = require('./components/HomeComponent');
var DashboardComponent = require('./components/DashboardComponent');
var LoginComponent = require('./components/LoginComponent');
var RegisterComponent = require('./components/RegisterComponent');
var LogoutComponent=require('./components/LogoutComponent');

var app = document.getElementById('app');

var Router = Backbone.Router.extend({
	routes: {
		'': 'home',
		'dashboard': 'dashboard',
		'login': 'login',
		'register': 'register',
		'logout': 'logout'
	},
	home: function() {
		React.render(<HomeComponent />, app);
	},
	dashboard: function() {
		React.render(<DashboardComponent />, app);
	},
	login: function() {
		React.render(<LoginComponent router={r} />, app);
	},
	register: function() {
		React.render(<RegisterComponent router={r} />, app);
	},
	logout: function() {
		React.render(<LogoutComponent router />, app);
	}
});

var r = new Router();
Backbone.history.start();

React.render(
	<NavigationComponent router={r} />,
	document.getElementById('nav')
);




























