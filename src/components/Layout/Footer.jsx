import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);

  const footerData = {
    company: {
      description: "Connecting Talent with Opportunity Effortlessly!",
    },
    quickLinks: [
      { name: "Home", route: "/" },
      { name: "All Jobs", route: "/job/getall" },
      { name: "Services", route: "/services" },
      { name: "Contact", route: "/contact" },
      { name: "Blog", route: "/blog" },
    ],
    socialMedia: {
      facebook: "https://www.facebook.com",
      youtube: "https://www.youtube.com",
      linkedin: "https://www.linkedin.com",
      instagram: "https://www.instagram.com",
    },
    contact: {
      phone: "+1234567890",
      email: "talentSphere@mail.com",
      address: "sector-2,Noida,UP",
    },
  };

  const navigateTo = (route) => {
    window.location.href = route;
  };

  if (!isAuthorized) {
    return null; // Hide footer when not authorized
  }

  return (
    <footer className="footerShow" style={{ backgroundColor: "black" }}>
      <div className="container-fluid">
        <div className="row py-4">
          <div className="col-12 col-sm-4 text-center text-white mt-4">
            <img
              src="https://talentsphere.ca/files/logo.png"
              alt="Company Logo"
              style={{ maxWidth: "200px" }}
              className="mx-auto"
            />
            <p className="mt-3">{footerData.company.description}</p>
          </div>
          <div className="col-12 col-sm-8 text-white">
            <div className="row">
              <div className="col-12 col-sm-4">
                <h3 className="font-weight-bold mb-3">Quick Links</h3>
                <div>
                  {footerData.quickLinks.map((link, index) => (
                    <p key={index} onClick={() => navigateTo(link.route)} style={{ cursor: "pointer" }}>
                      {link.name}
                    </p>
                  ))}
                </div>
              </div>
              <div className="col-12 col-md-4">
                <h3 className="font-weight-bold mb-3">Social Media</h3>
                <div>
                  <p>
                    <Link to={footerData.socialMedia.facebook} target="_blank" style={{ textDecoration: "none", color: "white" ,marginTop:"4px"}}>
                      <FaFacebookF style={{ fontSize: "24px", marginRight: "8px" }} />
                      Facebook
                    </Link>
                    <br />
                    <Link to={footerData.socialMedia.youtube} target="_blank" style={{ textDecoration: "none", color: "white" }}>
                      <FaYoutube style={{ fontSize: "24px", marginRight: "8px" }} />
                      YouTube
                    </Link>
                    <br />
                    <Link to={footerData.socialMedia.linkedin} target="_blank" style={{ textDecoration: "none", color: "white" }}>
                      <FaLinkedin style={{ fontSize: "24px", marginRight: "8px" }} />
                      LinkedIn
                    </Link>
                    <br />
                    <Link to={footerData.socialMedia.instagram} target="_blank" style={{ textDecoration: "none", color: "white" }}>
                      <RiInstagramFill style={{ fontSize: "24px", marginRight: "8px" }} />
                      Instagram
                    </Link>
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-4">
                <h3 className="font-weight-bold mb-3">Contact Information</h3>
                <div>
                  <p><i className="mdi mdi-phone"></i> {footerData.contact.phone}</p>
                  <p><i className="mdi mdi-email"></i> {footerData.contact.email}</p>
                  <p><i className="mdi mdi-map-marker"></i> {footerData.contact.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="text-white mx-3" />
      </div>
      <div className="container-fluid">
        <div className="row justify-content-between align-items-center px-3">
          <div className="col-12 col-sm-4 text-left text-white">
            <p className="mb-0">All rights reserved © 2024</p>
          </div>
          <div className="col-13 col-sm-4"></div>
          <div className="col-12 col-sm-4 text-right text-white">
            <div className="d-inline mx-2" onClick={() => navigateTo("terms")} style={{ cursor: "pointer" }}>
              Terms of Service
            </div>
            <div className="d-inline mx-4" onClick={() => navigateTo("privacy")} style={{ cursor: "pointer" }}>
              Privacy Policy
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
