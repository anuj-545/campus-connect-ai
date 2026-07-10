import {useState} from 'react';

function SubmitForm(){
    const [name, setName] = useState("");
    const [submitted, setSubmitted] = useState(false);

    function handleChange(event){
        setName(event.target.value);
    }

    function handleSubmit(){
        setSubmitted(true);
    }

    return(
        <div>
            <h2>Submit Your Name</h2>
            <input
                type="text"
                placeholder="Enter Your Name"
                value={name}
                onChange={handleChange}
            />
            
            <h3>

                {
                    submitted ? (name === "" ? "please enter your name" : `Welcome, ${name}!`) : null
                }
            </h3>
            <button onClick={handleSubmit}>Submit</button>

        </div>
    );
}

export default SubmitForm;