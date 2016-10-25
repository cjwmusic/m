require('./banner.css');

import React from 'react';

var banner = React.createClass({
	
	getInitialState : function () {
		return {
			liked : false,
		}
	},

	handleClick : function(e) {
		console.log(e[0].tagName);
		this.setState({ liked : !this.state.liked});	
	},

	render : function() {
		const text = this.state.liked ? 'like' : 'haven\'t liked';

		return (
			<div className="banner">
				<p className="btn" onClick={this.handleClick.bind(this)}>
					You {text} this click to toggle.
				</p>		
			</div>
		)
	}
});


module.exports = banner;

