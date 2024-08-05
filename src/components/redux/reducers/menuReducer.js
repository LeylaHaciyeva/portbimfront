const initialState = {
    openMenu: false
};

const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case "openMenu":
            window.document.body.style.overflow = "hidden"
            return {
                ...state,
                openMenu: true,
            };
        case "closeMenu":
            window.document.body.style.overflow = "auto"
            return {
                ...state,
                openMenu: false,
            };
        default:
            return state;
    }
};

export default menuReducer;