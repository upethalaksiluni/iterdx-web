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
              <h3>Product</h3>
              <Link to="/services">Services</Link>
              <Link to="/">Features</Link>
              <Link to="/">Integration</Link>
              <Link to="/">Pricing</Link>
            </div>

            <div className="footer-col">
              <h3>Company</h3>
              <Link to="/about">About Us</Link>
              <Link to="/">FAQs</Link>
              <Link to="/">Privacy Policy</Link>
              <Link to="/">Terms of Service</Link>
            </div>

            <div className="footer-col">
              <h3>Resources</h3>
              <Link to="/">Blog</Link>
              <Link to="/">Changelog</Link>
              <Link to="/">Brand</Link>
              <Link to="/">Help</Link>
            </div>

            <div className="footer-col">
              <h3>Social</h3>
              <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="#" target="_blank" rel="noopener noreferrer">YouTube</a>
              <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer