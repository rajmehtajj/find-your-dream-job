import React, { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import { HiLocationMarker } from 'react-icons/hi';
import { BiDollarCircle } from 'react-icons/bi';

const AllJobs = () => {
    const data = useLoaderData();
    const [jobs, setJobs] = React.useState([]);

    useEffect(() => {
        setJobs(data);
        // console.log(jobs);
    }, [data]);

    const filterJobs = (e) => {
        const value = e.target.value;
        // console.log(value);
        if (value === 'all') {
            setJobs(data);
        }
        else {
            setJobs(data.filter(job => job.options.includes(value)));
        }
    }
    return (
        <div className='py-10'>
            <Breadcrumb>
                <h2 className='text-3xl font-bold mb-2'>
                    All Jobs
                </h2>
            </Breadcrumb>

            {/* filter */}
            <div className='mt-8 flex justify-end'>
                <div className='bg-gray-200 pr-4 rounded-md'>
                    <select className='rounded-md focus:shadow-none focus:outline-none bg-transparent px-5 py-2 inline-flex' onChange={filterJobs}>
                        <option value="all">All</option>
                        <option value="Remote">Remote Jobs</option>
                        <option value="On Site">On Site Jobs</option>
                        <option value="Part Time">Part Time Jobs</option>
                        <option value="Full Time">Full Time Jobs</option>
                    </select>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-10'>
                {
                    jobs.map(job => (
                        <div key={job.id} className='bg-white border rounded-md p-5'>
                            <img src={job.imageUrl} className="company-logo h-[50px] mb-3" alt={job.jobTitle} />
                            <h3 className='text-xl font-bold mb-2'>{job.jobTitle}</h3>
                            <p className='text text-gray-400 mb-4'>{job.companyName}</p>
                            <p>
                                {
                                    job.options.map((option, index) => (
                                        <span key={index} className='text text-primary text-sm border rounded-md px-5 py-2 border-primary mr-2'>{option}</span>
                                    ))
                                }
                            </p>
                            <div className='lg:flex items-center mb-5'>
                                <p className='mt-4 text-gray-500 flex items-center text-sm'>
                                    <HiLocationMarker className='mr-2' /> {job.location}
                                </p>
                                <p className='mt-4 lg:ml-3 text-gray-500 flex items-center text-sm'>
                                    <BiDollarCircle className='mr-2' /> Salary: {job.salary}
                                </p>
                            </div>
                            <Link className='btn gradient-btn' to={`/job-details?id=${job.id}`} state={{ id: job.id }}>
                                View Details
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default AllJobs;