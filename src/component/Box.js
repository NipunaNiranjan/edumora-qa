import React from "react";
import '../css/Box.css';
import { Avatar } from "@material-ui/core";
import { selectUser } from '../features/userSlice';
import { useSelector } from "react-redux";

function Box() {
    const user = useSelector(selectUser);
    return (
        <div className="Box">
            <div className="Box_info">
                <Avatar
                    src={user.photo} />
                <h5>{user.displayName}</h5>
            </div>
            <div className="Box_description">
                <p>What is your question?</p>
            </div>
        </div>
    )
}

export default Box;
