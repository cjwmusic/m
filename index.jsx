require('./app/lib/common.css');

import React from "react";
import ReactDOM from "react-dom";

import Cate from './app/components/cate.jsx';

ReactDOM.render(
    <div>
        <Cate />
    </div>,
    document.querySelector("#myApp")
);
