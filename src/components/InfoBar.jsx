import React from 'react';
const InfoBar = () =>{
    return (
        <div className="infobar">
            <div className="blue-box">
                <p>Universities with complete profile are noticed more by companies.<b>Keep your profile upto date.</b></p>
                <div className="link">
                    <a>Update Profile</a>
                    <i class="fas fa-sign-in-alt"></i>
                </div>
            </div>
            <div className="info-right">
                <i class="fas fa-clipboard-list icon"></i>
                <p>Generate <b>MHRD</b> Reports</p>
            </div>
        </div>
    );
}


export default InfoBar;