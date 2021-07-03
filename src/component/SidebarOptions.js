import React from "react";
import '../css/SidebarOptions.css';
import Add from "@material-ui/icons/Add";
function SidebarOptions() {
    return (
        <div className="sidebarOptions">
            <div className="sidebarOption">
                <img src="https://www.visionlearning.com/images/marquee-biology.jpg" alt="" />
                <p>Biology</p>
            </div>
            <div className="sidebarOption">
                <img src="https://digitalcommons.mtu.edu/assets/md5images/51f8ab4cd395342e06c99670dc052b80.jpg" alt="" />
                <p>Chemistry</p>
            </div>
            <div className="sidebarOption">
                <img src="https://static.kent.ac.uk/nexus/ems/514.jpg" alt="" />
                <p>Physics</p>
            </div>

            <div className="sidebarOption">
                <Add />
                <p className="text"><a href="https://www.google.com">Discover More</a></p>
            </div>
        </div>
    )
}
export default SidebarOptions;