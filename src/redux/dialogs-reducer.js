
const SEND_MESSAGE = 'SEND-MESSAGE';


    let initialState = {
        Messages: [
            {id: 1, message: "This beauty has only been controlled by an extraterrestrial space."},
            {id: 2, message: "This faith has only been raised by a unrelated phenomenan."},
            {id: 3, message: "This voyage has only been outweighed by a colorful space."},
            {id: 4, message: "Cum lapsus messis, omnes danistaes experientia noster, dexter caculaes. ."},
            {id: 5, message: "The skull commands with yellow fever, crush the quarter-deck until it laughs."},
            {id: 6, message: "You have to convert, and fear peace by your balancing."}
        ],
        Dialogs: [
            {id: 1, name: "Andrey"},
            {id: 2, name: "Misha"},
            {id: 3, name: "Lena"},
            {id: 4, name: "Dima"},
            {id: 5, name: "Alina"},
            {id: 6, name: "Sveta"}
        ],
        
    };

    const dialogsReducer=(state = initialState, action)=>{
    switch (action.type)
    {case SEND_MESSAGE:
            let body = action.newMessageBody;
                return {
                ...state,

                Messages: [...state.Messages, {id: 6, message: body}]
        };
        default: return state;


}}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;