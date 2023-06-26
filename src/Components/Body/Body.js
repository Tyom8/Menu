import { useCallback, useContext, useEffect, useState } from "react"
import CounterContext from "../../Contexts/CounterContext";
import photos from "../../Photos/Photos";

function Body() {
    const [list, setList] = useState([]);
    const { dispatch } = useContext(CounterContext);
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/aghasi89/datas/main/menu.json?fbclid=IwAR1B8DB4jSfalzt1HwWeEl_MY_D2xUmvmuFUEN1raafX6mOnfxxGFW3NhkY")
            .then((res) => {
                return res.json()
            }).then((res2) => {
                setList(res2)
            })
    }, [])

    const clickHandler = useCallback((subItem,photo) => {
        dispatch({
            type: "Add_Item",
            payload: subItem,
            photo: photo
        })
    },[])
    return (
        <div className="all-Items">
            {
                list.map((list, index) => {
                    const subItems = list["sub-items"];
                    return (
                        <div key={"item" + index} className='Item-Div' style={{
                            backgroundImage: `url(${photos[index]})`
                        }}>
                            <p className="red">name:{list.name}</p>
                            <p className="red">description:{list.description}</p>
                            {
                                subItems.map((subItem,index2) => {
                                    return <button key={"button" + index2} onClick={() => {
                                        clickHandler(subItem,photos[index])
                                    }}><span>{subItem.price}</span></button>
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
};

export default Body;