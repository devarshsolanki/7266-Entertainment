import React, { useEffect, useRef } from 'react';

const Gear = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          } else {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(20px)';
          }
        });
      },
      { threshold: 0.3 }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const gearData = [
    {
      title: 'Sound System',
      items: [
        'Parasource 4400 watt peak 12-inch+horn active PA speakers.',
        'Parasource 2400 watt peak 1×18 inch active subwoofers.',
        'Wired and wireless microphones.',
      ],
      img: 'img3.png',
    },
    {
      title: 'Lightning',
      items: [
        '380 watt moving head lights.',
        'Up lights.',
        'Par lights.',
        'Strobe lights.',
      ],
      img: 'Lightning.jpg',
    },
    {
      title: 'DJ Booths',
      items: ['12ft * 5ft DJ booth.', '9ft * 5ft DJ booth.'],
      img: 'img1.png',
    },
    {
      title: 'Dance Floor',
      items: ['16ft*16ft 3d infinity mirror led dance floor.'],
      img: './Dance Floor.jpg',
    },
    {
      title: 'Cold Sparkles',
      items: ['Cold sparkler firework machines.'],
      img: 'Cold Sparkles.jpg',
    },
    {
      title: 'Low Laying Fog',
      items: ['Dry ice low lying fog machine.'],
      img: 'Low_Laying_Fog.jpg',
    },
    {
      title: 'C02 Gun',
      items: ['Special effect handheld led co2 gun with lights.'],
      img: 'C02 Gun.jpg',
    },
    {
      title: '360 Photo-booth',
      items: ['360 spinning remote control photo-booth.'],
      img: './Photo-booth.jpg',
    },
    {
      title: 'Projector Screens',
      items: ['Led and projector screens.'],
      img: 'progectur.webp',
    },
    {
      title: 'Stage',
      items: [
        '2ft High Stage.',
        'Different sizes available, 4ft by 4ft panels.',
      ],
      img:'/stage.jpg',
    },
  ];

  return (
    <div className="p-6  bg-[#1a1244] text-[#FBE4D6] h-full" id="gear">
      <h1 className="text-3xl sm:text-5xl font-bold text-center mb-6 sm:mb-10 text-[#A86523]">Gear</h1>
      <p className="text-base  sm:text-xl md:text-left text-justify mb-6">
        With our meticulously curated selection of sound and lighting gear, we empower you to turn any event into a masterpiece of sound and sight. 
        From state-of-the-art sound systems to dazzling lighting effects, we provide everything you need to create unforgettable moments. 
        Explore our range of premium equipment designed to elevate your events to the next level.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {gearData.map((category, index) => (
          <div
            key={index}
            ref={(el) => (sectionRefs.current[index] = el)}
            className="opacity-0 transform translate-y-20 transition-all duration-700 bg-[#2a1b5b] rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={category.img}
              alt={category.title}
              className="w-full h-50 sm:h-48 object-cover transform scale-95 hover:scale-100 transition-transform duration-500"
            />
            <div className="p-4">
              <h2 className="text-lg sm:text-2xl font-semibold mb-2">{category.title}</h2>
              <ul className="list-disc pl-4 sm:pl-6 space-y-1">
                {category.items.map((item, idx) => (
                  <li key={idx} className="text-sm sm:text-lg">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gear;
