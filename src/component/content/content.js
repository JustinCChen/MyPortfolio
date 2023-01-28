import AboutMe from '../aboutMe/aboutMe.js';
import Contact from '../contact/contact.js';
import '../profolio/profolio.js'
import Profolio from '../profolio/profolio.js';
import Resume from '../resume/resume.js';
import './content.css'

function selectPage(page){
    if(page === 'resume'){
        return <Resume/>
    }else if(page === 'profolio'){
        return <Profolio/>
    }else if (page === 'contact'){
        return <Contact/>
    }else{
        return <AboutMe/>
    }
}




function Content({page}){
    // console.log(props.onClick)
    console.log({page})
    return(
        // <div className='content'>{selectPage(props.onClick)}</div>
        <div className='content'>{selectPage(page)}</div>
        
    )
}

export default Content;