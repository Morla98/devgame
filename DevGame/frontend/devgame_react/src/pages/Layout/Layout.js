import { Outlet, Link } from "react-router-dom"; 
import "./Layout.css"

function Layout(){
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to={"/"}>Home </Link></li>
                    <li><Link to ={"/login"}>Login </Link></li>
                    <li>TicTacToe </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}

export default Layout;