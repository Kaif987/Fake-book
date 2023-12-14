'use client'

import React, { useState } from 'react'

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className=''>
            <h1 className='text-4xl mb-3'>Login Page</h1>
            <form className='flex flex-col'>
                <div className='flex flex-col gap-2'>
                    <div className='flex gap-2 justify-between '>
                        <label for="email">Email</label>
                        <input type='text' placeholder='Email' id='email' value={email} onChange={e => setEmail(e.target.value)}
                            className='border-solid border-2 border-black rounded'
                        />
                    </div>
                    <div className='flex gap-2'>
                        <label for="password">Password</label>
                        <input type='password' placeholder='Password' id='password' value={password}
                            onChange={e => setPassword(e.target.value)}
                            className='border-solid border-2 border-black rounded' />
                    </div>
                </div>
                <input type='submit' value="Submit" className='border bg-green-500 color-white px-4 py-1 font-bold text-white rounded-md mt-2 self-center' />
            </form>
        </div>
    )
}