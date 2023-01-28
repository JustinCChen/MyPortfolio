import './header.css'

function Header({changePage}){
    
    console.log({changePage});
    // console.log(props.clickPage);


    return(
        <header className="header">
            <nav className='navbar'>
                <div>
                    <ul>
                        <li onClick={()=>{changePage('aboutMe')}}>
                            About me
                        </li>
                        <li onClick={()=>{changePage('profolio')}}>
                            Profolio
                        </li>
                        <li onClick={()=>{changePage('contact')}}>
                            Contact 
                        </li>
                        <li onClick={()=>{changePage('resume')}}>
                            Resume
                        </li>

                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;

