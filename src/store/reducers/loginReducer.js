const initialState = {
    loggedIn: true
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'updateLoginstatus':
            return { loggedIn: action?.payload?.loggedIn }

        default:
            return state
    }
}
export default loginReducer;