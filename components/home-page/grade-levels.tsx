"use client";

import { Check } from "lucide-react";
import { useState } from "react";

const steps = [
  {
    title: "NUSERY",
    content:
      "Early Years Foundation stage comprises Nursery 1, Nursery2 and Reception classes, starting at age 3. Here, learning is completely experiential in abeautifully equipped, technological and resource-filled environment",
  },
  {
    title: "PRIMARY",
    content:
      "Early Years Foundation stage comprises Nursery 1, Nursery2 and Reception classes, starting at age 3. Here, learning is completely experiential in abeautifully equipped, technological and resource-filled environment",
  },
  {
    title: "SECONDARY",
    content:
      "Early Years Foundation stage comprises Nursery 1, Nursery2 and Reception classes, starting at age 3. Here, learning is completely experiential in abeautifully equipped, technological and resource-filled environment",
  },
  {
    title: "ADULTS AND CHILDREN",
    content:
      "Early Years Foundation stage comprises Nursery 1, Nursery2 and Reception classes, starting at age 3. Here, learning is completely experiential in abeautifully equipped, technological and resource-filled environment",
  },
];

export default function GradeLevels() {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([1]);

  const handleStepClick = (stepNumber: number) => {
    setCurrentStep(stepNumber);
    if (stepNumber < currentStep) {
      setCompletedSteps((prev) => prev.filter((step) => step <= stepNumber));
    } else {
      setCompletedSteps((prev) =>
        prev.includes(stepNumber) ? prev : [...prev, stepNumber]
      );
    }
  };

  const isStepCompleted = (stepNumber: number) => {
    return completedSteps.includes(stepNumber);
  };

  return (
    <div className="container mx-auto py-16  lg:py-24">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/4">
          <div className="space-y-4 mb-4">
            <p className="font-semibold text-2xl lg:text-3xl ">Grade levels</p>
            <p className="">
              These modules are an essential part of your course.
            </p>
          </div>

          <div className="flex max-lg:justify-between w-full  md:flex-col gap-y-10 lg:mt-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col gap-y-8  items-center md:flex-row md:items-center mb-8 last:mb-0 relative"
              >
                <div className="flex gap-x-3 items-center flex-col lg:flex-row">
                  <button
                    onClick={() => handleStepClick(index + 1)}
                    className={`
                    w-8 h-8 rounded-full border-2 flex items-center justify-center
                    ${
                      isStepCompleted(index + 1)
                        ? "bg-green-500 border-green-500 text-white"
                        : "border-gray-300 text-gray-300"
                    }
                    hover:bg-green-100 transition-colors duration-200
                  `}
                  >
                    {isStepCompleted(index + 1) ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <Check className="w-5 h-5" />
                    )}
                  </button>

                  <span
                    className={`hidden lg:block ${
                      isStepCompleted(index + 1)
                        ? "font-semibold"
                        : "text-muted-foreground text-[8px] lg:text-base"
                    }`}
                  >
                    {step.title}
                  </span>
                </div>

                {index < steps.length - 1 && (
                  <div
                    className={`
                    hidden md:block absolute left-4 w-0.5 h-16 -bottom-16
                    ${
                      isStepCompleted(index + 2)
                        ? "bg-green-500"
                        : "bg-gray-300"
                    }
                  `}
                  />
                )}
                {index < steps.length - 1 && (
                  <div
                    className={`
                    md:hidden absolute top-4 h-0.5 w-12 -right-12
                    ${
                      isStepCompleted(index + 2)
                        ? "bg-green-500"
                        : "bg-gray-300"
                    }
                  `}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-3/4">
          <h2 className="text-2xl font-bold mb-4">
            {steps[currentStep - 1].title}
          </h2>
          <div className="bg-merino p-4 lg:p-16 rounded-lg shadow-md mb-4 mt-8">
            <p>{steps[currentStep - 1].content}</p>
            <div className=" h-[400px] lg:h-[500px] w-full bg-black mt-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
