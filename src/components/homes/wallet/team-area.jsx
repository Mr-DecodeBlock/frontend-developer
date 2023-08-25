import { SocialLinksTwo } from '@/src/common/social-links';
import team_data from '@/src/data/team-data';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import img_step_1 from '../../../../public/assets/img/card/ad.png'
import img_step_2 from '../../../../public/assets/img/card/recived-pay.png'
import img_step_3 from '../../../../public/assets/img/card/free-coins.png'


const team_content = {
    title: "Operaciones P2P",
}
const {title}  = team_content

const TeamArea = ({bg_style}) => {

   const [isBuy, setIsBuy] = useState(true)

    return (
        <>
           <div className={`tp-team-area ${bg_style ? "grey-bg pt-120" : "white-bg"} pb-95`}>   
               <div className="container">
                  <div className={`tp-team-section-wrapper ${bg_style && "tp-team-inner-section"} mb-70`}>
                     <div className="row align-items-end">
                        <div>
                           <div className={`pt-100 tp-team-section-box ${bg_style && "text-center text-sm-start"}`}>
                              <h3 className="tp-section-title-3 mb-0" style={{color: "orange"}}>{title}</h3>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div>
                     <div className='tp-btn-cont'>
                        <div className={isBuy?"tp-btn-switch":"tp-btn-switch-2"} 
                           data-wow-duration=".9s" 
                           data-wow-delay=".7s"
                           onClick={()=>setIsBuy(false)}>
                           <span>Para vender</span>
                        </div>
                        <div className={isBuy?"tp-btn-switch-2":"tp-btn-switch"} 
                           data-wow-duration=".9s" 
                           data-wow-delay=".7s"
                           onClick={()=>setIsBuy(true)}>
                           <span>Para comprar</span>
                        </div>
                     </div>
                     {isBuy?
                     (
                     <div className="tp-steps-container">
                        <div className='tp-steps-s'>
                           <h5 className={`${bg_style ? "inner-section-subtitle" : "tp-section-subtitle-4"} pb-10`}>Paso 1</h5>
                           <div className='tp-steps-img'>
                              <Image src={img_step_1} alt='step1'/>
                           </div>
                           <h5>Selecciona tu anuncio</h5>
                           <p>Elija el anuncio con el precio y la forma de pago deseados. Ingrese la cantidad de su compra y el monto de la transacción para completar el pedido.</p>
                        </div>
                        <div className='tp-steps-s'>
                           <h5 className={`${bg_style ? "inner-section-subtitle" : "tp-section-subtitle-4"} pb-10`}>Paso 2</h5>
                           <div className='tp-steps-img'>
                              <Image src={img_step_2} alt='step2'/>
                           </div>
                           <h5>Pagos bancarios completos</h5>
                           <p>Complete sus pagos según la información proporcionada por el vendedor.</p>
                        </div>
                        <div className='tp-steps-s'>
                           <h5 className={`${bg_style ? "inner-section-subtitle" : "tp-section-subtitle-4"} pb-10`}>Paso 3</h5>
                           <div className='tp-steps-img'>
                              <Image src={img_step_3} alt='step3'/>
                           </div>
                           <h5>Recibe tus monedas</h5>
                           <p>Después de que el vendedor reciba el pago, liberará las monedas. Dirígete a la cuenta de fondos para revisar las monedas que recibiste.</p>
                        </div>
                     </div>
                     )
                     :
                     (
                     <div className="tp-steps-container">
                        <div className='tp-steps-s'>
                           <h5 className={`${bg_style ? "inner-section-subtitle" : "tp-section-subtitle-4"} pb-10`}>Paso 1</h5>
                           <div className='tp-steps-img'>
                              <Image src={img_step_1} alt='step1'/>
                           </div>
                           <h5>Selecciona tu anuncio</h5>
                           <p>Elija el anuncio con el precio y la forma de pago deseados. Ingrese la cantidad de venta y el monto de la transacción para completar el pedido.</p>
                        </div>
                        <div className='tp-steps-s'>
                           <h5 className={`${bg_style ? "inner-section-subtitle" : "tp-section-subtitle-4"} pb-10`}>Paso 2</h5>
                           <div className='tp-steps-img'>
                              <Image src={img_step_2} alt='step2'/>
                           </div>
                           <h5>Recibir pagos</h5>
                           <p>Inicie sesión en su cuenta receptora para confirmar que recibió los pagos completos de su comprador.</p>
                        </div>
                        <div className='tp-steps-s'>
                           <h5 className={`${bg_style ? "inner-section-subtitle" : "tp-section-subtitle-4"} pb-10`}>Paso 3</h5>
                           <div className='tp-steps-img'>
                              <Image src={img_step_3} alt='step3'/>
                           </div>
                           <h5>Libera tus monedas</h5>
                           <p>Entregue monedas a su comprador solo después de que haya recibido sus pagos en su totalidad.</p>
                        </div>
                     </div>
                     )}
                  </div>
               </div>
            </div> 
        </>
    );
};

export default TeamArea;