import React, { useState } from 'react'
import '../CSS/MainDiv.css'

const MainDiv = () => {

    const [inputVal, setInputVal] = useState([]);

    const [itemList,setItemList] = useState(([]));

    const UserIp = (event) =>{
        setInputVal(event.target.value);
        setItemList(() => {
            return [...inputVal]
        });
    };

    return (
        <div className="rightHomeDivMain">
            <div className="rightSubDiv">
                <div className="inputField">
                    <input type="text" 
                       
                        onChange={UserIp}
                    />
                </div>

                <div className="boxes">
                    
                    {itemList.map((itemVal) => {
                        return <div className="dynamicDiv"><h2>{itemVal}</h2></div>
                    })
                    }
                </div>
            </div>
        </div>
    )
}

export default MainDiv
