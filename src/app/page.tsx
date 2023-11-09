'use client'

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"

import Image from "next/image"


import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';


import Predios from "@/img/predios.jpg"

import Youtube from "@/img/Icon_YouTube.png"
import Insta from "@/img/Icon_Instagram.png"
import Linkedin from "@/img/Icon_Linkedin.png"
import Spotify from "@/img/Icon_Spotify.png"
import Bhanc from "@/img/Icon_Behancxe.png"

import Logo from "@/img/logo.svg"
import ABE from "@/img/ABE-Selo.png"
import Abre from "@/img/Logo_ABRE.png"
import CCB from "@/img/LogoCCB2.png"
import Concorrencia from "@/img/concorrencia.png"
import Divisor from "@/img/footerDivisor.svg"
import Red from "@/img/red-bg.svg"
import About from "@/img/about-us.png"
import Contact_us from "@/img/contact-us.png"
import Co_criation from "@/img/co-criation.png"
import Be_oppen from "@/img/be-open.png"
import All_logos from "@/img/all-logos.svg"
import Impacto_positivo from "@/img/impacto-positivo.png"
import High_tech from "@/img/high-tech.png"
import High_touch from "@/img/high-touch.png"
import Consultoria from "@/img/consultoria.png"

export default function Home() {

  const [MenuOpen, setMenuOpen] = useState(false)

  const handleNav = () => {
    setMenuOpen(!MenuOpen);
  }

  return (
    <div className="">
      <div className="">
        <header className="z-[100] fixed w-full h-24 bg-white mv:bg-white/[0.2] mv:backdrop-blur-sm"> {/* w-screen bg-white/[0.2] backdrop-blur-sm fixed top-0 z-0  */}
          <nav className=" flex justify-between items-center h-full w-full max-w-[88rem] mx-auto px-4 2xl:px-24"> {/* flex max-w-[89rem] mx-auto items-center font-sans py-6 justify-between */}
            <Image
              src={Logo}
              width={200}
              height={200}
              alt="Imagem Logo"
            />
            <div className="hidden mv:flex">
              <ul className="hidden mv:flex">
                <li className="ml-6 uppercase hover:border-b text-sm">Manifesto</li>
                <li className="ml-6 uppercase hover:border-b text-sm">Fale Conosco</li>
                <li className="ml-6 uppercase hover:border-b text-sm">Projetos</li>
                <li className="ml-6 uppercase hover:border-b text-sm">empathy fator</li>
                <li className="ml-6 uppercase hover:border-b text-sm">despertando violetas</li>
              </ul>
            </div>

            <div onClick={handleNav} className="mv:hidden cursor-pointer pl-24">
              <AiOutlineMenu size={25} />
            </div>

            <div className={
              MenuOpen
                ? "fixed right-0 top-0 w-[80%] mv:hidden h-screen bg-white px-4 pt-9 ease-in duration-500"
                : "fixed right-[-100%] top-0 p-10 ease-in duration-500"
            }>
              <div className="flex w-full items-center justify-end">
                <div onClick={handleNav} className="mv:hidden cursor-pointer pl-24">
                  <AiOutlineClose size={25} />
                </div>
              </div>
              <div className="flex-col py-4 text-center">
                <ul className="flex flex-col gap-10">
                  <li className="font-bold uppercase hover:border-b text-2xl">Manifesto</li>
                  <li className="font-bold uppercase hover:border-b text-2xl">Fale Conosco</li>
                  <li className="font-bold uppercase hover:border-b text-2xl">Projetos</li>
                  <li className="font-bold uppercase hover:border-b text-2xl">empathy fator</li>
                  <li className="font-bold uppercase hover:border-b text-2xl">despertando violetas</li>
                </ul>
              </div>
            </div>


            {/* <div className="flex w-1/2 text-sm justify-center gap-5 font-sans font-semibold uppercase ">
              <a href="">Manifesto</a>
              <a href="">Fale Conosco</a>
              <a href="">Projetos</a>
              <a href="">empathy fator</a>
              <a href="">despertando violetas</a>
            </div> */}
          </nav>
        </header>

        <Image className=""
          src={Predios}
          sizes="100vw"
          style={{
            top: "0px",
            width: "100%",
            height: "auto",
            zIndex: "1"
          }}
          alt="Predios"
        />
      </div>

      <section className="relative flex flex-col w-full mx-auto px-5 py-32 ">

        <Image
          className="w-[200px] h-[600px] blur-lg mv:w-[400px] mv:h-[1000px] mv:blur-none"
          alt="Mountains"
          src={Red}
          style={{
            objectFit: "contain",
            position: 'absolute',
            right: 0,
            top: 0,
            zIndex: -1
          }}
        />

        <main className="relative max-w-[88rem] w-full mx-auto bg-[url('../img/about-us.png')] bg-no-repeat bg-auto">



          <h1 className="pt-20 mv:pt-0 mv:ml-20 font-sans text-[1.688rem] font-bold leading-10 max-w-2xl md:text- lg:ml-20">A Empathy é um ecossistema da economia criativa com Designers, Comunicadores, Publicitários, Cientistas, Engenheiros e Artistas; acima de tudo, humanos que vivem a paixão por tecnologia a serviço de outras pessoas.</h1>
          <div className="flex flex-col gap-7 mt-20 mx-auto justify-between md:flex-row max-w-5xl xl:ml-60">
            <p className="max-w-md">Somos uma empresa que foi gerada a partir da inquietude e da necessidade de quebrar barreiras, porque acreditamos que a transformação passa pela reflexão de como podemos ser e fazer diferente
              <br />
              <br />
              Ávidos por mudanças, vemos a colaboração, a tecnologia e o conhecimento interdisciplinar como conexões, criando o ambiente ideal para gerar essas transformações e, de fato, fazer diferença para os nossos clientes e seus negócios.
            </p>

            <p className="max-w-md">Um ecossistema que celebra a parceria e a empatia entre profissionais multidisciplinares, altamente capacitados e resilientes, que compartilham seus papéis, criatividade e propósitos em uma dinâmica de trabalho sem barreiras.
              <br />
              <br />
              O meio é tecnológico, mas o fim é sempre humano.
              <br />
              <br />
              <strong>Empathy. Human Of Things.</strong>
            </p>
          </div>
          <p className="text-3xl max-w-sm my-7 ml-auto">Vem <span>cocriar</span> e ser parte da transformação com a gente!</p>
        </main>

      </section>

      <section className="pt-32 px-5">
        <main className="bg-[url('../img/structure.png')] bg-no-repeat bg-auto pt-24 max-w-[88rem] mx-auto">
          <div>
            <div>
              <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="flex flex-col gap-5 justify-between mm:flex-row mm:justify-between ">
                    <Image className="w-full h-full max-w-xl max-h-xl mx-auto"
                      src={Co_criation}
                      alt="Picture of the author"
                    // width={500} automatically provided
                    // height={500} automatically provided
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                    />
                    <div className="w-full max-w-xl mx-auto mm:max-w-2xl">
                      <h1 className="bold text-4xl mb-2.5">Garage & Cocriação</h1>
                      <h2 className="bold text-2xl mb-2.5">Espaço e tempo para parceria</h2>
                      <p>Cumprindo um dos maiores valores da organização, a Empathy prioriza processos de trabalho a
                        <strong> várias mãos</strong>- do espaço dedicado aos clientes às metodologias diversas calçadas na parceria e na
                        <strong> colaboração</strong>  para responder aos maiores desafios do nosso tempo.
                      </p>
                      <div className="grid grid-cols-2 gap-5 w-full max-w-md mt-10">
                        <div>
                          <h3 className="text-gray-300 mb-2">Garages Tech</h3>
                          <p>
                            .Analog Lab - ferramentas lúdicas de co-criação
                            <br />
                            .Arts and Crafts estúdio
                            <br />
                            .Prototipagem física
                            <br />
                            .Prototipagem digital
                          </p>

                        </div>
                        <div>
                          <h3 className="text-gray-300 mb-2">Work shop de Co-criação</h3>
                          <p>
                            .Design thinking
                            <br />
                            .Design Sprints
                            <br />
                            .Hackathons
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-col gap-5 justify-between mm:flex-row mm:justify-between ">
                    <Image className="w-full h-full max-w-xl max-h-xl mx-auto"
                      src={Be_oppen}
                      alt="Picture of the author"
                    // width={500} automatically provided
                    // height={500} automatically provided
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                    />
                    <div className="w-full max-w-xl mx-auto mm:max-w-2xl">
                      <h1 className="bold text-4xl mb-2.5">Be Open</h1>
                      <h2 className="bold text-2xl mb-2.5">Somos uma plataforma de sonhos</h2>
                      <p>Nosso
                        <strong> ecossistema de valor compartilhado</strong> é formado por entidades, grupos, iniciativas e eventos de imensa representatividade no universo do
                        <strong> Design, Tecnologia e Comunicação</strong>, com estrutura e energia para acolher ideias e projetos, e com potencial para criar sinergia com todos os integrantes.
                      </p>
                      <br />
                      <p>
                        Compartilhamos nosso espaço físico, nossa filosofia de trabalho e visão de presente e futuro com os
                        <strong> principais players</strong> do cenário nacional e internacional, com foco em
                        <strong> inovação, solução, sinergia, educação e sustentabilidade.</strong>
                      </p>
                      <div className="grid grid-cols-2 gap-5 w-full  mt-10">
                        <div>
                          <h3 className="text-gray-300 mb-2">Empresas que fazem parte</h3>
                          <div>
                            <Image className="w-full h-full max-w-xl max-h-xl mx-auto"
                              src={All_logos}
                              alt="Picture of the author"
                            // width={500} automatically provided
                            // height={500} automatically provided
                            // blurDataURL="data:..." automatically provided
                            // placeholder="blur" // Optional blur-up while loading
                            />
                          </div>

                        </div>
                        <div>
                          <h3 className="text-gray-300 mb-2">Áreas de abordagem</h3>
                          <p>
                            .Tecnologia
                            <br />
                            .Design
                            <br />
                            .Estratégia
                            <br />
                            .Educação
                            <br />
                            .Sustentabilidade
                            <br />
                            .Conteúdo
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-col gap-5 justify-between mm:flex-row mm:justify-between ">
                    <Image className="w-full h-full max-w-xl max-h-xl mx-auto"
                      src={Impacto_positivo}
                      alt="Picture of the author"
                    // width={500} automatically provided
                    // height={500} automatically provided
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                    />
                    <div className="w-full max-w-xl mx-auto mm:max-w-2xl">
                      <h1 className="bold text-4xl mb-2.5">Impacto Positivo</h1>
                      <h2 className="bold text-2xl mb-2.5">Somos agentes de transformação</h2>
                      <p>A Empathy faz questão de tomar parte de seu
                        <strong> papel social</strong>. Por isso, não só se desafia a criar projetos de
                        <strong> impacto social positivo</strong> centrado nas pessoas, para as marcas e para o mundo, como
                        <strong> encoraja os seus clientes</strong> a fomentarem contrapartidas de negócio que foquem no desenvolvimento e preservação do mundo em que vivemos.
                      </p>
                      <br />
                      <p>
                        Fazemos isso graças a um
                        <strong> ecossistema de valor compartilhado</strong> , construído por meio da empatia,
                        <strong> cocriação e colaboração</strong>  como fundamentos centrais, e na
                        <strong> liberdade, criatividade, inovação e tecnologia</strong> como caminhos para solucionar os desafios.

                      </p>
                      <div className="grid grid-cols-2 sp:grid-cols-3 gap-5 w-full mt-10">
                        <div>
                          <h3 className="text-gray-300 mb-2">Formatos</h3>
                          <p>
                            .Patrocínio
                            <br />
                            .Fomento
                            <br />
                            .Projetos especiais
                          </p>

                        </div>
                        <div>
                          <h3 className="text-gray-300 mb-2">Pilares</h3>
                          <p>
                            .Esportes
                            <br />
                            .Educação
                            <br />
                            .Cultura
                            <br />
                            .Desenvolvimento social
                            <br />
                            .Meio ambiente & Sustentabilidade
                          </p>
                        </div>
                        <div>
                          <h3 className="text-gray-300 mb-2">Iniciativas internas</h3>
                          <p>
                            .Esportes
                            <br />
                            .Educação
                            <br />
                            .Cultura
                            <br />
                            .Desenvolvimento social
                            <br />
                            .Meio ambiente & Sustentabilidade
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-col gap-5 justify-between mm:flex-row mm:justify-between ">
                    <Image className="w-full h-full max-w-xl max-h-xl mx-auto"
                      src={Consultoria}
                      alt="Picture of the author"
                    // width={500} automatically provided
                    // height={500} automatically provided
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                    />
                    <div className="w-full max-w-xl mx-auto mm:max-w-2xl">
                      <h1 className="bold text-4xl mb-2.5">Consultoria em Inovação</h1>
                      <h2 className="bold text-2xl mb-2.5">Dividir conhecimento para somar</h2>
                      <p>Nascida da
                        <strong> inovação e da quebra de paradigmas </strong>em high tech e high touch, a Empathy se torna
                        <strong> braço estratégico</strong> das organizações, que, assim como ela, desejam derrubar cercas e criar espaços para novas ideias, na criação de novas estradas na transversal de seus negócios,
                        <strong> solucionando problemas estruturais, logísticos e de comunicação.</strong>
                      </p>
                      <br />
                      <p>

                      </p>
                      <div className="grid grid-cols-1 gap-5 w-full mt-10">
                        <div>
                          <h3 className="text-gray-300 mb-2">Consultoria tecnica e intelectual</h3>
                          <p>
                            .Planejamento e estruturação de área de inovação
                            <br />
                            .Braço de inovação
                            <br />
                            .Execução de projetos especiais
                          </p>

                        </div>

                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-col gap-5 justify-between mm:flex-row mm:justify-between ">
                    <Image className="w-full h-full max-w-xl max-h-xl mx-auto"
                      src={High_touch}
                      alt="Picture of the author"
                    // width={500} automatically provided
                    // height={500} automatically provided
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                    />
                    <div className="w-full max-w-xl mx-auto mm:max-w-2xl">
                      <h1 className="bold text-4xl mb-2.5">High Touch</h1>
                      <h2 className="bold text-2xl mb-2.5">Brandlife & expression</h2>
                      <p>Marcas têm
                        <strong> história </strong> e devem contá-las, a fim de se
                        <strong> conectarem</strong> com a sociedade, provarem seu valor e responderem aos desafios do próprio negócio. A Empathy desenvolve estratégias que consideram esses desafios, buscando tonar seus clientes porta-vozes de seu tempo e deixar um  com a sociedade, provarem seu valor e responderem aos desafios do próprio negócio. A Empathy desenvolve estratégias que consideram esses desafios, buscando tonar seus clientes porta-vozes de seu tempo e deixar um
                        <strong> legado marcante.</strong>
                      </p>
                      <br />
                      <p>
                        Nossa origem e experiência no design centrado no
                        <strong> ser humano</strong> se expressam em
                        <strong > storytelling</strong>, seja em embalagens, filmes ou campanhas on e off.
                      </p>
                      <br />
                      <p>
                        Vamos juntos dividir conhecimento para somar!
                      </p>
                      <div className="grid grid-cols-2 sp:grid-cols-3 gap-5 w-full mt-10">
                        <div>
                          <h3 className="text-gray-300 mb-2">Branding</h3>
                          <p>
                            .Estratégia de marca
                            <br />
                            .Naming
                            <br />
                            .Identidade Visual
                            <br />
                            .Identidade Verbal
                            <br />
                            .Pesquisa de mercado
                            <br />
                            .Arquitetura de marca
                            <br />
                            .Arquitetura de portfólio
                            <br />
                            .Posicionamento
                          </p>

                        </div>
                        <div>
                          <h3 className="text-gray-300 mb-2">Comunicação</h3>
                          <p>
                            .Estratégia de comunicação
                            <br />
                            .Comunicação On/Off
                            <br />
                            .Redes social & Conteúdo
                            <br />
                            .Mídia
                            <br />
                            .Rádio/Tv
                            <br />
                            .Performance
                            <br />
                            .Employer Experience
                            <br />
                            .Eventos/Feiras/Convenção
                          </p>
                        </div>
                        <div>
                          <h3 className="text-gray-300 mb-2">Design</h3>
                          <p>
                            .Embalagem
                            <br />
                            .Ambientação & Sinalização
                            <br />
                            .Design de produto
                            <br />
                            .Marca e SIV
                            <br />
                            .Personagem
                            <br />
                            .Editorial
                            <br />
                            .Design de interação
                            <br />
                            .Design de sistema
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-col gap-5 justify-between mm:flex-row mm:justify-between ">
                    <Image className="w-full h-full max-w-xl max-h-xl mx-auto"
                      src={High_tech}
                      alt="Picture of the author"
                    // width={500} automatically provided
                    // height={500} automatically provided
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                    />
                    <div className="w-full max-w-xl mx-auto mm:max-w-2xl">
                      <h1 className="bold text-4xl mb-2.5">High Tech</h1>
                      <h2 className="bold text-2xl mb-2.5">Tech with heart, data with soul</h2>
                      <p>
                        O nosso time de tecnologia está dia e noite em busca de soluções para os maiores desafios dos clientes, das plataformas mais simples à Inteligência Artificial; a Empathy não tem limites para criações tecnológicas que mudem a realidade das pessoas e seus negócios, transformando tudo com o olhar do design pautado na experiência do usuário.
                      </p>
                      <br />
                      <p>
                        A gestão de dados é entregue em plataformas, hardwares equipamentos e realidades mistas do VR e AR.
                      </p>
                      <br />
                      <p>
                        Cumprindo um dos maiores valores da organização, a Empathy prioriza processos de trabalho a várias mãos - do espaço dedicado aos clientes às metodologias diversas calçadas na parceria e na colaboração para responder aos maiores desafios do nosso tempo.
                      </p>
                      <div className="grid grid-cols-2 gap-5 w-full mt-10">
                        <div>
                          <h3 className="text-gray-300 mb-2">Digital Tools</h3>
                          <p>
                            .Impressão 3D
                            <br />
                            .Prototipagem física
                            <br />
                            .Prototipagem digital
                          </p>

                        </div>
                        <div>
                          <h3 className="text-gray-300 mb-2">Dev space</h3>
                          <p>
                            .Software Factory
                            <br />
                            .Plataformas
                            <br />
                            .Sistemas
                            <br />
                            .Apps - IOS e Android
                            <br />
                            .Unity
                            <br />
                            .Automatização de produção de assets visuais
                            <br />
                            .Design de serviços
                            <br />
                            .Squads de UX/UI
                            <br />
                            .Techshop
                            <br />
                            .Internet of Things - IoT
                            <br />
                            .Inteligência Artificial - AI

                          </p>
                        </div>

                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>



            </div>
          </div>
        </main>
      </section>

      <section className="relative px-6 pt-32 bg-[url('../img/yellow-bg.svg')] bg-yellow-position-1 lg:bg-yellow-position-2 bg-no-repeat bg-auto  "> {/* */}
        <main className="relative max-w-[88rem] w-full mx-auto bg-[url('../img/contact-us.png')] bg-no-repeat bg-auto">

          <h1 className="flex max-w-[14.625rem] text-3xl pt-24 mb-12 font-bold">Agende uma reunião</h1>
          <form action="" className="flex flex-col max-w-lg w-full mx-auto">
            <label htmlFor="" className="my-3.5">Name</label>
            <input type="text" name="" id="" className="w-full p-2 border rounded-lg border-gray-500" />
            <div className="flex flex-col sm:flex-row justify-between sm:gap-10">
              <div className=" flex flex-col sm:w-full">
                <label htmlFor="" className="my-3.5">Telefone</label>
                <input type="tel" name="" id="" className="w-full p-2 border rounded-lg border-gray-500" />
              </div>
              <div className="flex flex-col sm:w-full">
                <label htmlFor="" className="my-3.5">Com que area gostaria de falar</label>
                <select name="department" id="department" className="w-full p-2 border rounded-lg border-gray-500">
                  <option value="">Clique e exolha</option>
                  <option value="comunicação">Comunicação</option>
                  <option value="tech-shop">Tech shop</option>
                  <option value="new-option">New option</option>
                  <option value="UX">UX</option>
                  <option value="outros">Outros</option>
                </select>
              </div>
            </div>
            <label htmlFor="" className="my-3.5">E-mail</label>
            <input type="email" name="" id="" className="w-full p-2 border rounded-lg border-gray-500" />
            <div className="flex flex-col sm:flex-row justify-between sm:gap-10">
              <div className="flex flex-col sm:w-full">
                <label htmlFor="" className="my-3.5">Escolha uma data</label>
                <input type="date" name="" id="" className="w-full p-2 border rounded-lg border-gray-500" />
              </div>
              <div className="flex flex-col sm:w-full">
                <label htmlFor="" className="my-3.5">Escolha um horario</label>
                <input type="time" name="" id="" className="w-full p-2 border rounded-lg border-gray-500" />
              </div>
            </div>
            <label htmlFor="" className="my-3.5">Menssagem</label>
            <textarea name="" id="" className="w-full p-2 border rounded-lg border-gray-500"></textarea>
            <h1 className="text-lg font-bold">Gostamos de compartilhar conhecimentos</h1>
            <p>Por isso, deixamos aqui um espaço para você escolher receber conteúdos sobre tecnologia, inovação e design.</p>
            <div className="flex gap-1 mt-3">
              <input type="checkbox" name="" id="" />
              <p>Concordo com os termos de Política de Privacidade</p>
            </div>
            <div className="flex gap-1 mt-3">
              <input type="checkbox" name="" id="" />
              <strong>Quero receber conteúdos sobre tecnologia, inovação e design.</strong>
            </div>
            <button type="submit" className="text-white bg-gray-800 mt-12 mb-24 mx-auto h-[3.313rem] border w-full max-w-xs rounded-full border-grey-500">Solicitar agendamento</button>
          </form>
        </main>
      </section>

      <footer className="p-5">
        <main className="max-w-[88rem] m-auto">
          <div className="mb-10">
            <ul className="flex flex-row mx-auto items-center justify-center gap-5 lg:justify-end">
              <li>
                <Image
                  src={Insta}
                  width={25}
                  height={25}
                  alt="Imagem Logo"
                />
              </li>
              <li><Image
                src={Linkedin}
                width={25}
                height={25}
                alt="Imagem Logo"
              /></li>
              <li><Image
                src={Bhanc}
                width={30}
                height={30}
                alt="Imagem Logo"
              /></li>
              <li><Image
                src={Spotify}
                width={25}
                height={25}
                alt="Imagem Logo"
              /></li>
              <li><Image
                src={Youtube}
                width={25}
                height={25}
                alt="Imagem Logo"
              /></li>
            </ul>
          </div>
          <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
            <div className="flex flex-col items-center gap-2.5 mv:flex-row md:justify-center">
              <a href="">
                <Image
                  src={Logo}
                  alt="Imagem Logo"
                  style={{
                    width: "100%",
                    height: "70px",
                    maxWidth: "175px"
                  }}
                />
              </a>
              <span className="hidden mx-9 border-r-2 border-gray-500 w-px h-20 mv:inline-block "></span>
              <Image
                src={ABE}
                height={46}
                alt="Imagem Logo"
              />
              <Image
                src={Abre}
                height={46}
                alt="Imagem Logo"
              />
              <Image
                src={CCB}
                height={46}
                alt="Imagem Logo"
              />
              <Image
                src={Concorrencia}
                height={70}
                alt="Imagem Logo"
              />
            </div>
            <div className="flex flex-col gap-8 text-center leading-5 sm:flex-row sm:text-right sm:justify-center sm:gap-20">
              <ul>
                <li className="flex justify-center sm:justify-end">
                  <Image
                    src={Divisor}
                    alt="Imagem Logo"
                    width={30}
                  />
                </li>
                <li>
                  <a href="">
                    contato@empathy.com.br
                  </a>
                </li>
                <li>
                  <a href="">
                    Termos de Uso
                    <br />
                    Politica de Privacidade
                  </a>
                </li>
              </ul>
              <ul>
                <li className="flex justify-center sm:justify-end">
                  <Image
                    src={Divisor}
                    alt="Imagem Logo"
                    width={30}
                  />
                </li>
                <li className="">
                  <a href="">
                    Av. Dra. Ruth Cardoso
                    <br />
                    4777, 18th floor
                    <br />
                    Alto de Pinheiros
                    <br />
                    São Paulo - SP
                    <br />
                    05477-000
                  </a>
                </li>

              </ul>
            </div>
          </div>
        </main>
      </footer>
    </div>
  )
}
