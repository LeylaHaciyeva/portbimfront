
const initialState = {
    theme: localStorage.getItem("darkMode") !==undefined ? localStorage.getItem("darkMode"): localStorage.setItem("darkMode",true)
};

const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "DARK":
            return {
                ...state,
                theme: localStorage.setItem("darkMode", true)
            };
        case "LIGHT":
            return {
                ...state,
                theme: localStorage.setItem("darkMode", false),
            };
        default:
            return state;
    }
};

export default themeReducer;