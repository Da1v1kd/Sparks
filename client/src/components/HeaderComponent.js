import React from 'react';
import { Jumbotron } from 'react-bootstrap';

function Header (props) {
    return(
        <Jumbotron className='header'>
            <h1>Pixel Bank</h1>
            <img className='logo' src="https://png.pngtree.com/png-vector/20191021/ourlarge/pngtree-p-letter-design-png-image_1770406.jpg" height="100px" alt="Logo"/>
            <h3>The bank you can trust!</h3>
        </Jumbotron>
    )
}

export default Header