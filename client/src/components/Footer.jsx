import React from 'react'

const Footer = ({ style }) => {

    const year = new Date().getFullYear();

    return (
        <>
            <footer className="footer" style={style}>
                <p className="footer__title">Mani</p>
                <div className="footer__social">
                    <a href="#" className="footer__icon"><i className='bx bxl-facebook'></i></a>
                    <a href="#" className="footer__icon"><i className='bx bxl-instagram'></i></a>
                    <a href="#" className="footer__icon"><i className='bx bxl-twitter'></i></a>
                </div>
                <p>&#169; {year} copyright all rights reserved</p>
            </footer>
        </>
    )
}

export default Footer
