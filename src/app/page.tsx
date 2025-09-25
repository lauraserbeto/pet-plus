"use client";
import React, { useState } from 'react';
import HomePage from './_components/homePage';
import LoginPage from './_components/loginPage';
import Header from './_components/header';
import Footer from './_components/footer';


// --- Componente Principal da Aplicação ---
export default function App() {
    const [page, setPage] = useState('home'); // Controla qual página é exibida: 'home' ou 'login'
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Controla o menu mobile

    const renderPage = () => {
        switch (page) {
            case 'home':
                return <HomePage setPage={setPage} />;
            case 'login':
                return <LoginPage setPage={setPage} />;
            default:
                return <HomePage setPage={setPage} />;
        }
    };

    return (
        <div className="font-sans">
            {page === 'home' && <Header setPage={setPage} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>}
            
            {renderPage()}
            
            {page === 'home' && <Footer />}
        </div>
    );
}