import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';
import appImg from '../../../public/Usuário.png'
import { faEnvelope, faInbox } from '@fortawesome/free-solid-svg-icons';


interface HomePageProps {
  setPage: (page: string) => void;
}

const HomePage = ({ setPage }: HomePageProps) => {
    return (
        <main>
            <section className="bg-[#C4E9F2] bg-opacity-30 py-20">
                <div className="container mx-auto px-6 text-center">
                    <div className="md:flex md:items-center md:text-left px-15">
                        <div className="md:w-1/2">
                            <h1 className="text-4xl md:text-5xl font-extrabold text-[#3699D2] mb-4 leading-tight">
                                Tudo que seu pet precisa <br/> em um só lugar!
                            </h1>
                            <p className="text-lg text-gray-700 mb-8">
                                Encontre serviços, produtos e os melhores cuidados para o seu melhor amigo. Conectamos você aos melhores fornecedores da sua região de forma rápida e segura.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                               <button className="bg-[#F58B05] text-white font-bold py-3 px-6 rounded-full text-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                                    <FontAwesomeIcon icon={faApple} className="w-6 h-6" /> Baixar na App Store
                                </button>
                                <button className="bg-gray-800 text-white font-bold py-3 px-6 rounded-full text-lg hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                                    <FontAwesomeIcon icon={faGooglePlay} className="w-6 h-6" /> Disponível no Google Play
                                </button>
                            </div>
                        </div>
                        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
                            <Image src={appImg} alt="Tela do aplicativo Pet+" className="rounded-3xl shadow-2xl max-w-xs transform transition-transform duration-500 hover:rotate-3 hover:scale-105" quality={100} priority />
                            
                        </div>
                    </div>
                </div>
            </section>
            <section id="sobre" className="bg-[#F58B05] py-20">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-white-50 mb-4">O que é o Pet+?</h2>
                    <p className="max-w-3xl mx-auto text-white-50 text-lg">
                        O Pet+ é um ecossistema digital criado para simplificar a vida dos tutores de animais de estimação. Nossa plataforma centraliza a busca por serviços como banho e tosa, consultas veterinárias e hotelaria, além de permitir a compra de produtos. Para os fornecedores, oferecemos uma ferramenta poderosa para gerenciar seus negócios e alcançar mais clientes.
                    </p>
                </div>
            </section>
            <section id="contato" className="bg-gray-50 py-20">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Fale Conosco</h2>
                    <p className="text-gray-600 mb-8">Tem alguma dúvida ou sugestão? Adoraríamos ouvir você!</p>
                    <div className='bg-[#3699D2] inline-block hover:bg-blue-700 transition-all duration-300 p-4 rounded-full py-3 px-8'>
                        <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6 text-white mr-2" />
                        <a href="mailto:contato@petplus.com" className=" text-white font-bold  rounded-full text-lg ">
                        contato@petplus.com
                    </a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default HomePage;