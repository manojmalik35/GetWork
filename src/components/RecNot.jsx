import React from 'react';

const RecNot = () => {
    let list = [];
    for(let i = 0; i < 6; i++){
        list.push(
            <div>-Company A invited you for placements.</div>
        )
    }
    return (
        <div>
            <h3>Recent Notifications</h3>
            {list}
            <a href="">View All Notifications -></a>
        </div>
      );
}
 
export default RecNot;