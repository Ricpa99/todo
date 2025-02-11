import { useEffect, useState } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';

import GeneralLayout from "@/Layouts/GeneralLayout";
import { Head, useForm, Link, usePage, } from '@inertiajs/react';


export default function Login({canResetPassword, status}){
    const {flash} = usePage().props
    const [getdata, setdata] = useState(1)

    console.log(flash.message);
    const { data, setData, errors, processing, reset, post} = useForm({
        email: '',
        password: '',
        remember: false,
    })

    useEffect(()=> {
        return () => {
            reset('password');
        };
    },[])

    const submit = (e) => {
        e.preventDefault()

        post(route('login'));
    }
    return (
        <>
        <Head title={'login'}/>
        <GeneralLayout>
            {/* {flash.message} */} 
            <p className={`${!flash.message ? 'hidden' : ''} ${!getdata && 'hidden'}
            text-sm rounded-lg items-center p-2 text-center 
            flex justify-between font-medium mb-5 max-sm:text-sm
             bg-slate-300 max-w-xs ml-6`}>
                {flash.message} 
            <button onClick={() => setdata(0)} className={`float-right text-red-400 font-bold text-xl inline-flex`}>x </button></p>
                <h1 className="text-center text-3xl font-bold mb-5">Login</h1>
            <form onSubmit={submit}>
            <div>
                     <InputLabel htmlFor="email" value="Email" />

                     <TextInput
                         id="email"
                         type="email"
                         name="email"
                         value={data.email}
                         className="mt-1 block w-full"
                         autoComplete="username"
                         isFocused={true}
                         onChange={(e) => setData('email', e.target.value)}
                     />

                     <InputError message={errors.email} className="mt-2" />
                 </div> 

                 <div className="mt-4">
                     <InputLabel htmlFor="password" value="Password" />

                     <TextInput
                         id="password"
                         type="password"
                         name="password"
                         value={data.password}
                         className="mt-1 block w-full"
                         autoComplete="current-password"
                         onChange={(e) => setData('password', e.target.value)}
                     />

                     <InputError message={errors.password} className="mt-2" />
                 </div>

                 <div className="flex items-center justify-end mt-4">
                        <Link
                            href={route('register')}
                            className="rounded-md hover:ring-2 ring-slate-600 px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                        >
                            Register
                        </Link>
                     <PrimaryButton className="ms-4" disabled={processing}>
                         Log in
                     </PrimaryButton>
                 </div>
            </form>
        </GeneralLayout>
        
        </>
    )
}