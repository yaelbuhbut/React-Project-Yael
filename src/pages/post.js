import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export function Post() {
    const { id } = useParams();
    const [post, setPost] = useState(null);


    return (
        <div className='container'>
                <div>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <p>
                        <Link to="/posts" className="btn btn-primary my-2">back to all posts</Link>
                    </p>

                </div>
            )
        </div>
    );
}
