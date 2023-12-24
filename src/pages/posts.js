import React, { useContext, useState, useEffect } from 'react';
import { BlogContext } from '../providers/blog-provider';
import { PostCard } from '../components/post-card';

export function Posts() {
    const {posts, setPosts} = useContext(BlogContext);
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const handleUserInput = (evt) => {
        setQuery(evt.target.value);
    };

    const handleRemovePost = (postId) => {
        const updatedPosts = posts.filter((post) => post.id !== postId);
        setPosts(updatedPosts);
    };

    const handleEditPost = (postId, updatedPost) => {
        setPosts((prevPosts) =>
            prevPosts.map((post) => (post.id === postId ? updatedPost : post))
        );
    };

    const filteredPosts = posts.filter((post) =>
        post.title.toLowerCase().includes(query.toLowerCase())
    );




    return (
        <section className="py-5 text-center container">
            <div>
                <h2>All {filteredPosts.length} Posts</h2>
                <p>
                    Search for a keyword:
                    <br/>
                    <input onChange={handleUserInput} className="form-control-lg"/>

                    {query && (
                        <p> {filteredPosts.length} posts were found</p>
                    )}
                </p>

                {loading ? (
                    <p>Page is loading...</p>
                ) : (
                    filteredPosts.map((post) => (
                        <PostCard
                            key={post.id}
                            singlePost={post}
                            onRemove={handleRemovePost}
                            onEdit={handleEditPost}
                        />
                    ))
                )}
            </div>
        </section>
    );
}