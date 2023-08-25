import VideoPopup from '@/src/modals/video-popup';
import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";

const company_content = {
   sub_title: "ABOUT THE COMPANY",
   title: <>La historia de <br />nuestro fundador.</>,
   info_1: <>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum arcu sollicitudin viverra sit elit leo in. Vitae eu tellus mattis quis. Eu, tempus donec nam mauris egestas. Id aliquet ultricies ligula tellus arcu dolor. Massa arcu pulvinar in mattis</>,
   info_2: <>Feugiat purus congue risus, blandit a sed. In aenean quam aenean purus dictum pellentesque consequat.!</>,
   info_3: <>Our clean and simple APIs and transparent SaaS model will give you complete peace of mind.</>,
}
const { sub_title, title, info_1, info_2, info_3 } = company_content


const CompanyArea = () => {
   const [isVideoOpen, setIsVideoOpen] = useState(false);
   const [activeTitle, setActiveTitle] = useState(""); // Estado para el título activo
   const [isHovered, setIsHovered] = useState(false);
    
      const handleMouseEnter = () => {
        setIsHovered(true);
      };
    
      const handleMouseLeave = () => {
        setIsHovered(false);
      };

   // Función para manejar el clic en un título
   const handleClick = (title) => {
      if (activeTitle === title) {
         // Si el título ya está activo, se desactiva
         setActiveTitle("");
      } else {
         // Si se hace clic en un título diferente, se activa
         setActiveTitle(title);
      }
   };

   return (
      <>
         <div className="ab-company-area pt-105 pb-100">
            <div className="container">
               <div className="row ab-company-section-space">
                  <div className="col-xl-6">
                     <div className="ab-company-section-box">
                        <h4 className="inner-section-subtitle">{sub_title}</h4>
                        <h3 className="tp-section-title">{title}</h3>
                     </div>
                  </div>
                  <div className="col-xl-6 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".5s">
                     <div className="ab-company-right">
                        <div className="ab-company-section-text">
                           <p className="pb-10">{info_1}</p>
                           <p className="pb-10">{info_2}</p>
                           <p><span>{info_3}</span></p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row align-items-center">
                  <div className="col-xl-4">
                     <div className="ab-company-video">
                        <a className="popup-video"
                           onClick={() => setIsVideoOpen(true)}
                        ><i className="fas fa-play"></i></a>
                        <span>Watch Demo</span>
                     </div>
                  </div>
                  <div className="col-xl-8">
                     <div className="row">

                        <div className="col-md-4 col-sm-4 mb-40">
                           <div className="ab-company-fun-fact-wrap d-flex justify-content-start">
                              <div className="ab-company-fun-fact">
                                 <span>USED BY</span>
                                 <h4>11,000<em style={{color: "orange"}}>+</em></h4>
                                 <p>Creators</p>
                              </div>
                           </div>
                        </div>

                        <div className="col-md-4 col-sm-4 mb-40">
                           <div className="ab-company-fun-fact-wrap d-flex justify-content-md-center justify-content-left">
                              <div className="ab-company-fun-fact">
                                 <span>VALUE</span>
                                 <h4>46<em style={{color: "orange"}}>m</em></h4>
                                 <p>Revenue per Year</p>
                              </div>
                           </div>
                        </div>
                        <div className="col-md-4 col-sm-4 mb-40">
                           <div className="ab-company-fun-fact-wrap ab-company-border-none d-flex justify-content-md-center justify-content-left">
                              <div className="ab-company-fun-fact">
                                 <span>IN</span>
                                 <h4>150<em style={{color: "orange"}}>+</em></h4>
                                 <p>Countries using</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* video modal start */}
         <VideoPopup
            isVideoOpen={isVideoOpen}
            setIsVideoOpen={setIsVideoOpen}
            videoId={"EW4ZYb3mCZk"}
         />
         {/* video modal end */}

         <Container className="titulo-component">
            <h3 className='text-center mb-55 h1'>Tu Arca Cripto y <br /> <span style={{color: "orange"}}>puerta de entrada a la Web3 </span></h3>
            <Row>
               <Col className='text-end'>
                  <h4
                     className={`titulo ${activeTitle === "Visión" ? "active" : ""} header-sticky-bg-2 tp-header-2__main-menu`}
                     onClick={() => handleClick("Visión")}
                     style={{cursor: "pointer"}}
                  >
                     Visión
                  </h4>
               </Col>
               <Col className='text-center'>
                  <h4
                     className={`titulo ${activeTitle === "Misión" ? "active" : ""}`}
                     onClick={() => handleClick("Misión")}
                     style={{cursor: "pointer"}}
                  >
                     Misión
                  </h4>
               </Col>
               <Col className='text-star'>
                  <h4
                     className={`titulo ${activeTitle === "Valores" ? "active" : ""}`}
                     onClick={() => handleClick("Valores")}
                     style={{cursor: "pointer"}}
                  >
                     Valores
                  </h4>
               </Col>
            </Row>
            {activeTitle && (
               <Row className="texto-activo">
                  <Col>
                     <p className='text-center mt-55' style={{paddingLeft: "10rem", paddingRight: "10rem"}}>
                        {activeTitle === "Visión" && "Ser el Arca Cripto del mundo."}
                        {activeTitle === "Misión" && "Dando a los criptocreyentes herramientas de última generación, apoyo y oportunidades para liberar todo su potencial y subir de nivel con la Web3."}
                        {activeTitle === "Valores" && "Escuchamos, cuidamos y mejoramos constantemente para ofrecer una experiencia de trading de nivel superior.\n\nNuestra comunidad es el centro de todo lo que hacemos. Con nuestra plataforma avanzada y fácil de usar y productos de primer nivel, brindamos una navegación confiable hacia la libertad financiera. Combinado con la mejor infraestructura de su clase, te impulsamos hacia un futuro descentralizado mejor y más brillante."}
                     </p>
                  </Col>
               </Row>
            )}
         </Container>

      </>
   );
};

export default CompanyArea;