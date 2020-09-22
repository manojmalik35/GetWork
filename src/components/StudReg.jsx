import React from 'react';

const StudReg = (props) => {
    return ( 
        <React.Fragment>
            <i className="fas fa-graduation-cap mr-3"></i>
            <div className="mr-3">
                <h5>{props.no}</h5>
            </div>
            <div>
                Students <b>Registered</b>
            </div>
        </React.Fragment>
     );
}
 
export default StudReg;