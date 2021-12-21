import React from 'react';

function Footer (props) {
    return(
        <footer className='footer'>
            <p>© All rights reserved</p>
            <p style={{fontSize:"1rem",fontWeight: "normal",marginTop:'10px'}}>Website by Daivik</p>
            <div className='footer-icons'>
                <a href="https://www.instagram.com/daivik_d/" target='blank'>
                    <span className='fab fa-instagram'></span>
                </a>{' '}
                <a href="https://www.linkedin.com/in/daivik-devadiga-78386b221/" target='blank'>
                    <span className='fab fa-linkedin'></span>
                </a>{' '}
                <a href='https://github.com/Da1v1kd' target='blank'>
                    <span className='fab fa-github'></span>
                </a>{' '}
            </div>
        </footer>
    )
}

export default Footer