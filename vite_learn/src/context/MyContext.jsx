import { createContext, useContext } from "react";

const MyContext=createContext(null);

const MyContextProvider=({children})=>{
    return(
        <MyContext.Provider value={{name:"Bikram dhami"}}>
            {children}
        </MyContext.Provider>
    )
}
const useMyContext=()=>useContext(MyContext);

export {MyContextProvider,useMyContext}