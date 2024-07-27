// // import React from 'react';
// // import { motion } from 'framer-motion';
// // import Slider from 'react-slick';
// // import testimonialLogo1 from '/images/home/profiles/Ananya.png';
// // import testimonialLogo2 from '/images/home/profiles/Ritika.png';
// // import testimonialLogo3 from '/images/home/profiles/Ananya.png';
// // import testimonialLogo4 from '/images/home/profiles/Rajesh.png';
// // import testimonialLogo5 from '/images/home/profiles/Priya.png';
// // import testimonialLogo6 from '/images/home/profiles/Vikram.png';
// // import testimonialLogo7 from '/images/home/profiles/Sneha.png';
// // import testimonialLogo8 from '/images/home/profiles/Karan.png';
// // import testimonialLogo9 from '/images/home/profiles/Meera.png';
// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";

// // const Testimonials = () => {
// //   const testimonials = [
// //     {
// //       name: "Arjun S.",
// //       title: "Software Engineer",
// //       text: "SmartGrader has been a game-changer in my interview preparation. The realistic mock interviews and instant AI feedback helped me identify my weak areas and improve significantly. I landed my dream job at a top tech company in Bangalore thanks to SmartGrader!",
// //       image: testimonialLogo1,
// //       rating: 5
// //     },
// //     {
// //       name: "Ritika P.",
// //       title: "HR Manager",
// //       text: "As an HR manager, SmartGrader has streamlined our hiring process tremendously. The customizable interview questions and AI-driven insights have made it easier to identify top talent efficiently. It's an invaluable tool for our organization in Mumbai.",
// //       image: testimonialLogo2,
// //       rating: 5
// //     },
// //     {
// //       name: "Ananya R.",
// //       title: "College Student",
// //       text: "Preparing for exams has never been easier. SmartGrader's secure testing environment and automated grading system have saved me so much time. The detailed progress tracking also helps me stay on top of my studies at Delhi University. I highly recommend it to all students!",
// //       image: testimonialLogo3,
// //       rating: 5
// //     },
// //     {
// //       name: "Rajesh K.",
// //       title: "Talent Acquisition Specialist",
// //       text: "SmartGrader's AI-powered assessments and detailed analytics have revolutionized the way we conduct interviews. The platform provides deep insights into candidate performance, allowing us to make data-driven hiring decisions with confidence at our Hyderabad office.",
// //       image: testimonialLogo4,
// //       rating: 5
// //     },
// //     {
// //       name: "Priya L.",
// //       title: "Training and Placement Officer",
// //       text: "SmartGrader has been a fantastic addition to our training programs. The tailored question sets and realistic interview scenarios have greatly improved our students' readiness for the job market. The feedback from the AI is invaluable in helping them understand where they need to improve.",
// //       image: testimonialLogo5,
// //       rating: 5
// //     },
// //     {
// //       name: "Vikram M.",
// //       title: "Data Scientist",
// //       text: "The AI feedback provided by SmartGrader is incredibly detailed and accurate. It has helped me refine my problem-solving skills and communication abilities. The progress tracking feature is excellent for seeing my improvement over time while working at a tech startup in Pune.",
// //       image: testimonialLogo6,
// //       rating: 5
// //     },
// //     {
// //       name: "Sneha D.",
// //       title: "IT Professional",
// //       text: "SmartGrader's platform is user-friendly and offers comprehensive tools for interview preparation. The customizable question sets are particularly useful for targeting specific areas of improvement. It's a must-have for anyone serious about advancing their career in the IT sector.",
// //       image: testimonialLogo7,
// //       rating: 5
// //     },
// //     {
// //       name: "Karan N.",
// //       title: "Mechanical Engineer",
// //       text: "As a recent graduate, SmartGrader helped me prepare for technical interviews with ease. The mock interviews and AI feedback were instrumental in securing a position at a leading engineering firm in Chennai. I highly recommend it to all job seekers.",
// //       image: testimonialLogo8,
// //       rating: 5
// //     },
// //     {
// //       name: "Meera G.",
// //       title: "MBA Student",
// //       text: "SmartGrader's detailed analytics and feedback have been incredibly helpful in my MBA interview preparation. The realistic interview scenarios and tailored questions have boosted my confidence. I'm grateful for the support this platform provided during my job search in Gurgaon.",
// //       image: testimonialLogo9,
// //       rating: 5
// //     }
// //   ];

