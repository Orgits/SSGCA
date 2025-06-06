import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavOnepage from './NavOnepage';
import SideMenu from './SideMenu';

function HeaderTwo() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    const [isSticky, setIsSticky] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div>

            <header className={`header-two header--sticky  ${isSticky ? 'sticky' : ''}`}>
                <div className="header-top">
                    <div className="content">
                        <div className="left-header-top">
                            <p className="top-details">
                                Are you ready to grow up your business?{" "}
                                <Link to={'#'}>
                                    Contact Us <i className="fal fa-arrow-right" />
                                </Link>
                            </p>
                        </div>
                        <div className="right-header-top">
                            <div className="working-time">
                                <i className="far fa-clock" />
                                <span>Working: 10.00am - 06.00pm</span>
                            </div>
                            <div className="ht-social">
                                <span>Visit Us:</span>
                                <ul>
                                    <li>
                                        <Link to={'#'}>
                                            <i className="fab fa-facebook-f" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={'#'}>
                                            <i className="fab fa-twitter" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={'#'}>
                                            <i className="fab fa-linkedin-in" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={'#'}>
                                            <i className="fab fa-instagram" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-header">
                    <div className="content">
                        <div className="header-left">
                            <Link className="thumbnail" href="index.html">
                                <img src="assets/images/logo/logo-4.svg" alt="" />
                            </Link>
                            <NavOnepage />
                        </div>
                        <div className="header-right">
                            <div className="call-area">
                                <div className="icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={30}
                                        height={30}
                                        viewBox="0 0 30 30"
                                        fill="none"
                                    >
                                        <path
                                            d="M14.2251 11.5362C13.7279 11.5914 13.3688 12.061 13.3965 12.5858C13.4517 13.083 13.8936 13.4697 14.4461 13.4144C14.9985 13.3592 15.5509 13.5249 15.9376 13.9116C16.352 14.3259 16.5177 14.8784 16.4624 15.4308C16.4072 15.9832 16.7939 16.4252 17.2911 16.4804C17.5949 16.508 17.8711 16.3975 18.0645 16.2042C18.2026 16.0661 18.3131 15.8451 18.3407 15.6518C18.4512 14.4917 18.0645 13.3868 17.2635 12.5858C16.4901 11.8124 15.3852 11.4257 14.2251 11.5362ZM13.866 7.80729C13.3136 7.86253 12.9545 8.3321 13.0098 8.82928C13.0374 9.35409 13.507 9.71317 14.0318 9.68554C15.7443 9.51982 17.3739 10.0999 18.5617 11.2876C19.7218 12.4477 20.3294 14.105 20.1637 15.8175C20.1085 16.3147 20.4675 16.7842 20.9923 16.8119C21.2962 16.8395 21.5448 16.7566 21.7381 16.5633C21.9038 16.3975 21.9867 16.2042 22.042 15.9832C22.2905 13.7459 21.5171 11.5362 19.9151 9.93414C18.3131 8.3321 16.131 7.58632 13.866 7.80729ZM13.507 4.07841C12.9821 4.10603 12.6231 4.57559 12.6507 5.1004C12.7059 5.59758 13.1479 5.98428 13.6727 5.95666C16.4901 5.68045 19.2522 6.61957 21.2409 8.60831C23.202 10.5694 24.1688 13.3592 23.8926 16.1766C23.865 16.7014 24.2517 17.1433 24.7488 17.1986C25.0527 17.2262 25.3289 17.1157 25.5222 16.9223C25.6603 16.7842 25.7432 16.5909 25.7708 16.3423C26.1299 13.0001 24.9698 9.68554 22.5668 7.28249C20.1361 4.85181 16.8768 3.74695 13.507 4.07841ZM10.3581 15.0165C10.662 14.7679 10.8001 14.2983 10.6343 13.9116L9.22564 10.6799C9.05991 10.238 8.56273 10.017 8.14841 10.0999L5.11006 10.818C4.69574 10.9009 4.3919 11.3152 4.3919 11.7571C4.3919 19.3254 10.5515 25.485 18.1197 25.485C18.5617 25.485 18.976 25.1811 19.0588 24.7668L19.777 21.7285C19.8599 21.3141 19.6389 20.817 19.197 20.6512L15.9653 19.2425C15.5786 19.0768 15.109 19.2149 14.8604 19.5187L13.5346 21.1208C11.4353 20.1264 9.75045 18.4415 8.75608 16.3423L10.3581 15.0165Z"
                                            fill="#145886"
                                        />
                                    </svg>
                                </div>
                                <div className="number-area">
                                    <span>Call us anytime</span>
                                    <Link href="tel:123-456-7890">
                                        <h6 className="call">+256 21458.2146</h6>
                                    </Link>
                                </div>
                            </div>
                            <Link className="rts-btn btn-primary-2 menu-block-none" to={'#'}>
                                Get A Consultant
                            </Link>
                            <button
                                id="menu-btn"
                                className="menu rts-btn btn-primary-alta ml--20" onClick={toggleSidebar}
                            >
                                <img
                                    className="menu-dark"
                                    src="assets/images/icon/menu.png"
                                    alt="Menu-icon"
                                />
                                <img
                                    className="menu-light"
                                    src="assets/images/icon/menu-light.png"
                                    alt="Menu-icon"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <SideMenu isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </div>
    )
}

export default HeaderTwo