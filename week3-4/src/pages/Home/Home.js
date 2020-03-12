import React from 'react';
import './Home.css';
import Hero from '../../components/Hero/Hero'
import HistorySection from '../../components/HistorySection/HistorySection'
import ContactSection from '../../components/ContactSection/ContactSection'

const Home = () => (
  <div className="home page">
    <Hero />
    <HistorySection />
    <ContactSection />
  </div>
);

export default Home;
