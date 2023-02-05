import './header.css'
import {FiMenu} from "react-icons/fi"
import { useState } from 'react';

function Header({ changePage }) {

    const [open, setOpen] = useState(false)

    return (<>
        <header className="board-b py-2 ">
            <div className='flex items-center justify-between xl:max-w-7xl xl:mx-auto max-w-full px-[8%] flex-wrap w-full'>
                <div className='text-2xl'>Justin Chen</div>

                <FiMenu className='fiMenu lg:hidden h-6 w-6 cursor-pointer' onClick={()=> setOpen(!open)}/>

                <nav className={`${open ? "block" : "hidden" } w-full lg:flex lg:items-center lg:w-auto`}>
                    <ul className='lg:flex lg:justify-between py-4'>
                        <li>
                            <a className='text-xl lg:px-5 py-2 block hover:text-gray-50 font:semibold' onClick={() => { changePage('aboutMe') }}>About me</a>
                        </li>
                        <li>
                            <a className='text-xl lg:px-5 py-2 block hover:text-gray-50' onClick={() => { changePage('profolio') }}>Profolio</a>
                        </li>
                        <li>
                            <a className='text-xl lg:px-5 py-2 block hover:text-gray-50' onClick={() => { changePage('contact') }}>Contact </a>
                        </li>
                        <li>
                            <a className='text-xl lg:px-5 py-2 block hover:text-gray-50' onClick={() => { changePage('resume') }}>Resume</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    </>
    )
}

export default Header;

