import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import MobileMenus from '../layout/headers/mobile-menus';
 
// images import 
import logo from "../../public/assets/img/logo/logoGold.png"
import canvus_img_1 from "../../public/assets/img/gallery/bs1.png"
import canvus_img_2 from "../../public/assets/img/gallery/bs3.png";
import canvus_img_3 from "../../public/assets/img/gallery/bs5.png";
import canvus_img_4 from "../../public/assets/img/gallery/bs7.png";

const Offcanvus = ({sidebarOpen, setSidebarOpen}) => {
    return (
        <>
            <div className="tpoffcanvas-area">
                <div className={`tpoffcanvas ${sidebarOpen && "opened"}`}>
                    <div className="tpoffcanvas__close-btn">
                    <button className="close-btn" onClick={() => setSidebarOpen(false)}><i className="fal fa-times"></i></button>
                    </div>
                    <div className="tpoffcanvas__logo text-center">
                    <Link href="/" onClick={() => setSidebarOpen(false)}>
                        <Image src={logo} alt="theme-pure" />
                    </Link>
                    </div>
                    <div className="mobile-menu mean-container">
                        <MobileMenus />
                    </div>
                    <div className="tpoffcanvas__instagram text-center">
                    <div className="tpoffcanvas__instagram-title">
                        <h4>BSP Chain brinda confianza digital</h4>
                    </div>  
                    <Link href="#"><Image src={canvus_img_1}  alt="theme-pure" /></Link>
                    <Link href="#"><Image src={canvus_img_2}  alt="theme-pure" /></Link>
                    <Link href="#"><Image src={canvus_img_3}  alt="theme-pure" /></Link>
                    <Link href="#"><Image src={canvus_img_4}  alt="theme-pure" /></Link>
                    </div>
                    <div className="tpoffcanvas__info text-center">
                    <h4 className="offcanva-title">Nosotros estamos</h4>
                    <Link href="https://www.google.com/maps/place/Ciudad+de+M%C3%A9xico,+CDMX,+M%C3%A9xico/@19.3910844,-99.4732893,10z/data=!3m1!4b1!4m6!3m5!1s0x85ce0026db097507:0x54061076265ee841!8m2!3d19.4326077!4d-99.133208!16zL20vMDRzcWo?entry=ttu" target="_blank">
                         Ciudad de México <br />
                        
                    </Link>
                    </div>
                    <div className="tpoffcanvas__social">
                    <div className="social-icon text-center">
                        <Link href="#"><i className="fab fa-twitter"></i></Link>
                        <Link href="#"><i className="fab fa-instagram"></i></Link>
                        <Link href="#"><i className="fab fa-facebook-square"></i></Link>
                        <Link href="#"><i className="fab fa-instagram"></i></Link>
                    </div>
                    </div>
                </div>
            </div>
            <div className={`body-overlay ${sidebarOpen &&  "apply"}`} onClick={() => setSidebarOpen(false)}></div>
        </>
    );
};

export default Offcanvus;