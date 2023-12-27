import { useEffect, useState } from "react"
import { SlCalender } from "react-icons/sl"
import './Experience.css'


const Experience = ({state}) => {
    const [education,setEducation]=useState("");
    const [experience,setExperience]=useState("");

    useEffect(()=>{
        const {contract}=state;
        const educationDetails=async()=>{
            const educationfecth = await contract.methods.allEducationDetails().call();
            setEducation(educationfecth);
        }
        contract && educationDetails();
    },[state])

    useEffect(()=>{
        const {contract}=state;
        const experienceDetails=async()=>{
            const experiencefecth = await contract.methods.allExperienceDetails().call();
            setExperience(experiencefecth);
        }
        contract && experienceDetails();
    },[state])

    return (
        <section className="exp-section">
            <h1 className="title">Experience & Education </h1>

            <div className="container">

                <div className="education">
                    <h1 className="edu-tittle">Education</h1>
                    {education!=="" && education.map((edu)=>{
                        return (   
                        <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' /> {edu.date}
                        </p>
                        <h3 className="card-text2">{edu.degree}</h3>
                        <p className="card-text3">{edu.knowledgeAcquired}</p>
                        <p className="card-text4">
                        {edu.institutionName}
                        </p>
                    </div>)
                    })}
                 
                   
                </div>
                {/* experience */}
                <div className="container">

                <div className="education">
                    <h1 className="edu-tittle">Experience</h1>
                    {experience!=="" && experience.map((exp)=>{
                        return (   
                        <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' /> {exp.date}
                        </p>
                        <h3 className="card-text2">{exp.post}</h3>
                        <p className="card-text3">{exp.knowledgeAcquired}</p>
                        <p className="card-text4">
                        {exp.compamyName}
                        </p>
                    </div>)
                    })}
                    
                   </div> 
                    
                </div>
            </div>
        </section>
    )
}

export default Experience
