import checkReviews from '@assets/images/check/checkReviews.png';
import checkDecor from "@assets/images/check/checkDecor.png";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useRef } from 'react';

import { checkSliderItems } from '@/constants';

const Check = ({ className }) => {
   const prevRef = useRef(null);
   const nextRef = useRef(null);

   return (
      <section id="check" className={className}>
         <div className="cnt relative">
            <div className="flex flex-col items-center mb-14.25 max-sm:mb-11 max-xs:mb-8">
               <h2 className="title mb-8 max-sm:mb-6">Check our Work</h2>
               <div className="text text-center max-w-122.25">
                  <p>
                     Take a look at some of our recent projects to see how we've helped businesses
                     like yours succeed online.
                  </p>
               </div>
            </div>
            <div>
               <Swiper
                  className="relative"
                  modules={[Navigation, Pagination]}
                  spaceBetween={32}
                  slidesPerView={1.5}
                  centeredSlides={true}
                  speed={700}
                  navigation={{
                     prevEl: prevRef.current,
                     nextEl: nextRef.current,
                  }}
                  onBeforeInit={(swiper) => {
                     swiper.params.navigation.prevEl = prevRef.current;
                     swiper.params.navigation.nextEl = nextRef.current;
                  }}
                  breakpoints={{
                     320: {
                        slidesPerView: 1,
                        spaceBetween: 5,
                     },
                     480: {
                        slidesPerView: 1.2,
                        spaceBetween: 32,
                     },
                     768: {
                        slidesPerView: 1.5,
                     },
                  }}
               >
                  {checkSliderItems.map((item) => (
                     <SwiperSlide className="testimonials-slide">
                        <a
                           href=""
                           className="block rounded-[10px] p-8.5 max-sm:p-6.5 max-xs:p-3 bg-[linear-gradient(137deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.5)_100%)]"
                        >
                           <div className="rounded-[5px] overflow-hidden">
                              <img
                                 className="w-full h-full object-cover"
                                 src={item.imageUrl}
                                 alt="Image"
                              />
                           </div>
                        </a>
                     </SwiperSlide>
                  ))}

                  <div className="sm:absolute -top-46.25 left-[50%] sm:-translate-x-[50%] mx-auto flex items-center justify-between gap-20 w-full max-w-245">
                     <button
                        ref={prevRef}
                        className="flex justify-center text-main items-center w-19.5 h-19.5 max-sm:w-17 max-sm:h-17 max-xs:w-14 max-xs:h-14 bg-white hover:text-white hover:bg-purple transition-colors rounded-full cursor-pointer [&.swiper-button-disabled]:bg-[rgba(0,0,0,0.05)] [&.swiper-button-disabled]:hover:text-main [&.swiper-button-disabled]:cursor-auto"
                     >
                        <svg
                           width="16"
                           height="8"
                           viewBox="0 0 16 8"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              d="M14.75 3.75H0.75M0.75 3.75L3.75 6.75M0.75 3.75L3.75 0.75"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                           />
                        </svg>
                     </button>
                     <button
                        ref={nextRef}
                        className="flex justify-center text-main items-center w-19.5 h-19.5 max-sm:w-17 max-sm:h-17 max-xs:w-14 max-xs:h-14 bg-white hover:text-white hover:bg-purple transition-colors rounded-full cursor-pointer [&.swiper-button-disabled]:bg-[rgba(0,0,0,0.05)] [&.swiper-button-disabled]:hover:text-main [&.swiper-button-disabled]:cursor-auto"
                     >
                        <svg
                           width="16"
                           height="8"
                           viewBox="0 0 16 8"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              d="M0.749999 3.75L14.75 3.75M14.75 3.75L11.75 0.75M14.75 3.75L11.75 6.75"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                           />
                        </svg>
                     </button>
                  </div>
               </Swiper>

               <div className='flex justify-center w-full mt-21.5 max-sm:mt-16 max-xs:mt-8'>        
                  <div className='flex items-center gap-3.25 p-5.25 border border-[#e4eaf8] rounded-[22px] bg-white'>
                     <div>
                        <img src={checkReviews} alt="Image" />
                     </div>
                     <div className=''>
                        <div className="text-gray leading-[120%] mb-1">
                           <span className="font-medium text-main capitalize">5.0</span> Based on{' '}
                           <span className="font-medium text-main">145</span> Reviews
                        </div>
                        <div className='flex items-center gap-1.5'>
                           <svg
                              width="13"
                              height="12"
                              viewBox="0 0 13 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path
                                 d="M6.046 0L7.47326 4.39267L12.092 4.39267L8.35536 7.10748L9.78263 11.5002L6.046 8.78533L2.30937 11.5002L3.73664 7.10748L1.33514e-05 4.39267L4.61874 4.39267L6.046 0Z"
                                 fill="#F7C33D"
                              />
                           </svg>
                           <svg
                              width="13"
                              height="12"
                              viewBox="0 0 13 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path
                                 d="M6.046 0L7.47326 4.39267L12.092 4.39267L8.35536 7.10748L9.78263 11.5002L6.046 8.78533L2.30937 11.5002L3.73664 7.10748L1.33514e-05 4.39267L4.61874 4.39267L6.046 0Z"
                                 fill="#F7C33D"
                              />
                           </svg>
                           <svg
                              width="13"
                              height="12"
                              viewBox="0 0 13 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path
                                 d="M6.046 0L7.47326 4.39267L12.092 4.39267L8.35536 7.10748L9.78263 11.5002L6.046 8.78533L2.30937 11.5002L3.73664 7.10748L1.33514e-05 4.39267L4.61874 4.39267L6.046 0Z"
                                 fill="#F7C33D"
                              />
                           </svg>
                           <svg
                              width="13"
                              height="12"
                              viewBox="0 0 13 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path
                                 d="M6.046 0L7.47326 4.39267L12.092 4.39267L8.35536 7.10748L9.78263 11.5002L6.046 8.78533L2.30937 11.5002L3.73664 7.10748L1.33514e-05 4.39267L4.61874 4.39267L6.046 0Z"
                                 fill="#F7C33D"
                              />
                           </svg>
                           <svg
                              width="13"
                              height="12"
                              viewBox="0 0 13 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path
                                 d="M6.046 0L7.47326 4.39267L12.092 4.39267L8.35536 7.10748L9.78263 11.5002L6.046 8.78533L2.30937 11.5002L3.73664 7.10748L1.33514e-05 4.39267L4.61874 4.39267L6.046 0Z"
                                 fill="#F7C33D"
                              />
                           </svg>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className='absolute top-0 left-[50%] -translate-x-[50%]'>
               <img className='opacity-40' src={checkDecor} alt="Image" />
            </div>
         </div>
      </section>
   );
};

export default Check;
