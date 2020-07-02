import React from 'react';
import style from './recipe.module.css';

function Footer(props) {
    return (
        <footer className={style.footer} >Created by < a href="https://www.saffataziz.site/" rel="noopener noreferrer"
        target="_blank"> Saffat Aziz</a></footer>
    );
}

export default Footer;
