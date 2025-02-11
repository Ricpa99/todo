import { Head, Link, useForm, usePage } from "@inertiajs/react";
import Header from "@/Components2/Header";
import { useEffect } from "react";
import Pagination from "@/Components2/Pagination";
import { useState } from "react";
import Modal from "@/Components/Modal";
import Popup from "@/Components2/Popup";
import { FaCheck } from "react-icons/fa6";
import { MdRadioButtonUnchecked } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import { IoTrashBinSharp } from "react-icons/io5";


export default function Test({blogs, title, auth}){
   const {flash} = usePage().props
   const [showPopup, setPopup] = useState(false)
   const [uid, setId] = useState({id: '', name: ''})
   const {data, setData, reset, processing, errors, patch, post} = useForm({
      name: '',
      is_complete: 0
   })
   const hendleStatus = (id, isComplete, name) => {
      data.is_complete = !isComplete
      let btn = document.getElementById(id)
      btn.innerText = 'Processing'
      patch(`/update-complete/${id}`, 
      {onSuccess: () => {
         btn.innerText = name
         }

      })
   }

 
   const popup = (id, name) => {
      setId({id:id, name:name})
      setPopup(true)
   }

   useEffect(() => {
      return () => {
         reset('name')
      }
   },[])

   const submit = (e) => {
      e.preventDefault();
      post(route('store.data'), {onSuccess:() => reset()})
   }
   return (
      <>
      <Head title={title}></Head>
      <Header user={auth.user} title={title}>
         <div className="max-w-3xl mx-auto lg:w-5/6 md:max-w-7xl w-4/5 mt-20 ">
            <h2 className="font-semibold text-4xl text-center my-6" >Todo</h2>
            {/* <Modal></Modal> */}
         <form onSubmit={submit}>
            <div className="flex gap-4 items-center">
            <input name="name" className="px-4 py-2 rounded-md grow font-bold text-sm"  type="text"
            value={data.name}
            onChange={(e) => setData('name', e.target.value)} 
            placeholder="Create todo list"/>
            <button className="bg-purple-600 py-2 px-4 rounded-md text-white hover:bg-purple-500">Save</button>
            </div>
            {errors.name && <p className="text-red-400 txt-sm">{errors.name}</p>}
            {flash.message && <p className="text-purple-500 txt-sm">{flash.message}</p> }
         </form>
            <div className="flex flex-col gap-3 mt-4">
               {
                  blogs.data.map((ev, i) => {
                     return (
                           <div key={i} className={`max-md:text-sm ${ev.is_complete ? 'bg-green-300' : 'bg-neutral-200'} flex justify-between items-center py-3 px-6 rounded-md`}>
                              <h3 id={ev.id}>{ev.name}</h3>
                              <div> {ev.is_complete ? (
                                 <button disabled={processing} className={`${processing && 'opacity-25 cursor-not-allowed' }`}
                                 onClick={() => hendleStatus(ev.id, ev.is_complete, ev.name)}> <FaCheck /> </button> ) 
                                 : (
                                 <button disabled={processing} className={`${processing && 'opacity-25 cursor-not-allowed' }`}
                                 onClick={() => hendleStatus(ev.id, ev.is_complete, ev.name)}> 
                                 <MdRadioButtonUnchecked />
                                 </button> )}
                                 <Link className={`${processing && 'opacity-25 cursor-not-allowed' } inline-flex mx-3`} href={`/blog/edit/${ev.id}`}> <MdModeEdit/> </Link>  
                                 <button className={`${showPopup && 'text-slate-50 cursor-not-allowed'}`} type="button" 
                                 disabled={showPopup} onClick={() => popup(ev.id, ev.name)}> <IoTrashBinSharp /></button>
                               </div>
                         </div>
                        
                        )
                     })
                  }
            </div>
            <div className="flex justify-end">
            <Pagination prev={blogs.prev_page_url} next={blogs.next_page_url} page={blogs.current_page}/>
            </div>
            {showPopup && <Popup data={uid} showPopup={setPopup} ></Popup>}
                
         </div>
      </Header>
      </>
   );
}