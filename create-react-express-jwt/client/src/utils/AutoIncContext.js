// import React, { createContext, useReducer, useContext } from "react";

// export const AutoContext = createContext(null);

// class AutoContextProvider extends Component{
//     state = {
//         autoInc: 0
//     }

// }






// export let autoState = 0;

// export function autoInc(state, action) {
//   switch (action.type) {
//     case "AUTO 1":
//       return state + 1;
//     default:
//       return state;
//   }
// }
// export function ProviderClick({ children, reducer, autoState }) {
//   return (
//     <AutoContext.Provider value={useReducer(autoState, autoState)}>
//       {children}
//     </AutoContext.Provider>
//   );
// }
