import React from 'react';

const AllPost = ({post}) => {
    return (
        <div>
            {
                <p>
                    {post.id}
                    {post.userId}
                    {post.title}
                    {post.body}
                </p>
            }
        </div>
    );
};

export default AllPost;