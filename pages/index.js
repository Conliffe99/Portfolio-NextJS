import Head from 'next/head'
import Image from 'next/image'
import projects from '../data/projects'
import about from '../data/about'
import { Heading, MainWrapper, Row } from '../styled_components/mainpage'
import styles from '../styles/Home.module.css'
import Project from '../components/Project'

export default function Home() {
  return (
    <MainWrapper>

      <Row>
        <Heading> Welcome to my Portfolio, have a look around!</Heading><div>
          <img src={about.headshot} alt={about.title}/>
        </div>
      </Row>



      <Row>
        <p>{about.description}
        <br/><br/>
        <br/>
        Skills<br/>
        <br/>
        Languages:<br/> 
        {about.languages}<br/>
        <br/>
        Database:<br/>
        {about.database}<br/>
        <br/>
        Frameworks:<br/>
        {about.frameworks}
        </p>
      </Row>



      <Row>
        <p>
        <br/><br/>
        </p>
      </Row>


    <Heading>My Projects</Heading>
      <Row>
      {projects.map((project, index) => {
        return <Project project={project} key={index}/>
      })}
      </Row>


    </MainWrapper>
  )
}
