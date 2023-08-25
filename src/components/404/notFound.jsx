import React from "react";
import Image from "next/image";
import Link from "next/link";
import img404 from "../../../public/assets/img/contact/404-busniess-shop.png"

const NotFound404 = ()=>{
    return(
        <div style={{height:"100vh", width:"100%", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "black"}}>
            <main>
            <div className="tp-error-area tp-error-ptb p-relative">
              <div className="tp-error-left-shape">
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tp-error-big-img-container">
                      <div className="tp-error-content-box text-center mb-40">
                        <Image src={img404} alt="404"/>
                      </div>
                    </div>
                    <div className="tp-error-text-box text-center">
                      <h4 className="tp-payment__title text-white">Oops.! Page Not Found!</h4>
                      <p className="text-white">The page you are looking for does not exist</p>
                      <Link
                        className="tp-btn-green wow tpfadeUp"
                        href="/"
                      >
                        <span> Back To Home</span>
                        <b></b>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
    )
}
export default NotFound404;