// //   const settings = {
// //     dots: true,
// //     infinite: true,
// //     speed: 500,
// //     slidesToShow: 3,
// //     slidesToScroll: 1,
// //     autoplay: true,
// //     autoplaySpeed: 3000,
// //     cssEase: "linear",
// //     responsive: [
// //       {
// //         breakpoint: 1024,
// //         settings: {
// //           slidesToShow: 2,
// //           slidesToScroll: 1,
// //           infinite: true,
// //           dots: true
// //         }
// //       },
// //       {
// //         breakpoint: 600,
// //         settings: {
// //           slidesToShow: 1,
// //           slidesToScroll: 1
// //         }
// //       }
// //     ]
// //   };

// //   return (
// //     <section id="testimonials" className="py-20 bg-gray-50">
// //       <style>
// //         {`
// //           .slick-slide {
// //             padding: 0 15px; /* Adds padding to both sides of each slide */
// //           }
// //         `}
// //       </style>
// //       <div className="container mx-auto px-4">
// //         <div className="text-center mb-12">
// //           <h2 className="text-3xl md:text-4xl font-medium font-spline text-sky-600">Hear From Our Satisfied Users</h2>
// //         </div>
// //         <Slider {...settings} className="testimonial-slider">
// //           {testimonials.map((testimonial, index) => (
// //             <motion.div
// //               key={index}
// //               className="testimonial-card flex flex-col justify-between mx-2 text-center p-6 bg-white shadow-lg rounded-lg border border-gray-200 transition duration-300 transform hover:scale-105 h-[450px]"
// //               initial={{ opacity: 0, y: 50 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.5, delay: index * 0.2 }}
// //             >
// //               <div>
// //                 <img className="w-16 h-16 mx-auto mb-4 rounded-full" src={testimonial.image} alt={testimonial.name} />
// //                 <h3 className="text-xl font-bold font-spline mb-2 text-sky-600">{testimonial.name}</h3>
// //                 <p className="text-gray-600 font-spline mb-2">{testimonial.title}</p>
// //                 <p className="text-gray-700 font-spline mb-4">{testimonial.text}</p>
// //               </div>
// //               <div className="flex justify-center mt-4">
// //                 {[...Array(testimonial.rating)].map((_, i) => (
// //                   <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
// //                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.562 4.794a1 1 0 00.95.69h5.012c.969 0 1.372 1.24.588 1.81l-4.065 2.957a1 1 0 00-.364 1.118l1.562 4.794c.3.921-.755 1.688-1.54 1.118l-4.065-2.957a1 1 0 00-1.176 0l-4.065 2.957c-.785.57-1.84-.197-1.54-1.118l1.562-4.794a1 1 0 00-.364-1.118L2.36 10.42c-.784-.57-.381-1.81.588-1.81h5.012a1 1 0 00.95-.69L9.049 2.927z" />
// //                   </svg>
// //                 ))}
// //               </div>
// //             </motion.div>
// //           ))}
// //         </Slider>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Testimonials;

// // import React from 'react';
// // import { motion } from 'framer-motion';
// // import Slider from 'react-slick';
// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";

