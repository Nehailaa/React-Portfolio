import React, { useState } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Home from './pages/Home';
import About from './pages/AboutMe';
import Projects from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/ContactUs';

export default function CurrentPortfolio() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        switch (currentPage) {
            case 'Home':
                return <Home />;
            case 'About':
                return <About />;
            case 'Projects':
                return <Projects />;
            case 'Contact':
                return <Contact />;
            case 'Resume':
                return <Resume />;
            default:
                console.log('default switch case has been provoked!');
        }

    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
}
