import React from 'react';

const mockJobs = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'TechNova Ltd.',
    location: 'Dhaka, Bangladesh',
    posted: '2 days ago',
  },
  {
    id: 2,
    title: 'MERN Stack Engineer',
    company: 'CodeCraft Inc.',
    location: 'Remote',
    posted: '5 days ago',
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    company: 'PixelHub',
    location: 'Chattogram, Bangladesh',
    posted: '1 week ago',
  },
];

const JobPage = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Latest Job Opportunities</h2>
      <div className="grid gap-4">
        {mockJobs.map((job) => (
          <div key={job.id} className="bg-base-100 border-gray-800 shadow-sm p-4 rounded-lg">
            <h3 className="text-xl font-semibold">{job.title}</h3>
            <p className="text-gray-600">{job.company}</p>
            <p className="text-sm text-gray-500">{job.location}</p>
            <p className="text-xs text-gray-400">Posted: {job.posted}</p>
            <button className="mt-2 px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobPage;
