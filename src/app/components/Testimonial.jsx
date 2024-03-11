// // TestimonialSlider.js

// import { useState } from "react";

// const TestimonialSlider = ({ testimonials }) => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const nextSlide = () => {
//     setCurrentSlide((prevSlide) =>
//       prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1
//     );
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prevSlide) =>
//       prevSlide === 0 ? testimonials.length - 1 : prevSlide - 1
//     );
//   };

//   return (
//     <div className="relative w-1/2 mx-auto border shadow h-fit p-5">
//       <div className="flex justify-center items-center">
//         <button
//           className="absolute hover:shadow left-2 top-1/2 transform -translate-y-1/2 text-black font-bold px-4 py-2 rounded-full z-10"
//           onClick={prevSlide}
//         >
//           <svg
//             style={{
//               transform: "translate(18deg)",
//             }}
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={2}
//             stroke="currentColor"
//             className="w-6 h-6 text-black font-bold rotate-180"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
//             />
//           </svg>
//         </button>
//         <button
//           className="absolute hover:shadow right-2 top-1/2 transform -translate-y-1/2 text-black font-bold px-4 py-2 rounded-full z-10"
//           onClick={nextSlide}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={2}
//             stroke="currentColor"
//             className="w-6 h-6 text-black font-bold "
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
//             />
//           </svg>
//         </button>
//         <div className="w-full overflow-hidden relative">
//           {testimonials.map((testimonial, index) => (
//             <div
//               key={index}
//               className={`testimonial ${
//                 index === currentSlide ? "active" : "hidden"
//               }`}
//             >
//               <p className="text-center"> {testimonial.text}</p>
//               <p className="text-center font-bold mt-2">
//                 -{testimonial.author}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestimonialSlider;
