
import React from 'react'
import Heading from './Heading'
import Card from './Card'
const data =[
    {
        id:0,
        title:"Calculator",
        desc:"A React &Typescript based app for managing and organi",
        img:"/project_2.png",
        tags:["HTML","CSS","Node","Javascript"],
    },
    {
        id:1,
        title:"Mali stone 1",
        desc:"A next.js and typescript powered website to track time",
        img:"/project_1.png",
        tags:["HTML","CSS","Node","typescript"]

    },
    {
        id:2,
        title:"Prodict table",
        desc:"A next.js and typescript powered website to track time",
        img:"/project_3.png",
        tags:["HTML","CSS","Node","typescript"]
    }
]

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
      <Heading title='My Projects'/>
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-3 place-items-center'>
        {data.map((el) => (<Card
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
    </div>
  )
}

export default Projects
