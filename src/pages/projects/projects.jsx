import React from 'react';
import './css/project.css';
import LipaProto from '../../components/tataklipenyo';
import FraicheProto from '../../components/fraiche';
import Fraiche from '../../assets/images/Mockups/Fraiche/Fraiche_Front.png';
import lipenyo from '../../assets/images/Mockups/Tatak_Lipenyo/lipenyo_home.png';
import olbrs from '../../assets/images/Mockups/OLBRS/olbrs_front.png';
import lipenyo_splash from '../../assets/images/Mockups/Tatak_Lipenyo/Lipenyo_Splash.png';
import lipenyo_dual from '../../assets/images/Mockups/Tatak_Lipenyo/lipenyo_selection.png';
import lipenyo_logo from '../../assets/images/Mockups/Tatak_Lipenyo/lipenyo_logo.png';
import fraiche_splash from '../../assets/images/Mockups/Fraiche/Fraiche_splash.png';
import fraiche_home from '../../assets/images/Mockups/Fraiche/Fraiche_home.png';
import fraiche_login from '../../assets/images/Mockups/Fraiche/Fraiche_login.png';

function Projects(){
    return(
        <div className='col-md d-flex flex-column justify-content-center align-items-center'>
            {/* Projects Header*/}
            <div className='container d-flex justify-content-center m-5'>
                <div className='col-md d-flex justify-content-center align-items-center rounded-5 m-5 shadow' id='hero-project'>
                    <h1 className='text-center z-3'>Previous Projects</h1>
                    <div className='z-1 mockup mock-cont'>
                        <img src={Fraiche} alt='fraiche' className='mockup fraiche'/>
                        <img src={lipenyo} alt='lipenyo' className='mockup lipenyo'/>
                        <img src={olbrs} alt='olbrs' className='mockup olbrs'/>
                    </div>
                </div>
            </div>
            {/*Tatak Lipenyo*/}
            <div className='container lipenyo rounded-5 shadow m-5 p-2 d-flex flex-row justify-content-between'>
                <div className='col-md-5 d-flex flex-column justify-content-center lipenyo p-5'>
                    <h1 className='lipenyo title'>Tatak Lipenyo</h1>
                    <p className='lipenyo text'>As a thesis project, I developed an Android app under the MatchiCreates brand to showcase the culinary and cultural legacy of Lipa, Batangas. The app uses recommendation strategies and Natural Language Processing (NLP) tools to provide personalized suggestions for local dishes, cultural events, and historical sites. By blending technology with cultural preservation, this project highlights my skills in mobile development and AI while promoting the rich traditions of Lipa.</p>
                    <img src={lipenyo_splash} alt='lipenyo' className='lipenyo-img splash'/>
                    <img src={lipenyo_dual} alt='lipenyo' className='lipenyo-img dual'/>
                    <img src={lipenyo_logo} alt= 'lipenyo-logo' className='lipenyo-img logo'/>
                </div>
                <div className='container d-flex justify-content-end'>
                    <LipaProto />
                </div>
            </div>
            {/*Fraiche*/}
            <div className='container fraiche rounded-5 shadow m-5 p-5 d-flex flex-row justify-content-between'>
                <div className='container d-flex justify-content-start'>
                    <FraicheProto />
                </div>
                <div className='col-md-5 d-flex flex-column justify-content-center'>
                    <h1 className='fraiche title'>Fraîche.</h1>
                    <p className='fraiche text'>I designed the Fraîche mobile app to offer a fresh and convenient way to buy salads. The app allows users to browse a selection of pre-made salads or customize their own, choosing from a variety of fresh ingredients. This design focuses on a user-friendly interface that makes healthy eating easy and accessible, combining visual appeal with seamless functionality.</p>
                    <img src={fraiche_home} alt="fhome" className='fraiche-img home'/>
                    <img src={fraiche_splash} alt="fsplash" className='fraiche-img splash'/>
                    <img src={fraiche_login} alt="flogin" className='fraiche-img login'/>
                </div>
            </div>
        </div>
    );
}

export default Projects;