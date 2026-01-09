const WhatItem = ({ icon, title, text, image, className, imageClass }) => {
   return (
      <div className={`${className} rounded-[10px] bg-[linear-gradient(137deg,#fff_0%,#fff_100%)] px-5 pt-5 pb-4.5`}>
         <div>
            <div className="w-11 h-11 flex items-center justify-center bg-[#f5f8ff] rounded-[9px] mb-4.5">
               <img src={icon} alt="icon" />
            </div>
            <h3 className="font-semibold text-[19px] leading-[120%] mb-4.5">{title}</h3>
            <div className="text-[14px] leading-[170%] text-gray">
               <p>{text}</p>
            </div>
         </div>
         
         {image && (
            <div className={imageClass}>
               <img className="w-full h-full object-cover" src={image} alt="image" />
            </div>
         )}
      </div>
   )
};

export default WhatItem;
