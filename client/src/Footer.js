import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
         <div className="container">
            <div className="footer-nav">
                <ul className="footer-nav-list">
                    <li>HOME PAGE</li>
                    <li>ABOUT US</li>
                    <li>SHARE REGULATION</li>
                    <li>CONTACT</li>
                </ul>
                <div class='footer-content'>
                    <div class="footer-icons">
                        <a href="https://www.facebook.com/pawel.tylczynski" target='_blank' rel='noopener noreferrer'>
                            <i class="fab fa-facebook fa-2x"></i>
                        </a>
                        <a href="www.linkedin.com/in/Paweł-Tylczyński" target='_blank' rel='noopener noreferrer'>                       
                            <i class="fab fa-linkedin fa-2x"></i>
                        </a>
                        <a href="https://twitter.com/" target='_blank' rel='noopener noreferrer'>
                            <i class="fab fa-twitter fa-2x"></i>
                        </a>
                    </div>
                    <p>Copyright &copy; CodeMasters</p>
                </div>
             </div>
         </div>
     </div>
    )
}

export default Footer;