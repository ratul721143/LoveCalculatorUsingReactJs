import React from 'react'
import './ProgressBar.css'

function ProgressBar({size,progress,strokeWidth}) {
    const center = size/2;
    const radius= size/2 - strokeWidth/2;
    const circumference = 2*Math.PI * radius;
    const Offset = ((100 - progress) / 100) * circumference;

    
    return (
        <div>
            <svg className="svg" width={size} height={size}>
                <circle
                    className="svg-circle-bg"
                    stroke="red"
                    cx={center}
                    cy={center}
                    r={radius}
                    strokeWidth={strokeWidth}
                />
                <circle
                    className="svg-circle"
                    stroke="blue"
                    cx={center}
                    cy={center}
                    r={radius}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={Offset}
                />
                <text className="svg-circle-text" x={center}  y={center}>
                    {progress}%
                </text>
            </svg>
        </div>
    )
}

export default ProgressBar;
