import React from 'react';
import './PostWrapper.css'

const PostWrapper = ({children}) => {
    return (
        <div className="PostWrapper">
            {children}
        </div>
    );
    // children은 class 형식의 component에서 this.props.children과 동일한 방법
};

export default PostWrapper;