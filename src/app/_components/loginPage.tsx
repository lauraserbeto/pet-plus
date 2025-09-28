import React, { useState } from 'react';
import logo2Branco from '../../../public/logo2-branco.png';
import Image from 'next/image';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import ButtonSecondary from '../../../public/ui/ButtonSecondary/buttonSecondary';

export interface LoginPageProps {
  setPage: (page: string) => void;
}

const LoginPage = ({ setPage }: LoginPageProps) => {
    const [authMode, setAuthMode] = useState('login');
    const [userType, setUserType] = useState('fornecedor');

    // State for Login
    const [documento, setDocumento] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [loading, setLoading] = useState(false);

    // State for Registration
    const [regLoading, setRegLoading] = useState(false);
    const [fornecedorData, setFornecedorData] = useState({
        razaoSocial: '',
        nomeFantasia: '',
        cnpj: '',
        email: '',
        senha: ''
    });
    const [prestadorData, setPrestadorData] = useState({
        nome: '',
        cpf: '',
        email: '',
        senha: ''
    });


    const inputClasses = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F58B05]";
    const labelClasses = "block text-sm font-medium text-gray-600 mb-1";

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('http://localhost:3001/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    documento: userType === 'fornecedor' ? documento : '',
                    email: userType === 'prestador' ? email : '',
                    senha,
                }),
            });

            if (response.status === 401) {
                alert('Login inválido! Verifique suas credenciais.');
            } else if (response.ok) {
                alert('Login realizado com sucesso!');
                setPage('home');
            } else {
                alert('Ocorreu um erro no login. Tente novamente.');
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            alert('Não foi possível conectar ao servidor.');
        } finally {
            setLoading(false);
        }
    };

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setRegLoading(true);

        let payload;

        if (userType === 'fornecedor') {
            payload = {
                tipo: 'fornecedor',
                nome: fornecedorData.razaoSocial,
                documento: fornecedorData.cnpj,
                email: fornecedorData.email,
                senha: fornecedorData.senha,
            };
        } else {
            payload = {
                tipo: 'prestador',
                nome: prestadorData.nome,
                documento: prestadorData.cpf,
                email: prestadorData.email,
                senha: prestadorData.senha,
            };
        }

        try {
            const response = await fetch('http://localhost:3001/cadastro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                alert('Cadastrado com sucesso!');
                setAuthMode('login'); // Switch to login view
                // Optionally clear registration forms
                setFornecedorData({ razaoSocial: '', nomeFantasia: '', cnpj: '', email: '', senha: '' });
                setPrestadorData({ nome: '', cpf: '', email: '', senha: '' });
            } else {
                const errorData = await response.json();
                alert(`Erro no cadastro: ${errorData.message || 'Por favor, tente novamente.'}`);
            }
        } catch (error) {
            console.error('Erro ao cadastrar:', error);
            alert('Não foi possível conectar ao servidor para realizar o cadastro.');
        } finally {
            setRegLoading(false);
        }
    };


    return (
        <div className="min-h-screen bg-[#C4E9F2] bg-opacity-40 flex items-center justify-center p-4">
            <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden md:flex">
                {/* Lado esquerdo */}
                <div className="w-full md:w-1/2 p-8 md:p-12 text-white bg-[#3699D2] flex flex-col justify-center items-center text-center">
                    <div className="flex items-center mb-4">
                        <Image src={logo2Branco} alt="Logo Pet+" className="w-32 h-20" />
                    </div>
                    <h2 className="text-2xl font-semibold mt-6">Área de Parceiros</h2>
                    <p className="mt-2">Gerencie seus serviços, agendamentos e produtos em um só lugar. Impulsione seu negócio e conecte-se com mais tutores.</p>
                    <div className='mt-5'>
                        <ButtonSecondary onClick={() => setPage("home")} icon={faHome}>Voltar à Página Inicial</ButtonSecondary>
                    </div>
                </div>

                {/* Lado direito */}
                <div className="w-full md:w-1/2 p-8 md:p-12">
                    {/* Tipo de usuário */}
                    <div className="flex justify-center mb-6">
                        <button onClick={() => setUserType('fornecedor')} className={`w-1/2 py-2 font-semibold rounded-l-lg transition-colors duration-300 ${userType === 'fornecedor' ? 'bg-[#3699D2] text-white' : 'bg-gray-200 text-gray-700'}`}>
                            Fornecedor (Loja)
                        </button>
                        <button onClick={() => setUserType('prestador')} className={`w-1/2 py-2 font-semibold rounded-r-lg transition-colors duration-300 ${userType === 'prestador' ? 'bg-[#3699D2] text-white' : 'bg-gray-200 text-gray-700'}`}>
                            Prestador de Serviço
                        </button>
                    </div>

                    {/* Modo login/cadastro */}
                    <div className="flex justify-center mb-6">
                        <button onClick={() => setAuthMode('login')} className={`px-6 py-2 rounded-l-lg font-semibold ${authMode === 'login' ? 'bg-[#F58B05] text-white' : 'bg-gray-200 text-gray-700'}`}>
                            Login
                        </button>
                        <button onClick={() => setAuthMode('register')} className={`px-6 py-2 rounded-r-lg font-semibold ${authMode === 'register' ? 'bg-[#F58B05] text-white' : 'bg-gray-200 text-gray-700'}`}>
                            Cadastro
                        </button>
                    </div>

                    {/* LOGIN */}
                    {authMode === 'login' && (
                        <div className="animate-fade-in">
                            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Acessar sua conta</h2>
                            <form className="space-y-4" onSubmit={handleLogin}>
                                {userType === 'fornecedor' ? (
                                <div>
                                    <label htmlFor="cnpj" className={labelClasses}>CNPJ</label>
                                    <input type="text" id="cnpj" placeholder="00.000.000/0001-00" className={inputClasses} value={documento} onChange={e => setDocumento(e.target.value)} />
                                </div>
                                ) : (
                                <div>
                                    <label htmlFor="email_login" className={labelClasses}>E-mail</label>
                                    <input type="email" id="email_login" placeholder="seuemail@exemplo.com" className={inputClasses} value={email} onChange={e => setEmail(e.target.value)} />
                                </div>
                                )}
                                <div>
                                    <label htmlFor="password" className={labelClasses}>Senha</label>
                                    <input type="password" id="password" placeholder="Digite sua senha" className={inputClasses} value={senha} onChange={e => setSenha(e.target.value)} />
                                    <a href="#" className="text-sm text-right block mt-1 text-[#3699D2] hover:underline">Esqueceu sua senha?</a>
                                </div>
                                <button type="submit" disabled={loading} className="w-full bg-[#F58B05] text-white font-bold py-3 px-4 rounded-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:scale-100">
                                    {loading ? 'Acessando...' : 'Acessar'}
                                </button>
                            </form>
                        </div>
                    )}

                    {/* CADASTRO */}
                    {authMode === 'register' && (
                        <div className="animate-fade-in">
                            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                                {userType === 'fornecedor' ? 'Cadastre seu negócio' : 'Cadastre-se como prestador'}
                            </h2>
                            {userType === 'fornecedor' ? (
                                <form className="space-y-3" onSubmit={handleRegister}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div>
                                            <label htmlFor="razaoSocial" className={labelClasses}>Razão Social</label>
                                            <input type="text" id="razaoSocial" placeholder="Ex: Pet Shop Feliz LTDA" className={inputClasses} value={fornecedorData.razaoSocial} onChange={e => setFornecedorData({...fornecedorData, razaoSocial: e.target.value})} />
                                        </div>
                                        <div>
                                            <label htmlFor="nomeFantasia" className={labelClasses}>Nome Fantasia</label>
                                            <input type="text" id="nomeFantasia" placeholder="Ex: Patas & Pelos" className={inputClasses} value={fornecedorData.nomeFantasia} onChange={e => setFornecedorData({...fornecedorData, nomeFantasia: e.target.value})} />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="reg-cnpj" className={labelClasses}>CNPJ</label>
                                        <input type="text" id="reg-cnpj" className={inputClasses} value={fornecedorData.cnpj} onChange={e => setFornecedorData({...fornecedorData, cnpj: e.target.value})} />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className={labelClasses}>E-mail Comercial</label>
                                        <input type="email" id="email" className={inputClasses} value={fornecedorData.email} onChange={e => setFornecedorData({...fornecedorData, email: e.target.value})} />
                                    </div>
                                    <div>
                                        <label htmlFor="reg-password" className={labelClasses}>Senha</label>
                                        <input type="password" id="reg-password" className={inputClasses} value={fornecedorData.senha} onChange={e => setFornecedorData({...fornecedorData, senha: e.target.value})} />
                                    </div>
                                    <button type="submit" disabled={regLoading} className="w-full bg-[#F58B05] text-white font-bold py-3 px-4 rounded-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 mt-4 disabled:opacity-50 disabled:scale-100">
                                        {regLoading ? 'Cadastrando...' : 'Finalizar Cadastro'}
                                    </button>
                                </form>
                            ) : (
                                <form className="space-y-3" onSubmit={handleRegister}>
                                    <div>
                                        <label htmlFor="fullName" className={labelClasses}>Nome Completo</label>
                                        <input type="text" id="fullName" placeholder="Digite seu nome completo" className={inputClasses} value={prestadorData.nome} onChange={e => setPrestadorData({...prestadorData, nome: e.target.value})} />
                                    </div>
                                    <div>
                                        <label htmlFor="cpf" className={labelClasses}>CPF</label>
                                        <input type="text" id="cpf" placeholder="000.000.000-00" className={inputClasses} value={prestadorData.cpf} onChange={e => setPrestadorData({...prestadorData, cpf: e.target.value})} />
                                    </div>
                                    <div>
                                        <label htmlFor="prestador-email" className={labelClasses}>E-mail</label>
                                        <input type="email" id="prestador-email" placeholder="seuemail@exemplo.com" className={inputClasses} value={prestadorData.email} onChange={e => setPrestadorData({...prestadorData, email: e.target.value})} />
                                    </div>
                                    <div>
                                        <label htmlFor="prestador-password" className={labelClasses}>Senha</label>
                                        <input type="password" id="prestador-password" className={inputClasses} value={prestadorData.senha} onChange={e => setPrestadorData({...prestadorData, senha: e.target.value})} />
                                    </div>
                                    <button type="submit" disabled={regLoading} className="w-full bg-[#F58B05] text-white font-bold py-3 px-4 rounded-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 mt-4 disabled:opacity-50 disabled:scale-100">
                                        {regLoading ? 'Cadastrando...' : 'Finalizar Cadastro'}
                                    </button>
                                </form>
                            )}
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default LoginPage;

