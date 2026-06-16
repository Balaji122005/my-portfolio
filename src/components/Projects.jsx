import React, { useState } from 'react';
import indverseImg from '../assets/indverse.jpg';
import indversePlannerImg from '../assets/indverse-planner.png';
import indverseMenuImg from '../assets/indverse-menu.png';
import indverseVrImg from '../assets/indverse-vr.png';
import indverseArImg from '../assets/indverse-ar.png';
import scanAndGoImg from '../assets/scan-and-go.png';
import scanCartImg from '../assets/scan-cart.png';
import scanBillingImg from '../assets/scan-billing.png';
import scanInventoryImg from '../assets/scan-inventory.png';
import scanProfileImg from '../assets/scan-profile.png';
import project3Img from '../assets/Screenshot 2024-08-15 160758.png';
import arrowIcon from '../assets/arrow.png';
import ProjectModal from './ProjectModal';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'IND-verse (Major Project)',
      img: indverseImg,
      images: [indverseImg, indversePlannerImg, indverseArImg, indverseVrImg, indverseMenuImg],
      github: 'https://github.com/Balaji122005/INDVERSE',
      demo: 'https://tripi-xi.vercel.app/',
      tagline: 'Immersive AI-Powered Tourism Ecosystem for India',
      description: 'IND-verse is a comprehensive tourism ecosystem that lets users discover and experience Indian culture and heritage digitally before visiting physically. Powered by AI trip planning, AR/VR visualizations, and a full travel booking system, it integrates a rich visual landing page, automated itineraries, real-time wallet operations, and cultural donation support.',
      features: [
        'AI Trip Planner: Generates customized daily travel itineraries using specific details (Destination, Budget, Traveler type, Interests).',
        'AR Heritage Viewer: Allows users to scan QR codes and place 3D models of historical artifacts (e.g. Thiruvalluvar Statue, Temple Chariot) directly into their physical space.',
        'VR Experience Module: Offers immersive first-person 360° virtual tours of landmarks like Brihadeeswarar Temple, Taj Mahal, and Qutub Minar.',
        'Complete Travel Ecosystem: Includes side menu navigation for hotel/guide bookings, trip history, ticket tracking, travel wallet, and community discussions.',
        'Cultural Donation Support: Enables digital donations directly towards temple preservation and heritage conservation efforts.',
        'Multilingual Capabilities: Ready for international tourists with a dedicated language selector (English, Tamil, Hindi, and more).'
      ],
      tech: ['React.js', 'JavaScript (ES6+)', 'Three.js / WebXR', 'AR.js', 'Firebase', 'Gemini API', 'Vercel']
    },
    {
      title: 'Scan and Go',
      img: scanAndGoImg,
      images: [scanAndGoImg, scanCartImg, scanBillingImg, scanInventoryImg, scanProfileImg],
      github: 'https://github.com/Balaji122005/Scan-and-go',
      demo: 'https://map-sandy-rho.vercel.app/',
      tagline: 'AI-Enabled Cashier-Less SmartRetail Self-Checkout System',
      description: 'SmartRetail is a cashier-less retail shopping ecosystem that allows customers to scan products themselves using mobile barcodes, build virtual carts in real-time, apply promotional discount coupons, and complete checkout digitally. The platform includes inventory management portals for retailers and cashier verification dashboards using customer checkout QR codes.',
      features: [
        'Scan & Go Self-Checkout: Bypasses traditional billing queues by allowing customers to scan item barcodes using mobile cameras and auto-add items to their cart.',
        'Virtual Cart System: Tracks product names, dynamically adjusts quantities, calculates estimated tax (8%), and displays real-time totals.',
        'Interactive Product Catalog: Provides catalog search and browsing across inventory categories to check pricing details.',
        'Cashier QR Billing Verification: Cashier scans the customer’s checkout QR code to instantly verify payment status and load the cart details, avoiding multiple scans.',
        'Inventory Management Portal: Enables retailers to register barcodes (e.g., 8902653268313), product names, and prices directly in the database without coding.',
        'Shopper Profile & Receipts: Saves purchase histories, past receipt records (e.g. ₹8.08, ₹21.55), store credits, and member stats for digital receipt tracking.'
      ],
      tech: ['React.js', 'JavaScript (ES6+)', 'Firebase Auth', 'Firestore / Realtime Database', 'Camera Scanner API', 'Vercel']
    },
    {
      title: 'Hospital Management',
      img: project3Img,
      github: 'https://github.com/Balaji122005/My-Projects.git',
      tagline: 'Healthcare Dashboard & Care Finder',
      description: 'A responsive frontend dashboard application for healthcare services, allowing administrators to monitor patient metrics and users to find local healthcare centers.',
      features: [
        'Responsive dashboard displaying real-time patient metrics and demographics.',
        'Interactive hospital location finder integrated with Google Maps and Geolocation API.',
        'Keyword search functionality optimized with binary search logic for fast filtering.',
        'Dynamic DOM updates utilizing React component lifecycle methods and conditional rendering.'
      ],
      tech: ['React.js', 'Geolocation API', 'JavaScript', 'HTML5', 'CSS3']
    }
  ];

  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          {projects.map((project, index) => (
            <div key={index} className="details-container color-container">
              <div className="project-img-wrapper">
                <img
                  src={project.img}
                  alt={project.title}
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">{project.title}</h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => setSelectedProject(project)}
                >
                  Details
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.open(project.demo || project.github, '_blank')}
                >
                  {project.demo ? 'Live Demo' : 'Github'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <img
        src={arrowIcon}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => {
          window.location.hash = 'contact';
        }}
      />

      {/* Sleek details modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

export default Projects;
