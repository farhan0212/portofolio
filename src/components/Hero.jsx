import PropTypes from "prop-types";

import {
  Mail,
  MessageCirclePlus,
  ArrowDownToLine,
  GitBranch,
} from "lucide-react";
import { useEffect } from "react";
import Aos from "aos";

const Hero = () => {
  const handleWhatsAppClick = () => {
    const number = "085157542121";
    const text = "Hello! I found your contact on your website.";
    const url = `https://api.whatsapp.com/send?phone=${number}&text=${encodeURIComponent(
      text
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const SocialLink = ({ href, icon, label }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 hover:bg-gray-100 rounded-full hover:scale-125 duration-300"
      aria-label={label}>
      {icon}
    </a>
  );
  SocialLink.propTypes = {
    href: PropTypes.string,
    icon: PropTypes.element.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
  };

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="mt-4 max-w-4xl">
      <h1
        className="font-hero text-4xl mb-4"
        data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="500">
        Hello, I'm Farhan
      </h1>
      <h2 className="font-sora text-4xl font-semibold">
        Software Engineer & Web Developer
      </h2>
      <p className="text-lg text-gray-600 mt-4 mb-4" data-aos="zoom-in">
        I am a passionate software engineer with a background in computer
        science and a strong foundation in web development. I love making things
        perfect.
      </p>
      <div className="flex items-center gap-4 flex-wrap">
        <a
          href="https://drive.google.com/file/d/19ACvJpD2fINMqzXi1ibmZ-6d_vKTNnHk/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 text-white bg-gray-600 hover:bg-gray-700 active:bg-gray-800 rounded-md transition-colors duration-200">
          <span className="text-base">View Resume</span>
          <ArrowDownToLine size={32} />
        </a>
        <SocialLink
          href="https://github.com/farhan0212"
          icon={<GitBranch size={32} />}
          label="GitHub"
        />
        <SocialLink
          href="mailto:farhan.ramadan0212@gmail.com"
          icon={<Mail size={32} />}
          label="Email"
        />
        <SocialLink
          onClick={handleWhatsAppClick}
          label="Whatsapp"
          icon={<MessageCirclePlus size={32} />}
        />
      </div>
    </div>
  );
};

export default Hero;
