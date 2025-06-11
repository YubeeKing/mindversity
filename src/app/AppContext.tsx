import { createContext, useRef } from "react";


export const AppContext = createContext<any>(null)


export const AppProvider = ({children}:any) => {
const formRef = useRef<HTMLDivElement | null>(null)

const scrolToForm = () => {
    formRef.current?.scrollIntoView({
      behavior: 'smooth'
    })
   }  


    return(
        <AppContext.Provider value={{formRef, scrolToForm}}>
            {children}
        </AppContext.Provider>
    )
}