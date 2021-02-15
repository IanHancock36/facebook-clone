import React , { createContext, useContext, useReducer} from "react";

export const StateContext = createContext();
export const StateProvider = ({reducer,initialState,children}) => (
    <StateContext.Provider value = {useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext); 
// when you want to pull something from the data layer you use the useState hook above 

// the state provider wraps the whole app in a data layer 