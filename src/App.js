import './App.css';
import Header from './component/header/header';
import Footer from './component/footer/footer';
import Content from './component/content/content';
import { useState } from 'react';






function App() {
  
  const [state, setState]= useState('')
  

  function clickPage(page){
    const newPage = page
    setState(newPage);
  }

  
    

  return (<>
    {/* <Header/> */}
    <Header changePage = {clickPage}/>
    <Content page = {state}/>
    {/* <button onClick={()=>{setState('profolio')}}>click</button> */}
    <Footer/>
    </> )
}


export default App;
