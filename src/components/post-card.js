import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/auth-provider';


export function PostCard({ singlePost, onRemove, onEdit }) {
    const { user } = useContext(AuthContext);
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(singlePost.title);
    const [editedBody, setEditedBody] = useState(singlePost.body);

    const handleRemoveClick = () => {
        onRemove(singlePost.id);
    };

    const handleEditClick = () => {
        setIsEditing(!isEditing);
    };

    const handleSaveClick = () => {
        const updatedPost = {
            id: singlePost.id,
            title: editedTitle,
            body: editedBody,
        };
        onEdit(singlePost.id, updatedPost);
        setIsEditing(false);
    };

    return (
        <div className='mb-4 card bg-light'>
            <div className='card-header'>
                {isEditing ? (
                    <input
                        type='text'
                        value={editedTitle}
                        onChange={(e) => setEditedTitle(e.target.value)}
                    />
                ) : (
                    singlePost.title
                )}
            </div>
            <div className='card-body'>
                {isEditing ? (
                    <textarea
                        value={editedBody}
                        onChange={(e) => setEditedBody(e.target.value)}
                    />
                ) : (
                    singlePost.body
                )}
            </div>
            <Link to={`/posts/${singlePost.id}`} className='btn btn-primary mr-2'>
                Read more
            </Link>

            {user && (
                <>
                    {!isEditing ? (
                        <>
                            <button className='btn btn-light' onClick={handleEditClick}>
                                Edit
                            </button>
                            <button className='btn btn-light' onClick={handleRemoveClick}>
                                Remove
                            </button>
                        </>
                    ) : (
                        <button className='btn btn-success' onClick={handleSaveClick}>
                            Save
                        </button>
                    )}
                </>
            )}
        </div>
    );
}
