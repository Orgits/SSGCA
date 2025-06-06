import React from 'react';
import { Link } from 'react-router-dom';

function BannerFive() {


    return (
        <div>
            {/* banner area start three */}
            <div className="rts-banner-area banner-three banner-four banner-five" id='banner'>
                <div className=" bg_banner-three bg_banner-four bg_image rts-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="banner-three-inner banner-four-inner banner-five-inner">
                                    <div className="banner-title">
                                        <span className="subtitle-banner">
                                            <strong>WELCOME!</strong> START GROWING YOUR BUSINESS
                                        </span>
                                        {/* type headline start*/}
                                        <h1 className="title">
                                            Build Your Effective <br />
                                            <div className="changebox">
                                                <span>Business</span>
                                                <br />
                                            </div>
                                            Strategy
                                        </h1>
                                    </div>
                                    <p className="disc">
                                   <b> Providing expert financial and consulting solutions to drive growth and success.</b>
                                        <br /> <b>SSGA & Co. empowers businesses with strategic planning and compliance support.</b>
                                    </p>
                                    <div className="button-group">
                                        <Link to={'/pricing-plane'} className="rts-btn btn-primary-3 btn-primary-4">
                                            Free Consultant
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* banner area end three */}
        </div>
    )


}

export default BannerFive