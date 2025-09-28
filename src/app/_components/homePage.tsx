import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';
import appImg from '../../../public/Usuário.png'
import { faBone, faEnvelope, faHeartCirclePlus, faHome, faHotel, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import RatingCard from '../../../public/ui/RatingCard/ratingCard';
import FeaturesButton from '../../../public/ui/FeaturesButton/featuresButton';
import AppleStore from '../../../public/ui/AppleStore/applestore';
import PlayStore from '../../../public/ui/PlayStore/playstore';

interface HomePageProps {
  setPage: (page: string) => void;
}

const testimonials = [
    { id: 1, rating: 5, timestamp: '1 semana atrás', description: 'Serviço incrível! Meu cachorro nunca esteve tão feliz e bem cuidado. Recomendo a todos!', author: 'Ana Silva' },
    { id: 2, rating: 4, timestamp: '3 dias atrás', description: 'Ótimos produtos e entrega rápida. Apenas uma sugestão de melhoria na embalagem.', author: 'Carlos Pereira' },
    { id: 3, rating: 5, timestamp: '1 mês atrás', description: 'A equipe é super atenciosa e profissional. Viramos clientes fiéis com certeza.', author: 'Mariana Costa' },
    { id: 4, rating: 5, timestamp: '2 semanas atrás', description: 'O melhor banho e tosa da cidade! Meu pet voltou cheiroso e com o pelo super macio.', author: 'Juliana Lima' },
    { id: 5, rating: 4, timestamp: '5 dias atrás', description: 'Plataforma fácil de usar para encontrar fornecedores. Facilitou muito minha vida.', author: 'Ricardo Mendes' },
];

const HomePage = ({ setPage }: HomePageProps) => {
    return (
        <main>
            {/* Seção Hero */}
            <section className="bg-[#C4E9F2] bg-opacity-30 pt-20 pb-28">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-[#3699D2] mb-4 leading-tight">
                            Tudo que seu pet precisa em um só lugar!
                        </h1>
                        <p className="text-base sm:text-lg text-gray-700 mb-10">
                            Encontre serviços, produtos e os melhores cuidados para o seu melhor amigo. Conectamos você aos melhores fornecedores da sua região de forma rápida e segura.
                        </p>
                        <div className='flex flex-row gap-4 sm:gap-8 justify-center'>
                            <FeaturesButton icon={faHeartCirclePlus} iconColor='#fff' iconSize={26} />
                            <FeaturesButton icon={faHome} iconColor='#fff' iconSize={26} />
                            <FeaturesButton icon={faShoppingBag} iconColor='#fff' iconSize={26} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Seção "O que é o Pet+?" */}
            <section id="sobre" className="bg-[#f3961d] py-20">
                <div className="container mx-auto px-6 text-center">
                    {/* AJUSTE 4: Tipografia responsiva */}
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">O que é o Pet+?</h2>
                    <p className="max-w-3xl mx-auto text-base sm:text-lg text-white">
                        O Pet+ é um ecossistema digital criado para simplificar a vida dos tutores de animais de estimação. Nossa plataforma centraliza a busca por serviços como banho e tosa, consultas veterinárias e hotelaria, além de permitir a compra de produtos. Para os fornecedores, oferecemos uma ferramenta poderosa para gerenciar seus negócios e alcançar mais clientes.
                    </p>
                </div>
            </section>

            {/* Seção Depoimentos */}
            <section id="depoimentos" className="bg-gray-50 py-20">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">O que nossos clientes dizem</h2>
                    <p className="max-w-2xl mx-auto text-gray-600 mb-12">
                        A satisfação de quem confia em nossa plataforma é o nosso maior orgulho.
                    </p>
                </div>
                
                <div className="container mx-auto px-6 ">
                    <Carousel opts={{ align: "start", loop: true }} className="w-full max-w-6xl mx-auto">
                        <CarouselContent className="-ml-2">
                            {testimonials.map((testimonial) => (
                                <CarouselItem key={testimonial.id} className="pl-2 basis-full sm:basis-1/2 lg:basis-1/3">
                                    <div className="p-1 h-full">
                                        <RatingCard {...testimonial} />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden sm:flex -left-12" />
                        <CarouselNext className="hidden sm:flex -right-12" />
                    </Carousel>
                </div>
            </section>

            {/* Seção Download */}
            <section id="download-app" className="bg-[#C4E9F2] bg-opacity-30 py-20">
                <div className="container mx-auto px-6">
                    <div className="md:flex items-center">
                        <div className="md:w-1/2 text-center mb-10 md:mb-0 md:ml-20">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3699D2] mb-4">
                                Leve o Pet+ com você!
                            </h2>
                            <p className="text-base sm:text-lg text-gray-700 mb-8">
                                Baixe nosso aplicativo e tenha acesso a todos os recursos na palma da sua mão. Disponível para iOS e Android.
                            </p>
                            <div className="flex flex-col sm:flex-col justify-center  gap-4">
                                <AppleStore />
                                <PlayStore />
                            </div>
                        </div>
                        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
                            <Image src={appImg} alt="Tela do aplicativo Pet+" className="rounded-3xl shadow-2xl w-48 sm:w-auto max-w-xs transform transition-transform duration-500 hover:-rotate-3 hover:scale-105" quality={100} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Seção Contato */}
            <section id="contato" className="bg-gray-50 py-20">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Fale Conosco</h2>
                    <p className="text-gray-800 font-semibold mb-8">Tem alguma dúvida ou sugestão? Adoraríamos ouvir você!</p>
                    <div className='bg-[#3699D2] inline-block hover:bg-blue-500 transition-all duration-300 rounded-full py-3 px-6 sm:px-8'>
                        <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 sm:w-6 sm:h-6 text-white mr-2" />
                        <a href="mailto:contato@petplus.com" className="text-base sm:text-lg text-white font-bold rounded-full">
                            contato@petplus.com
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default HomePage;