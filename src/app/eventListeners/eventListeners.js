import { dragEnd, dragStart } from "../handlerFunctions/dragItemHandlers";
import dragOver from "../handlerFunctions/dropzoneHandlers";
import selectWorkspaceApp from "../handlerFunctions/SelectedWorkspaceHandler";
import setupDropzone from "../handlerFunctions/setupDropzoneHandler";

const setupDragFeature = () => {
    //Select the drag items
    const dragItems = document.querySelectorAll('.workspace__item');

    //add the events listener to the drag items
    dragItems.forEach((dragItem) => { 
        dragItem.addEventListener('dragstart', dragStart);
        dragItem.addEventListener('dragend', dragEnd);

        //add event to select the workspace app
        dragItem.addEventListener('click', selectWorkspaceApp)
    });

    //select the drop zones
    const dropZones = document.querySelectorAll('.workspace__drop-zone');

    //add the events to the dropzones
    dropZones.forEach((dropZone) => {
        dropZone.addEventListener('dragover', dragOver);
    });

    //remove the selected class when the user click outside the box
    document.addEventListener('click', ({target}) => {
        const dragItems = document.querySelectorAll('.workspace__item')
        const dragArrays = [...dragItems]

        if(!(dragArrays.includes(target) || dragArrays.includes(target.parentNode))) {
            dragItems.forEach(item => item.classList.remove('selected'))
        }
    })

    //Create or delete dropzones when the window resize
    window.addEventListener('resize', setupDropzone)
};

export default setupDragFeature;
