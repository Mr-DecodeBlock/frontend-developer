import React from 'react';
import AnswerQuestion from '@/src/common/answer-question';
import Image from 'next/image';
import question_mark from '../../../public/assets/img/card/question.jpg'

const content = {
    title: <>Preguntas Frecuentes</>,
    btn_text: "Get Started Free"
}
const {title, description, btn_text}  = content


const QuestionsArea = ({style_service}) => {
    return (
        <>
            <div className="tp-sales-area tp-sales-space">
               <div className="container">
                  <div className="row align-items-center pb-0">
                     <div className="col-xl-6 col-lg-6 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".7s">
                        <div className="tp-card-title-box">
                           <div style={{display: 'flex', flexDirection:"column", width: "100%", justifyContent: 'center', alignItems: 'center', marginTop: '-130px'}}>
                              <h3 className="pb-15" style={{fontSize: "50px", textAlign:'center', color: "orange"}}>{title}</h3>
                              <div style={{width: "50%", height: 'auto'}}>
                                 <Image src={question_mark} alt="question"/>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-6 col-lg-6 order-0 order-md-2 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".7s">
                        <div className="tp-faq-area pt-50">
                           <div className="container p-0">
                              <div className="row g-0">
                                 <div className="col-xl-12">
                                    <AnswerQuestion style={true}/>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
        </>
    );
};

export default QuestionsArea;