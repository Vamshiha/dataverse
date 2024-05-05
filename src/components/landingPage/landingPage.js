import React, { useState, useEffect } from "react"
import Services from "../services/services"
import { useHistory } from "react-router-dom"
import "./landingPage.css"

const LandingPage = () => {
  const history = useHistory()

  useEffect(() => {
    const handleScroll = () => {
      const aboutUs = document.querySelector('.about-us')
      const offerings = document.querySelector('.offerings')
      const cardsContainer = document.querySelector('.cards-container')
      const positionAboutUs = aboutUs.getBoundingClientRect().top
      const positionOfferings = offerings.getBoundingClientRect().top
      const positionCards = cardsContainer.getBoundingClientRect().top
      const screenPosition = window.innerHeight / 1.3
  
      if(positionAboutUs < screenPosition) {
         aboutUs.style.opacity = '1'
         aboutUs.style.transition = 'opacity .5s ease-in-out'
      } else {
         aboutUs.style.opacity = '0'
         aboutUs.style.transition = 'opacity .5s ease-in-out'
      }
  
      if(positionOfferings < screenPosition) {
         offerings.style.opacity = '1'
         offerings.style.transition = 'opacity .5s ease-in-out'
      } else {
         offerings.style.opacity = '0'
         offerings.style.transition = 'opacity .5s ease-in-out'
      }
  
      if(positionCards < screenPosition) {
         cardsContainer.style.opacity = '1'
         cardsContainer.style.transition = 'opacity .5s ease-in-out'
      } else {
         cardsContainer.style.opacity = '0'
         cardsContainer.style.transition = 'opacity .5s ease-in-out'
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleApplyNowClick = () => {
    history.push("/apply") 
  }

  const handlePageChange = () => {
    history.push("/jobsearch") 
  }

  const handleNewsPageChange = () => {
    history.push("/newscomponent") 
  }

  return (
    <div className="main-landing-container">
      <header className="header-main">
        <div className="header-text">
          <span className="title">Welcome to Dataverse Solutions</span>
          <p>Find your dream job with our powerful recruitment platform</p>
          <button className="get-started">Get Started</button>
        </div>
        <img
          src="/assets/images/landing.jpeg"
          alt="Your Image"
          className="header-image"
        />
      </header>
      <div className="about-us">
        <span className="about-title">Your Dream Job Starts Here</span> 
        <p className="mission-statement">Our mission: Empowering job seekers and employers with the ultimate recruitment platform.</p>
        <div className="about-icon-container">
          <img style={{ width: "25%" }} src="/assets/images/target1.png" alt="Target Icon" /> 
        </div>
        <p>We understand the frustrations of the traditional job search. That's why we're dedicated to providing cutting-edge tools and a personalized experience.</p> 
      </div>

      <div className="offerings">
        <span className="about-title">Our Offerings</span>
      </div>
      <div className="cards-container">
        <section className="card">
          <img style={{ height: "60%" }}src="/assets/images/jobsearch.jpg" alt="Job Search" />
          <span className="card-header">Job Search</span>
          <p>
            Easily search for job opportunities that match your skills
            and interests.
          </p>
          <button className="view-opportunities" onClick={handlePageChange}>View Opportunities</button>
        </section>
        <section className="card">
          <img src="/assets/images/news.png" alt="News" />
          <span className="card-header">News</span>
          <p>
            Stay Updated - Get the latest insights and updates in your industry.
          </p>
          <button className="view-news" onClick={handleNewsPageChange}>View All News</button>
        </section>
        <section className="card">
          <img src="/assets/images/apply.jpeg" alt="XYZ" />
          <span className="card-header">Apply Now</span>
          <p>Take the next step - Apply to roles that align with your professional goals.</p>
          <button className="view-apply" onClick={handleApplyNowClick}>Apply</button>
        </section>        
      </div>
      <Services/>
    </div>
  )
}

export default LandingPage
