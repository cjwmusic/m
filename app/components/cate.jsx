require('./cate.css');
require('isomorphic-fetch');

import React from 'react'

let Cate = React.createClass({

	getInitialState : function() {
		return {
			items : [],
		}
	},

	componentDidMount: function() {
		fetch("/api/chat").then(function(res) {
			if(res.ok) {
				//res.json() 读取Response对象, 并且将它设置为已读(因为Response对象设置为了Stream的方式, 所以他们只能被读取一次),
				//并且返回一个被解析为JSON格式的promise对象
				res.json().then(function (data) {
					if(this.isMounted()) {
						this.setState({
							items : data.data.result,
						});
					}
				}.bind(this));
			}
		}.bind(this), function (e) {
			console.log("Fetch failed", e);
		})
	},

	render : function () {
		return (
			<div>
				{
					this.state.items.map((item) => {

						return <div className="cate">
							<div className="topLine"></div>
							<div className="avatar">
								<img className="img" src={item.avatar}/>
							</div>

							<div className="title">{item.userName}</div>

							<div className="subTitle">
								{item.lastMessage}
							</div>

							<div className="time">{item.time}</div>
						</div>
					})
				}
			</div>
		)
	}

});

module.exports = Cate;
