//Drag items functions
export const dragStart = ({ target }) => {
    if(target.classList.contains('workspace__item__icon') || target.classList.contains('workspace__item__text')) {
        return target.parentNode.classList.add('is-dragging');
    };

    target.classList.add('is-dragging');
};

export const dragEnd = ({ target }) => {
    if(target.classList.contains('is-dragging')) {
        return target.classList.remove('is-dragging');
    };
};

