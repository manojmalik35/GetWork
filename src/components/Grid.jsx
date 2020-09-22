import React from 'react';
import Invite from './Invite';
import NewJobs from './NewJobs';
import StudReg from './StudReg';
import VisComp from './VisComp';
import Circles from './Circles';

const Grid = () => {
    return (
        <div className="grid">

            <div className="frow">
                <div className="invite">
                    <Invite></Invite>
                </div>
                <div className="new-jobs">
                    <NewJobs></NewJobs>
                </div>
                <div className="ctc">
                    CTC Offered
                </div>
            </div>

            <div className="srow">
                <div className="stud-reg">
                    <StudReg no="75000"></StudReg>
                </div>
                <div className="vis-comp">
                    <VisComp no="500"></VisComp>
                </div>
                <div className="circles">
                    <Circles></Circles>
                </div>
            </div>

            <div className="trow">
                <div className="calender">
                    Calender
                </div>
                <div className="stud-placed">
                    Students Placed
                </div>
                <div className="notifications">
                    Recent notifications
                </div>
            </div>

        </div>
    );
}

export default Grid;