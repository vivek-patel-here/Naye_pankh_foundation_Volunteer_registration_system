"use client"
import { useContext,createContext, useState , useEffect } from "react"
import toast from "react-hot-toast";

const StoreContext = createContext<any>(null);

export const StoreContextProvider = ({children}:{children:React.ReactNode})=>{
    const server_url = "https://naye-pankh-foundation-volunteer.onrender.com";
     
    const [volunteers,setVolunteers] = useState<any[]>([]);
    const [approved,setApproved] =  useState<number>(0); 
    const [rejected,setRejected] =  useState<number>(0); 
    const [pending,setPending] = useState<number>(0); 
    const [events,setEvents] = useState<any[]>([]);


    const successToast = (msg:string)=>{
        return toast.success(msg);
    }
    const errorToast = (msg:string)=>{
        return toast.error(msg);
    }




    const fetchVolunteers = async()=>{
        try{
             const response = await fetch(`${server_url}/api/volunteer/all`,{
                method:"GET",
                headers:{
                    "content-type" : "application/json"
                }
            });
            const parsedResp = await response.json();
            if(!response.ok){
                throw new Error(parsedResp.message ?? "Unable to fetch volunteers");
            }
            setVolunteers(parsedResp.data);
            setApproved(parsedResp.approved);
            setRejected(parsedResp.rejected);
            setPending(parsedResp.pending);
        }catch(err){
            console.error(err);
        }
    }

    const fetchEvents = async()=>{
        try{
             const response = await fetch(`${server_url}/api/event`,{
                method:"GET",
                headers:{
                    "content-type" : "application/json"
                }
            });
            const parsedResp = await response.json();
            if(!response.ok){
                throw new Error(parsedResp.message ?? "Unable to fetch volunteers");
            }
            setEvents(parsedResp.data);
        }catch(err){
            console.error(err);
        }
    }



    useEffect(()=>{
        fetchVolunteers();
        fetchEvents();
    },[])

    return (
        <StoreContext.Provider value={{server_url,successToast,errorToast,volunteers,approved,rejected,pending,fetchVolunteers,fetchEvents,events}}>
            {children}
        </StoreContext.Provider>
    )
}

const useStore = ()=>{
    const context  = useContext(StoreContext);
    return context;
}

export default useStore;
