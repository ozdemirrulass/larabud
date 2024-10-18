"use client"
import SubmitButton from '@/components/ui/submit-button'
import { register } from '@/lib/auth'
import { Input } from '@repo/ui/components/ui/input'
import { Label } from '@repo/ui/components/ui/label'
import React from 'react'
import { useFormState } from 'react-dom'

const RegisterForm = () => {
    const [state, action] = useFormState(register, undefined)
    return (
        <form action={action}>
            <div className='flex flex-col gap-2'>
                {state?.message &&
                    <p className='text-sm text-red-500'>
                        {state.message}
                    </p>
                }
                <div>
                    <Label htmlFor='name'>Name</Label>
                    <Input id="name" name='name' placeholder='John Doe' />
                </div>
                {
                    state?.error?.name &&
                    <p className='text-sm text-red-500'>
                        {state.error.name}
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
                    <div className='text-sm text-red-500'>
                        <p>Password must:</p>
                        <ul className='pl-4'>
                            {state.error.password.map((error) => (
                                <li className='list-disc' key={error}>{error}</li>
                            ))}
                        </ul>
                    </div>
                }
                <SubmitButton>Sign Up</SubmitButton>
            </div>
        </form>
    )
}

export default RegisterForm