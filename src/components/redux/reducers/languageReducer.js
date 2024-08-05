const initialState = {
    lang: localStorage.getItem("lang") !== null ? localStorage.getItem("lang") : localStorage.setItem("lang", "en")
};

const languageReducer = (state = initialState, action) => {
    switch (action.type) {
        case "en":
            localStorage.setItem("lang", "en")
            return {
                ...state,
                lang: "en",
            };
        case "az":
            localStorage.setItem("lang", "az")
            return {
                ...state,
                lang: "az",
            };
        case "ru":
            localStorage.setItem("lang", "ru")
            return {
                ...state,
                lang: "ru",
            };
        default:
            return state;
    }
};

export default languageReducer