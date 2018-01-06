export function set(payload) {
    return {
        type: 'USER/SET', 
        payload
    }
}

export function reset() {
    return {
        type: 'USER/RESET'
    }
}