import React from 'react';
import './App.css';
import Header from './Componente/Leyout/Header'
import Footer from './Componente/Leyout/Footer'
import SearchForm from './Componente/Form/DestinyForm/SearchForm'
import Home from './Componente/Screens/Home'

function App() {
    return (
        <div>
            <Header />
                <SearchForm/>
            <Footer />
        </div>
    );
}

export default App;
