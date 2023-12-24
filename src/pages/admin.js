import React from "react";
import { useContext } from "react";
import { BlogContext } from "../providers/blog-provider";
import { AuthContext } from "../providers/auth-provider";
import { useForm } from "react-hook-form";

export function Admin() {
    const { addPost } = useContext(BlogContext);
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, formState } = useForm();

    if (!user) {
        return (
            <section className="py-5 text-center container">
                <p>Please sign in first</p>
            </section>
        )
    }

    const handleNewPostSubmit = (data) => {
        addPost({
            title: data.title,
            body: data.content,
            createdAt: data.createdAt,
            isTermsAccepted: data.isTermsAccepted,
        });
    };

    return (
        <section className="py-5 text-center container">
            <div>
                <h1>Admin</h1>
                <br/>
                <form className="form" onSubmit={handleSubmit(handleNewPostSubmit)}>
                    <div className="mb-3 row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">
                            Title
                        </label>
                        <div className="col-sm-10">
                            <input type="text" {...register("title")} className="form-control mb-4  bg-light" />
                            {formState.errors.title && (
                                <span className="text-danger">Error in this field!</span>
                            )}
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label htmlFor="content" className="col-sm-2 col-form-label">
                            Content
                        </label>
                        <div className="col-sm-10">
                            <textarea {...register("content", { minLength: 5 })} className="form-control mb-4  bg-light"></textarea>
                            {formState.errors.content && (
                                <span className="text-danger">Error in this field!</span>
                            )}
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label htmlFor="createdAt" className="col-sm-2 col-form-label">
                            Date
                        </label>
                        <div className="col-sm-10">
                            <input type="date" {...register("createdAt")} className="form-control mb-4  bg-light" />
                        </div>
                    </div>


                    <button type="submit" className="btn btn-primary my-2">
                        Create
                    </button>
                </form>
            </div>
        </section>
    );
}


