import { useState } from "react";
import { myContext } from "./context";

export const MyProvider = ({children} : {children: any}) => {
    const [state, setState] = useState({
        global: {
            token : "",
            favorite: [],
            search: ""
        }
    })

    const setGlobal = (target: string, payload: string) => {
        setState((prevState) => ({
            global: {
                ...prevState.global,
                [target] : payload
            }
        }))
    }

    return (
        <myContext.Provider value={{state, setGlobal}}>
            {children}
        </myContext.Provider>
    )
}
