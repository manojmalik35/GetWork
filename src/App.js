import './components/circle.css';
import './App.css';
import React from 'react';
import Menu from './components/Menu';
import Content from './components/Content';

function App() {
    return (
        <div className="app" >
            <Menu></Menu>
            <Content></Content>
        </div>
    );
}

export default App;