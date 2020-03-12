import React from 'react';
import './Home.css';
import Hero from '../../components/Hero/Hero'
import HistorySection from '../../components/HistorySection/HistorySection'
import ContactSection from '../../components/ContactSection/ContactSection'
import VideoSection from '../../components/VideoSection/VideoSection'
const Home = () => (
  <div className="home page">
    <Hero />
    <HistorySection />
    <VideoSection />
    <ContactSection />
  </div>
);

export default Home;
