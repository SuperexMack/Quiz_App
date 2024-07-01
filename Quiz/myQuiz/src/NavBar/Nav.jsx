import { useState } from "react"
import quizPhoto from "./quizPhoto.png"
function Navbar(){
    const [called , setCalled] = useState(false);

    const caller = ()=>{
        setCalled(!called)
    }
    return(
        <>
        <div className="justify-center items-center bg-slate-100 h-[100px] w-full cursor-pointer md:flex">
            <img className="absolute left-0 h-[100px] w-[200px]" src={quizPhoto}></img>
           <div className="flex justify-center items center absolute right-36 gap-8">
               <div onClick={()=>window.location.href="/"} className="bg-blue-600 text-3xl text-white rounded-[5px]  justify-center items-center p-2 hidden md:flex md:transition-transform duration-400 ease-in-out md:hover:scale-130 sm:hover:scale-130">Home</div>
               <div onClick={()=>window.location.href="https://leetcode.com/u/MackWalker/"} className="bg-blue-600 text-3xl text-white rounded-[5px]  justify-center items-center p-2 hidden md:flex md:transition-transform duration-300 ease-in-out md:hover:scale-130 sm:hover:scale-130">Code</div>
               <div className="bg-blue-600 text-3xl text-white rounded-[5px]  justify-center items-center p-2 hidden md:flex md:transition-transform duration-300 ease-in-out md:hover:scale-130 sm:hover:scale-130">Contribute</div>
               <div onClick={caller} className="text-violet-500  text-4xl top-8 flex justify-center items-center relative md:left-24 left-32 md:hidden"><i className="fa-sharp fa-solid fa-bars"></i></div>
           </div>
        </div>
        
        {called &&(
            <div className="fixed top-0 inset-0 flex flex-col justify-center items-center bg-slate-100 h-[450px] w-full cursor-pointer z-40">
            <div onClick={caller} className="text-violet-500  text-4xl top-8 flex justify-center items-center absolute right-8"><i className="fa-solid fa-xmark"></i></div>
           <div className="flex flex-col justify-center items-center gap-8">
               <img className="relative top-[-10px] h-[100px] w-[200px]" src={quizPhoto}></img>
               <div onClick={()=>window.location.href = "/"} className="bg-blue-600 text-3xl text-white rounded-[5px] flex justify-center items-center p-2">Home</div>
               <div  onClick={()=>window.location.href="https://leetcode.com/u/MackWalker/"} className="bg-blue-600 text-3xl text-white rounded-[5px] flex justify-center items-center p-2">Code</div>
               <div className="bg-blue-600 text-3xl text-white rounded-[5px] flex justify-center items-center p-2">Contribute</div>
           </div>
        </div>
        )}

        </>
    )
}

export default Navbar