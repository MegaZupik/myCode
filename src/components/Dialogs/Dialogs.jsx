import React from 'react';
import s from "./Dialogs.module.css"
import DialogItem from "./DialogsItem/DialogItem";
import Message from "./Message/Message";
import { Navigate } from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import AddMessageForm from "./AddMessageForm/AddMessageForm";






const Dialogs = (props) => {
    let state = props.DialogsPage;

    let dialogElements = state.Dialogs.map(d => (<DialogItem key={d.id} name={d.name} id={d.id}/>));


    let messageElements = state.Messages.map(m => (<Message key={m.id} id={m.id} message={m.message}/>));
    let newMessageBody = state.newMessageBody;

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    if (!props.isAuth) return <Navigate to={"/login"} /> ;


    return (
        <div className={s.Dialogs}>
            <div className={s.DialogItems}>
                {dialogElements}
            </div>
            <div className={s.Messages}>
                {<div>{messageElements}</div>}

            </div>
            <AddMessageForm onSubmit={addNewMessage} />
        </div>

    )
}

export default Dialogs;