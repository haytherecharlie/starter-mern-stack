export function user(state, action) {
    switch (action.type) {
        case 'USER/SET':
            return action.payload
        case 'USER/RESET':
            return null
        default:
            return null
    }
}
