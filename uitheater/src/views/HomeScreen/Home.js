import React, { useEffect, useState } from "react";
import "./home.css"
import "../../assets/fonts/fonts.css"
import MoviesNavBar from "../../components/moviesNavBar/moviesNavBar";
import MovieBlock from "../../components/movieBlock/movieBlock";
import { SVG_LeftArrow } from "../../assets/icons";

function Home() {
    


    const [currentTab, setCurrentTab] = useState("NOW SHOWING")

    const handleTabChanged = (tabName) => {
        setCurrentTab(tabName)
    }

    return (
        <div className="container">
            <div className="movieContainer">
                <div className="movieNavContainer">
                    <MoviesNavBar 
                        onChangeTab = {handleTabChanged}
                        selectedTab = {currentTab}
                        className="moviesNav"/>
                </div>
                <div className="movieContent">
                    <div className="movieWrap">
                        <div className="movieLoad">
                            <div>
                                <img className="arrow" src={SVG_LeftArrow}/>
                            </div>
                            <div>
                                <MovieBlock></MovieBlock>
                            </div>
                            <div>
                                <MovieBlock></MovieBlock>
                            </div>
                            <div>
                                <MovieBlock></MovieBlock>
                            </div>
                            <div>
                                <MovieBlock></MovieBlock>
                            </div>
                            <div>
                                <MovieBlock></MovieBlock>
                            </div>
                            <div>
                                <img className="arrow arrow-right" src={SVG_LeftArrow}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
