import { Children } from "react";
import { Link, useForm, usePage } from "@inertiajs/react";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import Dropdown from "@/Components/Dropdown";
Dropdown

export default function Header({children, title, user}) {
   return (
      <>
      <header className="bg-neutral-50 shadow-md min-h-[4rem] flex items-center w-full  mb-6">
         <div className="container md:mx-auto mx-4 flex md:justify-between items-center justify-between md:text-base font-bold text-center text-sm">
            <div className="font-sans"><Link as="button" href='/todo'>Todo</Link></div>
            <nav className="md:[&>ul]:flex md:[&>ul>li]:mx-3">
               <ul>
                  {/* <li className={`${title == 'Dashboard' ? 'text-indigo-400' : false }`}>{user ? <Link href="/dashboard">Dashboard</Link> : ''}</li> */}
                  <li className={`max-md:max-w-2xl text-sm max-md:ml-5 ${title == 'Todo' || title == 'Edit' ? 'text-indigo-400' : false }`}>
                     <Link href='/todo'>Todo</Link></li>
                  <li>{user ?  <Link method="post" href={route('logout')} as="button">
                                Log Out
                            </Link>
                           :  <Link href="/login">Login</Link>
                      }
                  </li>
                  <li>{user && <p> {user.name}</p>}</li>
               </ul>
            </nav>
         </div>
      </header>
         <main>
            <div className="container mx-auto">
               <p>{children}</p>
            </div>
         </main>

      </>
   )
}