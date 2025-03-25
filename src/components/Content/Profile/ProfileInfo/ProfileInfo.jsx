import React from 'react';
import s from './ProfileInfo.module.css';
/*import Preloader from "../../../common/preloader/preloader";*/
import ProfileStatus from "./ProfileStatus"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";



    const ProfileInfo = ({profile, status, updateStatus}, ...props) => {
        if (profile) {

        return (
            <div>
{/*                <div>
                    <img
                        src='https://avatars.mds.yandex.net/i?id=e708784c502029fd3580605e76109216_l-5761336-images-thumbs&n=27&h=384&w=480'/>
                </div>*/}
                <div className={s.descriptionBlock}>

                    <div>Имя: {profile.fullName}</div>
                    <div>{(profile.lookingForAJob)?'Ищу работу':'Не ищу работу'}</div>
                    <div>Работаю: {profile.lookingForAJobDescription}</div>


                    <img src={profile.photos.large} />
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>

                </div>
            </div>
        )
    }}
    export default ProfileInfo;