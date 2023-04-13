import React from 'react';

const FullPost = ({value}) => {
    return (
        <div>
            <p>post id: {value.id}</p>
            <p>user id: {value.userId}</p>
            <p>title: {value.title}</p>
            <p>body: {value.body}</p>

        </div>
    );
};

export default FullPost;