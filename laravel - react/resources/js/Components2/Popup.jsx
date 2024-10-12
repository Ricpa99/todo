import { useForm } from "@inertiajs/react"
import { data } from "autoprefixer"



const Popup = ({showPopup, data}) => {
   const {delete:destroy} = useForm()
   const Del = (e) => {
      e.preventDefault()
      destroy(`/blog-delete/${data.id}`,{
         onSuccess: showPopup(false)
      })
   }
   return (
      <>
      
      <div className="mx-auto -translate-y-16 font-bold md:max-w-56 max-w-32 text-xs bg-neutral-50 shadow-md p-3 rounded-lg ">
         <div className="flex flex-col items-center justify-center w-full">
               <h1 className="text-center">Are you sure delete <span className="text-red-400">{data.name} </span>?</h1>
               <div className="w-full justify-center flex gap-4">
                  <button onClick={() => showPopup(false)}>Batal</button>
                  <form onSubmit={Del}>
                  <button>Delete</button>
                  </form>
               </div>
         </div>
      </div>
      
      
      </>
   )
}


export default Popup