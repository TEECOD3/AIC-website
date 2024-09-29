"use client";

import { useState } from "react";

export default function Customtabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "overview",
      content:
        "On overview this Biomedical Engineering (Hons) from University of Dundee , you'll learn from engineers, scientists, and clinicians. This gives you a solid understanding of how engineering improves patient care.You'll apply engineering principles to solve challenges in the healthcare industry. For example, you may develop surgical devices, make improvements to medical instrumentation or discover new techniques in medical imaging.",
      boxes: ["image", "image2", "image3"],
    },
    {
      title: "requirement",
      content:
        "On requirement this Biomedical Engineering (Hons) from University of Dundee , you'll learn from engineers, scientists, and clinicians. This gives you a solid understanding of how engineering improves patient care.You'll apply engineering principles to solve challenges in the healthcare industry. For example, you may develop surgical devices, make improvements to medical instrumentation or discover new techniques in medical imaging.",
      boxes: ["image", "image2", "image3"],
    },
    {
      title: "course fee",
      content:
        "On course fee this Biomedical Engineering (Hons) from University of Dundee , you'll learn from engineers, scientists, and clinicians. This gives you a solid understanding of how engineering improves patient care.You'll apply engineering principles to solve challenges in the healthcare industry. For example, you may develop surgical devices, make improvements to medical instrumentation or discover new techniques in medical imaging.",
      boxes: ["image", "image2", "image3"],
    },
  ];

  return (
    <div className="w-full mt-10 lg:mt-16">
      <div className="relative mb-8">
        <div className="flex border-b border-gray-200">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`pb-2 px-4 mr-4 text-sm lg:text-base capitalize font-medium ${
                activeTab === index
                  ? "text-primary border-b-2 border-primary font-semibold"
                  : "text-muted-foreground hover:text-primary "
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-200" />
      </div>
      <div className="my-6">
        <p className="text-muted-foreground mb-4">{tabs[activeTab].content}</p>
        <div className="flex justify-between gap-10 no-visible-scrollbar overflow-x-auto">
          {tabs[activeTab].boxes.map((box, index) => (
            <div
              key={index}
              className="p-4 rounded-lg bg-black flex items-center justify-center h-[400px] min-w-[400px] text-white"
            >
              {box}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
