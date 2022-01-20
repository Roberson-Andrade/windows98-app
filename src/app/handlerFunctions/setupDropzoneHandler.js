const setupDropzone = () => {
    //create dropzones according with the width of the page and get the workspace element
    const workspace = document.querySelector('.workspace');
    const dropzonesList = document.querySelector('.workspace').childNodes;

    const numberOfDropzonesRequired = Math.floor((screen.availWidth + 10) / 110) * 7;
    const numberOfDropzonesExistent = workspace.childElementCount;

    const numberOfDropzonesMissing = numberOfDropzonesRequired - numberOfDropzonesExistent;

    // console.log(numberOfDropzonesMissing)
    // console.log(numberOfDropzonesRequired)

    if(numberOfDropzonesExistent !== numberOfDropzonesRequired) {
        for(let i = 0; i < numberOfDropzonesMissing; i++) {
            const dropzoneDiv = document.createElement('div');
            const workspace = document.querySelector('.workspace');
            dropzoneDiv.className = 'workspace__drop-zone';
            workspace.appendChild(dropzoneDiv);
        };
    };
};

export default setupDropzone;