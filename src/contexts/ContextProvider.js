import { click } from '@syncfusion/ej2-react-grids';
import React, { createContext, useContext, useState } from 'react'

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({ children }) => {
    const [screenSize, setScreenSize] = useState(undefined);
    const [activeMenu, setActiveMenu] = useState(true);

    const [isClicked, setisClicked] = useState(initialState);

    const handleClick = (clicked) => {
        //spread initial state where everything is false, and only change the value that has been clicked
        setisClicked({ ...initialState, [clicked]: true })
    }


    return (
        <StateContext.Provider
            //passing values using statecontext
            value={{
                activeMenu,
                setActiveMenu,
                isClicked,
                setisClicked,
                handleClick,
                setScreenSize,
                
            }}>
            {children}

        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext
(StateContext);