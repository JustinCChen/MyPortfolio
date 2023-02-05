import './profolio.css'
import project1 from '../../asset/project1.png'
import project2 from '../../asset/project2.png'
import project3 from '../../asset/Communitea.png'
import project4 from '../../asset/Weather.png'
import project5 from '../../asset/note taker.png'
import project6 from '../../asset/Password Generator.png'
function Profolio(){
    return (<>
        <div class="main">
            <h1>Project</h1>
            <ul className="cards flex grid xl:grid-cols-3 gap-10 md:grid-cols-2 sm:grid-cols-1">
                <li class="cards_item">
                    <div class="card">
                        <div class="card_image"><img src={project1} alt="project1"/></div>
                        <div class="card_content">
                            <h2 class="card_title">Anime Search</h2>
                            <p class="card_text">we wanted to build a webapp based on our common interests. We agreed upon anime but quickly realized that everyones knowledge on it varied. That sparked an idea for us, why not create a webapp that could assist the user in finding the perfect gift for their friends that may not watch the same anime.</p>
                            <a href="https://thien-le13.github.io/anime-ecommerce-webapp/">
                                <button class="btn card_btn">SEE THIS LIVE</button>
                            </a>
                        </div>
                    </div>
                </li>
                <li class="cards_item">
                    <div class="card">
                        <div class="card_image"><img src={project2} alt="project2" /></div>
                        <div class="card_content">
                            <h2 class="card_title">ChroniclesBlog</h2>
                            <p class="card_text"> The motivation for this project was to create an open-source forum site where users can share a post and discuss with other users on various topics. We built this to practice and refine our skills with express, express-session, and sequelize to create an application with its own database and MVC structure.</p>
                            <a href='https://calm-spire-29588.herokuapp.com/'>
                                <button class="btn card_btn">SEE THIS LIVE</button>
                            </a>
                        </div>
                    </div>
                </li>
                <li class="cards_item">
                    <div class="card">
                        <div class="card_image"><img src={project3} alt="project1"/></div>
                        <div class="card_content">
                            <h2 class="card_title">CommuniTEA</h2>
                            <p class="card_text"> This web app lets users browse a wide selection of delicious milk tea businesses where they can view the reviews and also leave their own ratings.</p>
                            <a href='https://calm-spire-29588.herokuapp.com/'>
                                <button class="btn card_btn">SEE THIS LIVE</button>
                            </a>
                        </div>
                    </div>
                </li>
                <li class="cards_item">
                    <div class="card">
                        <div class="card_image"><img src={project4} alt="project1"/></div>
                        <div class="card_content">
                            <h2 class="card_title">Weather Dashboard</h2>
                            <p class="card_text"> This application allows various different users to create an account and post blog posts. Users can edit and delete their posts and also to comment on posts.</p>
                            <a href='https://calm-spire-29588.herokuapp.com/'>
                                <button class="btn card_btn">SEE THIS LIVE</button>
                            </a>
                        </div>
                    </div>
                </li>
                <li class="cards_item">
                    <div class="card">
                        <div class="card_image"><img src={project5} alt="project1"/></div>
                        <div class="card_content">
                            <h2 class="card_title">Note Taker</h2>
                            <p class="card_text"> Express.JS based note app that able to take notes and save them and delete eisting notes.</p>
                            <a href='https://glacial-reef-07877.herokuapp.com/'>
                                <button class="btn card_btn">SEE THIS LIVE</button>
                            </a>
                        </div>
                    </div>
                </li>
                <li class="cards_item">
                    <div class="card">
                        <div class="card_image"><img src={project6} alt="project1"/></div>
                        <div class="card_content">
                            <h2 class="card_title">Password Generator</h2>
                            <p class="card_text"> This project solves the security concern of weak passwords. Given that a user needs a new, secured password, they will be promted to determine certain character types required for the password and then a new random password will be generated.</p>
                            <a href='https://justincchen.github.io/Password-Generator/'>
                                <button class="btn card_btn">SEE THIS LIVE</button>
                            </a>
                        </div>
                    </div>
                </li>
            </ul>
            </div>
    
    </>)
}

export default Profolio;