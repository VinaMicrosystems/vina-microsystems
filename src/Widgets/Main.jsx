import React from 'react'
import Avatar from './Avatar'


const Hr = () => <hr />

const Main = () => {


    return (
        <>

            <div className="container home">
                <div className="row">
                    <div className="col-md-7"
                        data-aos="fade-up"

                        data-aos-duration="300"

                    >
                        <img src={require('../Assets/img/isometrics.png')} style={{ width: "90%" }} />
                    </div>
                    <div className="col-md-5">
                        <div className="description"
                            data-aos="fade-up"
                            data-aos-duration="300">
                            <h3>Software as a Service</h3>
                            <p className="idea">
                                We work on on-demand, web based software. Enabling data and resource access from a browser on any device that's connected to the internet.
                        </p>

                        </div>
                    </div>
                </div>
                <Hr />
                <div className="row">
                    <div className="col-md-5 iot"
                        data-aos="fade-up"
                        data-aos-delay="300"
                        data-aos-duration="500"

                    >
                        <div className="description"
                            data-aos="zoom-in"
                            data-aos-delay="300"
                            data-aos-duration="500"
                        >
                            <h3>Internet of Things</h3>
                            <p className="idea">
                                The Internet of Things is a network of Internet connected computing devices able to collect and exchange data without human Intervention.
                        </p>


                        </div>
                    </div>

                    <div className="col-md-7" data-aos="fade-in"
                        data-aos-delay="300"
                        data-aos-duration="500"
                        style={{ marginBottom: "25px" }}
                    >
                        <img src={require('../Assets/img/iot.jpg')} style={{ width: "90%" }} />
                    </div>

                </div>
                <Hr />
                <div className="row" style={{ marginTop: "35px" }}>
                    <div className="col-md-7"
                        data-aos="fade-left"

                        data-aos-duration="300"
                    >
                        <img src={require('../Assets/img/hero-image.png')} style={{ width: "90%" }} />
                    </div>
                    <div className="col-md-5"
                        data-aos="zoom-in"

                        data-aos-duration="300"
                        style={{ marginTop: "35px" }}
                    >
                        <div className="description"
                        >
                            <h3>APIs and Databases</h3>
                            <p className="idea">
                                We work on Databases and REST apis for any type of application.
                        </p>

                        </div>
                    </div>
                </div>

                <Hr />
                <div className="row" style={{ paddingTop: "30px" }}>

                    <div className="description-bottom col-md-6 col-sm-6 "
                        data-aos="fade-right"

                        data-aos-duration="300"
                    >
                        <h3>Who are we?</h3>
                        <p className="idea">We are a small group of Engineers and Designers building  Products for businesses</p>
                    </div>
                    <div className="about col-md-6 col-sm-6"

                        data-aos="fade-left"

                        data-aos-duration="300"

                    >
                        <Avatar url={require('../Assets/img/Muindejk.jpeg')}
                            details="Backend engineer" name="MuindeJk " />
                        <Avatar url={require('../Assets/img/collins.jpg')}
                            details=" Web developer" name="Naftali" />
                        <Avatar url={require('../Assets/img/murgor.jpg')}
                            details="Django developer" name="Collins" />

                    </div>

                </div>

            </div>
        </>

    )
}
export default Main