//Add the class .selected to the workspace icons
const selectWorkspaceApp = ({ target }) => {

    //First remove the selected style (avoiding multiple selections)
    const selectedIcon = document.querySelector('.selected');
    if(selectedIcon) {
        selectedIcon.classList.remove('selected');
    }
    
    //Add the selected style to the workspace item
    //handling the case of user clicking in the img or the paragraph inside of the workspace item
    //If the user clicked in the workspace item, just add it
    if(target.classList.contains('workspace__item__icon') || target.classList.contains('workspace__item__text')) {
        target.parentNode.classList.add('selected');
    } else {
        target.classList.add('selected');
    };
};

export default selectWorkspaceApp;