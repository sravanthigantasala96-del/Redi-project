export const InputText = ({label,type="text",name,required=false,placeholder,onChange})=>{
    return(
        <label>
            <span>{label}</span>
            <input type={type} name={name} onChange={onChange} required={required}             
             placeholder={placeholder}/>
            {!!error && <span>{error}</span>}
        </label>
    )
}