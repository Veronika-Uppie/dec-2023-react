import React from 'react';

const Post = ({value, lift}) => {
    return (
        <div>


            {
                <p>
                    {value.id}: {value.title}

                    <button onClick={() => {
                        lift(value); }}>Details</button>


                </p>
            }

        </div>
    );
};

export default Post;