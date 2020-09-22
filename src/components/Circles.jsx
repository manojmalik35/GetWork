import React from 'react';
// import './circle.css';

const Circles = () => {
    let list = ["AWS", "Node.js", "Javascript"];
    return (
        <React.Fragment>
            <div className="before-circle ml-4 mt-1 mr-4">
                Most popular Skills your students have
            </div>
            <div className="flex-wrapper">
                {
                    list.map((name) => {
                        return (
                            <div className="circle-wrapper">
                                <h6>{name}</h6>
                                <div className="single-chart">
                                    <svg viewbox="0 0 36 36" className="circular-chart blue">
                                        <path className="circle-bg"
                                            d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                                        />
                                        <path className="circle"
                                            stroke-dasharray="80, 100"
                                            d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                                        />
                                        <text x="18" y="20.35" className="percentage">80%</text>
                                    </svg>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </React.Fragment>
    );
}

export default Circles;