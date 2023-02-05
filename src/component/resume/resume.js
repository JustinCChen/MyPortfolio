import './resume.css'

function Resume(){
    return(
            <section>
                <div className="flex justify-center">
                    <h1 className="page-header">My Resume</h1>
                </div>
                <div className="-mb-20">
                    <a className='hover:text-gray-400' href= "https://www.linkedin.com/">
                        <p className='text-base p-10'>Download my Resume</p>
                    </a>
                </div>
                <div className='p-10'>
                    <h5>Front-End Proficiencies</h5>
                    <ol className='list-inside'>
                        <li type="circle">HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>Bootstrap</li>
                        <li>React</li>
                        <li>version control/Git</li> 
                        <li>responsive design</li>
                    </ol>
                    <br></br>
                    <h5>Back-End Proficiencies</h5>
                    <ol className='list-inside'>
                        <li>APIs</li>
                        <li>NodeJS</li>
                        <li>Express</li>
                        <li>Model View Controller (MVC)</li>
                        <li>REST</li>
                        <li>Progressive Web Applications (PWA)</li>
                    </ol>
                    <br></br>
                    <h5>Dev Tool Proficiencies</h5>
                    <ol className='list-inside'>
                        <li>Git</li>
                        <li>npm</li>
                        <li>Jest</li>
                        <li>Webpack</li>
                    </ol>
                    <br></br>
                    <h5>Database Proficiencies</h5>
                    <ol className='list-inside'>
                        <li>MySQL</li>
                        <li>Sequelize</li>
                        <li>NoSQL</li>
                        <li>SQLite</li>
                        <li>GraphQL</li>
                        <li>MongoDB</li>
                        <li>Mongoose</li>
                    </ol>
                </div>
            </section>
        );
    }

export default Resume