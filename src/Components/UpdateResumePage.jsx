import React from 'react';
import './UpdateResume.css';

const UpdateResumePage = ({
    formUpdate,
    handleChangeUpdate,
    handleUpdateResume,
    isIncludeNumber,
    isValidPhone,
    isValidEmail
}) => {
    return (
        <>
        <div className='container form-container'>
        <form action="" className='form-container'>
                                        <div>
                                                <h4 className='mt-3'>Personal Information</h4>
                                                <label className='mb-2'>Full Name</label>
                                                <input type="text" 
                                                        className="form-control input-text mb-3" 
                                                        placeholder="ex: John Doe" 
                                                        value={formUpdate.full_name} 
                                                        name="full_name" 
                                                        onChange={handleChangeUpdate}
                                                />
                                                {isIncludeNumber && (
                                                        <small className='form-text text-muted text-danger'><p>The full name must be alphabetic, ex: John Doe</p></small>
                                                )}
                                                {/* <div>{formUpdate.full_name}</div> */}
                                                <label className='mb-2'>Email</label>
                                                <input type="email" 
                                                        className="form-control input-text mb-3" 
                                                        placeholder="ex: email@domain.com" 
                                                        value={formUpdate.email} 
                                                        name="email" 
                                                        onChange={handleChangeUpdate}
                                                />
                                                {isValidEmail && (
                                                        <small className='form-text text-muted'><p>The email must be include @ and .domain ex: email@email.com</p></small>
                                                )}
                                                <label className='mb-2'>Phone Number</label>
                                                <input type="tel" 
                                                        className="form-control input-text mb-3" 
                                                        placeholder="Phone Number" 
                                                        value={formUpdate.phone_number} 
                                                        name="phone_number" 
                                                        onChange={handleChangeUpdate}
                                                />
                                                {isValidPhone && (
                                                        <small className='form-text text-muted'><p>The phone number must be number and at least have 10 - 12 digits</p></small>
                                                )}
                                                <label className='mb-2'>Personal Description</label>
                                                <input type="text" 
                                                        className="form-control input-text mb-3" 
                                                        placeholder="Personal Description" 
                                                        value={formUpdate.personal_description} 
                                                        name="personal_description" 
                                                        onChange={handleChangeUpdate}
                                                />
                                        </div>
                                        <div>
                                                <h4 className='mt-5'>Work Experiences</h4>
                                                <label className='mb-2'>Experience</label>
                                                <input type="text" 
                                                        className="form-control input-text mb-3" 
                                                        placeholder="Experience" 
                                                        value={formUpdate.experience} 
                                                        name="experience" 
                                                        onChange={handleChangeUpdate}
                                                />
                                                <label className='mb-2'>Experience Title</label>
                                                <input type="text" 
                                                        className="form-control input-text mb-3" 
                                                        placeholder="Experience Title" 
                                                        value={formUpdate.experience_title} 
                                                        name="experience_title" 
                                                        onChange={handleChangeUpdate}
                                                />
                                                <label className='mb-2'>Experience Description</label>
                                                <input type="text" 
                                                        className="form-control input-text mb-3" 
                                                        placeholder="Experience Description" 
                                                        value={formUpdate.experience_description} 
                                                        name="experience_description" 
                                                        onChange={handleChangeUpdate}
                                                />
                                                {/* <button onClick={handleAdditionalForm}><AiOutlinePlusCircle /></button> */}
                                        </div>
                                        <div className='d-none'>
                                                <h4 className='mt-5'>Work Experiences</h4>
                                                <label className='mb-2'>Experience</label>
                                                <input type="text" 
                                                        className="form-control input-text mb-3" 
                                                        placeholder="Experience" 
                                                        value={formUpdate.experience} 
                                                        name="experience" 
                                                        onChange={handleChangeUpdate}
                                                />
                                                <label className='mb-2'>Experience Title</label>
                                                <input type="text" 
                                                        className="form-control input-text mb-3" 
                                                        placeholder="Experience Title" 
                                                        value={formUpdate.experience_title} 
                                                        name="experience_title" 
                                                        onChange={handleChangeUpdate}
                                                />
                                                <label className='mb-2'>Experience Description</label>
                                                <input type="text" 
                                                        className="form-control input-text mb-3" 
                                                        placeholder="Experience Description" 
                                                        value={formUpdate.experience_description} 
                                                        name="experience_description" 
                                                        onChange={handleChangeUpdate}
                                                />
                                        </div>
                                        <div>
                                                <h4 className='mt-5'>Educational Level</h4>
                                                <label className='mb-2'>Education</label>
                                                <input type="text" 
                                                        className="form-control input-text mb-3" 
                                                        placeholder="Education" 
                                                        value={formUpdate.education} 
                                                        name="education" 
                                                        onChange={handleChangeUpdate}
                                                />
                                                <label className='mb-2'>Education Title</label>
                                                <input type="text" 
                                                        className="form-control input-text mb-3" 
                                                        placeholder="Education Title" 
                                                        value={formUpdate.education_title} 
                                                        name="education_title" 
                                                        onChange={handleChangeUpdate}
                                                />
                                                <label className='mb-2'>Education Description</label>
                                                <input type="text" 
                                                        className="form-control input-text mb-3" 
                                                        placeholder="Education Description" 
                                                        value={formUpdate.education_description} 
                                                        name="education_description" 
                                                        onChange={handleChangeUpdate}
                                                />
                                        </div>
                                        <div>
                                                <h4 className='mt-5'>Organization</h4>
                                                <label className='mb-2'>Organization</label>
                                                <input type="text" 
                                                        className="form-control input-text mb-3" 
                                                        placeholder="Organization" 
                                                        value={formUpdate.organization} 
                                                        name="organization" 
                                                        onChange={handleChangeUpdate}
                                                />
                                                <label className='mb-2'>Organization Title</label>
                                                <input type="text" 
                                                        className="form-control input-text mb-3" 
                                                        placeholder="Organization Title" 
                                                        value={formUpdate.organization_title} 
                                                        name="organization_title" 
                                                        onChange={handleChangeUpdate}
                                                />
                                                <label className='mb-2'>Organization Description</label>
                                                <input type="text" 
                                                        className="form-control input-text mb-3" 
                                                        placeholder="Organization Description" 
                                                        value={formUpdate.organization_description} 
                                                        name="organization_description" 
                                                        onChange={handleChangeUpdate}
                                                />
                                        </div>
                                        <div>
                                                <h4 className='mt-5'>Achievements, Skills, Projects</h4>
                                                <label className='mb-2'>Soft Skills</label>
                                                <input type="text" 
                                                        className="form-control input-text mb-3" 
                                                        placeholder="Soft Skills" 
                                                        value={formUpdate.soft_skills} 
                                                        name="soft_skills" 
                                                        onChange={handleChangeUpdate}
                                                />
                                                <label className='mb-2'>Hard Skills</label>
                                                <input type="text" 
                                                        className="form-control input-text mb-3" 
                                                        placeholder="Hard Skills" 
                                                        value={formUpdate.hard_skills} 
                                                        name="hard_skills" 
                                                        onChange={handleChangeUpdate}
                                                />
                                                <label className='mb-2'>Achievements</label>
                                                <input type="text" 
                                                        className="form-control input-text mb-3" 
                                                        placeholder="Achievements" 
                                                        value={formUpdate.achievements} 
                                                        name="achievements" 
                                                        onChange={handleChangeUpdate}
                                                />
                                        </div>
                                </form>
        </div>
        </>
    )
}

export default UpdateResumePage;