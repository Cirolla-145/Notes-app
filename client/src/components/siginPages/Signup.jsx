import React from 'react'
import useSignup from '../hooks/useSignup'
import { useForm } from 'react-hook-form'

const Signup = () => {

    let { register, handleSubmit } = useForm()

    const { loading, signup } = useSignup()

    const onFormSubmit = (userObj) => {
        signup(userObj)
    }

    return (
        <div className="p-4 h-screen flex items-center justify-center"> 
        <div className="">
        <div className="container">
            <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
                <div className="card w-full p-6 rounded-lg shadow-md">
                    <h2 className="card-title">SignUp</h2>
                    <div className="card-body">

                        <form onSubmit={handleSubmit(onFormSubmit)}>

                            <div className="">
                                <label className='label p-2'>
                                    <span className='text-base label-text'>Full Name</span>
                                </label>
                                <input
                                    type="text"
                                    className='w-full input input-bordered h-10'
                                    {...register("fullName")}
                                />
                            </div>

                            <div className="">
                                <label className='label p-2'>
                                    <span className='text-base label-text'>Username</span>
                                </label>
                                <input
                                    type="text"
                                    className='w-full input input-bordered h-10'
                                    {...register("username")}
                                />
                            </div>


                            <div className="">
                                <label className='label p-2'>
                                    <span className='text-base label-text'>Password</span>
                                </label>
                                <input
                                    type="password"
                                    className='w-full input input-bordered h-10'
                                    {...register("password")}
                                />
                            </div>

                            <div className="">
                                <label className='label p-2'>
                                    <span className='text-base label-text'>Confirm Password</span>
                                </label>
                                <input
                                    type="password"
                                    className='w-full input input-bordered h-10'
                                    {...register("confirmPassword")}
                                />
                            </div>

                            <div className="flex justify-center">
                                <div className="flex justify-center p-1">
                                    <span>male</span>
                                    <input type="radio" name="radio-1" className="radio" value="male" {...register("gender")} checked />
                                </div>
                                <div className="flex justify-center p-1">
                                    <span>female</span>
                                    <input type="radio" name="radio-1" className="radio" value="female" {...register("gender")} />
                                </div>
                            </div>



                            <div className="">
                                <button type="submit" className='btn btn-block btn-sm mt-2 border border-slate-700'>Login</button>
                            </div>
                        </form>


                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Signup
