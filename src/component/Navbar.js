import React, { useState } from "react";
import HomeIcon from '@material-ui/icons/Home';
import FeaturedPlayListOutlinedIcon from "@material-ui/icons/FeaturedPlayListOutlined";
import AssignmentTurnedInOutlinedIcon from "@material-ui/icons/AssignmentTurnedInOutlined";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar, Button, Input } from "@material-ui/core";
import LanguageIcon from "@material-ui/icons/Language";
import "../css/Navbar.css";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import db, { auth } from "../firebase";
import { ExpandMore } from "@material-ui/icons";
import firebase from "firebase";
import LinkIcon from '@material-ui/icons/Link';


function Navbar() {
    Modal.setAppElement("#root");
    const user = useSelector(selectUser);

    const [IsmodalOpen, setIsModalOpen] = useState(false);
    const [input, setInput] = useState("");
    const [inputUrl, setInputUrl] = useState("");
    const questionName = input;

    const handleQuestion = (e) => {
        e.preventDefault();
        setIsModalOpen(false);

        if (questionName) {
            db.collection("questions").add({
                user: user,
                question: input,
                imageUrl: inputUrl,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            });
        }

        setInput("");
        setInputUrl("");
    };

    return (
        <div className="eHeader">
            <div className="eHeader_logo">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6mkuf2RxAaLyRRnvDGJIubbtoNaYfKYa8uA&usqp=CAU"
                    alt=""
                />
            </div>
            <div className="eHeader_icons">
                <div className="active eHeader_icon">
                    <HomeIcon />
                </div>
                <div className="eHeader_icon">
                    <FeaturedPlayListOutlinedIcon />
                </div>
                <div className="eHeader_icon">
                    <AssignmentTurnedInOutlinedIcon />
                </div>
                <div className="eHeader_icon">
                    <PeopleAltOutlinedIcon />
                </div>
                <div className="eHeader_icon">
                    <NotificationsOutlinedIcon />
                </div>
            </div>
            <div className="eHeader_input">
                <SearchIcon />
                <input type="text" placeholder="Search " />
            </div>
            <div className="eHeader_Rem">
                <div className="eHeader_avatar">
                    <Avatar
                        onClick={() => auth.signOut()}
                        className="Avatar"
                        src={
                            user.photo
                                ? user.photo
                                : "https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573"
                        }
                    />
                </div>
                <LanguageIcon />
                <Button onClick={() => setIsModalOpen(true)}>Add Question</Button>
                <Modal
                    isOpen={IsmodalOpen}
                    onRequestClose={() => setIsModalOpen(false)}
                    shouldCloseOnOverlayClick={false}
                    style={{
                        overlay: {
                            width: 700,
                            height: 650,
                            backgroundColor: "rgba(0,0,0,0.8)",
                            zIndex: "1000",
                            top: "50%",
                            left: "50%",
                            marginTop: "-300px",
                            marginLeft: "-350px",
                        },
                    }}
                >
                    <div className="modal_title">
                        <h5>Add Question</h5>
                        <h5>Share Link</h5>
                    </div>
                    <div className="modal_info">
                        <Avatar
                            className="avatar"
                            src={
                                user.photo
                                    ? user.photo
                                    : "https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573"
                            }
                        />
                        <p>{user.disPlayName ? user.disPlayName : user.email} asked</p>
                        <div className="modal_scope">
                            <PeopleAltOutlinedIcon />
                            <p>Public</p>
                            <ExpandMore />
                        </div>
                    </div>
                    <div className="modal_Field">
                        <Input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            type="text"
                            placeholder="Start your question with 'What', 'How', 'Why', etc. "
                        />
                        <div className="modal_fieldLink">
                            <LinkIcon />
                            <input
                                value={inputUrl}
                                onChange={(e) => setInputUrl(e.target.value)}
                                type="text"
                                placeholder="Optional: include a link that gives context"
                            ></input>
                        </div>
                    </div>
                    <div className="modal_buttons">
                        <button className="cancle" onClick={() => setIsModalOpen(false)}>
                            Cancel
                        </button>
                        <button type="sumbit" onClick={handleQuestion} className="add">
                            Add Question
                        </button>
                    </div>
                </Modal>
            </div>
        </div>
    );

}

export default Navbar;