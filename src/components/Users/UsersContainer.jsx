
import Users from "./Users";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    unfollow, toggleFollowingProgress, requestUsers
} from "../../redux/users-reducer";
import React from "react";
import Preloader from "../common/preloader/preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers
} from "../../redux/users-selectors";


class UsersContainer  extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);

    }

     onPageChanged = (pageNumber) => {
         this.props.setCurrentPage(pageNumber);
         this.props.getUsers(pageNumber, this.props.pageSize);
        console.log('dadasddad')


     }


    render() {

        return<>
        { this.props.isFetching ? <Preloader /> : null }
        <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}

               followingInProgress={this.props.followingInProgress}
        />
        </>
    }
}


/*let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        setUsersTotalCount: state.usersPage.setUsersTotalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        totalUsersCount: state.usersPage.totalUsersCount,
    }
}*/
let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }}
/*
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber) => {
        dispatch(setCurrentPageAC(pageNumber));
    },
        setTotalUsersCount: (totalCount) => {
        dispatch(setUsersTotalCountAC(totalCount))
    },
    toggleIsFetching: (isFetching)=>{
            dispatch(toggleIsFetchingAC(isFetching));
    }
}}
*/

export default compose(
    withAuthRedirect,
    connect(mapStateToProps,{follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers: requestUsers })
)(UsersContainer)