import Header from './Header/Header';
import PostWrapper from './PostWrapper/PostWrapper';
import PostContainer from './PostContainer/PostContainer';
import Navigate from './Navigate/Navigate';
import Post from './Post/Post';
import CommentList from './CommentList/CommentList';
import Comment from './Comment/Comment';

/* 
    새 컴포넌트를 만들 때마다 여기에 추가해주면 아래의 방법으로 컴포넌트 쉽게 import 가능

    import React, { Component } from 'react';
    import { Header } from './components';

    class App extends Component {
        render() {
            return (
                <div>
                    <Header/>
                </div>
            );
        }
    }

    export default App;
*/

export {
    Header,
    PostWrapper,
    PostContainer,
    Navigate,
    Post,
    CommentList,
    Comment,
};