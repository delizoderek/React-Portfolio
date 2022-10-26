import React, { useState } from 'react'
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import Skill from './Skill'
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';

export const Projects = () => {
	const [ filters, setFilters ] = useState(() => new Set())
	console.log(filters)
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
			skill : ['git'],
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
			skill : ['C++'],
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
			skill : ['Javascript'],
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
			skill : ['C#'],
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
			skill : ['React'],
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
			skill : ['Express'],
    },
  ];

	const onClick = (evt) => {
		const filter = evt?.target?.name
		const oldSet = new Set(filters)
		if(oldSet.has(filter)){
			oldSet.delete(filter)
			setFilters(new Set(oldSet))
		} else {
			oldSet.add(filter)
			setFilters(new Set(oldSet))
		}
	}

	const filterFunction = ( item ) => {
		return item.skill.some(skill => filters.has(skill))
	}

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
              <div className="animate__animated animate__fadeIn">
                <h2>Projects</h2>
                <div className="flex">
									{projects.map(item => (<Skill key={item.skill} skill={item.skill} onClick={onClick}/>))}
								</div>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className="animate__animated animate__slideInUp">
                    <Tab.Pane eventKey="first">
                      <Row>
                        { filters.size > 0 ? 
													projects.filter(filterFunction)
													.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
												:
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
