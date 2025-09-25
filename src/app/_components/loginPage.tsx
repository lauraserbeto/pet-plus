import React, { useState } from 'react';
import logo2Branco from '../../../public/logo2-branco.png'
import Image from 'next/image';

export interface LoginPageProps {
  setPage: (page: string) => void;
}

const LoginPage = ({ setPage }: LoginPageProps) => {
    const [authMode, setAuthMode] = useState('login'); // 'login' ou 'register'
    const [userType, setUserType] = useState('fornecedor'); // 'fornecedor' ou 'prestador'
    
    const inputClasses = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F58B05]";
    const labelClasses = "block text-sm font-medium text-gray-600 mb-1";

    return (
        <div className="min-h-screen bg-[#C4E9F2] bg-opacity-40 flex items-center justify-center p-4">
            <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden md:flex">
                 <div className="w-full md:w-1/2 p-8 md:p-12 text-white bg-[#3699D2] flex flex-col justify-center items-center text-center">
                    <div className="flex items-center mb-4">
                        <Image src={logo2Branco} alt="Logo Pet+" className="w-32 h-20" />
                    </div>
                    <h2 className="text-2xl font-semibold mt-6">Área de Parceiros</h2>
                    <p className="mt-2">Gerencie seus serviços, agendamentos e produtos em um só lugar. Impulsione seu negócio e conecte-se com mais tutores.</p>
                    <button onClick={() => setPage('home')} className="mt-8 border-2 border-white text-white font-bold py-2 px-6 rounded-full hover:bg-white hover:text-[#3699D2] transition-all duration-300">
                        Voltar à Página Inicial
                    </button>
                </div>
                
                <div className="w-full md:w-1/2 p-8 md:p-12">
                    {/* --- Seleção do tipo de usuário --- */}
                    <div className="flex justify-center mb-6">
                        <button onClick={() => setUserType('fornecedor')} className={`w-1/2 py-2 font-semibold rounded-l-lg transition-colors duration-300 ${userType === 'fornecedor' ? 'bg-[#3699D2] text-white' : 'bg-gray-200 text-gray-700'}`}>
                            Fornecedor (Loja)
                        </button>
                        <button onClick={() => setUserType('prestador')} className={`w-1/2 py-2 font-semibold rounded-r-lg transition-colors duration-300 ${userType === 'prestador' ? 'bg-[#3699D2] text-white' : 'bg-gray-200 text-gray-700'}`}>
                            Prestador de Serviço
                        </button>
                    </div>

                    <div className="flex justify-center mb-6">
                        <button onClick={() => setAuthMode('login')} className={`px-6 py-2 rounded-l-lg font-semibold ${authMode === 'login' ? 'bg-[#F58B05] text-white' : 'bg-gray-200 text-gray-700'}`}>
                            Login
                        </button>
                        <button onClick={() => setAuthMode('register')} className={`px-6 py-2 rounded-r-lg font-semibold ${authMode === 'register' ? 'bg-[#F58B05] text-white' : 'bg-gray-200 text-gray-700'}`}>
                            Cadastro
                        </button>
                    </div>
                    
                    {authMode === 'login' && (
                        <div className="animate-fade-in">
                            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Acessar sua conta</h2>
                            <form className="space-y-4">
                                {userType === 'fornecedor' ? (
                                <div>
                                    <label htmlFor="cnpj" className={labelClasses}>CNPJ</label>
                                    <input type="text" id="cnpj" placeholder="00.000.000/0001-00" className={inputClasses} />
                                </div>
                                ) : (
                                <div>
                                    <label htmlFor="email_login" className={labelClasses}>E-mail</label>
                                    <input type="email" id="email_login" placeholder="seuemail@exemplo.com" className={inputClasses} />
                                </div>
                                )}
                                <div>
                                    <label htmlFor="password" className={labelClasses}>Senha</label>
                                    <input type="password" id="password" placeholder="Digite sua senha" className={inputClasses} />
                                    <a href="#" className="text-sm text-right block mt-1 text-[#3699D2] hover:underline">Esqueceu sua senha?</a>
                                </div>
                                <button type="submit" className="w-full bg-[#F58B05] text-white font-bold py-3 px-4 rounded-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105">
                                    Acessar
                                </button>
                            </form>
                        </div>
                    )}

                    {/* --- Formulário de Cadastro Condicional --- */}
                    {authMode === 'register' && (
                        <div className="animate-fade-in">
                             <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                                {userType === 'fornecedor' ? 'Cadastre seu negócio' : 'Cadastre-se como prestador'}
                            </h2>
                            {userType === 'fornecedor' ? (
                                <form className="space-y-3">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div>
                                            <label htmlFor="razaoSocial" className={labelClasses}>Razão Social</label>
                                            <input type="text" id="razaoSocial" placeholder="Ex: Pet Shop Feliz LTDA" className={inputClasses} />
                                        </div>
                                        <div>
                                            <label htmlFor="nomeFantasia" className={labelClasses}>Nome Fantasia</label>
                                            <input type="text" id="nomeFantasia" placeholder="Ex: Patas & Pelos" className={inputClasses} />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="reg-cnpj" className={labelClasses}>CNPJ</label>
                                        <input type="text" id="reg-cnpj" className={inputClasses} />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className={labelClasses}>E-mail Comercial</label>
                                        <input type="email" id="email" className={inputClasses} />
                                    </div>
                                     <div>
                                        <label htmlFor="reg-password" className={labelClasses}>Senha</label>
                                        <input type="password" id="reg-password" className={inputClasses} />
                                    </div>
                                </form>
                            ) : (
                                 <form className="space-y-3">
                                    <div>
                                        <label htmlFor="fullName" className={labelClasses}>Nome Completo</label>
                                        <input type="text" id="fullName" placeholder="Digite seu nome completo" className={inputClasses} />
                                    </div>
                                     <div>
                                        <label htmlFor="cpf" className={labelClasses}>CPF</label>
                                        <input type="text" id="cpf" placeholder="000.000.000-00" className={inputClasses} />
                                    </div>
                                    <div>
                                        <label htmlFor="prestador-email" className={labelClasses}>E-mail</label>
                                        <input type="email" id="prestador-email" placeholder="seuemail@exemplo.com" className={inputClasses} />
                                    </div>
                                     <div>
                                        <label htmlFor="prestador-password" className={labelClasses}>Senha</label>
                                        <input type="password" id="prestador-password" className={inputClasses} />
                                    </div>
                                </form>
                            )}
                            <button type="submit" className="w-full bg-[#F58B05] text-white font-bold py-3 px-4 rounded-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 mt-4">
                                Finalizar Cadastro
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LoginPage;