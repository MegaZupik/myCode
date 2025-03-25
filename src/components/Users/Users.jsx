import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../assets/user.png'
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";




/*let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {


        let pagesCount = Math.ceil (props.totalUsersCount / props.pageSize);

        let pages = [];
        for (let i=1; i <= 12; i++) {
            pages.push(i);
        }*/
let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {
        return <div>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                       totalUsersCount={totalUsersCount} pageSize={pageSize}/>
            <div>
                {
                    users.map(u => <User user={u}
                                         followingInProgress={props.followingInProgress}
                                         key={u.id}
                                         unfollow={props.unfollow}
                                         follow={props.follow}
                        />
                    )
                }
            </div>
        </div>}


export default Users;