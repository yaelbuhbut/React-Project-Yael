import {Link, Outlet} from "react-router-dom";

export function Home() {
    return (
        <section className="py-5 text-center container">
            <div className="row py-lg-5">
                <div className="col-lg-6 col-md-8 mx-auto">
                    <h1 className="fw-light">Welcome to My Blog!</h1>
                    <p className="lead text-body-secondary">
                        <br />
                        <p>
                            Happy to see you here! I'm Yael. I'm a full stack developer.
                            I love to learn new things and share my knowledge with others.
                            I hope you will enjoy my blog.
                        </p>

                        <Link to="/posts" className="btn btn-primary my-2">posts</Link>
                    </p>
                </div>
            </div>
        </section>
    );
}
