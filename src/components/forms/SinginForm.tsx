"use client"
import Link from "next/link";
import { toast } from 'react-toastify';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';

interface FormData {
  
   email: string;
   password: string;
}

const SinginForm = () => {
   const router = useRouter();
   const schema = yup
      .object({
        
         email: yup.string().required().email().label("Email"),
         password: yup.string().required().label("Password"),
      })
      .required();

   const { register, handleSubmit, reset, formState: { errors }, } = useForm<FormData>({ resolver: yupResolver(schema), });
   // const onSubmit = (data: FormData) => {
   //    const notify = () => toast('Login successfully', { position: 'top-center' });
   //    notify();
   //    reset();
   // };
   const onSubmit = async (data: FormData) => {
      try {
         const res = await fetch('/api/signin', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               email: data.email,
               password: data.password,
            }),
         });
   
         const result = await res.json();
   
         if (res.ok) {
           
            setTimeout(() => {
               router.push('/search');
            }, 1500);
         } else {
            toast.error(result.error || 'Login failed', { position: 'top-center' });
         }
      } catch (error) {
         console.error('Login error:', error);
         toast.error('Something went wrong. Please try again.', { position: 'top-center' });
      }
   };
   
   
   
   return (
      <form onSubmit={handleSubmit(onSubmit)} className="signin-inner">
         <div className="row">
            
            <div className="col-12">
               <div className="single-input-inner style-bg-border">
                  <input type="email" {...register("email")} placeholder="Email" />
                  <p className="form_error">{errors.email?.message}</p>
               </div>
            </div>
            <div className="col-12">
               <div className="single-input-inner style-bg-border">
                  <input type="password" {...register("password")} placeholder="Password" />
                  <p className="form_error">{errors.password?.message}</p>
               </div>
            </div>
            <div className="col-12 mb-4">
               <button type="submit" className="ed-btn btn-base w-100">Sing In</button>
            </div>
            <div className="col-12">
               <span>Forgot your password? </span>
               <Link href="/signup"><strong>Signup</strong></Link>
            </div>
         </div>
      </form>
   )
}

export default SinginForm;
