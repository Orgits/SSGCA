import React from 'react'
import { Link } from 'react-router-dom';
function BlogThree() {
    return (
        <div>
            {/* tart latest blog area */}
            <div className="rts-latest-blog-three rts-section-gapBottom" id='blog-section'>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="title-area blog-three text-center">
                                <span>Weekly Updates</span>
                                <h2 className="title">Our Latest Updates</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 mt--20">
                        {/* single blog */}
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="blog-three-wrapepr">
                                <Link to={'/blog/1'} className="main-thumbnail">
                                    <img src="assets/images/blog/05.jpg" alt="Blog_image" />
                                    <span className="badge-blog">SSGA & Co.
                                    </span>
                                </Link>
                                <div className="blog-body">
                                    <div className="blog-header">
                                        <div className="left">
                                            <i className="far fa-clock" />
                                            <span>15 Feb, 2025</span>
                                        </div>
                                        <div className="right">
                                            <i className="far fa-user" />
                                            <span>By Admin</span>
                                        </div>
                                    </div>
                                    <div className="body">
                                        <Link to={'/blog/1'}>
                                            <h5 className="title">
                                            New Tax Regulations: What Businesses Need to Know in 2024
                                            </h5>
                                        </Link>
                                        <Link to={'/blog/1'} className="rts-btn btn-light-3">
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* single blog */}
                        {/* single blog */}
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="blog-three-wrapepr">
                                <Link to={'/blog/2'} className="main-thumbnail">
                                    <img src="assets/images/blog/06.jpg" alt="Blog_image" />
                                    <span className="badge-blog">SSGA & Co.</span>
                                </Link>
                                <div className="blog-body">
                                    <div className="blog-header">
                                        <div className="left">
                                            <i className="far fa-clock" />
                                            <span>20 Feb, 2025</span>
                                        </div>
                                        <div className="right">
                                            <i className="far fa-user" />
                                            <span>By Admin</span>
                                        </div>
                                    </div>
                                    <div className="body">
                                        <Link to={'/blog/2'}>
                                            <h5 className="title">
                                            Strategic Business Growth: Proven Techniques for Scaling Successfully
                                            </h5>
                                        </Link>
                                        <Link to={'/blog/2'} className="rts-btn btn-light-3">
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* single blog */}
                        {/* single blog */}
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="blog-three-wrapepr">
                                <Link to={'/blog/3'} className="main-thumbnail">
                                    <img src="assets/images/blog/07.jpg" alt="Blog_image" />
                                    <span className="badge-blog">SSGA & Co.</span>
                                </Link>
                                <div className="blog-body">
                                    <div className="blog-header">
                                        <div className="left">
                                            <i className="far fa-clock" />
                                            <span>25 Feb, 2025</span>
                                        </div>
                                        <div className="right">
                                            <i className="far fa-user" />
                                            <span>By Admin</span>
                                        </div>
                                    </div>
                                    <div className="body">
                                        <Link to={'/blog/3'}>
                                            <h5 className="title">
                                            How Financial Audits Can Strengthen Your Business & Boost Investor Confidence”
                                            </h5>
                                        </Link>
                                        <Link to={'/blog/3'} className="rts-btn btn-light-3">
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* single blog */}
                    </div>
                </div>
            </div>
            {/* tart latest blog area End */}
        </div>
    )
}

export default BlogThree