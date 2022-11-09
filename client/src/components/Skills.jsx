import React from 'react'

const Skills = () => {
    return (
        <>
            <section className="skills section" id="skills">
                <h2 className="section-title">Skills</h2>

                <div className="skills__container bd-grid">
                    <div>
                        <h2 className="skills__subtitle">Frontend developer</h2>

                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxl-html5 skills__icon'></i>
                                <span className="skills__name">HTML5</span>
                            </div>
                            <div className="skills__bar skills__html">

                            </div>
                            <div>
                                <span className="skills__percentage">95%</span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxl-css3 skills__icon'></i>
                                <span className="skills__name">CSS3</span>
                            </div>
                            <div className="skills__bar skills__css">

                            </div>
                            <div>
                                <span className="skills__percentage">85%</span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxl-javascript skills__icon' ></i>
                                <span className="skills__name">JAVASCRIPT</span>
                            </div>
                            <div className="skills__bar skills__js">

                            </div>
                            <div>
                                <span className="skills__percentage">85%</span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__names">
                                <i class='bx bxl-react skills__icon' ></i>
                                <span className="skills__name">REACT JS</span>
                            </div>
                            <div className="skills__bar skills__ux">

                            </div>
                            <div>
                                <span className="skills__percentage">85%</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="skills__subtitle">Backend developer</h2>

                        <div className="skills__data">
                            <div className="skills__names">
                                <i class='bx bxl-nodejs skills__icon'></i>
                                <span className="skills__name">NODE JS</span>
                            </div>
                            <div className="skills__bar skills__node">

                            </div>
                            <div>
                                <span className="skills__percentage">80%</span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__names">
                                <i class='bx bx-server skills__icon'></i>
                                <span className="skills__name">EXPRESS JS</span>
                            </div>
                            <div className="skills__bar skills__express">

                            </div>
                            <div>
                                <span className="skills__percentage">85%</span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__names">
                                <i class='bx bx-data skills__icon' ></i>
                                <span className="skills__name">MYSQL</span>
                            </div>
                            <div className="skills__bar skills__mongo">

                            </div>
                            <div>
                                <span className="skills__percentage">90%</span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__names">
                                <i class='bx bx-cloud skills__icon'></i>
                                <span className="skills__name">REST APIs</span>
                            </div>
                            <div className="skills__bar skills__rest">

                            </div>
                            <div>
                                <span className="skills__percentage">80%</span>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}

export default Skills
