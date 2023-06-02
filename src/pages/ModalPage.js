
import Modal from "../components/modal";
import Button from "../components/Button";
import {useState} from 'react'

function ModalPage(){
    const [showModal,doShowModal] = useState(false);

    const handleClick= ()=>{
        doShowModal(true);
    }

    const closeModal = (value)=>{
        (value)?doShowModal(false):doShowModal(true);
    }


    const modalPrivacyPolicy= <div>
    <h1 className="text-4xl font-medium	text-center	">Privace Policy</h1>
    <br/>
    <p>Companies or websites that handle customer information are required by law and third parties to publish their Privacy Policies on their business websites. If you own a website, web app, mobile app or desktop app that collects or processes user data, you most certainly will have to post a Privacy Policy on your website (or give in-app access to the full Privacy Policy agreement).</p>
    <br/>
    <p>Privacy is not a new concept. Humans have always desired privacy in their social as well as private lives. But the idea of privacy as a human right is a relatively modern phenomenon.</p>
    <br/>
    <p>Around the world, laws and regulations have been developed for the protection of data related to government, education, health, children, consumers, financial institutions, etc.</p>
    <br/>
    <p>This data is critical to the person it belongs to. From credit card numbers and social security numbers to email addresses and phone numbers, our sensitive, personally identifiable information is important. This sort of information in unreliable hands can potentially have far-reaching consequences.</p>
    <Button success onClick={()=>closeModal(true)} className="float-right">I Agree</Button></div>;



    const modal = <Modal close={closeModal}>{modalPrivacyPolicy}</Modal>;
    return <div><Button primary onClick={handleClick}>Open Modal</Button>
            {showModal&& modal}
            </div>
}

export default ModalPage;