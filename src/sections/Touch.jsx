import Button from "@/components/Button";
import touchDecor1 from "@assets/images/touch/touchDecor1.png";
import touchDecor2 from "@assets/images/touch/touchDecor2.png";

const Touch = ({ className }) => {
   return (
      <section className={className}>
         <div className="cnt relative">
            <h2 className="mb-17.75 title flex justify-center w-full max-sm:mb-13 max-xs:mb-8">Let’s Get in Touch</h2>
            <div className="flex justify-center">
               <form action="#" className="max-w-174 w-full">
                  <div className="w-full mb-2.5">
                     <label htmlFor="email" className="block font-bold text-[18px] leading-[120%] mb-2.5 max-xs:mb-1.5">
                        email
                     </label>
                     <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="example@email.com"
                        className="outline-purple w-full text-[20px] leading-[150%] text-gray py-5 px-8 rounded-[10px] border border-[#d6dded]"
                     />
                  </div>
                  <div className="w-full mb-2.5">
                     <label htmlFor="fullname" className="block font-bold text-[18px] leading-[120%] mb-2.5 max-xs:mb-1.5">
                        name
                     </label>
                     <input
                        id="fullname"
                        type="text"
                        name="fullname"
                        placeholder="full name"
                        className="outline-purple w-full text-[20px] leading-[150%] text-gray py-5 px-8 rounded-[10px] border border-[#d6dded]"
                     />
                  </div>
                  <div className="w-full mb-6.25 max-xs:mb-3">
                     <label htmlFor="message" className="block font-bold text-[18px] leading-[120%] mb-2.5 max-xs:mb-1.5">
                        message
                     </label>
                     <textarea
                        id="message"
                        type="text"
                        name="message"
                        placeholder="write your message...."
                        className="resize-none outline-purple w-full h-55.5 text-[20px] leading-[150%] text-gray py-5 px-8 rounded-[10px] border border-[#d6dded]"
                     />
                  </div>
                  <Button title="Get in Touch" isPurple={true} className="w-full py-4.75" />
               </form>
            </div>
            <div className="absolute -top-22 -right-18.25 -z-1 max-sm2:max-w-62.5 max-sm2:-top-10">
               <img className="opacity-50"  src={touchDecor1} alt="Image" />
            </div>
            <div className="absolute -bottom-46 -left-102 -z-1 max-xs:-left-62.5">
               <img  className="opacity-50" src={touchDecor2} alt="Image" />
            </div>
         </div>
      </section>
   );
};

export default Touch;
