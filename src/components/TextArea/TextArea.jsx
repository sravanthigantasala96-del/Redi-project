export const TextArea=({label,type,id,onChange,name,rows,cols,error,placeholder,value}) =>{
    return(
        <label>
            <span>{label}</span>
            <input type={type} name={name} onChange={onChange} required={required}             
             rows={4} cols={5} value={value}/>
            {!!error && <span>{error}</span>} 
        </label>
    )
}