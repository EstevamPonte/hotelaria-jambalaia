import React from 'react';
import './App.css';
import Header from './components/Leyout/Header'
import Footer from './components/Leyout/Footer'
import Routes from "./commons/Routes"


function App() {
    return (
        <div>
            <Header />
            <Routes />
            <Footer />
        </div>
    );
}

export default App;
