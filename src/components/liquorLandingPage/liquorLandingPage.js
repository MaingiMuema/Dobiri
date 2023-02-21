import React from "react";
import './liquorLandingPage.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from "../navbar/navbar";
import { Icon } from "semantic-ui-react";

//Images
import heroSectionImg from "../../Assets/HeroImg.png";
import Whisky from "../../Assets/william-lawsons-removebg-preview 1.png";
import Wine from "../../Assets/Wine.png";
import Liqueur from "../../Assets/Liqueur.png";
import Gin from "../../Assets/Gin.png";
import Brandy from "../../Assets/Brandy.png";
import Rum from "../../Assets/Rum.png";
import Vodka from "../../Assets/Vodka.png";
import Beer from "../../Assets/Beer.png";
import vodkaWeekly from "../../Assets/vodkaWeekly.png";
import weeklyOffer from "../../Assets/weeklyOffer.png";

const LiquorLandingPage = () =>{
    return(
        <div className="container-fluid">
            <>     
                <Routes>
                    <Route exact path="/" element={<Navbar/>}/>
                </Routes>
            </>

            {/*Section 1*/}
            <div className="container">
                <div className="row rowPadding">
                    <div className="col-lg-7 colPadding">
                        <h1 className="hero-heading">Your <span className="highlight-word">Party</span>, Delivered to Your Doorstep</h1>
                        <br/>
                        <br/>
                        <span className="hero-description">
                            Raise a Toast to Convenient &nbsp;
                            <span className="highlight-word">
                                Liquor Delivery
                            </span>
                        </span>
                        <br/>
                        <br/>
                        <p className="hero-paragraph">
                        Uncork the celebration with just a click! Say goodbye to long lines and crowded liquor stores. 
                        Our liquor delivery service brings your favorite tipples right to your doorstep.
                        </p>
                        <br/>
                        <br/>
                        <div className="arrowBtn">
                            <div className="exploreLabel">Explore</div>
                            <br/>
                            <span className="exploreArrow"> <Icon className="down-arrow" name="long arrow alternate down" /></span>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <span className="ad-highlight">
                            <span className="highlight-word">
                                mapema &nbsp;
                            </span>
                            ndo
                        </span>
                        <img className="img-fluid" src={heroSectionImg} alt="Hero-section-img"/>
                    </div>
                </div>

                {/*Section 2 */}
                <div className="row">
                    <h2 className="text-center">Brands</h2>
                    <div className="row rowPadding">
                        <div className="col-md-3">
                            <Link to="/whisky" className="brand-label">
                                <div className="card">
                                    <img src={Whisky} className="img-fluid whisky" alt="Whisky-Img"/>                                   
                                    <span className="text-center"><b>Whisky</b></span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-3">
                            <Link to="" className="brand-label">
                                <div className="card">
                                    <img src={Wine} className="img-fluid" alt="Wine-Img"/>
                                    <span className="text-center"><b>Wine</b></span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-3">
                            <Link to="" className="brand-label">
                                <div className="card">
                                    <img src={Liqueur} className="img-fluid" alt="Liqueur-Img"/>
                                    <span className="text-center"><b>Liqueur</b></span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-3">
                            <Link to="" className="brand-label">
                                <div className="card">
                                    <img src={Gin} className="img-fluid" alt="Gin-Img"/>
                                    <span className="text-center"><b>Gin</b></span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <Link to="" className="brand-label">
                                <div className="card">
                                    <img src={Brandy} className="img-fluid" alt="Brandy-Img"/>
                                    <span className="text-center"><b>Brandy</b></span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-3">
                            <Link to="" className="brand-label">
                                <div className="card">
                                    <img src={Rum} className="img-fluid" alt="Rum-Img"/>
                                    <span className="text-center"><b>Rum</b></span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-3">
                            <Link to="" className="brand-label">
                                <div className="card">
                                    <img src={Vodka} className="img-fluid" alt="Vodka-Img"/>
                                    <span className="text-center"><b>Vodka</b></span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-3">
                            <Link to="" className="brand-label">
                                <div className="card">
                                    <img src={Beer} className="img-fluid" alt="Beer-Img"/>
                                    <span className="text-center"><b>Beer</b></span>
                                </div>
                            </Link>
                        </div>

                    </div>
                </div>

                {/* Section 3 */}
                <div className="row rowPadding">
                    <span className="weeklyTopLabel"><b>Smirnoff vodka @ Ksh1350</b></span>
                    <div className="col-lg-6">
                        <div>
                            <img src={weeklyOffer} className="img-fluid weeklyOffer" alt="Weekly-offer"/>
                        </div>
                        <img src={vodkaWeekly} className="img-fluid" alt="weeklyTopLiquor"/>
                    </div>
                    <div className="col-lg-6 weekly-top">
                        <h3 className="highlight-word"><b>Weekly Top Selling</b></h3>
                        <span>Get a taste of the weeks top selling drink!</span>
                        <div className="d-flex weeklyTop-section-btns">
                            <button className="secondary-Btn">Add to cart</button>
                            <button className="primary-Btn">Buy now</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      );
}

export default LiquorLandingPage;