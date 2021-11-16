
const reducer = (state = {}, action) => {

    switch (action.type) {
        case 'MINIFY_URL':
            return {
                ...state,
                shortUrl: action.payload
            };

        default:
            return state;
    }
};

export default reducer;