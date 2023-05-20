import React, { useCallback, useState } from 'react'
import Input from '@/components/Input'
import axios from 'axios'
import { signIn } from "next-auth/react"
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

const Auth = () => {

  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [variant, setVariant] = useState<string>("login")

  const toggleVariant = useCallback(() => {
    setVariant(currentVariant => currentVariant === "login" ? "register" : "login")
  }, [])

  const login = useCallback(async () => {
    try {
      await signIn ("credentials", {
        email, 
        password,
        callbackUrl : "/profiles"
      })
    } catch (error) {
      console.log(error)
    }
  }, [email, password])

  const register = useCallback(async () => {
    try {
      await axios.post("/api/register", {
        email, name, password
      })
    } catch (error) {
      console.log(error)
    }
    login()
  }, [name, email, password, login])
  
  return (
    <div className='relative h-full w-full bg-no-repeat bg-cover bg-center bg-fixed bg-[url("../public/images/background.jpg")]'>
      <div className='bg-black h-full w-full lg:bg-opacity-60'>
        <nav className="px-12 py-5">
          <img src="/images/logo.png" className="h-[7rem]" alt="Logo" />
        </nav>
        <div className='flex justify-center'>
          <div className="bg-black bg-opacity-70 px-12 sm:px-[10rem] lg:px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className='text-white text-3xl mb-8 font-bold font'>
              {variant==="register" ? "Register" : "Sign in"}
            </h2>
            <div className='flex flex-col gap-4'>

            {variant==="register" && (
              <Input
              id='name' 
              label="Username"
              onChange={(e:any) => setName(prev => e.target.value)}
              value={name}
              />
            )}

            <Input
              id='email' 
              label="Email"
              onChange={(e:any) => setEmail(prev => e.target.value)}
              type='email'
              value={email}
            />

            <Input
              id='password' 
              label="Password"
              onChange={(e:any) => setPassword(prev => e.target.value)}
              type='password'
              value={password}
            />

            <button
              onClick={variant==="register" ? register : login} 
              className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
                {variant==="register" ? "Sign up" : "Login"}
            </button>
            <div className="flex flex-row items-center gap-4 mt-8 justify-center">
              <div
                onClick={() => signIn("google", {callbackUrl : "/profiles"})}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
                <FcGoogle size={32} />
              </div>
              <div 
                onClick={() => signIn("github", {callbackUrl : "/profiles"})}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
                <FaGithub size={32} />
              </div>
            </div>
            <p className='text-neutral-500 mt-12 font'>
              {variant==="register" ? "Already have an account?" : "First time using Netflix?"}
              <span onClick={toggleVariant} className='text-white ml-2 hover:underline cursor-pointer'>
                {variant==="register" ? "Sign in" : "Create an account"}
              </span>
            </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth
