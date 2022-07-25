import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios'

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json' 
axios.interceptors.request.use(request=>{
    // edit request config 
    // if we dont return then we blocking request from entire app
    console.log(request);
    return request;
},error=>{
    console.log(error);
    return Promise.reject(error)
})

axios.interceptors.response.use(response=>{
    // edit request config 
    // if we dont return then we blocking request from entire app
    console.log(response);
    return response;
},error=>{
    console.log(error);
    return Promise.reject(error)
})

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
