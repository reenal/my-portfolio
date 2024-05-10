import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/navbar";
//import reenalBgImg1 from './images/IMG-20240324-WA0106.jpg';

import About from "./components/About";
import EnquiryForm from "./components/EnquiryForm";
// import HorizontalChart from "./components/BarChart";
import Footer from "./components/Footer";
import BlogsPage from "./components/BlogsPage";
import RecommendationsPage from "./components/RecommendationsPage";
import VideoThumbnailComponent from "./components/VideoThumbnailComponent";
// import Hobbies from './components/Hobbies';
import Carousel from "./components/Carousel";
import ProjectsHomepage from "./components/ProjectsHomepage";
import SuccessStory from './components/SuccessStory';
import Home from './components/Home';
import AboutMe from "./components/AboutMe";
import BlogsHomePage from "./components/BlogsHomePage";
import TechStack from "./components/TechStack";

function App() {
  return (
    <div>
      <div className="nav">
        <Navbar />
      </div>
      <div>
        
        
        {/* <About /> */}
        <AboutMe/>
        
        {/* <Carousel /> */}
        
        <TechStack/>
        <div className="content">
          {" "}
          {/* Add a container for the Projects section */}
          
          
          <ProjectsHomepage />
          <BlogsHomePage />
          <RecommendationsPage />
          <SuccessStory/>
          
        </div>
        <div>
          <VideoThumbnailComponent />
        </div>
        
        <EnquiryForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;
