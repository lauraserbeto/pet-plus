import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-50 text-gray-900 pt-20 pb-10">
            <div className="container mx-auto px-6 text-center">
                <p>&copy; {new Date().getFullYear()} Pet+. Todos os direitos reservados.</p>
                {/* <p className="text-sm text-gray-400 mt-2"></p> */}
            </div>
        </footer>
    );
};

export default Footer;