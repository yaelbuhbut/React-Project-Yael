import { createContext, useEffect, useState } from "react";

export const BlogContext = createContext(null);

export function BlogProvider({ children }) {
    const [posts, setPosts] = useState([]);


    const addPost = (post) => {
        setPosts([...posts, post]);
    };

    const removePost = (postId) => {
        const updatedPosts = posts.filter(post => post.id !== postId);
        setPosts(updatedPosts);
    };

    const editPost = (postId, updatedPost) => {
        const updatedPosts = posts.map(post => (post.id === postId ? updatedPost : post));
        setPosts(updatedPosts);
    };

    const value = { posts, addPost, removePost, editPost, setPosts };


    return (
        <BlogContext.Provider value={value}>
            {children}
        </BlogContext.Provider>
    );
}
