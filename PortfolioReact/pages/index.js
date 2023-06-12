import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

const Home = () => {
  return (
    <>
      <Head>
        <title>My portfolio</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Hi there"
        title=" Why should you Hire me?">
        You should hire me because I bring extensive experience as a ReactJS developer, a strong problem-solving ability, and a dedication to delivering high-quality solutions that enhance user experiences.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs">
        Stay up to date with the latest trends in web development by watching our videos on emerging technologies, such as serverless computing, GraphQL, and Progressive Web Apps (PWAs). Discover how these technologies can revolutionize the way you build and deploy web applications.
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what my customers said">
        I pride myselves on delivering exceptional services and solutions to my clients. But don't just take my word for it. Here are some testimonials from my satisfied clients who have experienced the difference mu expertise and dedication can make:
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;