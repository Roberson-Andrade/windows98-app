import "../scss/main.scss";
import setupDragFeature from "./eventListeners/eventListeners";
import setupDropzone from "./handlerFunctions/setupDropzoneHandler";

const run = () => {
    //Creates the dropzones (must be called first)
    setupDropzone();

    //Setup the drag n drop feature
    setupDragFeature();
};

export default run;


