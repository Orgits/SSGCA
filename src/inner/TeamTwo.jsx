import React from 'react';


import HeaderOne from "../components/header/HeaderFour";

import { Link } from 'react-router-dom';
import FooterOne from "../components/footer/FooterOne";
import Breadcrumb from "./Breadcrumb";


function ProjectThree() {
    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'Team Style 1' }
    ];
    return (
        <div className=''>

            <HeaderOne />

            <Breadcrumb title="Team Style 1" breadcrumbs={breadcrumbs} />

            {/* rts team two area */}
            <div className="rts-team-area rts-section-gap team-two">
                <div className="container">
                    <div className="row g-5 mt--20 mt_md--30 mt_sm--0">
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="team-inner-two inner">
                                <Link to={'/team-details'} className="thumbnail">
                                    <img src="assets/images/team/tm/06.jpg" alt="" />
                                </Link>
                                {/* Acquaintance area */}
                                <div className="acquaintance-area">
                                    <div className="header">
                                        <h5 className="title">Kevin Martin</h5>
                                        <span>Consultant</span>
                                    </div>
                                    <div className="acquaintance-social">
                                        <Link to={'#'}>
                                            <i className="fab fa-facebook-f" />
                                        </Link>
                                        <Link to={'#'}>
                                            <i className="fab fa-twitter" />
                                        </Link>
                                        <Link to={'#'}>
                                            <i className="fab fa-instagram" />
                                        </Link>
                                    </div>
                                </div>
                                {/* Acquaintance area */}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="team-inner-two inner">
                                <Link to={'/team-details'} className="thumbnail">
                                    <img src="assets/images/team/tm/07.jpg" alt="" />
                                </Link>
                                {/* Acquaintance area */}
                                <div className="acquaintance-area">
                                    <div className="header">
                                        <h5 className="title">Kevin Martin</h5>
                                        <span>Consultant</span>
                                    </div>
                                    <div className="acquaintance-social">
                                        <Link to={'#'}>
                                            <i className="fab fa-facebook-f" />
                                        </Link>
                                        <Link to={'#'}>
                                            <i className="fab fa-twitter" />
                                        </Link>
                                        <Link to={'#'}>
                                            <i className="fab fa-instagram" />
                                        </Link>
                                    </div>
                                </div>
                                {/* Acquaintance area */}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="team-inner-two inner">
                                <Link to={'/team-details'} className="thumbnail">
                                    <img src="assets/images/team/tm/08.jpg" alt="" />
                                </Link>
                                {/* Acquaintance area */}
                                <div className="acquaintance-area">
                                    <div className="header">
                                        <h5 className="title">Kevin Martin</h5>
                                        <span>Consultant</span>
                                    </div>
                                    <div className="acquaintance-social">
                                        <Link to={'#'}>
                                            <i className="fab fa-facebook-f" />
                                        </Link>
                                        <Link to={'#'}>
                                            <i className="fab fa-twitter" />
                                        </Link>
                                        <Link to={'#'}>
                                            <i className="fab fa-instagram" />
                                        </Link>
                                    </div>
                                </div>
                                {/* Acquaintance area */}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="team-inner-two inner">
                                <Link to={'/team-details'} className="thumbnail">
                                    <img src="assets/images/team/tm/09.jpg" alt="" />
                                </Link>
                                {/* Acquaintance area */}
                                <div className="acquaintance-area">
                                    <div className="header">
                                        <h5 className="title">Kevin Martin</h5>
                                        <span>Consultant</span>
                                    </div>
                                    <div className="acquaintance-social">
                                        <Link to={'#'}>
                                            <i className="fab fa-facebook-f" />
                                        </Link>
                                        <Link to={'#'}>
                                            <i className="fab fa-twitter" />
                                        </Link>
                                        <Link to={'#'}>
                                            <i className="fab fa-instagram" />
                                        </Link>
                                    </div>
                                </div>
                                {/* Acquaintance area */}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="team-inner-two inner">
                                <Link to={'/team-details'} className="thumbnail">
                                    <img src="assets/images/team/tm/10.jpg" alt="" />
                                </Link>
                                {/* Acquaintance area */}
                                <div className="acquaintance-area">
                                    <div className="header">
                                        <h5 className="title">Kevin Martin</h5>
                                        <span>Consultant</span>
                                    </div>
                                    <div className="acquaintance-social">
                                        <Link to={'#'}>
                                            <i className="fab fa-facebook-f" />
                                        </Link>
                                        <Link to={'#'}>
                                            <i className="fab fa-twitter" />
                                        </Link>
                                        <Link to={'#'}>
                                            <i className="fab fa-instagram" />
                                        </Link>
                                    </div>
                                </div>
                                {/* Acquaintance area */}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="team-inner-two inner">
                                <Link to={'/team-details'} className="thumbnail">
                                    <img src="assets/images/team/tm/11.jpg" alt="" />
                                </Link>
                                {/* Acquaintance area */}
                                <div className="acquaintance-area">
                                    <div className="header">
                                        <h5 className="title">Kevin Martin</h5>
                                        <span>Consultant</span>
                                    </div>
                                    <div className="acquaintance-social">
                                        <Link to={'#'}>
                                            <i className="fab fa-facebook-f" />
                                        </Link>
                                        <Link to={'#'}>
                                            <i className="fab fa-twitter" />
                                        </Link>
                                        <Link to={'#'}>
                                            <i className="fab fa-instagram" />
                                        </Link>
                                    </div>
                                </div>
                                {/* Acquaintance area */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FooterOne />


        </div>
    )
}

export default ProjectThree