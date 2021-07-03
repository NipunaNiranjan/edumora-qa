import React from "react";
import '../css/Edumoraqa.css';
import Feed from "./Feed";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Widget from "./Widget";

function Edumoraqa() {
    return (
        <div className="edumoraqa">
            <Navbar />
            <div className=" edumora_content">
                <Sidebar />
                <Feed />
                <Widget />
            </div>
        </div>
    );
}

export default Edumoraqa;