// // const Testimonials = () => {
// //   const testimonials = [
// //     {
// //       name: "Arjun S.",
// //       title: "Software Engineer",
// //       text: "SmartGrader has been a game-changer in my interview preparation. The realistic mock interviews and instant AI feedback helped me identify my weak areas and improve significantly. I landed my dream job at a top tech company in Bangalore thanks to SmartGrader!",
// //       image: '/images/home/profiles/Ananya.png',
// //       rating: 5
// //     },
// //     {
// //       name: "Ritika P.",
// //       title: "HR Manager",
// //       text: "As an HR manager, SmartGrader has streamlined our hiring process tremendously. The customizable interview questions and AI-driven insights have made it easier to identify top talent efficiently. It's an invaluable tool for our organization in Mumbai.",
// //       image: '/images/home/profiles/Ritika.png',
// //       rating: 5
// //     },
// //     {
// //       name: "Ananya R.",
// //       title: "College Student",
// //       text: "Preparing for exams has never been easier. SmartGrader's secure testing environment and automated grading system have saved me so much time. The detailed progress tracking also helps me stay on top of my studies at Delhi University. I highly recommend it to all students!",
// //       image: '/images/home/profiles/Ananya.png',
// //       rating: 5
// //     },
// //     {
// //       name: "Rajesh K.",
// //       title: "Talent Acquisition Specialist",
// //       text: "SmartGrader's AI-powered assessments and detailed analytics have revolutionized the way we conduct interviews. The platform provides deep insights into candidate performance, allowing us to make data-driven hiring decisions with confidence at our Hyderabad office.",
// //       image: '/images/home/profiles/Rajesh.png',
// //       rating: 5
// //     },
// //     {
// //       name: "Priya L.",
// //       title: "Training and Placement Officer",
// //       text: "SmartGrader has been a fantastic addition to our training programs. The tailored question sets and realistic interview scenarios have greatly improved our students' readiness for the job market. The feedback from the AI is invaluable in helping them understand where they need to improve.",
// //       image: '/images/home/profiles/Priya.png',
// //       rating: 5
// //     },
// //     {
// //       name: "Vikram M.",
// //       title: "Data Scientist",
// //       text: "The AI feedback provided by SmartGrader is incredibly detailed and accurate. It has helped me refine my problem-solving skills and communication abilities. The progress tracking feature is excellent for seeing my improvement over time while working at a tech startup in Pune.",
// //       image: '/images/home/profiles/Vikram.png',
// //       rating: 5
// //     },
// //     {
// //       name: "Sneha D.",
// //       title: "IT Professional",
// //       text: "SmartGrader's platform is user-friendly and offers comprehensive tools for interview preparation. The customizable question sets are particularly useful for targeting specific areas of improvement. It's a must-have for anyone serious about advancing their career in the IT sector.",
// //       image: '/images/home/profiles/Sneha.png',
// //       rating: 5
// //     },
// //     {
// //       name: "Karan N.",
// //       title: "Mechanical Engineer",
// //       text: "As a recent graduate, SmartGrader helped me prepare for technical interviews with ease. The mock interviews and AI feedback were instrumental in securing a position at a leading engineering firm in Chennai. I highly recommend it to all job seekers.",
// //       image: '/images/home/profiles/Karan.png',
// //       rating: 5
// //     },
// //     {
// //       name: "Meera G.",
// //       title: "MBA Student",
// //       text: "SmartGrader's detailed analytics and feedback have been incredibly helpful in my MBA interview preparation. The realistic interview scenarios and tailored questions have boosted my confidence. I'm grateful for the support this platform provided during my job search in Gurgaon.",
// //       image: '/images/home/profiles/Meera.png',
// //       rating: 5
// //     }
// //   ];

// //   const settings = {
// //     dots: true,
// //     infinite: true,
// //     speed: 500,
// //     slidesToShow: 3,
// //     slidesToScroll: 1,
// //     autoplay: true,
// //     autoplaySpeed: 3000,
// //     cssEase: "linear",
// //     responsive: [
// //       {
// //         breakpoint: 1024,
// //         settings: {
// //           slidesToShow: 2,
// //           slidesToScroll: 1,
// //           infinite: true,
// //           dots: true
// //         }
// //       },
// //       {
// //         breakpoint: 600,
// //         settings: {
// //           slidesToShow: 1,
// //           slidesToScroll: 1
// //         }
// //       }
// //     ]
// //   };

