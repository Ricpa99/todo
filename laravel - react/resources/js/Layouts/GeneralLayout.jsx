export default function GeneralLayout({children}) {
   
   return (
      <>
         <section className="min-h-screen flex justify-center items-center">
            <div className="sm:max-w-md w-full mt-6 px-6 py-4 bg-white shadow-lg overflow-hidden sm:rounded-lg">
            {children}
            </div>
         </section>
         
      
      </>
   )
}