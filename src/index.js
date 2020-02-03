import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id: 1, message: 'Hi, how are you?', likeCount: 54},
    {id: 2, message: 'How are you?', likeCount: 42},
    {id: 3, message: 'It\'s my first post!', likeCount: 98},
    {id: 4, message: 'Zaboosti', likeCount: 24}
];

let dialogs = [
    {id: 1, name: 'Andrey'},
    {id: 2, name: 'Martin'},
    {id: 3, name: 'Kylo Ren'},
    {id: 4, name: 'Renault Logan'},
    {id: 5, name: 'Another Person'},
    {id: 6, name: 'Inc'},
];

let messages = [
    {id: 1, message: 'Hello World!'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Kylo Ren'},
    {id: 4, message: 'Zaboosti'}
];

ReactDOM.render(<App posts={posts} messages={messages} dialogs={dialogs} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
