import React, { useState } from 'react'
import "./Main.css"
const myProjects=[
  {
  id:1,
  projectTitle:"Golobe-X",
  image:"./../../../public/images/golob.PNG",
  paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis impedit atque, quisquam quibusdam modi porro .",
  category:"react",
  demoLink:'https://ali8mohammad.github.io/Graduation-Project',
  link:'https://ali8mohammad.github.io/Graduation-Project',
},
{
  id:2,
  projectTitle:"Focal X",
  image:"./../../../public/images/Focal X.PNG",
  paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis impedit atque, quisquam quibusdam modi porro .",
  category:"react",
  demoLink:'https://mayasleman.github.io/Task8/',
  link:'https://github.com/MayaSleman/Task8.git',
} ,
{
  id:3,
  projectTitle:"DevFolio",
  image:"./../../../public/images/DevFolio.PNG",
  paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis impedit atque, quisquam quibusdam modi porro .",
  category:"bootstrap",
  demoLink:'https://mayasleman.github.io/devfolio/',
  link:'https://github.com/MayaSleman/devfolio.git',
},
{
  id:4,
  projectTitle:"Mealify",
  image:"./../../../public/images/Mealify.PNG",
  paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis impedit atque, quisquam quibusdam modi porro .",
  category:"bootstrap",
  demoLink:' https://mayasleman.github.io/Mealify/',
  link:'https://github.com/MayaSleman/Mealify.git',
},
{
  id:5,
  projectTitle:"Zay Shop",
  image:"./../../../public/images/Zay Shop.PNG",
  paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis impedit atque, quisquam quibusdam modi porro .",
  category:"htmlCss",
  demoLink:' https://mayasleman.github.io/task5/',
  link:'https://github.com/MayaSleman/task5.git',
}, 
{
  id:6,
  projectTitle:"Portfolio",
  image:"./../../../public/images/portfolio.PNG",
  paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis impedit atque, quisquam quibusdam modi porro .",
  category:"htmlCss",
  demoLink:' https://mayasleman.github.io/task3/',
  link:'https://github.com/MayaSleman/task3.git',
}, 
{
  id:7,
  projectTitle:"The Cafe",
  image:"./../../../public/images/thecafe.PNG",
  paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis impedit atque, quisquam quibusdam modi porro .",
  category:"htmlCss",
  demoLink:'https://mayasleman.github.io/task2-2/',
  link:'https://github.com/MayaSleman/task2-2.git',
},
{
  id:8,
  projectTitle:"Start Page",
  image:"./../../../public/images/start.PNG",
  paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis impedit atque, quisquam quibusdam modi porro .",
  category:"htmlCss",
  demoLink:'https://mayasleman.github.io/task2-1/',
  link:'https://github.com/MayaSleman/task2-1.git',
},
{
  id:9,
  projectTitle:"CRUD",
  image:"./../../../public/images/CRUD.PNG",
  paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis impedit atque, quisquam quibusdam modi porro .",
  category:"javascript",
  demoLink:' https://mayasleman.github.io/CRUD/',
  link:'https://github.com/MayaSleman/CRUD.git',
},
{
  id:10,
  projectTitle:"CRUD with Search",
  image:"./../../../public/images/CRUD with Search.PNG",
  paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis impedit atque, quisquam quibusdam modi porro .",
  category:"javascript",
  demoLink:'https://mayasleman.github.io/crud-with-search/',
  link:'https://github.com/MayaSleman/crud-with-search.git',
},
{
  id:11,
  projectTitle:"calculator",
  image:"./../../../public/images/calculator.PNG",
  paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis impedit atque, quisquam quibusdam modi porro .",
  category:"javascript",
  demoLink:'https://mayasleman.github.io/calculator/',
  link:'https://github.com/MayaSleman/calculator.git',
},
{
  id:12,
  projectTitle:"java script",
  image:"./../../../public/images/phone.PNG",
  paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis impedit atque, quisquam quibusdam modi porro .",
  category:"javascript",
  demoLink:' https://mayasleman.github.io/task7-2/',
  link:'https://github.com/MayaSleman/task7-2.git',
},
{
  id:13,
  projectTitle:"Java Script",
  image:"./../../../public/images/java.PNG",
  paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis impedit atque, quisquam quibusdam modi porro .",
  category:"javascript",
  demoLink:' https://mayasleman.github.io/task7-1/',
  link:'https://github.com/MayaSleman/task7-1.git',
},
];
export default function Main() {
  const[currentActive, setCurrentActive] =useState("all");
  const[arr, setarr] =useState(myProjects);
  const handleClick=(buttonCategory) => {
    setCurrentActive(buttonCategory);
    const newArr=myProjects.filter((item) => {
      return item.category===buttonCategory
    }
    )
    setarr(newArr);
  }
  
  return (
    <main className='flex'id='projects'>
      <section className='left-section flex' data-aos="fade-right">
        <button onClick={()=>{setCurrentActive("all");
          setarr(myProjects);
        }}className={currentActive==="all"? "active": ""}>All Projects</button>
        <button onClick={()=>{
        handleClick("htmlCss");
        }} className={currentActive==="htmlCss"? "active": ""}>Html & CSS</button>
        <button onClick={()=>{
                handleClick("javascript");
          }} className={currentActive==="javascript"? "active": ""}>JavaScript</button>
        <button onClick={()=>{
                handleClick("react");
        }} className={currentActive==="react"? "active": ""}>React</button>

<button onClick={()=>{
              handleClick("bootstrap");
        }} className={currentActive==="bootstrap"? "active": ""}>BootStrap</button>
      </section>
      <section className='right-section flex' data-aos="fade-left">
         {arr.map((item) =>{
             return(
              <article className='card'key={item.id}>
              <img src={item.image} alt="golob" width={266}/>
              <div className='box' style={{width :"266px"}}>
                <h2 className='title'>{item.projectTitle}</h2>
                <p className='sub-title'>{item.paragraph}</p>
              <div className="flex icons">
                <div className='flex' style={{gap :"11px"}}>
                  <a href={item.demoLink} target='blank'>
                  <div className="icon-link"></div>
                  </a>
                  <a href={item.link} target='blank'>
                  <div className="icon-github"></div>
                  </a>
                </div>
              {/* <a href="" className='link flex'>
                more
                <span className="icon-arrow-right" style={{alignSelf:"end"}}></span>
              </a> */}
              </div>
              </div>
             </article>
             )
         })
         }
      </section>

    </main>
  )
}
