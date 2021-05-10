import React,{useState} from 'react'
import './Navbar.css'

const Navbar = () => {
    const[open,setOpen]=useState(false)
    const openMenu=()=>{
        setOpen(!open)
        console.log(`open ${open}`)
    }
    return (
       <div className="wrapper">
            <div className="navbar">
            <h3 className="nav-brand">   Bicycle Shop</h3>
            <ul className="nav-links">
                <li className="nav-items">Home</li>
                <li className="nav-items">About</li>
                <li className="nav-items">Services</li>
                <li className="nav-items">Login</li>
                <li className="nav-items">Register</li>
                <li><button>Order Now</button></li>
            </ul>
            <div className="menu" onClick={openMenu}>
                <div className={"bar " + (open ? "change1":"")}></div>
                <div className={"bar " + (open ? "change2":"")}></div>
                <div className={"bar " + (open ? "change3":"")}></div>
            </div>           
        </div>
            <div className={"sidebar " + (open ? "open":"close")}>  
                <div className="content">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>  
                        <li>Categories</li>                     
                        <li>Login</li>
                        <li>Register</li>
                        <li><button>Order Now</button></li>
                    </ul>
                </div>              
            </div>
       </div>
    )
}

export default Navbar
