import {useState,useEffect} from "react"
import './Contact.css'

const Contact = ({state}) => {
    const [resume,setResume]=useState("");
    useEffect(()=>{
        const {contract}=state;
        const resumeDetails=async()=>{
            const resumecid = await contract.methods.resumeLink().call();
            setResume("https://gateway.pinata.cloud/ipfs/"+resumecid);
        }
        contract && resumeDetails();
    },[state])
 
    return (
        <section className="contact-section">
            <h1 className="title">
                Interested?
                Let's Get In Touch!
            </h1>
            <a href={resume} target='_blank' rel="noopener noreferrer">
                <button className="downlodeBTN">
                    View Resume
                </button>
            </a>

        </section>
    )
}

export default Contact
