import React, { useReducer, createContext, useContext } from "react";
import { INCREMENT_COINS, 
          INCREMENT_PASSIVE_COINS} 
          from "./actions"

// IMPORTANT this is our state that will be used everywhere.
// idea is that we will increment coins and passiveCoins separately
// behind the scenes and add them together to have our totalCoins

let globalState = {
  coins: 0,
  passiveCoins: 0,
  totalCoins: 0
}

// IMPORTANT -- this variable creates context using our globalState above

const GlobalContext = createContext(null)

// IMPORTANT -- this reducer is going to respond to our dispatches
// (actions) and do something with them. i.e. if I click a button 
// which dispatches an "INCREMENT_COINS" request, it will return 
// what is written below that case

export const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COINS:
      return [

        ...state,{
        coins: state.coins + 1,
        totalCoins: state.coins + state.passiveCoins
        }
  ]
      
      case INCREMENT_PASSIVE_COINS:
        return [
          ...state,{
          passiveCoins: state.passiveCoins + 1,
          totalCoins: state.coins + state.passiveCoins
          }
        ]
    default:
      throw new Error(`${action.type} is not a valid action.`)
  }
}

// IMPORTANT -- This is our provider. Basically, whatever is wrapped
// in here has the context that we've given it. 

export const GlobalProvider = ({children}) => {
  return (
  <GlobalContext.Provider value = {useReducer(reducer, {...globalState, totalCoins})}>
    {children}
    </GlobalContext.Provider>
  )
}

export function useGlobalState(){
    return useContext(GlobalContext)
 
}

// ----------------------------------------
// old stuff


// const ClickContext = createContext(null);
// const AutoIncContext= createContext(null)

// export let initialState = 0;
// export let autoState = 0;

// export function useClickState() {
// return useContext(ClickContext);
// }

/////////////

// export function reducerClick(state, action) {
//   switch (action.type) {
//     case "INCREMENT":
//       return state.coins + 1;
//     default:
//       return state;
//     }
//   }

// export function autoInc (state, action){
//     switch(action.type){
//         case "AUTO":
//             return  state + 1
//             default:
//                 return state;
//             }
//         }

// export function ProviderClick({ children, reducer, initialState }) {
//   return (
//     <ClickContext.Provider value={useReducer(reducerClick, initialState)}>
//       {children}
//     </ClickContext.Provider>
//   );
// }

// export function ProviderAuto({children, reducer, autoState}){
//     return(
//         <AutoIncContext.Provider value = {useReducer(autoInc, autoState)}>
//             {children}
//         </AutoIncContext.Provider>
//     )
// }

// export function useClickState() {
//   return useContext(ClickContext);
// }

// export function useAutoState(){
//         return useContext(AutoIncContext)
// }
