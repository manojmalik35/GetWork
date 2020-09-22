import React from 'react';
import Dell from './dell.jpg';
const Invite = () => {
    let list = ["Dell Incorporation", "Dell Incorporation", "Dell Incorporation", "Dell Incorporation"];
    return ( 
        <React.Fragment>
            <h3 className="ml-1">Invite Companies</h3>
            {
                list.map((item)=>{
                    return (
                        <div className="dell mb-2">
                            <img src={Dell} className="dell-img" alt="dell-img"></img>
                            <span>{item}</span>
                        </div>
                    )
                })
            }
            <a className="ml-1">View all Companies --></a>
        </React.Fragment>
     );
}
 
export default Invite;