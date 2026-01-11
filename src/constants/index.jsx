import { checkImage1, checkImage2, checkImage3 } from "@/assets/images";

export const navigation = [
   {
      id: '0',
      title: 'Home',
      current: true,
   },
   {
      id: '1',
      title: 'About',
      current: false,
   },
   {
      id: '2',
      title: 'How it Works',
      current: false,
   },
   {
      id: '3',
      title: 'Services',
      current: false,
   },
];

export const checkSliderItems = [
   {
      id: "1",
      imageUrl: checkImage1,
   },
   {
      id: "2",
      imageUrl: checkImage2,
   },
   {
      id: "3",
      imageUrl: checkImage3,
   },
]

export const faq = [
   {
      id: '1',
      question: "How can I contact Inkyy Team?",
      answer: (
         <>
            You can reach us through our contact form on our website or by emailing us at{' '}
            <span className="font-bold text-main">hello@inkyy.com</span>. We typically respond within 24 hours.
         </>
      ),
   },
   {
      id: '2',
      question: "What services do you offer?",
      answer: "We offer end-to-end web solutions including Webflow design and development, UI/UX design, responsive websites, CMS integration, website redesigns, SEO optimization, and performance improvements. We also help with branding and landing pages for marketing campaigns.",
   },
   {
      id: '3',
      question: "Do you provide website maintenance services?",
      answer: "Yes, we offer ongoing website maintenance and support. This includes content updates, bug fixes, performance optimization, and Webflow CMS assistance to ensure your website stays secure, fast, and up to date.",
   },
   {
      id: '4',
      question: "How long does it take to design and develop a website?",
      answer: "Project timelines depend on the scope and complexity of the website. On average, a standard website takes between 2 to 4 weeks from initial concept to launch. More complex projects may require additional time.",
   },
   {
      id: '5',
      question: "Do you require a deposit for projects?",
      answer: "Yes, we require an upfront deposit to begin the project. Typically, this is 30–50% of the total project cost, with the remaining balance due upon project completion.",
   },
]