// //   return (
// //     <section id="testimonials" className="py-20 bg-gray-50">
// //       <style jsx>{`
// //         .slick-slide {
// //           padding: 0 15px;
// //         }
// //       `}</style>
// //       <div className="container mx-auto px-4">
// //         <div className="text-center mb-12">
// //           <h2 className="text-3xl md:text-4xl font-medium font-spline text-sky-600">Hear From Our Satisfied Users</h2>
// //         </div>
// //         <Slider {...settings} className="testimonial-slider">
// //           {testimonials.map((testimonial, index) => (
// //             <motion.div
// //               key={index}
// //               className="testimonial-card flex flex-col justify-between mx-2 text-center p-6 bg-white shadow-lg rounded-lg border border-gray-200 transition duration-300 transform hover:scale-105 h-[450px]"
// //               initial={{ opacity: 0, y: 50 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.5, delay: index * 0.2 }}
// //             >
// //               <div>
// //                 <img className="w-16 h-16 mx-auto mb-4 rounded-full" src={testimonial.image} alt={testimonial.name} />
// //                 <h3 className="text-xl font-bold font-spline mb-2 text-sky-600">{testimonial.name}</h3>
// //                 <p className="text-gray-600 font-spline mb-2">{testimonial.title}</p>
// //                 <p className="text-gray-700 font-spline mb-4">{testimonial.text}</p>
// //               </div>
// //               <div className="flex justify-center mt-4">
// //                 {[...Array(testimonial.rating)].map((_, i) => (
// //                   <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
// //                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.562 4.794a1 1 0 00.95.69h5.012c.969 0 1.372 1.24.588 1.81l-4.065 2.957a1 1 0 00-.364 1.118l1.562 4.794c.3.921-.755 1.688-1.54 1.118l-4.065-2.957a1 1 0 00-1.176 0l-4.065 2.957c-.785.57-1.84-.197-1.54-1.118l1.562-4.794a1 1 0 00-.364-1.118L2.36 10.42c-.784-.57-.381-1.81.588-1.81h5.012a1 1 0 00.95-.69L9.049 2.927z" />
// //                   </svg>
// //                 ))}
// //               </div>
// //             </motion.div>
// //           ))}
// //         </Slider>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Testimonials;
// import React from 'react';
// import { motion } from 'framer-motion';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Testimonials = () => {
//   const testimonials = [
//     {
//       name: "Arjun S.",
//       title: "Software Engineer",
//       text: "SmartGrader has been a game-changer in my interview preparation. The realistic mock interviews and instant AI feedback helped me identify my weak areas and improve significantly. I landed my dream job at a top tech company in Bangalore thanks to SmartGrader!",
//       image: '/images/home/profiles/Ananya.png',
//       rating: 5
//     },
//     {
//       name: "Ritika P.",
//       title: "HR Manager",
//       text: "As an HR manager, SmartGrader has streamlined our hiring process tremendously. The customizable interview questions and AI-driven insights have made it easier to identify top talent efficiently. It's an invaluable tool for our organization in Mumbai.",
//       image: '/images/home/profiles/Ritika.png',
//       rating: 5
//     },
//     {
//       name: "Ananya R.",
//       title: "College Student",
//       text: "Preparing for exams has never been easier. SmartGrader's secure testing environment and automated grading system have saved me so much time. The detailed progress tracking also helps me stay on top of my studies at Delhi University. I highly recommend it to all students!",
//       image: '/images/home/profiles/Ananya.png',
//       rating: 5
//     },
//     {
//       name: "Rajesh K.",
//       title: "Talent Acquisition Specialist",
//       text: "SmartGrader's AI-powered assessments and detailed analytics have revolutionized the way we conduct interviews. The platform provides deep insights into candidate performance, allowing us to make data-driven hiring decisions with confidence at our Hyderabad office.",
//       image: '/images/home/profiles/Rajesh.png',
//       rating: 5
//     },
//     {
//       name: "Priya L.",
//       title: "Training and Placement Officer",
//       text: "SmartGrader has been a fantastic addition to our training programs. The tailored question sets and realistic interview scenarios have greatly improved our students' readiness for the job market. The feedback from the AI is invaluable in helping them understand where they need to improve.",
//       image: '/images/home/profiles/Priya.png',
//       rating: 5
//     },
//     {
//       name: "Vikram M.",
//       title: "Data Scientist",
//       text: "The AI feedback provided by SmartGrader is incredibly detailed and accurate. It has helped me refine my problem-solving skills and communication abilities. The progress tracking feature is excellent for seeing my improvement over time while working at a tech startup in Pune.",
//       image: '/images/home/profiles/Vikram.png',
//       rating: 5
//     },
//     {
//       name: "Sneha D.",
//       title: "IT Professional",
//       text: "SmartGrader's platform is user-friendly and offers comprehensive tools for interview preparation. The customizable question sets are particularly useful for targeting specific areas of improvement. It's a must-have for anyone serious about advancing their career in the IT sector.",
//       image: '/images/home/profiles/Sneha.png',
//       rating: 5
//     },
//     {
//       name: "Karan N.",
//       title: "Mechanical Engineer",
//       text: "As a recent graduate, SmartGrader helped me prepare for technical interviews with ease. The mock interviews and AI feedback were instrumental in securing a position at a leading engineering firm in Chennai. I highly recommend it to all job seekers.",
//       image: '/images/home/profiles/Karan.png',
//       rating: 5
//     },
//     {
//       name: "Meera G.",
//       title: "MBA Student",
//       text: "SmartGrader's detailed analytics and feedback have been incredibly helpful in my MBA interview preparation. The realistic interview scenarios and tailored questions have boosted my confidence. I'm grateful for the support this platform provided during my job search in Gurgaon.",
//       image: '/images/home/profiles/Meera.png',
//       rating: 5
//     }
//   ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     cssEase: "linear",
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   };

