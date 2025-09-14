import {useState} from "react";

function UseStateComponent(){

    const [count, setCount] = useState(0)

    function trackCount(){
        
        setCount(count => count + 1)
    }


    return(
        <>

        <div>

            <p>You clicked {count} times</p>
            <button onClick={trackCount}>Click Me</button>
        </div>
        
        </>
    );


} 

export default UseStateComponent