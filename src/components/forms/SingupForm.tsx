"use client"
import Link from "next/link";
import { toast } from 'react-toastify';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';


interface FormData {
   Fname: string;
   Lname: string;
   email: string;
   password: string;
   Cpassword: string;
}

const SingupForm = () => {
   const router = useRouter();
   const schema = yup
      .object({
         Fname: yup.string().required().label("FName"),
         Lname: yup.string().required().label("LName"),
         email: yup.string().required().email().label("Email"),
         password: yup.string().required().label("Password"),
         Cpassword: yup.string().required().label("CPassword"),
      })
      .required();

   const { register, handleSubmit, reset, formState: { errors }, } = useForm<FormData>({ resolver: yupResolver(schema), });
   // const onSubmit = (data: FormData) => {
   //    const notify = () => toast('Registration successfully', { position: 'top-center' });
   //    notify();
   //    reset();
   // };
   const onSubmit = async (data: FormData) => {
      try {

         const response = await fetch('/api/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
         });
   
         const result = await response.json();
   
         if (!response.ok) {
            toast.error(result.error || 'Registration failed');
            return;
         }
   
        
         setTimeout(() => {
            router.push('/signin');
         }, 1500);
   
      } catch (err) {
         toast.error('Something went wrong');
      }
   };
   

   return (
      <form onSubmit={handleSubmit(onSubmit)} className="signin-inner">
         <div className="row">
            <div className="col-12">
               <div className="single-input-inner style-bg-border">
                  <input type="text" {...register("Fname")} placeholder="First Name" />
                  <p className="form_error">{errors.Fname?.message}</p>
               </div>
            </div>
            <div className="col-12">
               <div className="single-input-inner style-bg-border">
                  <input type="text" {...register("Lname")} placeholder="Last Name" />
                  <p className="form_error">{errors.Lname?.message}</p>
               </div>
            </div>
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
            <div className="col-12">
               <div className="single-input-inner style-bg-border">
                  <input type="password" {...register("Cpassword")} placeholder="Confirm Password" />
                  <p className="form_error">{errors.Cpassword?.message}</p>
               </div>
            </div>
            <div className="col-12">
               <div className="single-checkbox-inner">
                  <input type="checkbox" />
                  By clicking &quot;create account&quot;.
               </div>
            </div>
            <div className="col-12 mb-4">
               <button type="submit" className="ed-btn btn-base w-100">Create Account</button>
            </div>
            <div className="col-12">
               <span>By creating an account</span>
               <Link href="/signin"><strong>Signin</strong></Link>
            </div>
         </div>
      </form>
   )
}

export default SingupForm
