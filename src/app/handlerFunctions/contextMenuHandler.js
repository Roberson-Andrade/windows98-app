const contextMenuHandler = (event) => {
    event.preventDefault()
    const contextMenu = document.getElementById('context-menu');

    contextMenu.style.top = event.pageY + 'px'
    contextMenu.style.left = event.pageX + 'px'
    contextMenu.style.display = 'flex'
    console.log(event.offsetY, event.offsetX)
}

export default contextMenuHandler;