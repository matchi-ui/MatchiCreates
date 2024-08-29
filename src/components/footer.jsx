import React from "react";
import './css/footer.css';

function Footer(){
    return(
        <div class="col-md mt-5 p-5 footer">
                <h2>Contact Me</h2>
                <p className='contact-info'>If you have any questions or would like to get in touch, feel free to reach out via any of the methods below:</p>
                
                <div className="contact-info d-flex flex-row justify-content-around">
                    <div className="contact-item my-2">
                    <h4>Email</h4>
                    <a href="mailto:detorresmaricon1208@gmail.com">detorresmaricon1208@gmail.com</a>
                    </div>
                    
                    <div className="contact-item">
                    <h4>Phone</h4>
                    <p>(+63)9764651155</p>
                    </div>
                    
                    <div className="contact-item">
                    <h4>Social Media</h4>
                    <ul className="social-links">
                       {/* <li><a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">Instagram</a></li>*/}
                        <li><a href="https://www.linkedin.com/in/maricon-de-torres-448153284/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        <li><a href="https://github.com/matchi-ui" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    </ul>
                    </div>
                </div>
            </div>
    );
}

export default Footer;