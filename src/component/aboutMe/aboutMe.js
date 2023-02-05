import './about.css'
import profileImage from "../../asset/S__8994818.jpeg"
import { DiReact } from "react-icons/di";
import { DiJavascript } from "react-icons/di";
import { FaCss3Alt } from "react-icons/fa";
import {Html5Outlined} from "@ant-design/icons";
import { SiMongodb } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import { GrMysql } from "react-icons/gr";
import { SiTailwindcss } from "react-icons/si";
import { BiCube } from "react-icons/bi";
import {SiJquery} from "react-icons/si";
import{SiGraphql} from "react-icons/si";
import{SiBootstrap} from "react-icons/si"

function AboutMe(){
  return (
      <main className=" min-h-screen border-t-2">
          <div className="lg:px-20 flex-container mx-auto aboslute sm:pt-5">
              <section className="flex flex-col items-center p-10">
                  <img
                      src={profileImage}
                      className="w-32 h-32 w-64 h-64  rounded-full flex"
                      alt="Me!"
                  />
                  <div className="text-4xl flex flex-col">
                      <h2 className="text-2xl mb-20 ">
                            <div className='text-4xl p-5 flex justify-center'>About Me</div>
                            <span> I am driven by a passion for problem solving. Whatever the project, the framework, or the goal, it is undoubtedly the challenge that drives me. Some people call it an obsession, they’re probably right. I understand the importance of the balance between form and function, and I know a good team can exponentially increase everyone’s potential. As a MERN stack web developer I look forward to the many challenges to come and the creative process of figuring out how to solve each one. </span>
                      </h2>
                      <p></p>
                  </div>
              </section>
          </div>
          <h2 className=" text-4xl text-black  text-center">My Toolbox</h2>
          <section className="flex justify-items-center grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 text-2xl p-10">
              <span className="flex text-orange-500">
                  <Html5Outlined />HTML
              </span>
              <span className="flex text-blue-600">
                  <FaCss3Alt /> CSS
              </span>
              <span className="flex text-yellow-400">
                  <DiJavascript /> JavaScript
              </span>
              <span className="flex text-blue-900">
                  <GrMysql /> MySQL
              </span>
              <span className="flex text-blue-600">
                  <SiTailwindcss /> TailwindCSS
              </span>
              <span className="flex text-blue-300">
                  <DiReact /> React
              </span>
              <span className="flex text-green-500">
                  <IoLogoNodejs /> Node.js
              </span>
              <span className="flex  text-green-400">
                  <SiMongodb /> MongoDb
              </span>
              <span className="flex text-blue-500">
                  <BiCube /> Sequelize
              </span>
              <span className="flex text-blue-600">
                  <SiJquery /> Jquery
              </span>
              <span className="flex text-pink-500">
                  <SiGraphql /> GraphQL
              </span>
              <span className="flex text-purple-600">
                  <SiBootstrap /> BootStrap
              </span>
          </section>
      </main>
      );
    }

    


export default AboutMe