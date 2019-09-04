import React from 'react';
import './App.css';
import Header from './Componente/Leyout/Header'
import Footer from './Componente/Leyout/Footer'
import SearchForm from './Componente/Form/DestinyForm/SearchForm'


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
