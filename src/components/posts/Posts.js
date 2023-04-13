import React, {useEffect, useState} from 'react';
import Post from "../post/Post";

const Posts = ({lift}) => {

    let [posts, setPosts] = useState([]);

    useEffect( () => {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(allPosts => {
                setPosts(allPosts);
            })


        }, []);


    return (
        <>
            {
                posts.map(value =>
                    <Post
                        value={value}
                        lift={lift}
                        key={value.id}/>)
            }

        </>
    );
};

export default Posts;