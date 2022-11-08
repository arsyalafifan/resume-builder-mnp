import React from 'react';
// import toast, { Toaster } from 'react-hot-toast';
import { ToastContainer } from 'react-toastify';
// import { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Button from 'react-bootstrap/Button';
import { BsPlusLg } from 'react-icons/bs';
import { CiViewList } from 'react-icons/ci';
import { BiEditAlt } from 'react-icons/bi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { BsThreeDotsVertical } from 'react-icons/bs';
import './DashboardResume.css';

const DashboardResumePage = ({
    dataResume,
    onDeleteResume,
    loading
}) => {
    return (
        <div className='dashboard-page'>
             <ToastContainer />
            <div className='container'>
                <section className='top d-flex'>
                    <div>
                        <Breadcrumb>
                            <Breadcrumb.Item><Link className='breadcrumb-link' to='/'>Home</Link></Breadcrumb.Item>
                            <Breadcrumb.Item>
                                <Link className='breadcrumb-link active' to='/dashboard-resume'>Dashboard</Link>
                            </Breadcrumb.Item>
                        </Breadcrumb>
                        <h3 className='dashboard-greeting-title'>Hi, Let's create your resume!</h3>
                        <p className='dashboard-greeting-subtitle'>Below is resumes that you have made, click three dots for more actions.</p>
                    </div>
                    <Link to = '/create-resume'>
                        <button className='btn btn-primary btn-create-resume'>
                        <span style={{"padding": 10}}><BsPlusLg /></span> Create Resume
                        </button>
                    </Link>
                </section>
                <div className="row">
                {dataResume?.kampus_merdeka_resume.map((item) => (
                    <div className="col-lg-6 col-sm-12">
                        <div className='card card-item p-4'>
                            <div className="card-body">
                                    <h5 className="card-title">{item.full_name}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{item.email} | <span>{item.phone_number}</span></h6>
                                    <p className="card-text text-muted">{item.personal_description}</p>
                                {/* <Link to={`/update-resume/${item.id}`}>
                                    <button value={item.id} className="btn btn-warning card-link">Edit</button>
                                </Link>
                                <button value={item.id} onClick={onDeleteResume} className="btn btn-danger card-link">Delete</button> */}
                            </div>
                                <div className="actions">
                                <Link to={`/detail-resume/${item.id}`}>
                                    <Button variant="light"><CiViewList /> View Resume</Button>
                                </Link>
                                <Dropdown className=''>
                                    <Dropdown.Toggle variant="" id="dropdown-basic" className=''>
                                        <BsThreeDotsVertical />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item className="dropdown-item"><Link to={`/update-resume/${item.id}`}>
                                            <Button className='btn-action' value={item.id} variant="link"><span style={{'padding':'10px', 'padding-left': '0px'}}><BiEditAlt /></span>Edit</Button>
                                        </Link></Dropdown.Item>
                                        <Dropdown.Item className="dropdown-item-danger">
                                            <Button className='btn-link-danger btn-action' 
                                                    value={item.id} 
                                                    onClick={onDeleteResume} 
                                                    variant="link"
                                            >
                                                <span style={{'padding':'10px', 'padding-left': '0px'}}>
                                                    <RiDeleteBin6Line />
                                                </span>Delete
                                            </Button>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                </div>
                        </div>
                </div>
                ))}
                </div>
            </div>
        </div>
    )
};

export default DashboardResumePage;