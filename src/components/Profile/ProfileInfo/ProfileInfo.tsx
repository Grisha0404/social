import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return <div>
        <div className={s.block}>
            <img src='https://bus-43.ru/media/images/articles/beach_travels_intro.jpg'/>
        </div>
        <div className={s.avaBlock}>
            ava + discr
        </div>
    </div>
}


export default ProfileInfo;