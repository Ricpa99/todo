import PrimaryButton from "@/Components/PrimaryButton"
import { Link } from "@inertiajs/react"
const Pagination = ({page, next, prev}) => {
   return (
      <>
         <div className="flex mt-6 justify-between max-h-10 items-center md:min-h-11 w-full lg:min-h-14 max-w-28 md:max-w-36 rounded-lg bg-gray-700 shadow-lg">
         {prev == null ? '' : 
         <Link className="inline-flex items-center px-3 md:px-4 py-2 lg:min-h-14 md:py-3 bg-gray-800 border 
                  border-transparent rounded-md font-semibold text-xs 
                  text-white uppercase tracking-widest hover:bg-gray-600
                  focus:bg-gray-700 active:bg-gray-900 focus:outline-none 
                  min-h-10 max-w-28 md:max-w-36 
                  focus:ring-offset-2 transition ease-in-out duration-150 " href={prev}><p> &lang; </p></Link>
         }
            <p className="text-white text-center w-full font-bold">{page}</p>
         {next == null ? '' : 
            <Link className="inline-flex items-center px-3 md:px-4 py-2 lg:min-h-14 md:py-3 bg-gray-800 border 
                  border-transparent rounded-md font-semibold text-xs 
                  text-white uppercase tracking-widest hover:bg-gray-600
                  focus:bg-gray-700 active:bg-gray-900 focus:outline-none 
                  min-h-10 max-w-28 md:max-w-36 
                  focus:ring-offset-2 transition ease-in-out duration-150 " href={next}><p className="rotate-180">&lang;</p></Link>
         }
         
      </div>
      </>
   )
}





export default Pagination