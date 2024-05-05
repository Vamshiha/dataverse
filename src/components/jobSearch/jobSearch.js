import React, { useState } from 'react'
import './jobSearch.css'
import { useHistory } from "react-router-dom"

const JobSearch = () => {
  const history = useHistory()
  const [jobs] = useState([
    { title: 'Front-End Developer', description: 'Seeking a creative Front-End Developer with a passion for transforming designs into functional user interfaces. Must be proficient in HTML, CSS, JavaScript, and React. Experience with responsive design is a must.' },
    { title: 'Data Analyst', description: 'We are looking for a Data Analyst to turn data into information, information into insight, and insight into business decisions. Proficiency in SQL, Python, and data visualization tools required.' },
    { title: 'Digital Marketing Specialist', description: 'Join our team as a Digital Marketing Specialist to develop, implement, track, and optimize our digital marketing campaigns across all digital channels. A strong grasp of current marketing tools and strategies is essential.' },
    { title: 'Product Manager', description: 'As a Product Manager, you will be responsible for the product planning and execution throughout the Product Lifecycle, including gathering and prioritizing product and customer requirements.' },
    { title: 'Human Resources Coordinator', description: 'We are in search of a Human Resources Coordinator to assist in the administration of the day-to-day operations of the human resources functions and duties. The right candidate will have experience with HR procedures and can juggle various administrative tasks in a timely manner.' }
  ])
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleApplyNowClick = () => {
    history.push("/apply") 
  }

  return (
    <div className="job-search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search for jobs..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="job-listings">
        {jobs.filter(job => job.title.toLowerCase().includes(searchTerm.toLowerCase()))
             .map((job, index) => (
          <div key={index} className="job-card">
            <h2 className="job-title">{job.title}</h2>
            <p>{job.description}</p>
            <button onClick={handleApplyNowClick} className="apply-button">Apply Now</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default JobSearch
