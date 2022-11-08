import React, { useRef } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';
import ReactToPrint from 'react-to-print';
import { MdOutlineSaveAlt } from 'react-icons/md';

const DetailResumePage = ({
    id,
    dataResume
}) => {
    const refResume = useRef();

    return (
        <>
            <div className='container top border-bottom'>
                    <div style={{"width": "100%"}}>
                        <Breadcrumb>
                            <Breadcrumb.Item><Link className='breadcrumb-link' to='/'>Home</Link></Breadcrumb.Item>
                            <Breadcrumb.Item>
                                <Link className='breadcrumb-link' to='/dashboard-resume'>Dashboard</Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>   
                                <Link className='breadcrumb-link active' to={`detail-resume/${id}`}>Resume Detail</Link>
                            </Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="d-lg-flex d-sm-blockflex-row justify-content-between align-items-center flex-1">
                            <div className="d-flex flex-column justify-content-start">
                                <h3 className='dashboard-greeting-title'>Your resume is ready!</h3>
                                <p className='dashboard-greeting-subtitle'>Below is resume that you have made, click 'Save as PDF' button to save your resume.</p>
                            </div>
                            <ReactToPrint trigger={() => 
                                <button className='btn btn-primary btn-create-resume'>
                                    <MdOutlineSaveAlt /> 
                                    Save as PDF
                                </button>} content={() => refResume.current} 
                            />
                        </div>
                    </div>
            </div>
            <div ref={refResume} className='container-sm mb-4'>
                <div className='container-resume m-5'>
                        <section className='p-1'>
                            <h1>{dataResume?.kampus_merdeka_resume_by_pk.full_name}</h1>
                            <p>{dataResume?.kampus_merdeka_resume_by_pk.phone_number} | {dataResume?.kampus_merdeka_resume_by_pk.email}</p>
                            <p>{dataResume?.kampus_merdeka_resume_by_pk.personal_description}</p>
                        </section>
                        <section className='p-1'>
                            <h4 className={dataResume?.kampus_merdeka_resume_by_pk.experience  === "" ? "" : "border-bottom"}>{dataResume?.kampus_merdeka_resume_by_pk.experience === "" ? "" : "Work Experience"}</h4>
                            <h5>{dataResume?.kampus_merdeka_resume_by_pk.experience}</h5>
                            <p>{dataResume?.kampus_merdeka_resume_by_pk.experience_title}</p>
                            <p>{dataResume?.kampus_merdeka_resume_by_pk.experience_description}</p>
                        </section>
                        <section className='p-1'>
                            <h4 className='border-bottom'>Education Level</h4>
                            <h5>{dataResume?.kampus_merdeka_resume_by_pk.education}</h5>
                            <p>{dataResume?.kampus_merdeka_resume_by_pk.education_title}</p>
                            <p>{dataResume?.kampus_merdeka_resume_by_pk.education_description}</p>
                        </section>
                        <section className='p-1'>
                            <h4 className='border-bottom'>Organization</h4>
                            <h5>{dataResume?.kampus_merdeka_resume_by_pk.organization}</h5>
                            <p>{dataResume?.kampus_merdeka_resume_by_pk.organization_title}</p>
                            <p>{dataResume?.kampus_merdeka_resume_by_pk.organization_description}</p>
                        </section>
                        <section className='p-1'>
                            <h4 className='border-bottom'>Achievements, Skills, Projects</h4>
                            <p>Soft Skills: {dataResume?.kampus_merdeka_resume_by_pk.soft_skills}</p>
                            <p>Hard Skills: {dataResume?.kampus_merdeka_resume_by_pk.hard_skills}</p>
                            <p>Achievements: {dataResume?.kampus_merdeka_resume_by_pk.achievements}</p>
                        </section>
                    </div>
            </div>
        </>
    )
};

// ReactDOM.createRoot(<DetailResumePage />);

export default DetailResumePage;