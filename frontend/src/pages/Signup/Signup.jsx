import {useState} from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import "./Signup.css";

function Signup(){

    const [formData, setFormData] = useState({
        name:"",
        email: "",
        password: "",
        confirmPassword:""
        });

    const [errors, setErrors] = useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:""
    });

    const navigate = useNavigate();

    function handleChange(event){

        const{name, value} = event.target;
        setFormData((prevData) =>({...prevData, [name]: value})); //[] jo is dibbe ke andar hai usko jo value assign hai wo do yaha pe 
    }

    function handleSubmit(event){
        event.preventDefault();
        const isValid = validateForm();
        if(!isValid) return ;
        console.log(formData);
        // console.log("Form Submitted");
        navigate("/login");
        // console.log("Navigation Completed");
    }

    function validateForm(){

        const newErrors = {};

        if(!formData.name.trim()){
            newErrors.name = "Full Name is required";
        }

        if(!formData.email.trim()){
            newErrors.email = "Email is required";
        }

        if(!formData.password){
            newErrors.password = "Password is required";
        }else if(formData.password.length<8){
            newErrors.password = "Password must be atleast 8 characters";
        }

        if(formData.confirmPassword !== formData.password){
            newErrors.confirmPassword = "Password do not match";
        }

        console.log(newErrors);

        setErrors({
            name: newErrors.name || "",
            email: newErrors.email || "",
            password: newErrors.password || "",
            confirmPassword: newErrors.confirmPassword || ""
        });

        return Object.keys(newErrors).length === 0 ; 
        
    }

    return(
        <div className="signup-container">

            <h1>Create Your Account</h1>

            <form onSubmit={handleSubmit}>
                
                <Input
                    label="Full Name"
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    error={errors.name}
                />

                <Input
                    label="College Email"
                    type="email"
                    name="email"
                    placeholder="Enter your college email"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}

                />

                <Input
                    label="Password"
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={handleChange}
                    error={errors.password}

                />

                <Input
                    label="Confirm Password"
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    error={errors.confirmPassword}

                />

                <Button
                    type="submit"
                    variant="primary"
                >Create Account</Button>

            </form>
        </div>
    );
}

export default Signup;