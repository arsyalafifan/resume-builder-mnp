import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import CreateResumePage from '../Components/CreateResumePage';
import LoadingSvg from '../MicroComponents/LoadingSvg';
// import { toast, ToastContainer } from 'react-toastify';
import swal from 'sweetalert';


export const GetResume = gql`
    query MyQuery {
        kampus_merdeka_resume {
        id
        full_name
        email
        phone_number
        personal_description
        experience
        experience_title
        experience_description
        education
        education_title
        education_description
        organization
        organization_title
        organization_description
        soft_skills
        hard_skills
        achievements
        }
    }
`

const CreateResume = gql`
mutation MyMutation($objects: [kampus_merdeka_resume_insert_input!]!) {
    insert_kampus_merdeka_resume(objects: $objects) {
      returning {
        id
        full_name
        email
        phone_number
        personal_description
        experience
        experience_title
        experience_description
        education
        education_title
        education_description
        organization
        organization_title
        organization_description
        soft_skills
        hard_skills
        achievements
      }
    }
  }
`;

const CreateResumePageContainer = () => {

    const [formData, setFormData] = useState({
        full_name: "",
        phone_number: "",
        email: "",
        personal_description: "",
        experience: "",
        experience_title: "",
        experience_description: "",
        education: "",
        education_title: "",
        education_description: "",
        organization: "",
        organization_title: "",
        organization_description: "",
        soft_skills: "",
        hard_skills: "",
        achievements: ""
    });
    // const [additionalForm, setAdditionalForm] = useState(false);
    const [isIncludeNumber, setIsIncludeNumber] = useState(false);
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [isValidPhone, setIsValidPhone] = useState(false);
    // const [resumeSection, setResumeSection] = useState({
        
    // })
    const [createResume, { loading: loadingCreate, error }] = useMutation(CreateResume);

    if(loadingCreate){
        <LoadingSvg />
    }

    if(error){
        console.log(error);
        return null
    }

    const handleChangeFormData = (ev) => {
        const wordValidator = /^[A-Za-z., ]*$/.test(ev.target.value);
        if(ev.target.name === "full_name"){
            if(!wordValidator){
                setIsIncludeNumber(true);
            }else{
                setIsIncludeNumber(false);
            }
        }
        // eslint-disable-next-line no-useless-escape
        const validateEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(ev.target.value);
        if(ev.target.name === 'email'){
            if(!validateEmail){
                setIsValidEmail(true);
            }else{
                setIsValidEmail(false);
            }
        }
        // eslint-disable-next-line no-useless-escape
        const validatePhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(ev.target.value);
        if(ev.target.name === 'phone_number'){
            if(!validatePhone){
                setIsValidPhone(true);
            }else{
                setIsValidPhone(false);
            }
        }
        setFormData({
            ...formData,
            [ev.target.name]: ev.target.value,
        })
    };

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        await createResume({
            variables:{
                objects: {
                    full_name: formData.full_name,
                    email: formData.email,
                    phone_number: formData.phone_number,
                    personal_description: formData.personal_description,
                    experience: formData.experience,
                    experience_title: formData.experience_title,
                    experience_description: formData.experience_description,
                    education: formData.education,
                    education_title: formData.education_title,
                    education_description: formData.education_description,
                    organization: formData.organization,
                    organization_title: formData.organization_title,
                    organization_description: formData.organization_description,
                    soft_skills: formData.soft_skills,
                    hard_skills: formData.hard_skills,
                    achievements: formData.achievements
                }
            }
        });
        setFormData({
            full_name: "",
            phone_number: "",
            email: "",
            personal_description: "",
            experience: "",
            experience_title: "",
            experience_description: "",
            education: "",
            education_title: "",
            education_description: "",
            organization: "",
            organization_title: "",
            organization_description: "",
            soft_skills: "",
            hard_skills: "",
            achievements: ""
        });
        // toast.success("Data has successfully submitted");
        swal({
            title: "Success",
            text: "Data has successfully submitted",
            icon: "success",
            button: 'Done'
        });
    };

    return(
        <>
        {/* <ToastContainer /> */}
        <CreateResumePage   formData={formData} 
                            handleChange={handleChangeFormData} 
                            handleSubmit={handleSubmit}
                            isIncludeNumber={isIncludeNumber}
                            isValidEmail={isValidEmail}
                            isValidPhone={isValidPhone}
        />
        </>
    )
}

export default CreateResumePageContainer;