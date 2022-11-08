import React from 'react';
import { gql, useMutation, useSubscription } from '@apollo/client';
import Navbar from '../MicroComponents/Navbar';
import DashboardResumePage from '../Components/DashboardResumePage';
import LoadingSvg from '../MicroComponents/LoadingSvg';

import { toast } from 'react-toastify';
// import toast from 'react-hot-toast';

import 'react-toastify/dist/ReactToastify.css';

export const SubscriptionResume = gql`
    subscription MySubscription {
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
`;

const DeleteResume = gql`
    mutation MyMutation($id: Int!) {
        delete_kampus_merdeka_resume_by_pk(id: $id) {
            id
        }
    }
`

const DashboardResumeContainer = () => {

    const { data, loading, error } = useSubscription(SubscriptionResume);
    const [deleteResume, { loading: loadingDelete }] = useMutation(DeleteResume)
    // const { id } = data?.kampus_merdeka_resume.id

    if(loading || loadingDelete){
        return <LoadingSvg />
    }

    if(error){
        console.log(error);
        return <div>Connection error</div>
    }

    const onDeleteResume = async (ev) => {
        await deleteResume({
         variables: {
             id: ev.target.value
         }
        });
        toast.success("Data has succesfuly deleted");
     }

    return (
        <>
        <Navbar />
        <DashboardResumePage dataResume={data} onDeleteResume={onDeleteResume} loading={loading} />
        </>
    )
}

export default DashboardResumeContainer;