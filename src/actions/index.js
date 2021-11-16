const minifyUrl = ({ shortUrl }) => {

    return {
        type: 'MINIFY_URL',
        payload: shortUrl
    };
};
export {
    minifyUrl
};