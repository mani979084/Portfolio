import React from 'react'

const About = () => {
    return (
        <>
            <section className="about section " id="about">
                <h2 className="section-title">About</h2>
                <div className="about__container bd-grid about__margin">
                    <div>
                        <h2 className="about__subtitle">About my craft and knowledge.</h2>
                        <p className="about__text ab_t text-secondary">I'm passionate about creating interesting web assets with a strong emphasis on clean code.</p></div>
                </div>
                <div className="about__container bd-grid about__margin">

                    <div className="about__img ab_i">
                        <img src="/img/web-2.png" alt="" />
                    </div>

                    <div>

                        <p className="about__text about__text1 text-secondary ">I strive to create interesting and attractive front-end assets following a component-based approach. I’m constantly researching new technologies, best practices, and techniques to tune my products for the target audience.</p>
                    </div>
                </div>
                <div className="about__container bd-grid">



                    <div id='about_order_1'>

                        <p className="about__text about__text2 text-secondary ">My knowledge of back-end development allows me to build APIs, databases, and other server-side-related features. These techniques help me to create complete applications that not only handle a vast amount of data but can serve it in a secure, optimized way.

                        </p>
                    </div>
                    <div id='about_order_2' className="about__img about__img1">
                        <img src="/img/end-1-dp.png" alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
