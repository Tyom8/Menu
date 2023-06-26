import { useContext, useState } from "react";
import CounterContext from "../../Contexts/CounterContext";

function Basket() {
    const { state } = useContext(CounterContext);
    console.log(state);
    return (
        <div className="all-Items">
            {
                state.map((list, index) => {
                    return (
                        <div key={"item" + index} className='Item-Div' style={{
                            backgroundImage: `url(${list.photo})`
                        }}>
                            <p className="red">Name:{list.payload.name}</p>
                            <p className="red">Price:{list.payload.price}</p>
                            <p className="red">Count: {list.count}</p>
                        </div>
                    )

                })
            }
        </div>
    )
}

export default Basket;