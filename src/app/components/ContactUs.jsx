"use client";
import React, { useEffect } from "react";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = ({ open, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = open ? "auto" : "auto";
  }, [open]);

  return (
    <>
      <ToastContainer />
      <Modal
        open={open}
        onClose={onClose}
        center
        styles={{
          modal: {
            maxWidth: "1000px",
            width: "90%",
            borderRadius: "5px",
            padding: "1rem",
            overflowY: "auto",
          },
          overlay: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px", // Ensures some space around the modal on small screens
          },
        }}
      >
        <div className="flex flex-col md:flex-row px-2 sm:px-5 py-10 rounded-sm">
          <div className="md:w-1/2 flex flex-col px-2 sm:px-4">
            <img
              src="images/home/smart-logo.png"
              alt="Smart Grader Logo"
              className="w-32 lg:w-44"
            />
            <div>
              <div className="text-gray-600 font-spline font-semibold text-md sm:text-lg my-5"></div>
              <div className="text-gray-600 font-spline font-bold text-2xl sm:text-3xl mb-10 md:w-10/12">
                Discover the Power of AI Driven Recruiting Automation with
                SmartGrader
              </div>
            </div>
          </div>
          <div className="md:w-1/2 px-2 sm:px-4">
            <h2 className="text-lg text-gray-600 font-spline font-bold sm:text-2xl mb-4">
              See Smarter AI Recruiting in Action
            </h2>
            <div>
              <img
                loading="lazy"
                src="/images/home/ThanksMsg.jpg"
                className="mt-1.5 "
              />
            </div>
            <div className="flex flex-col text-gray-600 items-center w-full justify-center font-spline">
              <div className="text-2xl font-bold mb-1">
                Thanks for contacting us!
              </div>
              <div className="text-lg">We have received your message</div>
              <div className="text-lg">
                and will reach out to you immediately!
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ContactUs;
