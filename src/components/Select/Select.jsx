export const Select =({name,value,onChange,id,options})=>{
    return(
        <label>
            <select name={name} value={value} onchange={onchange}>                
                {options?.map((opt) => (
                    <option key={options.value}
                    value={options.value}>{opt.label}</option>
                ))}                
            </select>
            
        </label>

    );
    
}