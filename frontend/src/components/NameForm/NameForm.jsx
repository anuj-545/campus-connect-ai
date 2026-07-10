import {useState} from "react";

function NameForm(){

    const [name , setName] = useState("");

    function handleChange(event){

        setName(event.target.value);

    }

    return(
        <div>

            <h2>Enter Your Name</h2>

            <input 
                type="text"
                placeholder = "Enter Your Name"
                value = {name} //iska importance ye hai ki agar ye likha hai to power react ke paas hai agar nahi likha hoga to power browser ke paas hai .
                onChange = {handleChange}
            />

            <h3>
                Welcome, {name.toUpperCase() || "Guest"}!
            </h3>
            <button onClick={()=>setName("")}>Reset</button>// ye value = name ki importance check karne ke liyea likha hai 

        </div>
    );
}

export default NameForm;