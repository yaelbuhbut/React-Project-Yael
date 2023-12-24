import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/auth-provider";

export function Header() {
    const { user, signIn, signOut } = useContext(AuthContext);

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    Yael Buhbut | Blog
                </Link>

                <Link className="navbar-brand" to="#">
                    {user ? (
                        <>

                        {" "}
                            {user.userName}{" "}
                            <button onClick={signOut} className="btn btn-primary my-2">
                                Sign out
                            </button>
                        </>
                    ) : (
                        <button onClick={signIn} className="btn btn-primary my-2">
                            Sign in
                        </button>
                    )}
                </Link>

                <ul className="nav">
                    {user && (
                        <li className="nav-item">
                            <Link className="nav-link" to="/Admin">
                                Admin
                            </Link>
                        </li>
                    )}

                    <li className="nav-item">
                        <Link className="nav-link" to="/">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Posts">
                            Posts
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Contact">
                            Contact
                        </Link>
                    </li>

                </ul>
            </div>
        </nav>
    );
}
