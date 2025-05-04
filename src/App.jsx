import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Music from './components/Music/Music';
import Events from './components/Events/Events';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <div>
            <Header />
            <Navbar />
            <About />
            <Music />
            <Events />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;