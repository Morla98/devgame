import { Outlet, Link } from "react-router-dom"; 
import "./Layout.css"
import logo from "./logo.png"

function Layout() {
    return (
        <>
            <div className="bar-div">
                <div className="logo-div">
                    <Link to={"/"}><img class="logo" src={logo} alt="CatLogo" /></Link>
                </div>
                <div className="nav-div">
                    <nav>
                        <ul>
                            <li><Link to={"/login"}>Login</Link></li>
                            <li><Link to={"/Cat"}>Cindy (Tutorial)</Link></li>
                            <li><Link to={"/tictactoe"}>TicTacToe</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="outlet-div">
                <Outlet />
            </div>
        </>
    );
}

export default Layout;