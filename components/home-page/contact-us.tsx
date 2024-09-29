// "use client";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";

// export default function Component() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log("Form submitted:", { name, email, message });
//   };

//   return (
//     <div className="container mx-auto lg:!px-0  border-[2px] border-water-blue my-16">
//       <div className="grid grid-cols-1 md:grid-cols-2">
//         {/* Form Section */}
//         <div className="space-y-6 p-10">
//           <h2 className="text-2xl font-bold">Contact Us</h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label
//                 htmlFor="name"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Name
//               </label>
//               <Input
//                 id="name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Email
//               </label>
//               <Input
//                 id="email"
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="message"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Message
//               </label>
//               <Textarea
//                 id="message"
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="w-full justify-end flex">
//               <Button
//                 type="submit"
//                 variant="link"
//                 className="font-semibold text-water-blue underline "
//               >
//                 Send Message
//               </Button>
//             </div>
//           </form>
//         </div>

//         {/* FAQ Section */}
//         <div className="space-y-6 bg-water-blue text-white p-10">
//           <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
//           <p className="">
//             Find answers to our most commonly asked questions below. If you
//             can't find what you're looking for, please don't hesitate to contact
//             us using the form.
//           </p>
//           <Accordion type="single" collapsible className="w-full">
//             <AccordionItem value="item-1">
//               <AccordionTrigger>What services do you offer?</AccordionTrigger>
//               <AccordionContent>
//                 We offer a wide range of services including web development,
//                 mobile app development, UI/UX design, and digital marketing
//                 solutions.
//               </AccordionContent>
//             </AccordionItem>
//             <AccordionItem value="item-2">
//               <AccordionTrigger>
//                 How long does a typical project take?
//               </AccordionTrigger>
//               <AccordionContent>
//                 Project timelines vary depending on the scope and complexity. A
//                 simple website might take 2-4 weeks, while a complex web
//                 application could take several months.
//               </AccordionContent>
//             </AccordionItem>
//             <AccordionItem value="item-3">
//               <AccordionTrigger>
//                 Do you offer support after the project is completed?
//               </AccordionTrigger>
//               <AccordionContent>
//                 Yes, we offer ongoing support and maintenance packages to ensure
//                 your project continues to run smoothly after launch.
//               </AccordionContent>
//             </AccordionItem>
//           </Accordion>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from 'react'

function contact-us() {
  return (
    <div>contact-us</div>
  )
}

export default contact-us
