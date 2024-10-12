import { Head } from "@inertiajs/react";
import Header from "@/Components2/Header";
export default function Test({test, title, auth}){
   return (
      <>
      <Head title={title}></Head>
      <Header user={auth.user} title={title}>
      </Header>
      </>
   );
}