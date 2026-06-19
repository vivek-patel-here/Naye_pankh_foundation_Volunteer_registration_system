"use client"

import { createContext, useContext , useEffect, useState } from "react";
import toast from "react-hot-toast";
const storeContext = createContext<any>(null);

export const StoreContextProvider = ({children}:{children:React.ReactNode})=>{
    const server_url = "https://naye-pankh-foundation-volunteer.onrender.com";

    const successToast = (msg:string)=>{
        return toast.success(msg);
    }

    const [events,setEvents] = useState<any[]>([]);

    const fetchEvents = async()=>{
        try{
            const resp = await fetch(`${server_url}/api/event`,{
                method:"GET",
                headers:{
                    "content-type" : "application/json"
                }
            });

            const parsedResp = await resp.json();

            if(!resp.ok) throw new Error(parsedResp.message ?? "Unable to load events");
            setEvents(parsedResp.data);
        }catch(err){
            console.error(err);
        }
    }

    const errorToast = (msg:string)=>{
        return toast.error(msg);
    }

    useEffect(()=>{
        fetchEvents();
    },[])

    return (
        <storeContext.Provider value={{server_url,successToast,errorToast,events}}>
            {children}
        </storeContext.Provider>
    )
}

const useStore=()=>{
    const context = useContext(storeContext);
    return context;
}

export default useStore;