import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {sendMessageCreator} from "../../redux/dialogs-reducer";




let mapStateToProps =(state)=>{
    return{
DialogsPage:state.DialogsPage,
        dialogsPage: state.dialogsPage,

    }
}
let mapDispatchToProps =(dispatch)=> {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody));

        }
    }
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);