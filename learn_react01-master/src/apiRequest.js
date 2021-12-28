const apiRequest = async (url = '', optionnsObj=null, errMsg=null) => {
    try {
        const response = await fetch(url, optionnsObj);
        if (!response.ok) {
            throw Error('Please reload app.');
        }
    } catch (err) {
        errMsg = err.message;
    } finally {
        return errMsg;
    }
};

export default apiRequest;