import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';

const SlideDown = ({ isOpen, children }) => {
   return (
      <AnimatePresence initial={false}>
         {isOpen && (
            <motion.div
               initial={{ height: 0, opacity: 0 }}
               animate={{ height: 'auto', opacity: 1 }}
               exit={{ height: 0, opacity: 0 }}
               transition={{ duration: 0.35, ease: 'easeInOut' }}
               style={{ overflow: 'hidden' }}
            >
               {children}
            </motion.div>
         )}
      </AnimatePresence>
   );
};

const FaqItem = ({ item, activeId, changeActiveId }) => {
   const active = activeId === item.id;

   return (
      <div
         className={`faq-item relative z-2 mb-4 max-sm:mb-3 max-xs:mb-2 pt-6 pb-5 bg-white rounded-[10px]`}
      >
         <div
            className="group relative flex cursor-pointer items-center justify-between gap-10 max-sm2:gap-6 px-7.5 max-xs:px-5 max-xs:pr-7.5"
            onClick={() => {
               changeActiveId(activeId === item.id ? null : item.id);
            }}
         >
            <div className="flex-1 flex gap-6.5 items-center">
               <div className="font-bold text-[18px] leading-[120%]">
                  {item.question}
               </div>
            </div>
            <div
               className={clsx(
                  'faq-icon relative transition-all duration-500 flex items-center',
                  active && 'before:rotate-90'
               )}
            >
               <div className="g4 size-11/12 rounded-full shadow-300" />
            </div>
         </div>
         <SlideDown isOpen={activeId === item.id}>
            <div className="pt-5.75 px-7.5 max-xs:pl-5 max-xs:pr-7.5">
               <p className="text-gray leading-[150%]">
                  {item.answer}
               </p>
            </div>
         </SlideDown>
      </div>
   );
};

export default FaqItem;