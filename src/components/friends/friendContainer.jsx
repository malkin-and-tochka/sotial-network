import {connect} from 'react-redux'
import {
    follow,
    unfollow,
    setCurrentPage,
    setTotalUsersCounter,
    getUsers,
    toogleFollowingInProgress,
    followThunk,
    unfollowThunk
} from '../../redux/users-reducer'
import Friends from './friends'
import React from 'react'

class FriendsContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageCgange = (pageNumber) => {
        this.props.setCurrentPage(this.props.setCurrentPage(pageNumber))
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return (<>
                <Friends usersDataWrapper={this.props.usersDataWrapper}
                         totalUsersCounter={this.props.totalUsersCounter}
                         pageSize={this.props.pageSize}
                         onPageCgange={this.onPageCgange}
                         currentPage={this.props.currentPage}
                         selectPage={this.props.selectPage}
                         unfollow={this.props.unfollow}
                         follow={this.props.follow}
                         followed={this.props.followed}
                         toogleIsFetching={this.props.ToogleIsFetching}
                         isFetching={this.props.isFetching}
                         followingInProgress={this.props.followingInProgress}
                         followThunk={this.props.followThunk}
                         unfollowThunk={this.props.unfollowThunk}
                />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        usersDataWrapper: state.usersDataWrapper.users,
        pageSize: state.usersDataWrapper.pageSize,
        totalUsersCounter: state.usersDataWrapper.totalUsersCounter,
        currentPage: state.usersDataWrapper.currentPage,
        isFetching: state.usersDataWrapper.isFetching,
        followingInProgress: state.usersDataWrapper.followingInProgress
    }
}

export default connect(mapStateToProps,
    {
        follow,
        unfollow,
        setCurrentPage,
        setTotalUsersCounter,
        getUsers,
        toogleFollowingInProgress,
        followThunk,
        unfollowThunk
    })(FriendsContainer)
