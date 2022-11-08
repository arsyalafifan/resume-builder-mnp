import React from 'react';
import { Link } from 'react-router-dom';
import './CreateResume.css';
// import { AiOutlinePlusCircle } from 'react-icons/ai';
import { IoIosArrowBack } from 'react-icons/io';

const CreateResumePage = ({
    formData,
    handleChange,
    handleSubmit,
    isIncludeNumber,
    isValidEmail,
    isValidPhone,
    handleAdditionalForm,
}) => {
    return (
        <>
        <div className="header">
            <h3>Create Resume Page</h3>
            <Link to='/dashboard-resume'>
                <IoIosArrowBack />Done Create
            </Link>
        </div>
        <div className='wrapper'>
                <div className="row">
                        <div className="col-lg-4 col-sm-12">
                                <form action="" className='form-container'>
                                        <div>
                                                <h4 className='mt-3'>Personal Information</h4>
                                                <label className='mb-2'>Full Name</label>
                                                <input type="text" 
                                                        className="form-control input-text mb-3" 
                                                        placeholder="ex: John Doe" 
                                                        value={formData.full_name} 
                                                        name="full_name" 
                                                        onChange={handleChange}
                                                />
                                                {isIncludeNumber && (
                                                        <small className='form-text text-danger'><p>The full name must be alphabetic, ex: John Doe</p></small>
                                                )}
                                                {/* <div>{formData.full_name}</div> */}
                                                <label className='mb-2'>Email</label>
                                                <input type="email" 
                                                        className="form-control input-text mb-3" 
                                                        placeholder="ex: email@domain.com" 
                                                        value={formData.email} 
                                                        name="email" 
                                                        onChange={handleChange}
                                                />
                                                {isValidEmail && (
                                                        <small className='form-text text-danger'><p>The email must be include @ and .domain ex: email@email.com</p></small>
                                                )}
                                                <label className='mb-2'>Phone Number</label>
                                                <input type="tel" 
                                                        className="form-control input-text mb-3" 
                                                        placeholder="Phone Number" 
                                                        value={formData.phone_number} 
                                                        name="phone_number" 
                                                        onChange={handleChange}
                                                />
                                                {isValidPhone && (
                                                        <small className='form-text text-danger'><p>The phone number must be number and at least have 10 - 12 digits</p></small>
                                                )}
                                                <label className='mb-2'>Personal Description</label>
                                                <input type="text" 
                                                        className="form-control input-text mb-3" 
                                                        placeholder="Personal Description" 
                                                        value={formData.personal_description} 
                                                        name="personal_description" 
                                                        onChange={handleChange}
                                                />
                                        </div>
                                        <div>
                                                <h4 className='mt-5'>Work Experiences</h4>
                                                <label className='mb-2'>Experience</label>
                                                <input type="text" 
                                                        className="form-control input-text mb-3" 
                                                        placeholder="Experience" 
                                                        value={formData.experience} 
                                                        name="experience" 
                                                        onChange={handleChange}
                                                />
                                                <label className='mb-2'>Experience Title</label>
                                                <input type="text" 
                                                        className="form-control input-text mb-3" 
                                                        placeholder="Experience Title" 
                                                        value={formData.experience_title} 
                                                        name="experience_title" 
                                                        onChange={handleChange}
                                                />
                                                <label className='mb-2'>Experience Description</label>
                                                <input type="text" 
                                                        className="form-control input-text mb-3" 
                                                        placeholder="Experience Description" 
                                                        value={formData.experience_description} 
                                                        name="experience_description" 
                                                        onChange={handleChange}
                                                />
                                                {/* <button onClick={handleAdditionalForm}><AiOutlinePlusCircle /></button> */}
                                        </div>
                                        <div className='d-none'>
                                                <h4 className='mt-5'>Work Experiences</h4>
                                                <label className='mb-2'>Experience</label>
                                                <input type="text" 
                                                        className="form-control input-text mb-3" 
                                                        placeholder="Experience" 
                                                        value={formData.experience} 
                                                        name="experience" 
                                                        onChange={handleChange}
                                                />
                                                <label className='mb-2'>Experience Title</label>
                                                <input type="text" 
                                                        className="form-control input-text mb-3" 
                                                        placeholder="Experience Title" 
                                                        value={formData.experience_title} 
                                                        name="experience_title" 
                                                        onChange={handleChange}
                                                />
                                                <label className='mb-2'>Experience Description</label>
                                                <input type="text" 
                                                        className="form-control input-text mb-3" 
                                                        placeholder="Experience Description" 
                                                        value={formData.experience_description} 
                                                        name="experience_description" 
                                                        onChange={handleChange}
                                                />
                                        </div>
                                        <div>
                                                <h4 className='mt-5'>Educational Level</h4>
                                                <label className='mb-2'>Education</label>
                                                <input type="text" 
                                                        className="form-control input-text mb-3" 
                                                        placeholder="Education" 
                                                        value={formData.education} 
                                                        name="education" 
                                                        onChange={handleChange}
                                                />
                                                <label className='mb-2'>Education Title</label>
                                                <input type="text" 
                                                        className="form-control input-text mb-3" 
                                                        placeholder="Education Title" 
                                                        value={formData.education_title} 
                                                        name="education_title" 
                                                        onChange={handleChange}
                                                />
                                                <label className='mb-2'>Education Description</label>
                                                <input type="text" 
                                                        className="form-control input-text mb-3" 
                                                        placeholder="Education Description" 
                                                        value={formData.education_description} 
                                                        name="education_description" 
                                                        onChange={handleChange}
                                                />
                                        </div>
                                        <div>
                                                <h4 className='mt-5'>Organization</h4>
                                                <label className='mb-2'>Organization</label>
                                                <input type="text" 
                                                        className="form-control input-text mb-3" 
                                                        placeholder="Organization" 
                                                        value={formData.organization} 
                                                        name="organization" 
                                                        onChange={handleChange}
                                                />
                                                <label className='mb-2'>Organization Title</label>
                                                <input type="text" 
                                                        className="form-control input-text mb-3" 
                                                        placeholder="Organization Title" 
                                                        value={formData.organization_title} 
                                                        name="organization_title" 
                                                        onChange={handleChange}
                                                />
                                                <label className='mb-2'>Organization Description</label>
                                                <input type="text" 
                                                        className="form-control input-text mb-3" 
                                                        placeholder="Organization Description" 
                                                        value={formData.organization_description} 
                                                        name="organization_description" 
                                                        onChange={handleChange}
                                                />
                                        </div>
                                        <div>
                                                <h4 className='mt-5'>Achievements, Skills, Projects</h4>
                                                <label className='mb-2'>Soft Skills</label>
                                                <input type="text" 
                                                        className="form-control input-text mb-3" 
                                                        placeholder="Soft Skills" 
                                                        value={formData.soft_skills} 
                                                        name="soft_skills" 
                                                        onChange={handleChange}
                                                />
                                                <label className='mb-2'>Hard Skills</label>
                                                <input type="text" 
                                                        className="form-control input-text mb-3" 
                                                        placeholder="Hard Skills" 
                                                        value={formData.hard_skills} 
                                                        name="hard_skills" 
                                                        onChange={handleChange}
                                                />
                                                <label className='mb-2'>Achievements</label>
                                                <input type="text" 
                                                        className="form-control input-text mb-3" 
                                                        placeholder="Achievements" 
                                                        value={formData.achievements} 
                                                        name="achievements" 
                                                        onChange={handleChange}
                                                />
                                        </div>
                                </form>
                        </div>
                        <div className="col-lg-8 col-sm-12 py-2">
                                        <h3>Live Preview Resume</h3>
                                        <div className="container-sm border">
                                                <div className='container-resume m-5'>
                                                <section className='p-1'>
                                                        <h1>{formData.full_name}</h1>
                                                        <p>{formData.email} {formData.phone_number === "" || formData.email === "" ? "" : "|"} {formData.phone_number}</p>
                                                        <p>{formData.personal_description}</p>
                                                </section>
                                                <section className='p-1'>
                                                        <h4 className={formData.experience  === "" ? "" : "border-bottom"}>{formData.experience === "" ? "" : "Work Experience"}</h4>
                                                        <h5>{formData.experience}</h5>
                                                        <p>{formData.experience_title}</p>
                                                        <p>{formData.experience_description}</p>
                                                </section>
                                                <section className='p-1'>
                                                        <h4 className={formData.education  === "" ? "" : "border-bottom"}>{formData.education === "" ? "" : "Educational Level"}</h4>
                                                        <h5>{formData.education}</h5>
                                                        <p>{formData.education_title}</p>
                                                        <p>{formData.education_description}</p>
                                                </section>
                                                <section className='p-1'>
                                                        <h4 className={formData.organization  === "" ? "" : "border-bottom"}>{formData.organization === "" ? "" : "Organization"}</h4>
                                                        <h5>{formData.organization}</h5>
                                                        <p>{formData.organization_title}</p>
                                                        <p>{formData.organization_description}</p>
                                                </section>
                                                <section className='p-1'>
                                                        <h4 className={formData.soft_skills === "" & formData.hard_skills  === "" ? "" : "border-bottom"}>{formData.soft_skills === "" & formData.hard_skills === "" ? "" : "Skills"}</h4>
                                                        <p><span className={formData.soft_skills === "" ? "d-none" : ""}>Soft Skills:</span> {formData.soft_skills}</p>
                                                        <p><span className={formData.hard_skills === "" ? "d-none" : ""}>Hard Skills:</span> {formData.hard_skills}</p>
                                                </section>
                                                <section className="p-1">
                                                        <h4 className={formData.achievements === "" ? "" : "border-bottom"}>{formData.achievements === "" ? "" : "Achievements"}</h4>
                                                        <p>{formData.achievements}</p>
                                                </section>
                                                </div>
                                        </div>
                        </div>
                </div>
        </div>
        <center>
        <div id="container">
            <div id="footer">
                <button disabled={isIncludeNumber || isValidEmail || isValidPhone} onClick={handleSubmit} className='btn btn-primary-custom'>Submit Resume</button>
            </div>
        </div>
        </center>
        </>
    )
}

export default CreateResumePage;