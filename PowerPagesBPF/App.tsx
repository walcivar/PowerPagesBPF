import * as React from "react";
import HorizontalTimeline from "./HorizontalTimeline";
import { IInputs } from "./generated/ManifestTypes";

interface AppProps {
    context: ComponentFramework.Context<IInputs>;
}

const App: React.FC<AppProps> = ({ context }) => {
    const stages = context.parameters.stages.raw ? context.parameters.stages.raw.split(",") : [];
    const currentStage = context.parameters.currentstage.raw || "";

    return (
        <div>
            <HorizontalTimeline stages={stages} currentStage={currentStage} />
        </div>
    );
};

export default App;