import {useState} from "react";

function Counter(){
    const [count , setCount] = useState(0);

    function increaseCount(){
        setCount(count + 1);// tum agar socho to tum sirf increaseCount se bhi count ko increase kar sakte ho but setcount isliyea use kiya jata hai kyuki react ko tabhi pta lagega jab setcount update hoga to use pta lagega ki haan aab value update ho gayi hai to compnent ko dobara render kar do .
    }

    return(
        <div>
            <h1>Count:{count}</h1>
            <button onClick={increaseCount}>
                Increase
            </button>
        </div>
    );
}

export default Counter;