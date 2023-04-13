import React, {useEffect, useState} from 'react';
import AllPost from "../allPost/allPost";

const AllPosts = ({userId}) => {

    let [posts, setPosts] = useState([]);

    useEffect(() => {

        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(value => value.json())
            .then(allPosts => {
                setPosts(allPosts);
            })

    }, [userId])
    return (
        <div>
            {
                posts.map(post => <AllPost key={post.id} post={post}/>)
            }
        </div>
    );
};

export default AllPosts;