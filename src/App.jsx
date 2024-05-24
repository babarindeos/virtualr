
import React from 'react'
import Navbar  from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import Workflow from './components/Workflow';

export const App = () => {
  return (
    <div>
       <Navbar />
       <div className="max-w-7xl border border-0 mx-auto py-4">
              <HeroSection/>
              <FeatureSection/>
              <Workflow />
       </div>
       
    </div>
  )
}

export default App;
