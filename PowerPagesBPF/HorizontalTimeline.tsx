import * as React from "react";
import "./HorizontalTimeline.css";

interface TimelineProps {
    stages: string[];
    currentStage: string;
}

const HorizontalTimeline: React.FC<TimelineProps> = ({ stages, currentStage }) => {
    return (
        <div className="horizontal-timeline">
            <div className="line" />
            {stages.map((stage, index) => (
                <div key={index} className={`timeline-item ${stage === currentStage ? "current" : ""}`}>
                    <div className="circle" />
                    <div className="stage-name">{stage}</div>
                </div>
            ))}
        </div>
    );
};

export default HorizontalTimeline;