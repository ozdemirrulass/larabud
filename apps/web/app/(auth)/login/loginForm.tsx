"use client"
import SubmitButton from '@/components/ui/submit-button'
import { login } from '@/lib/auth'
import { Input } from '@repo/ui/components/ui/input'
import { Label } from '@repo/ui/components/ui/label'
import Link from 'next/link'
import React from 'react'
import { useFormState } from 'react-dom'

const LoginForm = () => {
    const [state, action] = useFormState(login, undefined)
    return (
        <form action={action}>
            <div className='flex flex-col gap-2'>
                {state?.message &&
                    <p className='text-sm text-red-500'>
                        {state.message}
                    </p>
                }
                <div>
                    <Label htmlFor='email'>Email</Label>
                    <Input id="email" name='email' type='email' placeholder='john@example.com' />
                </div>
                {
                    state?.error?.email &&
                    <p className='text-sm text-red-500'>
                        {state.error.email}
                    </p>
                }
                <div>
                    <Label htmlFor='password'>Password</Label>
                    <Input id="password" name='password' type='password' />
                </div>
                {
                    state?.error?.password &&
                    <p className='text-sm text-red-500'>
                        {state.error.password}
                    </p>
                }
                <Link className='text-sm underline' href="#">Forgot your password?</Link>
                <SubmitButton>Sign In</SubmitButton>
            </div>
        </form>
    )
}

export default LoginForm