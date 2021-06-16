import React from 'react'

const Slider = () => {
    return (
        <>
            <section className="work section" id="work">
                <h2 className="section-title work__head">Portfolio</h2>
                <div id="carouselExampleIndicators" class="carousel slide carosel__a" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active work__bg" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" className='work__bg' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" className='work__bg' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" className='work__bg' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div className='container work__section'>
                                <div className='row gx-5'>
                                    <div className="col-md-6 work__size">
                                        <div className="work__im">
                                            <img src="/img/photo.jpg" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 mt-md-0 mt-4 d-flex align-items-center">
                                        <div>
                                            <h2 className="work__subtitle">YelpCamp</h2>
                                            <p>
                                                Yelpcamp is a campground rating app where users can create their campgrounds and view, comment on other's campgrounds.

                                            </p>
                                            <div className='work__a mt-2 d-flex align-items-center'>
                                                <a href="#!" className='text-white' >Demo</a>
                                                <i class='bx bx-chevrons-right ms-2 text-white'></i>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div class="carousel-item ">
                            <div className='container work__section'>
                                <div className='row gx-5'>
                                    <div className="col-md-6 work__size">
                                        <div className="work__im">
                                            <img src="/img/showcase.jpg" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 mt-md-0 mt-4 d-flex align-items-center">
                                        <div>
                                            <h2 className="work__subtitle">DevConnector</h2>
                                            <p >
                                                DevConnector is a social network-based application where users can connect and post articles based on software development trends.
                                            </p>
                                            <div className='work__a mt-2 d-flex align-items-center'>
                                                <a href="#!" className='text-white' >Demo</a>
                                                <i class='bx bx-chevrons-right ms-2 text-white'></i>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div class="carousel-item ">
                            <div className='container work__section'>
                                <div className='row gx-5'>
                                    <div className="col-md-6 work__size">
                                        <div className="work__im">
                                            <img src="/img/photo-4.jpg" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 mt-md-0 mt-4 d-flex align-items-center">
                                        <div>
                                            <h2 className="work__subtitle">Bank Search Application</h2>
                                            <p >
                                                It is a single-page application where users can search banks. It fetches the data from the server and caches the data using useSWR, which is a react hook.

                                            </p>
                                            <div className='work__a mt-2 d-flex align-items-center'>
                                                <a href="#!" className='text-white' >Demo</a>
                                                <i class='bx bx-chevrons-right ms-2 text-white'></i>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div class="carousel-item ">
                            <div className='container work__section'>
                                <div className='row gx-5'>
                                    <div className="col-md-6 work__size">
                                        <div className="work__im">
                                            <img src="/img/trip.jpg" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 mt-md-0 mt-4 d-flex align-items-center">
                                        <div>
                                            <h2 className="work__subtitle">Trip App</h2>
                                            <p >
                                                Trip App is an excellent and straightforward app to organize your trips with a very easy-to-use interface. It can help you to make a list of your travels, and also, you can delete specific trips.

                                            </p>
                                            <div className='work__a mt-2 d-flex align-items-center'>
                                                <a href="#!" className='text-white' >Demo</a>
                                                <i class='bx bx-chevrons-right ms-2 text-white'></i>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev"><i class='bx bx-chevron-left work__icon' aria-hidden="true"></i><span class="visually-hidden">Previous</span></button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next"><i class='bx bx-chevron-right work__icon-1' aria-hidden="true"></i><span class="visually-hidden">Next</span></button>
                </div>
            </section>

        </>
    )
}

export default Slider
