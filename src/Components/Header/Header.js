import { useContext, useMemo } from "react";
import { Link } from "react-router-dom";
import CounterContext from "../../Contexts/CounterContext";

function Header() {
    const {state} = useContext(CounterContext);
    console.log(state);
    let total = 0;
    const totalFn = useMemo(() => {
        return state.map((element) => {
            return total += element.count * element.payload.price
        })
    },[state])
    return (
        <div className="Header">
            <Link to={"basket"}><button className="button-Header">Count: {state.length} ({total}$)</button></Link>
        </div>
    )
};

export default Header;