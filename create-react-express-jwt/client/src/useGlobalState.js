import React, { useReducer, createContext, useContext} from 'react';

const ClickContext = createContext(null);
// const AutoIncContext= createContext(null)

export let initialState = 0
export let autoState = 0


function start(increase) {
    setInterval(increase++, 1000);
  }
  

export function reducerClick (state, action){
    switch(action.type) {
        case "INCREMENT":
            return state + 1;
            case "INCREMENT2":
                return start(state)
                        
                default:
                    return state;
                }
            }
            
            // export function autoInc (state, action){
            //     switch(action.type){
            //         case "AUTO 1":
            //             return  setInterval(state + 1, 1000);
            //             default:
            //                 return state;
            //             }
            //         }
                    
                    export function ProviderClick({children, reducer, initialState}){
                        return(
                            <ClickContext.Provider value ={useReducer(reducerClick, initialState)}>
                                {children}
                            </ClickContext.Provider>
                        )
                    }
                    
                    // export function ProviderAuto({children, reducer, autoInc}){
                    //     return(
                    //         <AutoIncContext.Provider value = {useReducer(autoInc, autoState)}>
                    //             {children}
                    //         </AutoIncContext.Provider>
                    //     )
                    // }
                    
                    
                    // need to figure out how to make a global provider for auto add state
                    
                    
                    
                    
                    
                    
    export function useGlobalState(){
        return useContext(ClickContext);
}

// export function useGlobalState(){
//         return useContext(AutoIncContext)
// }