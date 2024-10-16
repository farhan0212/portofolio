function Hero() {
  const handelWhatsappClick = () => {
    const number = "085157542121";
    const text = "Hello! I found your contact on your website.";

    const url = `https://api.whatsapp.com/send?phone=${number}&text=${encodeURIComponent(
      text
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="mt-4">
      <h1 className="font-hero text-4xl mb-4 ">Hello, I'm Farhan</h1>
      <h2 className="font-sora text-4xl font-semibold">
        Software Engineer & Web Developer
      </h2>
      <p className="text-lg text-gray-600 mt-4 w-3/4 mb-4">
        I am a passionate software engineer with a background in computer
        science and a strong foundation in web development. I love make
        something perfectly
      </p>
      <div className="flex items-center gap-4">
        <a
          target="_blank"
          href="https://drive.google.com/file/d/19ACvJpD2fINMqzXi1ibmZ-6d_vKTNnHk/view?usp=sharing">
          <button className="md:px-4 px-3 md:py-2 py-2 text-white bg-gray-600 active:bg-primary-dark-700 border border-primary-dark-600 rounded-md flex items-center md:gap-2 gap-1 transition-all duration-200 ease-out w-fit disabled:cursor-not-allowed disabled:opacity-50">
            <p className="md:text-base text-xs">View Resume</p>
            <img
              alt="View Resume"
              loading="lazy"
              width="24"
              height="24"
              decoding="async"
              data-nimg="1"
              className="md:w-6 w-5 md:h-6 h-5"
              src="/src/assets/ic_arrow_down.svg"
            />
          </button>
        </a>
        <a href="https://github.com/farhan0212" target="_blank" className="">
          <img src="/src/assets/github-mark.svg" className="w-12" alt="" />
        </a>
        <a href="mailto:farhan.ramadan0212@gmail.com" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-mail">
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>{" "}
        </a>
        <button onClick={handelWhatsappClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-message-circle-plus">
            <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
            <path d="M8 12h8" />
            <path d="M12 8v8" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Hero;
