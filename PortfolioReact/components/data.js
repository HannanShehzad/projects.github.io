import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Highlights",
  desc: "Building Modern and Responsive Websites Customized Solutions for Your Business Fast and Efficient Development Process",
  image: benefitOneImg,
  bullets: [
    {
      title: "Fast and Efficient Development Process",
      desc: " Employing streamlined development methodologies for rapid project delivery.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Seamless User Experience",
      desc: " Crafting intuitive interfaces that provide users with a smooth and enjoyable browsing experience.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Cross-Browser Compatibility",
      desc: " Ensuring your website functions flawlessly across all major web browsers.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Benefits",
  desc: " ",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsiveness",
      desc: "Designing websites with a mobile-first mindset to cater to the increasing mobile user base.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "made with Next.js and tailwind ",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Web applications will comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
