import FaqItem from "@/components/FaqItem";
import { faq } from "@/constants";
import { useState } from "react";

import faqDecor from '@assets/images/faq/faqDecor.png';

const Faq = ({ className }) => {
   const [activeId, setActiveId] = useState(null);

   function changeActiveId(id) {
      setActiveId(id)
   }

   return (
      <section className={className}>
         <div className="cnt grid grid-cols-[1fr_55.8%] max-md:grid-cols-1 max-md:gap-7 relative">
            <div className="md:pl-17.25 md:pt-24.25">
               <h2 className="title md:max-w-114">Frequently Asked Questions</h2>
            </div>
            <div>
               {
                  faq.map(item => (
                     <FaqItem key={item.id} item={item} activeId={activeId} changeActiveId={changeActiveId} />
                  ))
               }
            </div>
            <div className="absolute -top-39.5 -left-78.5 max-md:-left-30 max-md:-top-20 max-xs:top-10 max-md:max-w-150">
               <img className="opacity-50 w-full object-cover" src={faqDecor} alt="Image" />
            </div>
         </div>
      </section>
   )
};

export default Faq;
