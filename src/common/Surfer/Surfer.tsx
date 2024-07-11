import "./Surfer.css"

import { useNavigate } from "react-router-dom";

function Surfer ({path, destination} : {path: string, destination: string}) {

    const navigate = useNavigate()

    return (
        <div className="surfer-design" onClick={()=>navigate(path)}>
            {destination}
        </div>
    )
}

export default Surfer;