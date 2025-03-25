import React from "react";
import Post from "../Post/post.tsx";
import s from "./MyPosts.module.css";import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../../FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

let AddNewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name="newPostText" component={Textarea} placeholder={"Post message"}
                   validate={[required, maxLength10]} />
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>;
}

let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);







const MyPosts = React.memo(props => {


    let postsElements = props.PostsData.map(item=>(<Post key={item.id} message={item.message} likesCount={item.likesCount} id={item.id}/>))

    let newPostElement = React.createRef();



let onAddPost = (values) => {
    props.addPost(values.newPostText);
}



    return(
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost} />
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
})


export default MyPosts;