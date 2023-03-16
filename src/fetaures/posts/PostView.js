import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './postSlice';

const PostView = () => {
    const { isLoading, post, error } = useSelector((state) => state.posts);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div>
            {isLoading && <h1 className="text-2xl font-bold text-red-600">Loading....</h1>}
            {error && <h1 className="text-2xl font-bold text-red-600">Error Ocured....{error}</h1>}
            {post &&
                post.map((el) => {
                    return (
                        <article key={el.id}>
                            {el.id}: {el.title}
                        </article>
                    );
                })}
        </div>
    );
};

export default PostView;
