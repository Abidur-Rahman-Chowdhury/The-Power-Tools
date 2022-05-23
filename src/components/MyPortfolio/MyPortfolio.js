import React from 'react';
import { Link } from 'react-router-dom';

import project1 from '../../images/projetcs/1.png';
import project2 from '../../images/projetcs/2.png';
import project3 from '../../images/projetcs/3.png';


const MyPortfolio = () => {
  return (
    <div className="mt-40 mb-10">
      <div className="w-[80%] mx-auto">
        <h2 className="text-3xl text-center font-bold mb-4">
          Abidur Rahman Chowdhury
        </h2>
        <p className="text-xl mb-5 text-center ">
          <b>Email: </b>abid43iiuc@gmail.com
        </p>
        <h4 className="text-center text-2xl font-bold mb-3">Education</h4>
        <div className="overflow-x-auto mb-5">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Institute</th>
                <th>Location</th>
                <th>Subject</th>
                <th>Duration</th>
                <th>CGPA</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>International Islamic University</td>
                <td>Kumira Chittagong, Bangladesh.</td>
                <td>BSc in CSE</td>
                <td className="text-gray-500">April-2018 - present</td>
                <td className="text-gray-500">3.631</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h4 className="text-center text-2xl font-bold mb-3">Skills</h4>
        <div className="overflow-x-auto mb-10">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Expert</th>
                <th>Comfortable</th>
                <th>Familiar</th>
                <th>Tools</th>
                <th>Others</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <li>HTML5.</li>
                  <li>CSS3.</li>
                  <li>Bootstrap5.</li>
                  <li>JavaScript.</li>
                  <li>ES6.</li>
                  <li>ReactJS.</li>
                  <li>React Router.</li>
                  <li>React Firebase Hooks.</li>
                </td>
                <td>
                  <li>NodeJS</li>
                  <li>ExpressJS</li>
                  <li>MongoDB</li>
                  <li>REST API</li>
                  <li>React Bootstrap</li>
                  <li>TailwindCSS</li>
                  <li>daisyUI</li>
                  <li>React Hook Form</li>
                  <li>JSON</li>
                </td>
                <td>
                  <li>Material UI</li>
                  <li>SCSS</li>
                  <li>React Query</li>
                  <li>C/C++</li>
                  <li>Python</li>
                  <li>PHP</li>
                </td>
                <td>
                  <li>Git</li>
                  <li>VS Code</li>
                  <li>Chrome Dev Tool</li>
                  <li>Firebase</li>
                  <li>Netlify</li>
                  <li>Heroku</li>
                  <li>Notepad++</li>
                  <li>Code Blocks</li>
                  <li>Figma </li>
                </td>
                <td>
                  <li>Time Management</li>
                  <li>Teamwork</li>
                  <li>Confidence</li>
                  <li>Problem Solving</li>
                </td>
              </tr>
            </tbody>
          </table>
              </div>
              
              <h4 className="text-center text-3xl font-bold mb-3">My Projects</h4>
              <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
                  <div className='border rounded-lg shadow-lg p-2'>
                      <div className='border rounded-md'>
                      <img src={project1} alt="" />
                      </div>
                      <h3 className='text-2xl text-center mt-3 font-bold text-purple-400'>Amazed With Taste</h3>
                      <p className='text-center text-xl'> This is an simple react website based on react router</p>
                      <div className='text-center mt-4'>
                      <a  href='https://amazed-with-tastes.netlify.app/' target='_blank' className='btn btn-primary text-center px-5'>Visit </a>
                      </div>
                  </div>
                  <div className='border rounded-lg shadow-lg p-2'>
                      <div className='border rounded-md'>
                      <img src={project2} alt="" />
                      </div>
                      <h3 className='text-2xl text-center mt-3 font-bold text-purple-400'>Live Long Go Long</h3>
                      <p className='text-center text-xl'> This is an personal service provider website built in ReactJS</p>
                      <div className='text-center mt-4'>
                      <a  href='https://live-long-go-long.web.app/' target='_blank' className='btn btn-primary text-center px-5'>Visit </a>
                      </div>
                  </div>
                  <div className='border rounded-lg shadow-lg p-2'>
                      <div className='border rounded-md'>
                      <img src={project3} alt="" />
                      </div>
                      <h3 className='text-2xl text-center mt-3 font-bold text-purple-400'>Best Furniture's</h3>
                      <p className='text-center text-xl'> This is an furniture manufacture website built in MERN Stack</p>
                      <div className='text-center mt-4'>
                      <a  href='https://furnitures-managements.web.app/' target='_blank' className='btn btn-primary text-center px-5'>Visit </a>
                      </div>
                  </div>

              </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
