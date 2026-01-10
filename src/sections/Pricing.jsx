import { useMediaQuery } from "react-responsive";

import Button from "@/components/Button"

const Pricing = ({ className }) => {
   const isTablet = useMediaQuery({ maxWidth: 991 });

   return (
      <section className={className}>
         <div className="cnt">
            <div className="grid grid-cols-[1fr_60%] gap-9 max-sm:gap-6 max-sm2:gap-4 pl-25.25 pr-18 max-md:flex max-md:flex-col max-md:px-0">
               <div className="flex flex-col h-full">        
                  <div>
                     <h2 className="title mb-4">Pricing</h2>
                     <div>
                        <p className="text md:max-w-70.5">Take a look at some of our recent projects to see how we've helped businesses like yours succeed online.</p>
                     </div>
                  </div>
                  {
                     !isTablet && (
                        <div className="pt-9.25 pb-7 px-6.5 bg-white rounded-[20px] mt-auto">
                           <h3 className="font-secondary font-bold text-[34px] leading-[120%] mb-7.25">Let’s Schedule a Meeting</h3>
                           <Button title="Schedule Meeting" isPurple={true} className="w-full" />
                        </div>
                     )
                  }          
               </div>
               <div className="px-5.5 pt-10.75 pb-6.25 max-sm2:pt-7 max-sm:pb-4 max-sm:px-5 bg-white rounded-[20px]">
                  <div className="sm:pl-7">
                     <h3 className="font-bold text-3xl leading-[120%] font-secondary mb-7.75 max-xs:mb-4">Unlimited Services</h3>
                     <div className="mb-10.25 max-xs:mb-6">
                        <p className="text">Take a look at some of our recent projects to see how we've helped businesses like yours succeed online.</p>
                     </div>
                     <div className="flex gap-30 mb-10 max-xs:mb-6 max-lg:gap-20">
                        <ul className="flex flex-col gap-5.5">
                           <li className="flex items-center gap-3.25 text-[14px] leading-[180%]">
                              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M5.75 10L8.25 12.5L13.75 7M18.75 9.75C18.75 4.77944 14.7206 0.75 9.75 0.75C4.77944 0.75 0.75 4.77944 0.75 9.75C0.75 14.7206 4.77944 18.75 9.75 18.75C14.7206 18.75 18.75 14.7206 18.75 9.75Z" stroke="#252432" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                              <span>Unlimited requests</span>
                           </li>
                           <li className="flex items-center gap-3.25 text-[14px] leading-[180%]">
                              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M5.75 10L8.25 12.5L13.75 7M18.75 9.75C18.75 4.77944 14.7206 0.75 9.75 0.75C4.77944 0.75 0.75 4.77944 0.75 9.75C0.75 14.7206 4.77944 18.75 9.75 18.75C14.7206 18.75 18.75 14.7206 18.75 9.75Z" stroke="#252432" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                              <span>Unlimited requests</span>
                           </li>
                           <li className="flex items-center gap-3.25 text-[14px] leading-[180%]">
                              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M5.75 10L8.25 12.5L13.75 7M18.75 9.75C18.75 4.77944 14.7206 0.75 9.75 0.75C4.77944 0.75 0.75 4.77944 0.75 9.75C0.75 14.7206 4.77944 18.75 9.75 18.75C14.7206 18.75 18.75 14.7206 18.75 9.75Z" stroke="#252432" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                              <span>Unlimited requests</span>
                           </li>
                        </ul>
                        <ul className="flex flex-col gap-5.5 max-sm2:hidden">
                           <li className="flex items-center gap-3.25 text-[14px] leading-[180%]">
                              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M5.75 10L8.25 12.5L13.75 7M18.75 9.75C18.75 4.77944 14.7206 0.75 9.75 0.75C4.77944 0.75 0.75 4.77944 0.75 9.75C0.75 14.7206 4.77944 18.75 9.75 18.75C14.7206 18.75 18.75 14.7206 18.75 9.75Z" stroke="#252432" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                              <span>Unlimited requests</span>
                           </li>
                           <li className="flex items-center gap-3.25 text-[14px] leading-[180%]">
                              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M5.75 10L8.25 12.5L13.75 7M18.75 9.75C18.75 4.77944 14.7206 0.75 9.75 0.75C4.77944 0.75 0.75 4.77944 0.75 9.75C0.75 14.7206 4.77944 18.75 9.75 18.75C14.7206 18.75 18.75 14.7206 18.75 9.75Z" stroke="#252432" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                              <span>Unlimited requests</span>
                           </li>
                           <li className="flex items-center gap-3.25 text-[14px] leading-[180%]">
                              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M5.75 10L8.25 12.5L13.75 7M18.75 9.75C18.75 4.77944 14.7206 0.75 9.75 0.75C4.77944 0.75 0.75 4.77944 0.75 9.75C0.75 14.7206 4.77944 18.75 9.75 18.75C14.7206 18.75 18.75 14.7206 18.75 9.75Z" stroke="#252432" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                              <span>Unlimited requests</span>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <a href="" className="group flex justify-between items-center rounded-[10px] bg-[#f5f8ff] hover:bg-purple transition-colors py-7 px-10.5 max-xs:px-5">
                     <div className="font-bold group-hover:text-white text-6xl leading-[120%] max-sm2:text-5xl max-xs:text-[38px] mr-6 max-xs:mr-3">$3,250 <span className="pl-2 max-sm2:pl-0 text-[20px] max-xs:text-[16px] leading-[150%] text-gray group-hover:text-white transition-colors">/mo</span></div>
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-main group-hover:text-white transition-colors">
                        <path d="M5 12H19M19 12L16 15M19 12L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                     </svg>
                  </a>
               </div>
               {
                  isTablet && (
                     <div className="pt-9.25 pb-7 px-6.5 max-xs:pt-6 max-xs:pb-5 max-xs:px-4 bg-white rounded-[20px] mt-auto">
                        <h3 className="font-secondary font-bold text-[34px] max-xs:text-3xl leading-[120%] mb-7.25 max-xs:mb-6">Let’s Schedule a Meeting</h3>
                        <Button title="Schedule Meeting" isPurple={true} className="w-full" />
                     </div>
                  )
               }
            </div>
         </div>
      </section>
   )
}

export default Pricing