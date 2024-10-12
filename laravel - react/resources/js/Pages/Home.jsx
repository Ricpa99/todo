import { Head, Link, } from "@inertiajs/react";
import Header from "@/Components2/Header";
export default function Test({test, auth}){
   return (
      <>
      <Head title="Home"></Head>
      <Header user={auth.user}>
         <h3>Home </h3>
      </Header>
      </>
   );
}