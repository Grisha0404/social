import React from 'react';
import s from './Post.module.css'
import {PostType} from "../../../../redux/state";

export type PostsType = PostType

const Post = (props:PostsType) => {
    return (
        <div>
            <div className={s.item}>
                <img key={props.id} src='https://image.freepik.com/free-vector/bearded-man-avatar-man-vector-portrait_9385-36.jpg'/>
                {props.message}
            </div>
            <div>
                <span key={props.id}>Likes</span> {props.likesCounts}
            </div>
        </div>
    )
}


export default Post;