import { useReducer } from "react";
import CounterContext from "../Contexts/CounterContext";
const reducer = (state,action) => {
    const {type,payload,photo} = action;
    switch (type) {
        case "Add_Item":
            let {id} = payload;
            const index = state.findIndex((item)=> {
               return item.id === id
            })
            if(index === -1) {
                return [...state,{
                    id: payload.id,
                    payload,
                    count: 1,
                    photo
                }]
            } else {
                const tmp = [...state];
                tmp[index].count++;
                return tmp
            }
            break;
    
        default:
            break;
    }
    return state
}

export default function BasketButtonProvider({children}) {
    const [state,dispatch] = useReducer(reducer,[])
    return (
        <CounterContext.Provider value={{
            state,
            dispatch
        }}>
            {children}
        </CounterContext.Provider>
    )
}