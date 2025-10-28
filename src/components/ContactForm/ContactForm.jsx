import { useState } from "react";
import { InputText } from "../InputText/InputText";
import { Select } from "../Select/Select";
import { Roles } from "./Roles";

export const ContactForm=()=>{
    //form with name,email,role,message
    const[form,setForm] = useState({
        name:"",
        email:"",
        role:"",
        message:"",
    });
    const rules=[
        {type:"name",message:"please provide a name",isValid:(value)=>value.trim()!=="", },
        {type:"name",message:"please provide a email",isValid:(value)=>/^\S+@\S+\.\S+$/.test(value), }

    ]
    const handleChange=(e)=>{
        const{name,value}=e.target;
        setForm(previousState=>{
            return{
                ...previousState,
                [name]:value
            }
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        rules.forEach(rule=>{
            const rule = rule.isValid(form[rule.type])
        })
        //creates a string from an array or object
        alert(JSON.stringify(form));
    }
    return(
        <> 
        <form onSubmit={handleSubmit}>
            <InputText name="Name"
            label="Name"
            required={false}></InputText> 

            <InputText name="email"
            placeholder="anjanisai@gmail.com"
            label="your name"
            required={true}
            type="email"></InputText>

            <Select name="role"
            label="select your role"
            options={Roles}></Select>

            <Textarea></Textarea>
            <button type="submit">Submit</button>
        </form> 
        
        </>
    )
}