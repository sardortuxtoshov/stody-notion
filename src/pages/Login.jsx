import React from 'react'
import Template from '../components/core/Auth/Template'
import loginImg from "../assets/Images/login.png"

function Login() {
  return (
    <div className='text-white'>
        <Template 
            title="Welcome Back"
            description1="Build skills for today, tomorrow, and beyond."
            description2=" Education to future-proof your career."
            image={loginImg}
            formType="login"
        />
    </div>
  )
}

export default Login