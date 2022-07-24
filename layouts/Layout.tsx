import React from 'react';
import Head from "next/head";
import Link from "next/link";

const Layout = ({children}) => {
    return (
        <>
            <Head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossOrigin="anonymous"/>
            </Head>

            <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
                <div className="container-fluid">
                    <Link href="/">
                        <a className="navbar-brand">Home</a>
                    </Link>
                    <div>
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <Link href="/login">
                                <a className="nav-link active" aria-current="page">Login</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/register">
                                <a className="nav-link active" aria-current="page">Register</a>
                                    </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <main className="form-signin w-100 m-auto">
                {children}
            </main>

        </>
    );
};

export default Layout;
