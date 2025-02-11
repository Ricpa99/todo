import { Head, Link, useForm, usePage } from "@inertiajs/react";
import Header from "@/Components2/Header";
import { useEffect } from "react";
import Pagination from "@/Components2/Pagination";




export default function Test({title, respon, auth}){
   const {flash} = usePage().props
   const {data, setData, reset, processing, errors, patch} = useForm({
      name: respon.name,
   })

   useEffect(() => {
      return () => {
         reset('name')
      }
   },[])

   const submit = (e) => {
      e.preventDefault();
      patch(`/update/${respon.id}`);
      
   }
   return (
      <>
      <Head title={title}></Head>
      <Header user={auth.user} title={title}>
         <div className="max-w-3xl mx-auto lg:w-5/6 mt-20 md:max-w-7xl w-4/5">
            <h2 className="font-semibold text-4xl text-center my-6" >Edit Todo {respon.name}</h2>
         <form onSubmit={submit}>
            <div className="flex gap-4 items-center">
            <input name="name" className="px-4 py-2 rounded-md grow font-bold text-sm"  type="text"
            value={data.name}
            onChange={(e) => setData('name', e.target.value)} 
            placeholder="Create blog"/>
            <button disabled={processing} className="bg-purple-600 py-2 px-4 rounded-md text-white hover:bg-purple-500">
               {processing ? 'processing...' : 'Update'}</button>
            </div>
            {errors.name && <p className="text-red-400 txt-sm">{errors.name}</p>}
            {flash.message && <p className="text-purple-500 txt-sm">{flash.message}</p>}
         </form>
         </div>
      </Header>
      </>
   );
}