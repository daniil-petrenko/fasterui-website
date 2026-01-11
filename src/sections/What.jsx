import {
   icon1,
   icon2,
   icon3,
   icon4,
   icon5,
   icon6,
   item1,
   item2
} from "@assets/images";

import WhatItem from "@/components/WhatItem";

import gsap from 'gsap';
import SplitText from 'gsap/src/SplitText';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);


const items = [
   {
      id: "1",
      icon: icon1,
      title: "Web Design",
      text: "From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.",
      imageUrl: ""
   },
   {
      id: "2",
      icon: icon2,
      title: "UI/UX Design",
      text: "From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.",
      imageUrl: ""
   },
   {
      id: "3",
      icon: icon3,
      title: "Responsive Design",
      text: "From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.",
      imageUrl: ""
   },
   {
      id: "4",
      icon: icon4,
      title: "E-commerce Solutions:",
      text: "From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.",
      imageUrl: item2,
   },
   {
      id: "5",
      icon: icon5,
      title: "Webflow",
      text: "From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.",
      imageUrl: item1,
   },
   {
      id: "6",
      icon: icon6,
      title: "Custom Development",
      text: "From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.",
      imageUrl: "",
   },
]

const What = ({ className }) => {
   const title = useRef();

   useGSAP(() => {
      gsap.from(title.current, {
         delay: 1.7,
         yPercent: 100,
         duration: 0.5,
         opacity: 0,
      });

      gsap.from(document.querySelectorAll('.what-item'), {
         scrollTrigger: {
            trigger: "#what",
            start: "30% bottom",
         },
         duration: 1,
         opacity: 0,
         stagger: 0.1,
      });
   }, []);

   return (
      <section id="what" className={className}>
         <div className="cnt">
            <h2 ref={title} className="font-secondary font-bold text-6xl max-sm:text-5xl max-xs:text-4xl leading-[120%] mb-8">What We do</h2>
            <div className="grid grid-cols-4 grid-rows-2 gap-8 grid-flow-dense max-lg:gap-6 max-xs:gap-4 max-md:grid-cols-3 max-sm:grid-cols-2 max-xs:flex max-xs:flex-col">
               <WhatItem icon={items[0].icon} title={items[0].title} text={items[0].text} image={items[0].imageUrl} className="" />
               <WhatItem icon={items[1].icon} title={items[1].title} text={items[1].text} image={items[1].imageUrl} className="" />
               <WhatItem icon={items[2].icon} title={items[2].title} text={items[2].text} image={items[2].imageUrl} className="" />
               <WhatItem icon={items[3].icon} title={items[3].title} text={items[3].text} image={items[3].imageUrl} className="lg:row-span-2 flex flex-col max-lg:col-span-2 max-lg:gap-5 max-lg:flex-row max-lg:justify-between max-xs:flex-col" imageClass="rounded-[5px] overflow-hidden mt-auto w-full max-lg:h-full max-lg:min-w-[180px] " />
               <WhatItem icon={items[4].icon} title={items[4].title} text={items[4].text} image={items[4].imageUrl} className="col-span-2 flex gap-27 max-lg:gap-5 justify-between max-xs:flex-col" imageClass="min-w-[218px] max-lg:min-w-[180px]" />
               <WhatItem icon={items[5].icon} title={items[5].title} text={items[5].text} image={items[5].imageUrl} className="" />
            </div>
         </div>
      </section>
   )
};

export default What;
