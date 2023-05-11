import React, { useCallback, useState } from 'react'
import Input from '@/components/Input'

const Auth = () => {

  const [username, setUsername] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [variant, setVariant] = useState<string>("login")

  const toggleVariant = useCallback(() => {
    setVariant(currentVariant => currentVariant === "login" ? "register" : "login")
  }, [])
  
  return (
    <div className='relative h-full w-full bg-no-repeat bg-cover bg-center bg-fixed bg-[url("../public/images/background.jpg")]'>
      <div className='bg-black h-full w-full lg:bg-opacity-50'>
        <nav className="px-12 py-5">
          <img src="/images/logo.png" className="h-20" alt="Logo" />
        </nav>
        <div className='flex justify-center'>
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className='text-white text-3xl mb-8 font-bold font'>
              {variant==="register" ? "Register" : "Sign in"}
            </h2>
            <div className='flex flex-col gap-4'>

            {variant==="register" && (
              <Input
              id='username' 
              label="Username"
              onChange={(e:any) => setUsername(prev => e.target.value)}
              value={username}
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

            <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">Login</button>
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
