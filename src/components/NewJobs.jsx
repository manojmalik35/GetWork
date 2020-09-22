import React from 'react';
import McDonald from './mcdonald.png';
const NewJobs = () => {
    let list = [];
    for (let i = 0; i < 3; i++) {
        list.push(
            <div className="jobs mb-2">
                <img src={McDonald} className="mc-img ml-2 mr-3" alt="dell-img"></img>
                <div className="job-details">
                    <span><b>Sales Manager</b></span>
                    <span>Mc. Donalds</span>
                    <span>Delhi</span>
                </div>
            </div>
        )
    }
    return (
        <React.Fragment>
            <h3 className="ml-1">New Jobs</h3>
            {list}
            <a className="ml-1">View all New Jobs --></a>
        </React.Fragment>
    );
}

export default NewJobs;