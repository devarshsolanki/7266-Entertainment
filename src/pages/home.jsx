import React, { useEffect, useRef } from 'react';

const Home = () => {
  const photoRefs = useRef([]);
  const buttonRefs = useRef([]);
  const infoRef = useRef(null);

  const imageData = [
    { src: './img1.png', text: 'DJ Booth + 4 Moving Head Lights' },
    { src: './img2.png', text: '16*16 FT LED Dance Floor' },
    { src: './img3.png', text: 'DJ Setup' },
  ];

  useEffect(() => {
    photoRefs.current.forEach((photoRef) => {
      if (photoRef) {
        photoRef.style.transform = 'perspective(1000px) rotateY(180deg)';
        photoRef.style.opacity = '0';
        photoRef.style.transition = 'all 1.5s cubic-bezier(0.4,0,0.2,1)';
      }
    });

    buttonRefs.current.forEach((buttonRef) => {
      if (buttonRef) {
        buttonRef.style.opacity = '0';
        buttonRef.style.transform = 'translateY(20px)';
        buttonRef.style.transition = 'all 1s ease-in-out';
      }
    });

    if (infoRef.current) {
      infoRef.current.style.transform = 'translateY(40px)';
      infoRef.current.style.opacity = '0';
      infoRef.current.style.transition = 'all 1s cubic-bezier(0.4,0,0.2,1) 0.5s';
    }

    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          photoRefs.current.forEach((photoRef, index) => {
            if (entry.target === photoRef) {
              if (entry.isIntersecting) {
                photoRef.style.transform = 'perspective(1000px) rotateY(0deg)';
                photoRef.style.opacity = '1';
                if (buttonRefs.current[index]) {
                  buttonRefs.current[index].style.opacity = '1';
                  buttonRefs.current[index].style.transform = 'translateY(0)';
                }
              } else {
                photoRef.style.transform = 'perspective(1000px) rotateY(180deg)';
                photoRef.style.opacity = '0';
                if (buttonRefs.current[index]) {
                  buttonRefs.current[index].style.opacity = '0';
                  buttonRefs.current[index].style.transform = 'translateY(20px)';
                }
              }
            }
          });

          if (entry.target === infoRef.current) {
            if (entry.isIntersecting) {
              infoRef.current.style.transform = 'translateY(0)';
              infoRef.current.style.opacity = '1';
            } else {
              infoRef.current.style.transform = 'translateY(40px)';
              infoRef.current.style.opacity = '0';
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    photoRefs.current.forEach((photoRef) => {
      if (photoRef) observer.observe(photoRef);
    });
    if (infoRef.current) observer.observe(infoRef.current);

    return () => {
      photoRefs.current.forEach((photoRef) => {
        if (photoRef) observer.unobserve(photoRef);
      });
      if (infoRef.current) observer.unobserve(infoRef.current);
    };
  }, []);

  return (
    <div className="flex flex-col items-center p-5 sm:p-20 bg-[#1a1244]">
      {/* Company Information Section */}
      <section className="text-left sm:text-center">
        <h1 className="text-3xl sm:text-5xl font-bold mt-4 text-[#A86523]">
          7266 Entertainment Solutions
        </h1>
        <p className="text-lg sm:text-2xl text-[#eeebeb] pt-5 sm:pt-10 text-justify sm:pl-10 sm:pr-10">
          Welcome to 7266 Entertainment Solutions, situated in Winnipeg, MB, Canada.
        </p>
        <p className="text-lg sm:text-2xl text-[#eeebeb] pt-5 text-justify sm:pl-20 sm:pr-20">
          With a passion for music and a flair for lighting design, we offer entertainment that sets the stage for moments you’ll cherish forever.
        </p>
      </section>

      {/* Images Section */}
      <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-5 pt-10 sm:pt-20">
        {imageData.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              ref={(el) => (photoRefs.current[index] = el)}
              src={item.src}
              alt={item.text}
              className="rounded-2xl shadow-2xl w-full sm:w-80 h-50 object-cover"
            />
            <button
              ref={(el) => (buttonRefs.current[index] = el)}
              className="mt-4 px-4 py-2 text-[#ffffff] font-bold rounded hover:bg-[#e0c4b0] transition-all"
            >
              {item.text}
            </button>
          </div>
        ))}
      </div>

      {/* Additional Information Section */}
      <div className="text-left sm:text-center pt-10 w-full">
        <h5 className="text-lg sm:text-xl text-[#eeebeb] text-justify pt-5 sm:pl-30 sm:pr-25">
          We understand the role that music and lighting play in creating the perfect atmosphere for any occasion. Whether you’re planning a wedding, corporate event, or birthday party, we ensure a seamless and sensational experience from start to finish.
        </h5>
        <p className="text-lg sm:text-xl text-[#eeebeb] text-justify pt-5 sm:pl-30 sm:pr-25">
          From DJ to mesmerizing lighting effects, we have everything you need to make your events shine. Located in Winnipeg, Manitoba.
        </p>
        <p className="text-lg sm:text-xl text-[#eeebeb] text-justify pt-5 sm:pl-30 sm:pr-25">
          Let us elevate your event to new heights and turn your vision into reality.
        </p>
      </div>
    </div>
  );
};

export default Home;