import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "What services do you offer as a React.js developer?",
    answer: " As a React.js developer, I offer a range of services including website development, web application development, UI/UX design, component development, code optimization, and third-party API integration. I specialize in creating modern and responsive websites using React.js as the primary framework.",
  },
  {
    question: "Can you assist with ongoing maintenance and updates after the website is launched?",
    answer: "Yes, I  can.",
  },
  {
    question: "How experienced are you in React.js development?",
    answer:
      "I have several years of experience in React.js development. I have worked on numerous projects, ranging from small-scale websites to large-scale web applications, allowing me to gain a deep understanding of React.js and its ecosystem. My experience enables me to provide efficient and high-quality solutions to clients",
  },
  {
    question: "Do you offer technical support? ",
    answer:
      "Yes, I provide post-launch support and assistance to address any issues or concerns that may arise after the website is launched. I offer a warranty period during which I resolve any bugs or errors that occur as a result of the development process. Additionally, I am available for ongoing support, updates, and maintenance to ensure the long-term success of your website.",
  },
];

export default Faq;