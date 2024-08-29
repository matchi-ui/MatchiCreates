import React from 'react';
import './css/homepage.css';
import RoleChanger from '../../components/role';
import Matchi from '../../assets/images/Picture2.png';
import RoleCard from '../../components/skills';
import Maricon from '../../assets/images/Maricon.png';
import Fraiche from '../../assets/images/Mockups/Fraiche/Fraiche_Front.png';
import lipenyo from '../../assets/images/Mockups/Tatak_Lipenyo/lipenyo_home.png';
import olbrs from '../../assets/images/Mockups/OLBRS/olbrs_front.png';

function Homepage(){
    const skill = [
        {
          title: 'UI/UX Designer',
          details: "Creating intuitive interfaces and seamless experiences for your users.",
          skills: [
            { name: 'Adobe XD', percentage: 80 },
            { name: 'Figma', percentage: 100 },
            { name: 'Sketch', percentage: 60 },
          ],
        },
        {
          title: 'Frontend Developer',
          details: "Building responsive, interactive, and high-performance web applications.",
          skills: [
            { name: 'ReactJS', percentage: 70 },
            { name: 'HTML/CSS', percentage: 100 },
            { name: 'JavaScript', percentage: 90 },
            { name: 'PHP', percentage: 90 },
          ],
        },
        {
          title: 'Graphic Designer',
          details: "Designing eye-catching visuals and branding materials to elevate your business.",
          skills: [
            { name: 'Photoshop', percentage: 100 },
            { name: 'Illustrator', percentage: 90 },
            { name: 'Blender', percentage: 80 },
            { name: 'Clip Studio Paint', percentage: 100 },
            { name: 'Canva', percentage: 80 },
          ],
        },
      ];
    return(
        <div className='col-md d-flex flex-column justify-content-center'id='hero'>
            {/*Hero*/}
            <div className='container d-flex flex-row align-items-center justify-content-around z-2'>
                <div className='col-md d-flex flex-column ms-5'>
                    <h1 className='brand-name m-0 p-0'><span className='brand-name text1 me-3'>Hi,</span><span className='brand-name text2'>I am Matchi!</span></h1>
                    <RoleChanger/>
                    <div className='col-md my-3'>
                        <p className ='text-justify'>
                            Welcome to <span className = 'Text1'>MatchiCreates.</span>, where modern elegance meets dynamic design. 
                            I’m <span className = 'Text1'>Matchi</span>, a passionate UI/UX designer and front-end developer dedicated 
                            to creating visually stunning and user-friendly digital experiences.
                        </p>
                    </div>
                    <span class = "d-flex justify-content-end">
                        <a href = "https://drive.google.com/file/d/19AlzfP94dQNFOG9ZAoTW9NjQmDUOgWXo/view?usp=drive_link" className = 'primary-btn mx-5 py-2 rounded-5 text-center'>View CV</a>
                    </span>
                </div>
                <div className='col-md d-flex justify-content-center'>
                    <img src={Matchi} alt="matchi-ui" className='z-1' id='matchi-img'/>
                </div>
            </div>
            {/*Key Services*/}
            <div className='container d-flex justify-content-center align-items-center z-2'>
                <div className='col-md d-flex flex-column justify-content-center align-items-center'>
                    <div className='p-2'>
                        <h1 class = "Text1 text-center">Key Services</h1>
                    </div>
                    {/*Cards*/}
                    <div className="col-md">
                        <div className="d-flex flex-row justify-content-around flex-wrap">
                            {skill.map((skill, index) => (
                            <RoleCard key={index} title={skill.title} details = {skill.details} skills={skill.skills} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/*About Matchi*/}
            <div className='container cont-container d-flex flex-row align-items-center z-2' id = 'matchi-cont'>
                <div className='col-md-5  d-flex justify-content-center'>
                    <img src={Maricon} alt='maricon' id='user'/>
                </div>
                <div className='col-md flex-column'>
                    <h1 className='Text1'>Face behind Matchi</h1>
                    <span className='col-md m-0 p-0'>
                    <p className='text-justify my-2'>Meet <strong className='Text1'>Matchi</strong>, the spirited and imaginative creation of <strong className='Text1'>Maricon De Torres</strong>. Matchi embodies the adventurous and playful nature of a true explorer, always eager to dive into new challenges with enthusiasm. With a keen eye for detail and a love for video games, Matchi mirrors Maricon’s passion for creativity and precision.</p>
                    <p className='text-justify'>As a character, Matchi represents the perfect blend of curiosity and craftsmanship, much like Maricon's approach to front-end development, UI/UX design, and graphic design. Whether it’s crafting seamless user interfaces, designing visually stunning experiences, or bringing dynamic concepts to life, Matchi is always up for the challenge. With a playful spirit and a sharp focus on detail, Matchi is the ideal companion in the world of design and development, making every project a fun and rewarding adventure.</p>
                    </span>
                </div>
            </div>
            {/*Projects*/}
            <div className='container cont-container projects d-flex flex-row justify-content-center align-items-center z-2'>
                <div className='col-md-4'>
                    <h1 className='Text1'>Previous Projects</h1>
                    <p className='Text2 text-justify'>For the past two years, Matchicreates has been the creative playground where imagination meets innovation. Under this branding, I've brought to life a collection of projects that span across web UI/UX design, front-end development, and graphic design. Each project is a testament to my dedication to creating chic, modern, and dynamic experiences that resonate with users.</p>
                    <p className='Text2 text-justify'>From intuitive user interfaces to visually stunning graphics, every creation under Matchicreeates reflects a blend of technical skill and artistic flair. Whether it's crafting sleek, responsive websites or designing compelling visuals, my goal has always been to merge form and function seamlessly.</p>
                    <p className='Text2 text-justify'>Explore the projects that have shaped Matchicreeates into what it is today—a brand synonymous with creativity, quality, and a passion for design. Join me as I continue to push the boundaries of what's possible, one project at a time.</p>
                </div>
                <div className='col-md d-flex flex-row justify-content-around mock-container'>
                    <img src={Fraiche} alt='fraiche' className='mockup-img' id='fraiche'/>
                    <img src={lipenyo} alt='lipenyo' className='mockup-img d-flex align-self-center' id='lipenyo'/>
                    <img src={olbrs} alt='olbrs' className='mockup-img d-flex align-self-end' id='olbrs'/>
                </div>
            </div> 
        </div>
    );
}

export default Homepage;