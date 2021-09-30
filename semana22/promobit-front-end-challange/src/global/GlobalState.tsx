import { useState, useEffect } from "react"
import GlobalStateContext from "./GlobalStateContext"


const GlobalState = (props: any) => {



    // const states = { }
    // const setters = { }
    // const requests = { }
    // const functions = { }

    return (
        <GlobalStateContext.Provider value={{}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState