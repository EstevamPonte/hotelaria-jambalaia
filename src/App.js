import React from 'react';
import './App.css';
import Header from './Componente/Leyout/Header'
import Footer from './Componente/Leyout/Footer'
import FormDeProcura from './Componente/Form/FormDeProcura'

function App() {
    return (
        <div>
            <Header />
                <FormDeProcura/>
            <Footer />
        </div>
    );
}

export default App;
