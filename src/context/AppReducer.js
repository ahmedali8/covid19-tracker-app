export default (state, action) => {
    switch (action.type) {
        case 'FETCHED_DATA':
            return {
                data: action.payload
            }
        case 'FETCHED_COUNTRY':
            return {
                data: action.payload,
                country: action.country
            }
        default:
            return state;
    }
}