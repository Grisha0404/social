import React from 'react';
import {addMessage, addPosts, RootStateType, updateNewPostText} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";

export const rerenderTree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPosts={addPosts} addMessage={addMessage} updateNewPostText={updateNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

