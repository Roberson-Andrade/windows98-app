import "../scss/main.scss";
import startUpAnimation from "./animations/startUpAnimation";
import setupDragFeature from "./eventListeners/eventListeners";
import setupDropzone from "./handlerFunctions/setupDropzoneHandler";

const run = () => {
    startUpAnimation();
    //Creates the dropzones (must be called first)
    setupDropzone();

    //Setup the drag n drop feature
    setupDragFeature();
};

export default run;


