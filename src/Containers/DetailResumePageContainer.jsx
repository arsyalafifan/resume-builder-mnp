import React from 'react';
import { gql, useSubscription } from '@apollo/client';
import { useParams } from "react-router-dom";
// import LoadingSvg from '../MicroComponents/LoadingSvg';
import DetailResumePage from '../Components/DetailResumePage';
// import { SubscriptionResume } from './DashboardResumePageContainer';
import DetailLoading from '../MicroComponents/DetailLoading';
// import { PDFDownloadLink } from '@react-pdf/renderer';
// import PDFFile from '../Components/PDFFile';
import Navbar from '../MicroComponents/Navbar';

export const SubscriptionResumeDetail = gql`
    subscription MySubscription($id: Int!) {
        kampus_merdeka_resume_by_pk(id: $id) {
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

const DetailResumePageContainer = () => {

    const { id } = useParams();
    const { data, loading, error } = useSubscription(SubscriptionResumeDetail, { variables: { id: +id } });
    console.log(id)

    if(loading){
        return <DetailLoading />
    }

    if(error){
        console.log(error);
        return null
    }

    return(
        <>
            <Navbar />
            <DetailResumePage id={id} dataResume={data} loading={loading} />
        </>
    )
}

export default DetailResumePageContainer;