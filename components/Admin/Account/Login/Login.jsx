import React from 'react'
import {useForm} from "react-hook-form";

const Login = (Props) => {

    const {register, handleSubmit} = useForm()

    const onSubmit = (data) => {

    }

    return (
        <div className="login-wrap mvn-acc-form">
            <div className="mvn-acc-form__title">
                Log in to Admin Strativ Quiz
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-label-group my-5">
                    <input
                        className="form-control"
                        id="email_mobile"
                        type="email"
                        {...register('email', { required: true })}
                        autoFocus
                        required
                    />
                    <label className="form-control-placeholder" htmlFor="email_mobile">Email Address</label>
                </div>
                <div className="form-label-group mt-5">
                    <input
                        id="password-login"
                        className="form-control"
                        type="password"
                        name="password"
                        {...register('password', { required: true })}
                        required
                    />
                    <label className="form-control-placeholder" htmlFor="password-login">Password</label>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Log in</button>
            </form>
        </div>
    )

}

export default Login
