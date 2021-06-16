import React, { useEffect } from 'react'

const Navbar = ({ style }) => {

    useEffect(() => {
        /*===== MENU SHOW =====*/
        const showMenu = (toggleId, navId) => {
            const toggle = document.getElementById(toggleId),
                nav = document.getElementById(navId)

            if (toggle && nav) {
                toggle.addEventListener('click', () => {
                    nav.classList.toggle('show')
                })
            }
        }
        showMenu('nav-toggle', 'nav-menu')
        /*===== ACTIVE AND REMOVE MENU =====*/
        const navLink = document.querySelectorAll('.nav__link');

        function linkAction() {
            /*Active link*/
            navLink.forEach(n => n.classList.remove('active-1'));
            this.classList.add('active-1');

            /*Remove menu mobile*/
            const navMenu = document.getElementById('nav-menu')
            navMenu.classList.remove('show')
        }
        navLink.forEach(n => n.addEventListener('click', linkAction));
    }, [])

    return (
        <>
            <header className="l-header" style={style}>
                <nav className="nav bd-grid">
                    <div className='nav__brand'>
                        <a href="#" className="nav__logo">Mani</a>
                    </div>

                    <div className="nav__menu" id="nav-menu">
                        <ul className="nav__list">
                            <li className="nav__item"><a href="#home" className="nav__link active-1">Home</a></li>
                            <li className="nav__item"><a href="#about" className="nav__link">About</a></li>
                            <li className="nav__item"><a href="#skills" className="nav__link">Skills</a></li>
                            <li className="nav__item"><a href="#work" className="nav__link">Portfolio</a></li>
                            <li className="nav__item"><a href="#contact" className="nav__link">Contact</a></li>
                        </ul>
                    </div>

                    <div className="nav__toggle" id="nav-toggle">
                        <i className='bx bx-menu'></i>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar
