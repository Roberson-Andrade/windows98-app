//Dropzone functions
const dragOver = (event) => {
    //to the page don't refresh
    event.preventDefault();
    const cardBeingDragged = document.querySelector('.is-dragging');

    //add the item being drag to the dropzone
    if(event.target.classList.contains('workspace__drop-zone')) {
        event.target.appendChild(cardBeingDragged);
    };
};

export default dragOver;