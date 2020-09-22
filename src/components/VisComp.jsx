import React from 'react';

const VisComp = (props) => {
    return ( 
        <React.Fragment>
            <i className="fas fa-users icon mr-2"></i>
            <div className="mr-3 mt-2">
                <h5>{props.no}</h5>
            </div>
            <div>
                Visited <br></br><b>Companies</b>
            </div>
        </React.Fragment>
     );
}
 
export default VisComp;