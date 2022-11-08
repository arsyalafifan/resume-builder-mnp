import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import UpdateResumePage from '../Components/UpdateResumePage';
import { gql, useMutation, useSubscription } from '@apollo/client';
import { toast, ToastContainer } from 'react-toastify';
import LoadingSvg from '../MicroComponents/LoadingSvg';
// import DetailResumePage from '../Components/DetailResumePage';
import { SubscriptionResumeDetail } from './DetailResumePageContainer';
import { IoIosArrowBack } from 'react-icons/io';

import '../Components/UpdateResume.css'
// import ThreeDotsLoading from '../MicroComponents/ThreeDotsLoading';


const UpdateResume = gql`
mutation MyMutation(
    $id: Int!, 
    $full_name: String!, 
    $email: String!, 
    $phone_number: String!, 
    $personal_description: String!, 
    $experience: String!, 
    $experience_title: String!, 
    $experience_description: String!, 
    $education: String!, 
    $education_title: String!, 
    $education_description: String!, 
    $organization: String!, 
    $organization_description: String!, 
    $organization_title: String!, 
    $soft_skills: String!, 
    $hard_skills: String!, 
    $achievements: String!) {
    update_kampus_merdeka_resume_by_pk(
        pk_columns: {id: $id}, 
        _set: {
            full_name: $full_name, 
            email: $email, 
            phone_number: $phone_number, 
            personal_description: $personal_description, 
            experience: $experience, 
            experience_title: $experience_title, 
            experience_description: $experience_description, 
            education: $education, 
            education_title: $education_title, 
            education_description: $education_description, 
            organization: $organization, 
            organization_description: $organization_description, 
            organization_title: $organization_title, 
            soft_skills: $soft_skills, 
            hard_skills: $hard_skills, 
            achievements: $achievements
        }) {
      id
    }
  }
`



