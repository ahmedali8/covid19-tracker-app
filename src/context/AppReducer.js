export default (state, action) => {
    switch (action.type) {
        case 'FETCHED_DATA':
            return {
                data: action.payload
            }
        default:
            return state;
    }
}