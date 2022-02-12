import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import {ProfilePageType} from "../../redux/state";

type ProfileType ={
    profilePage: ProfilePageType,
    addPosts: (postText: string) => void;
}

const Profile = (props: ProfileType) => {
    return <div>
        <div>
            <ProfileInfo/>
        </div>
        <div>
            <MyPosts posts={props.profilePage}
                /*updateNewPostText={props.updateNewPostText}*/
                addPosts={props.addPosts} />
        </div>
    </div>
}


export default Profile;