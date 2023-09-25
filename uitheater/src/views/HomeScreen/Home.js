import React, { useEffect, useState } from "react";
import "./home.css"
import "../../assets/fonts/fonts.css"
import MoviesNavBar from "../../components/moviesNavBar/moviesNavBar";
import MovieBlock from "../../components/movieBlock/movieBlock";

function Home() {
    


    const [currentTab, setCurrentTab] = useState("NOW SHOWING")

    const handleTabChanged = (tabName) => {
        setCurrentTab(tabName)
    }

    return (
        <div className="container">
            <div className="movieContainer">
                <MoviesNavBar 
                    onChangeTab = {handleTabChanged}
                    selectedTab = {currentTab}
                    className="moviesNav"/>
            </div>
            <div className="movieContent">
                <div className="movieWrap">
                    <div className="movieLoad">
                        <div></div>
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
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
