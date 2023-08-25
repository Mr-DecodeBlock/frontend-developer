import React, { useState } from 'react';
import Image from 'next/image';
import spain from "../../public/assets/img/icons/espana.png"
import usa from "../../public/assets/img/icons/estados-unidos.png"
import { useTranslation } from 'react-i18next';



const PolicyHeader = ({ title, subtitle }) => {

    const [offset, setOffset] = useState(0);
    const {t} = useTranslation();

    function handleScroll() {
        setOffset(window.scrollY);
    }
    // Add an event listener to update the offset on scroll
    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className='d-flex justify-content-center aling-items-center col-xl-9 col-lg-10 col-sm-8 m-auto'>
                <div className="dark-bg mt-100 p-3 w-100" style={{ borderRadius: "20px", boxShadow: "#444444 -2px 2px 7px 0px" }}>
                    <div className="container d-flex flex-column flex-sm-column flex-lg-row">
                        <div className='col bg-white p-4' style={{ borderRadius: "20px", flexBasis: "max-content"}}>
                            <div className="row">
                                <h3>{t(title)}</h3>
                            </div>
                            <div className="row">
                                <span>{t(subtitle)}</span>
                            </div>
                        </div>
                        <div className='col dark-bg d-flex flex-column align-items-center justify-content-around mt-10 ml-10'>
                            <div className='row tp-btn-green-sm' style={{ width: "95%" }}>
                                <button className='d-flex flex-row justify-content-center align-items-center flex-nowrap'>
                                    Descargar PDF <Image src={spain} alt='theme-pure' className='pl-5' width={30} />
                                </button>
                            </div>
                            <div className='row tp-btn-green-sm mt-10' style={{ width: "95%" }}>
                                <button className='d-flex flex-row justify-content-center align-items-center flex-nowrap'>
                                    Descargar PDF <Image src={usa} alt='theme-pure' className='pl-5' width={30} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PolicyHeader;