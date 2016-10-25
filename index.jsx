require('./app/lib/common.css');

import React from "react";
import ReactDOM from "react-dom";

import Cate from './app/components/cate.jsx';
import Banner from './app/components/banner.jsx';

import { createStore } from 'redux';

const defaultState = 0;
const reducer = (state = defaultState, action) => {
	switch(action.type) {
		case 'ADD' :
			return state + action.payload;
		default :
			return state;
	}
};

const store = createStore(reducer);

//设置store的监听函数，只要state改变，便会回调
var listener = function() {
	console.log('state 改变了');
};


//subscribe方法返回一个函数，调用这个函数就可以解除监听
let unsubscribe = store.subscribe(listener);

store.dispatch({
	type : 'ADD',
	payload : 2
});

console.log('state is ' + store.getState());

//接触监听
unsubscribe();

store.dispatch({
	type : 'ADD',
	payload : 4
})

console.log('state is ' + store.getState());

ReactDOM.render(
    <div>
        <Cate />
		<Banner />
    </div>,
    document.querySelector("#myApp")
);
