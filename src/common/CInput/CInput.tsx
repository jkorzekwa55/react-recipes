import "./CInput.css"

function CInput ({type, name, placeholder, design, labelName, emitFunction, errorCheck} : 
    {type: string, name: string, placeholder: string, labelName: string, design: string, emitFunction: (e: React.ChangeEvent<HTMLInputElement>)=>void, errorCheck: (e: React.FocusEvent<HTMLInputElement, Element>)=>void }) {
    return (
        <div className="form-group custom-group">
            {labelName !== 'none' ?  <label className="label">{labelName}</label> : <></>}
            <input type={type} 
            name={name}
            className={`form-control ${design}`}
            placeholder={placeholder}
            onBlur={(e) => errorCheck(e)}
            onChange={(e) => emitFunction(e)}/>
        </div>
    )
}

export default CInput;