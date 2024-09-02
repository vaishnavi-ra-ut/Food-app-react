import { useState , useEffect } from "react";

const useConnection = () => {

    const [state , setState]= useState(true);

    useEffect(()=>{
        window.addEventListener("offline" , () =>{
            setState(false);
        });
        window.addEventListener("online" , () =>{
            setState(true);
        });
    }, [])

    return state;
};

export default useConnection ;