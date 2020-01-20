import React, { useReducer, createContext, useContext } from "react";
import {
  USE_HUSTLE,
  USE_PASSIVE_HUSTLE,
  INITIALIZE_PASSIVE_INTERVAL,
  BUY_HUSTLE,
  BUY_HUSTLER,
  BUY_SKIN
} from "./actions";

import { HUSTLERS, HUSTLES } from "./hustlerConfig";

// IMPORTANT this is our state that will be used everywhere.
// idea is that we will increment coins and passiveCoins separately
// behind the scenes and add them together to have our totalCoins

let initState = {
  disposableCoins: 0,
  everCoins: 0,
  passiveInterval: null,
  hustles: {
    coinJar: true
  },
  hustlers: {
    // When a hustler becomes true he'll automatically be in here
  }
  // owned skins: {
  //   pants,
  //   shirts,
  // }

  /// equipped skins
};

// IMPORTANT -- this variable creates context using our globalState above

const GlobalContext = createContext(null);

// IMPORTANT -- This is our passive income custom hook

export const usePassiveClick = () => {};

// IMPORTANT -- this reducer is going to respond to our dispatches
// (actions) and do something with them. i.e. if I click a button
// which dispatches an "INCREMENT_COINS" request, it will return
// what is written below that case

// custom hook usePassiveCounter

export const reducer = (state, action) => {
  // WHENEVER SOMETHING HAPPENS, SET IT UP TO POST TO THE DB 
  // WHENEVER YOU START THE APP, GET FROM MONGOOSE
  switch (action.type) {
    case USE_HUSTLE:
      return {
        ...state,
        disposableCoins: state.disposableCoins + HUSTLES[action.hustle].rate
      };
    case USE_PASSIVE_HUSTLE:
      let newDisposableCoins = 0;

      for (let hustlerType of Object.keys(HUSTLERS)) {
        if (state.hustlers[hustlerType]) {
          newDisposableCoins += HUSTLERS[hustlerType].rate;
        }
      }

      return {
        ...state,
        disposableCoins: state.disposableCoins + newDisposableCoins
      };

    case INITIALIZE_PASSIVE_INTERVAL:
      return {
        ...state,
        passiveInterval: action.passiveInterval
      };

    case BUY_HUSTLE:
      return {
        ...state,
        disposableCoins: state.disposableCoins - HUSTLES[action.hustle].cost,
        hustles: {
          ...state.hustles,
          [action.hustle]: true
        }
      };

    case BUY_HUSTLER:
      return {
        ...state,
        disposableCoins: state.disposableCoins - HUSTLES[action.hustler].cost,
        hustlers: {
          ...state.hustlers,
          [action.hustler]: true
        }
      };

    default:
      throw new Error(`${action.type} is not a valid action.`);
  }
};

// IMPORTANT -- This is our provider. Basically, whatever is wrapped
// in here has the context that we've given it.

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export function useGlobalState() {
  return useContext(GlobalContext);
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
