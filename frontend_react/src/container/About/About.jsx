import React, { useState, useEffect } from 'react';
import {motion} from 'framer-motion';
import './About.scss';
import { AppWrap } from '../../wrapper';
import { MotionWrap } from '../../wrapper'

import { urlFor, client } from '../../client';
/*
const abouts = [
  { 
    title: 'Frontend Developer' , 
    description: 'Some years expertise developing great apps', 
    imgUrl: images.aboutwebdev
  }, 
  { 
    title: 'Backend Developer' , 
    description: 'Some years of experience in backend development; monolitic and microservice oriented architecture. TDD advocated.', 
    imgUrl: images.aboutbackend
  }, 
  { 
    title: 'Devops' , 
    description: 'Few years expertise in deployment/integration of apps. ', 
    imgUrl: images.aboutdevops
  }, 
  { 
    title: 'Full stack developer' , 
    description: 'Some years expertise in developing full stack apps ', 
    imgUrl: images.aboutfullstack
  }  
]*/

const About = () => {
  
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query)
    .then((data) => setAbouts(data))
  }, []);
  

  return (
    <>
      <h2 className="head-text">
        I know that
        <span>                                                                                                                                                                                                                                                                                                          Optimised Algorithms </span>
        <br />
        means...
        <span> Good Business Logic </span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 } }
            whileHover={{ scale: 1.1 }}
            transition={{duration: 0.5, type: 'tween'}}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{marginTop: 20}}>{about.title}</h2>
            <p className="p-text" style={{marginTop: 10}}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(MotionWrap(About, 'app__about'), 'about', "app__whitebg");