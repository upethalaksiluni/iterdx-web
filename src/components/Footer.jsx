import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
      <footer className="footer-container">
        <div className="footer-inner">
          <div className="footer-top">
            <p className="copyright-text">© 2026 IterDX Global. All rights reserved.</p>
          </div>

          <div className="footer-grid">
            <div className="footer-col">
              <h3>Services</h3>
              <Link to="/services">All Services</Link>
              <Link to="/services/the-virtual-employee">AI Automation</Link>
              <Link to="/services/the-digital-guard">Security</Link>
              <Link to="/services/the-intelligence-portal">Dashboards</Link>
            </div>

            <div className="footer-col">
              <h3>Company</h3>
              <Link to="/about">About Us</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
              <a href="mailto:hello@iterdxglobal.com">hello@iterdxglobal.com</a>
            </div>

            <div className="footer-col">
              <h3>Contact</h3>
              <a href="tel:+94700000000">+94 70 000 0000</a>
              <a href="mailto:hello@iterdxglobal.com">Email Sales</a>
              <a href="https://iterdxglobal.com" target="_blank" rel="noopener noreferrer">iterdxglobal.com</a>
              <span className="footer-col-link-static">Colombo, Sri Lanka</span>
            </div>

            <div className="footer-col">
              <h3>Follow</h3>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer