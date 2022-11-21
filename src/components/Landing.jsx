import React from 'react';
import { Link } from 'react-router-dom';
import UndrawBooks from '../assets/Undraw_Books.svg';

const Landing = () => {
    return (
        <section id= "landing">
            <header>
                <div className="header__container">
                    <div className="header__description">
                        <h1>Canada's most awarded online library platform</h1>
                        <h2>Find your dream book with <span className='purple'>Librart</span></h2>
                        <a href ="#features">
                            <button className="btn">Browse books</button>
                        </a>
                    </div>
                    <figure className='header__img--wrapper'>
                        <img src={UndrawBooks} alt="" />
                    </figure>
                </div>
            </header>
        </section>
    )
}

export default Landing;