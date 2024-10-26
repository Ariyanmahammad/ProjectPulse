// import React, { useState } from 'react'
// import PropTypes from 'prop-types'

// const Login = ({handleLogin}) => {
    
//     const [email, setEmail]=useState("")
//     const [password, setPassword]=useState("")

//     const submitHandler=(e)=>{
//         e.preventDefault()
//         if (typeof handleLogin === 'function') {
//           handleLogin(email, password)
//       } else {
//           console.error('handleLogin is not a function')
//       }
//         setEmail("")
//         setPassword("")
       
//     }
//     Login.propTypes = {
//       handleLogin: PropTypes.func.isRequired,
//     }


//   return (
//     <div className='flex h-screen w-screen items-center justify-center'>
//         <div className='border-2 border-emerald-600 p-20 rounded-xl'>
//             <form onSubmit={(e)=>submitHandler(e)}
            
//                className='flex flex-col items-center justify-center gap-3'>
               
//                <input 
//                value={email}
//                onChange={(e)=>setEmail(e.target.value)}
//                required className='border-2 outline-none bg-transparent border-emerald-600 text-xl py-3 rounded-full p-2 placeholder:text-grey-400 w-full' type="email" placeholder='Enter your email' />
               
//                <input 
//                value={password}
//                onChange={(e)=>setPassword(e.target.value)}
//                required className='border-2 outline-none bg-transparent border-emerald-600 text-xl py-3 rounded-full p-2 placeholder:text-grey-400 w-full' type="password" placeholder='Password' />
//                <button className='border-2 text-white outline-none bg-emerald-600 text-xl py-3 rounded-full p-2 w-full hover:bg-emerald-700 transition-colors' type='submit'>Login</button>
//             </form>
//         </div>
//     </div>
//   )
// }

// export default Login
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Login = ({ handleLogin }) => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        if (typeof handleLogin === 'function') {
            handleLogin(email, password);
        } else {
            console.error('handleLogin is not a function');
        }
        setFullName("");
        setEmail("");
        setPassword("");
    };

    Login.propTypes = {
        handleLogin: PropTypes.func.isRequired,
    };

    return (
        <div className='flex h-screen w-screen items-center justify-center bg-gradient-to-r from-teal-500 to-green-400'>
            <div className='border-2 border-emerald-600 p-10 rounded-xl bg-white shadow-lg'>
                <h1 className='text-3xl font-bold text-center mb-5 text-teal-600'>Welcome to ProjectPulse - a Task Management System</h1>
                <p className='text-center text-lg text-gray-700 mb-4'>Tasks given to you by the admin that you have to complete.</p>
                <form onSubmit={submitHandler} className='flex flex-col items-center justify-center gap-4'>
                    <input
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                        className='border-2 outline-none bg-transparent border-emerald-600 text-xl py-3 rounded-full p-2 placeholder:text-grey-400 w-full'
                        type="text"
                        placeholder='Full Name'
                    />
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className='border-2 outline-none bg-transparent border-emerald-600 text-xl py-3 rounded-full p-2 placeholder:text-grey-400 w-full'
                        type="email"
                        placeholder='Enter your email'
                    />
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className='border-2 outline-none bg-transparent border-emerald-600 text-xl py-3 rounded-full p-2 placeholder:text-grey-400 w-full'
                        type="password"
                        placeholder='Password'
                    />
                    <button
                        className='border-2 text-white outline-none bg-emerald-600 text-xl py-3 rounded-full p-2 w-full hover:bg-emerald-700 transition-colors'
                        type='submit'
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