//   return (
//     <section id="testimonials" className="py-20 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-medium font-spline text-sky-600">Hear From Our Satisfied Users</h2>
//         </div>
//         <Slider {...settings} className="testimonial-slider">
//           {testimonials.map((testimonial, index) => (
//             <motion.div
//               key={index}
//               className="testimonial-card flex flex-col justify-between mx-4 text-center p-6 bg-white shadow-lg rounded-lg border border-gray-200 transition duration-300 transform hover:scale-105 h-[450px]"
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//             >
//               <div>
//                 <img className="w-16 h-16 mx-auto mb-4 rounded-full" src={testimonial.image} alt={testimonial.name} />
//                 <h3 className="text-xl font-bold font-spline mb-2 text-sky-600">{testimonial.name}</h3>
//                 <p className="text-gray-600 font-spline mb-2">{testimonial.title}</p>
//                 <p className="text-gray-700 font-spline mb-4">{testimonial.text}</p>
//               </div>
//               <div className="flex justify-center mt-4">
//                 {[...Array(testimonial.rating)].map((_, i) => (
//                   <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
//                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.562 4.794a1 1 0 00.95.69h5.012c.969 0 1.372 1.24.588 1.81l-4.065 2.957a1 1 0 00-.364 1.118l1.562 4.794c.3.921-.755 1.688-1.54 1.118l-4.065-2.957a1 1 0 00-1.176 0l-4.065 2.957c-.785.57-1.84-.197-1.54-1.118l1.562-4.794a1 1 0 00-.364-1.118L2.36 10.42c-.784-.57-.381-1.81.588-1.81h5.012a1 1 0 00.95-.69L9.049 2.927z" />
//                   </svg>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </Slider>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
"use client";
import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Arjun S.",
      title: "Software Engineer",
      text: "SmartGrader has been a game-changer in my interview preparation. The realistic mock interviews and instant AI feedback helped me identify my weak areas and improve significantly. I landed my dream job at a top tech company in Bangalore thanks to SmartGrader!",
      image: "/images/home/profiles/Ananya.png",
      rating: 5,
      width: 64,
      height: 64,
    },
    {
      name: "Ritika P.",
      title: "HR Manager",
      text: "As an HR manager, SmartGrader has streamlined our hiring process tremendously. The customizable interview questions and AI-driven insights have made it easier to identify top talent efficiently. It's an invaluable tool for our organization in Mumbai.",
      image: "/images/home/profiles/Ritika.png",
      rating: 5,
      width: 64,
      height: 64,
    },
    {
      name: "Ananya R.",
      title: "College Student",
      text: "Preparing for exams has never been easier. SmartGrader's secure testing environment and automated grading system have saved me so much time. The detailed progress tracking also helps me stay on top of my studies at Delhi University. I highly recommend it to all students!",
      image: "/images/home/profiles/Ananya.png",
      rating: 5,
      width: 64,
      height: 64,
    },
    {
      name: "Rajesh K.",
      title: "Talent Acquisition Specialist",
      text: "SmartGrader's AI-powered assessments and detailed analytics have revolutionized the way we conduct interviews. The platform provides deep insights into candidate performance, allowing us to make data-driven hiring decisions with confidence at our Hyderabad office.",
      image: "/images/home/profiles/Rajesh.png",
      rating: 5,
      width: 64,
      height: 64,
    },
    {
      name: "Priya L.",
      title: "Training and Placement Officer",
      text: "SmartGrader has been a fantastic addition to our training programs. The tailored question sets and realistic interview scenarios have greatly improved our students' readiness for the job market. The feedback from the AI is invaluable in helping them understand where they need to improve.",
      image: "/images/home/profiles/Priya.png",
      rating: 5,
      width: 64,
      height: 64,
    },
    {
      name: "Vikram M.",
      title: "Data Scientist",
      text: "The AI feedback provided by SmartGrader is incredibly detailed and accurate. It has helped me refine my problem-solving skills and communication abilities. The progress tracking feature is excellent for seeing my improvement over time while working at a tech startup in Pune.",
      image: "/images/home/profiles/Vikram.png",
      rating: 5,
      width: 64,
      height: 64,
    },
    {
      name: "Sneha D.",
      title: "IT Professional",
      text: "SmartGrader's platform is user-friendly and offers comprehensive tools for interview preparation. The customizable question sets are particularly useful for targeting specific areas of improvement. It's a must-have for anyone serious about advancing their career in the IT sector.",
      image: "/images/home/profiles/Sneha.png",
      rating: 5,
      width: 64,
      height: 64,
    },
    {
      name: "Karan N.",
      title: "Mechanical Engineer",
      text: "As a recent graduate, SmartGrader helped me prepare for technical interviews with ease. The mock interviews and AI feedback were instrumental in securing a position at a leading engineering firm in Chennai. I highly recommend it to all job seekers.",
      image: "/images/home/profiles/Karan.png",
      rating: 5,
      width: 64,
      height: 64,
    },
    {
      name: "Meera G.",
      title: "MBA Student",
      text: "SmartGrader's detailed analytics and feedback have been incredibly helpful in my MBA interview preparation. The realistic interview scenarios and tailored questions have boosted my confidence. I'm grateful for the support this platform provided during my job search in Gurgaon.",
      image: "/images/home/profiles/Meera.png",
      rating: 5,
      width: 64,
      height: 64,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="testimonials" className="my-12 py-12 bg-sky-200 rounded ">
      <div className="container mx-auto px-4 ">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium font-spline text-[#2B383D]">
            Hear From Our Satisfied Users
          </h2>
        </div>
        <Slider {...settings} className="testimonial-slider">
          {testimonials.map((testimonial, index) => (
            <div className="flex flex-col gap-[20%] h-min" key={index}>
              <motion.div
                className="testimonial-card flex flex-col justify-between m-4 px-6 text-center p-6 bg-white shadow-lg rounded-lg border border-gray-200 transition duration-300 transform hover:scale-105 h-[450px]"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="flex flex-col gap-[2%]">
                  <Image
                    className="w-16 h-16 mx-auto mb-4 rounded-full"
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={testimonial.width}
                    height={testimonial.height}
                  />
                  <h3 className="text-xl font-bold font-spline mb-2 text-sky-600">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600 font-spline mb-2">
                    {testimonial.title}
                  </p>
                  <p className="text-gray-700 font-spline mb-4">
                    {testimonial.text}
                  </p>
                </div>
                <div className="flex justify-center mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.562 4.794a1 1 0 00.95.69h5.012c.969 0 1.372 1.24.588 1.81l-4.065 2.957a1 1 0 00-.364 1.118l1.562 4.794c.3.921-.755 1.688-1.54 1.118l-4.065-2.957a1 1 0 00-1.176 0l-4.065 2.957c-.785.57-1.84-.197-1.54-1.118l1.562-4.794a1 1 0 00-.364-1.118L2.36 10.42c-.784-.57-.381-1.81.588-1.81h5.012a1 1 0 00.95-.69L9.049 2.927z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
