let initialState = {
    dialogsData: [
        {id: 1, name: 'Sasha'},
        {id: 2, name: 'Lena'},
        {id: 3, name: 'Ignat'},
        {id: 4, name: 'Dima'},
        {id: 5, name: 'Kostya'}
    ],
    messagesData: [
        {id: 1, message: 'hi, my name is '},
        {id: 2, message: 'Lena'},
        {id: 3, message: 'Ignat'},
        {id: 4, message: 'Dima'},
        {id: 5, message: 'Kostya'},
        {id: 6, message: 'its work!!!'}
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'Add-Message':
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 1, message: action.newMessage}],
                // newMessage: ''
            }
        default:
            break
    }
    return state
}

export const addMessage = (newMessage) => ({type: 'Add-Message', newMessage})

export default dialogsReducer