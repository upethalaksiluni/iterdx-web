import React, { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ServiceDetails from './pages/ServiceDetails'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Loader from './components/Loader'

const ScrollToTop = () => {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return null
}

function AppShell() {
    return (
        <Router>
            <ScrollToTop />
            <div className="main-wrapper">
                <Navbar />
                <main className="page-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/services/:slug" element={<ServiceDetails />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    )
}

function App() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = window.setTimeout(() => {
            setIsLoading(false)
        }, 1800)

        return () => window.clearTimeout(timer)
    }, [])

    return (
        <AnimatePresence mode="wait">
            {isLoading ? (
                <Loader key="loader" />
            ) : (
                <motion.div
                    key="app"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                    <AppShell />
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default App