import React from 'react'
import Image from "next/image";
import PageHead from "../../components/PageHead";
import Login from "../../components/Admin/Account/Login";

const LoginModule = () => {
    return (
        <div className="account-wrap py-4 py-sm-5">
            <PageHead title={`Admin | Login`} />
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-5 col-lg-7 col-xl-8 py-3 d-none d-md-block">
                        <div className="account-thumb">
                            <Image src="/login-account.svg" alt="Login" width="563.5" height="377.581"/>
                        </div>
                    </div>
                    <div className="col-sm-10 mx-sm-auto mx-md-0 col-md-7 col-lg-5 col-xl-4 py-3">
                        <div className="account-form">
                            <Login />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginModule
