import "../scss/main.scss";


const setupDropzone = () => {
    //create dropzones according with the width of the page and get the workspace element
    const workspace = document.querySelector('.workspace')
    const dropzonesList = document.querySelector('.workspace').childNodes

    const numberOfDropzonesRequired = Math.floor((screen.availWidth + 10) / 110) * 7
    const numberOfDropzonesExistent = workspace.childElementCount

    const numberOfDropzonesMissing = numberOfDropzonesRequired - numberOfDropzonesExistent

    // console.log(numberOfDropzonesMissing)
    // console.log(numberOfDropzonesRequired)

    if(numberOfDropzonesExistent !== numberOfDropzonesRequired) {
        for(let i = 0; i < numberOfDropzonesMissing; i++) {
            const dropzoneDiv = document.createElement('div')
            const workspace = document.querySelector('.workspace')
            dropzoneDiv.className = 'workspace__drop-zone'
            workspace.appendChild(dropzoneDiv)
        }
    }
}
window.addEventListener('resize', setupDropzone)
const setupDragFeature = () => {
    //Select the drag items
    const dragItems = document.querySelectorAll('.workspace__item');

    //add the events listener to the drag items
    dragItems.forEach((dragItem) => { 
        dragItem.addEventListener('dragstart', dragStart);
        dragItem.addEventListener('drag', dragging);
        dragItem.addEventListener('dragend', dragEnd);
    });

    //select the drop zones
    const dropZones = document.querySelectorAll('.workspace__drop-zone');

    //add the events to the dropzones
    dropZones.forEach((dropZone) => {
        dropZone.addEventListener('dragenter', dragEnter);
        dropZone.addEventListener('dragover', dragOver);
        dropZone.addEventListener('dragleave', dragLeave);
        dropZone.addEventListener('drop', drop);
    });
};

//Drag items functions
const dragStart = ({ target }) => {
    target.classList.add('is-dragging')
    console.log('start')
}

const dragging = (e) => {
    // console.log('Dragging')
}

const dragEnd = ({ target }) => {
    target.classList.remove('is-dragging')
    console.log('drag stopped')
}

//Dropzone functions
const dragEnter = () => {
    console.log('Entered in the zone')
};

const dragOver = (event) => {
    event.preventDefault()
    const cardBeingDragged = document.querySelector('.is-dragging')

    if(event.target.classList.contains('workspace__drop-zone')) {
        event.target.appendChild(cardBeingDragged)
    }
};

const dragLeave = () => {
    console.log('ins\'t in the zone')
};

const drop = () => {
    console.log('has dropped in the zone')
};

setupDropzone()
setupDragFeature()