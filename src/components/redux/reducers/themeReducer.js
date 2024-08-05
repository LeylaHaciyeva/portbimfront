
const initialState = {
    theme: localStorage.getItem("darkMode") !== null ? JSON.parse(localStorage.getItem("darkMode")) : JSON.parse(localStorage.setItem("darkMode", false))
};

const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "DARK":
            localStorage.setItem("darkMode", true)
            return {
                ...state,
                theme: JSON.parse(localStorage.getItem("darkMode"))
            };
        case "LIGHT":
            localStorage.setItem("darkMode", false)
            return {
                ...state,
                theme: JSON.parse(localStorage.getItem("darkMode"))
            };
        default:
            return state;
    }
};

export default themeReducer;