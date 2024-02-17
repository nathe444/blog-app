import { createContext, useReducer } from "react";
import Reducer from "./Reducer";

const initial_state = {
  user:null,
  isFetching:false,
  error:false
}

export const Context = createContext(initial_state);

export const ContextProvider = ({childern})=>{
  const [state , dispatch] = useReducer(Reducer, initial_state);

  return <ContextProvider value={{
    user:state.user,
    isFetching:state.isFetching,
    error:state.error,
    dispatch
  }}>{childern}</ContextProvider>
} 