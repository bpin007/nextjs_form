"use client";

import Sign_up_page from "../components/Sign_up_page";

// import Access_required_page from "./components/Access_required_page";
// import Login_page from "./components/Login_page";
// import Sign_up_page from "";

export default function Home() {
  return (
   <>
   <div className="flex flex-col justify-center items-center min-h-screen">
   {/* <Login_page/> */}
    <Sign_up_page/>
   </div>
   </>
  );
}
