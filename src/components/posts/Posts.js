import React from 'react';

const Posts = () => {

    let [posts, setPosts] = useState([]);

    useE


    return (
        <div>

            {
                posts.map(value =><p>{value.id}</p>)
            }

        </div>
    );
};

export default Posts;