const UpdateResumePageContainer = () => {

    const [isIncludeNumber, setIsIncludeNumber] = useState(false);
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [isValidPhone, setIsValidPhone] = useState(false);
    const { id } = useParams();
    const [updateResume, {loading: loadingUpdate}] = useMutation(UpdateResume);
    const { data, loading } = useSubscription(SubscriptionResumeDetail, { variables: { id: +id } });

    const [formUpdateResume, setUpdateDataResume] = useState({
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

    if(loading || loadingUpdate){
        return <LoadingSvg />
    }

    // if(loadingUpdate){
    //     <ThreeDotsLoading />
    // }

    const handleChangeUpdateData = (ev) => {
        const wordValidator = /^[A-Za-z ]*$/.test(ev.target.value);
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

        setUpdateDataResume({
            ...formUpdateResume,
            [ev.target.name]: ev.target.value
        })
    };

    const handleUpdateResume = async (ev) => {
        ev.preventDefault();
        await updateResume({
            variables: {
                id: +id,
                full_name: formUpdateResume.full_name === "" ? data?.kampus_merdeka_resume_by_pk.full_name : formUpdateResume.full_name,
                // full_name: formUpdateResume.full_name,
                phone_number: formUpdateResume.phone_number === "" ? data?.kampus_merdeka_resume_by_pk.phone_number : formUpdateResume.phone_number,
                email: formUpdateResume.email === "" ? data?.kampus_merdeka_resume_by_pk.email : formUpdateResume.email ,
                // email: formUpdateResume.email,
                // personal_description: formUpdateResume.personal_description,
                personal_description: formUpdateResume.personal_description === "" ? data?.kampus_merdeka_resume_by_pk.personal_description : formUpdateResume.personal_description,
                experience: formUpdateResume.experience === "" ? data?.kampus_merdeka_resume_by_pk.experience : formUpdateResume.experience,
                experience_title: formUpdateResume.experience_title === "" ? data?.kampus_merdeka_resume_by_pk.experience_title : formUpdateResume.experience_title,
                experience_description: formUpdateResume.experience_description === "" ? data?.kampus_merdeka_resume_by_pk.experience_description : formUpdateResume.experience_description,
                education: formUpdateResume.education === "" ? data?.kampus_merdeka_resume_by_pk.education : formUpdateResume.education,
                education_title: formUpdateResume.education_title === "" ? data?.kampus_merdeka_resume_by_pk.education_title : formUpdateResume.education_title,
                education_description: formUpdateResume.education_description === "" ? data?.kampus_merdeka_resume_by_pk.education_description : formUpdateResume.education_description,
                organization: formUpdateResume.organization === "" ? data?.kampus_merdeka_resume_by_pk.organization : formUpdateResume.organization,
                organization_title: formUpdateResume.organization_title === "" ? data?.kampus_merdeka_resume_by_pk.organization_title : formUpdateResume.organization_title,
                organization_description: formUpdateResume.organization_description === "" ? data?.kampus_merdeka_resume_by_pk.organization_description : formUpdateResume.organization_description,
                soft_skills: formUpdateResume.soft_skills === "" ? data?.kampus_merdeka_resume_by_pk.soft_skills : formUpdateResume.soft_skills,
                hard_skills: formUpdateResume.hard_skills === "" ? data?.kampus_merdeka_resume_by_pk.hard_skills : formUpdateResume.hard_skills,
                achievements: formUpdateResume.achievements === "" ? data?.kampus_merdeka_resume_by_pk.achievements : formUpdateResume.achievements,
            }
        });
        toast.success('Data has been succesfully updated')
    }


    return (
        <>
        <ToastContainer />
        <div className="header">
            <h3>Editing Resume Page</h3>
            <Link to='/dashboard-resume'>
                <IoIosArrowBack />Done Edit
            </Link>
        </div>
        <div className="wrapper">
            <div className="row">
                <div className="col-lg-4 col-sm-12 overflow-auto">
                    <UpdateResumePage   formUpdate={formUpdateResume} 
                                        handleChangeUpdate={handleChangeUpdateData} 
                                        handleUpdateResume={handleUpdateResume}
                                        latestResumeValue = {data}
                                        isIncludeNumber={isIncludeNumber}
                                        isValidEmail={isValidEmail}
                                        isValidPhone={isValidPhone}
                    />
                </div>
                <div className="col-lg-8 col-sm-12 border">
                <div className='container-sm mb-4'>
                <div className='container-resume m-5'>
                        <section className='p-1'>
                            <h1>{data?.kampus_merdeka_resume_by_pk.full_name}</h1>
                            <p>{data?.kampus_merdeka_resume_by_pk.phone_number} | {data?.kampus_merdeka_resume_by_pk.email}</p>
                            <p>{data?.kampus_merdeka_resume_by_pk.personal_description}</p>
                        </section>
                        <section className='p-1'>
                            <h4 className='border-bottom'>Work Experience</h4>
                            <h5>{data?.kampus_merdeka_resume_by_pk.experience}</h5>
                            <p>{data?.kampus_merdeka_resume_by_pk.experience_title}</p>
                            <p>{data?.kampus_merdeka_resume_by_pk.experience_description}</p>
                        </section>
                        <section className='p-1'>
                            <h4 className='border-bottom'>Education Level</h4>
                            <h5>{data?.kampus_merdeka_resume_by_pk.education}</h5>
                            <p>{data?.kampus_merdeka_resume_by_pk.education_title}</p>
                            <p>{data?.kampus_merdeka_resume_by_pk.education_description}</p>
                        </section>
                        <section className='p-1'>
                            <h4 className='border-bottom'>Organization</h4>
                            <h5>{data?.kampus_merdeka_resume_by_pk.organization}</h5>
                            <p>{data?.kampus_merdeka_resume_by_pk.organization_title}</p>
                            <p>{data?.kampus_merdeka_resume_by_pk.organization_description}</p>
                        </section>
                        <section className='p-1'>
                            <h4 className='border-bottom'>Skills</h4>
                            <p>Soft Skills: {data?.kampus_merdeka_resume_by_pk.soft_skills}</p>
                            <p>Hard Skills: {data?.kampus_merdeka_resume_by_pk.hard_skills}</p>
                        </section>
                        <section className='p-1'>
                            <h4 className='border-bottom'>Achievements</h4>
                            <p>{data?.kampus_merdeka_resume_by_pk.achievements}</p>
                        </section>
                    </div>
            </div>
                </div>
            </div>
        </div>
        <center>
            <div id="container">
                <div id="footer">
                    <button onClick={handleUpdateResume} className='btn btn-primary-custom' disabled={isIncludeNumber || isValidEmail || isValidPhone}>Update Resume</button>
                </div>
            </div>
        </center>
        </>
    )
};

export default UpdateResumePageContainer;