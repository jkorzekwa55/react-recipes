import { useContext, useState } from "react";
import { myContext } from "../../app/context";
import "./Login.css";
import { Credentials, MyContextType } from "../../interfaces";
import checkE from "../../utils/errors";
import { sendCredentials } from "../../services/api-calls";
import CInput from "../../common/CInput/CInput";
import { useNavigate } from "react-router-dom";


function Login() {
    const {setGlobal } = useContext(myContext) as MyContextType;
    const [ loginError, setLoginError ] = useState("");
    const navigate = useNavigate()

    const [credentials, setCredentials] = useState<Credentials>({
        username: "",
        password: ""
    })

    const [credentialsErrors, setCredentialsErrors] = useState({
        nameError: "",
        passwordError: "",
    });

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCredentials((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const errorCheck = (e: React.FocusEvent<HTMLInputElement, Element>) => {
        let error = "";
        error = checkE(e.target.name, e.target.value);

        setCredentialsErrors((prevState) => ({
            ...prevState,
            [e.target.name + "Error"]: error
        }))
    }

    const loginFunction = async () => {
        sendCredentials(credentials)
            .then(res => {
                setGlobal("token", res.data.token);
                if (res.success){
                    setLoginError("");
                    navigate("/");
                }
                else{
                    setLoginError("Wrong credentials");
                }
            })
            .catch(error => console.log(error))

    };

    return (
        <div className="main-content">
            <div className="login-form">
                <section className="centered-section">
                <h2 className="section-title">Login</h2>
                <CInput
                    type="text"
                    labelName="Username"
                    name="username"
                    placeholder=""
                    design={`${credentialsErrors.nameError !== "" ? "error-input" : ""} basic-input`}
                    errorCheck={errorCheck}
                    emitFunction={inputHandler}
                />
                {credentialsErrors.nameError}
                <CInput
                    type="password"
                    name="password"
                    labelName="Password"
                    placeholder=""
                    design={`${credentialsErrors.passwordError !== "" ? "error-input" : ""} basic-input`}
                    errorCheck={errorCheck}
                    emitFunction={inputHandler}
                />
                {credentials.username !== "" &&
                    credentials.password !== "" &&
                    credentialsErrors.nameError === "" &&
                    credentialsErrors.passwordError
                }   
                <p className="text-error">{loginError}</p>
                <button type="submit" disabled={credentialsErrors.nameError !== "" || credentialsErrors.passwordError !== ""} className="btn btn-primary btn-custom" onClick={loginFunction}>Submit</button>
                </section>
            </div>
        </div>
    )
}

export default Login;