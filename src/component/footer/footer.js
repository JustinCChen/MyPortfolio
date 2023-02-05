import './footer.css';
import { GithubOutlined } from '@ant-design/icons'
import { LinkedinOutlined } from '@ant-design/icons'


function Footer(){
    return(<>
    <footer>
        <div class="social-icons">
        <a href="https://www.linkedin.com" ><LinkedinOutlined style={{color: 'white'}}/></a>
        <a href="https://www.github.com" ><GithubOutlined style={{color: 'white'}}/></a>
      </div>
      <div className='p'>
        <p>Made by Justin Chen</p>
      </div>
    </footer>
      </>
    )
}

export default Footer
