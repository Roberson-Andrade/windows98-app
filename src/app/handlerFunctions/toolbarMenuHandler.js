const toolbarMenuHandler = (event) => {
    const toolbarBtn = document.querySelector('.btn--start')
    const toolbarMenu = document.getElementById('toolbar-menu')

    if(toolbarBtn.classList.contains('toolbar-menu-active')) {
        toolbarBtn.classList.remove('toolbar-menu-active')
        toolbarMenu.style.display = 'none'
    } else {
        toolbarBtn.classList.add('toolbar-menu-active')
        toolbarMenu.style.display = 'block'
    }
};

export default toolbarMenuHandler;