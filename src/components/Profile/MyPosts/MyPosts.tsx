import React from 'react';
import s from './MyPosts.module.css'
import Post, {PostsType} from "./Post/Post";
import {addPosts, PostType} from "../../../redux/state";

type ProfilePageType = {
    posts: PostType[]
    addPosts: (postText: string) => void;
}


const MyPosts = (props: ProfilePageType) => {
    let postsElement = props.posts.map(p => <Post key={p.id} message={p.message} likesCounts={p.likesCounts}  id={p.id}/>);
    let newPostElement = React.createRef<HTMLTextAreaElement>();
    /*let addPost = () => {
        props.addPosts()
    }*/
    /* let onPostChange = () => {
         let newText = newPostElement.current?.value;
         props.updateNewPostText(newText);
     }*/
    let addPost = () => {
        if(newPostElement.current) {
            props.addPosts(newPostElement.current.value)
        }
    }
    return (
        <div className={s.myPost}>
            My post
            <div className={s.textBlock}>
                <div>
                    <textarea ref={newPostElement}/>
                </div>
                <div className={s.button}>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div>
                {postsElement}
            </div>
        </div>
    )
}


export default MyPosts;