import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";

const Navbar=()=>{
const{isLight,toggleTheme} = useContext(ThemeContext)

const{isAuthorized,login,logout}=useContext(AuthContext)

return(
<>
    <div className="navbar">
            <div className="inNav">
                <div className="link">
            <a href="">Services</a>
            <a href="">Projects</a>
            <a href="">About</a>
            <button onClick={toggleTheme}>
    {`Make ${isLight ?  "Dark" : "Light"}`}
    </button>

    <button onClick={()=>{
        if(isAuthorized) logout();
        else login("R","Z")
    }}>
        {isAuthorized ? "Logout" : "Login"}
    </button>
        </div>
        </div>
        </div>
        <h1>Hi! My Name Is Akshay Pandey...</h1>
        <h2>User:{isAuthorized ? "Logged-In" : "Logged-Out"}</h2>
        </>

)

}

export default Navbar