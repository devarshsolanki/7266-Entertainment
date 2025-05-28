import React from 'react';

const Packages = () => {
  const packagesData = [
    {
      title: 'Silver Package',
      price: '$600',
      description:
        'Ideal for intimate gatherings and small-scale events, our Silver Package provides everything you need to get the party started. With a selection of essential DJ gear and lighting options.',
      features: [
        'Sound for 50-100 people.',
        'DJ booth.',
        '6 Par lights.',
        'Fog Machine.',
        'Wireless Microphones.',
        'Professional DJ Player.',
        'DMX Controlled Lights.',
      ],
      innerCard: {
        gradient: 'bg-gradient-to-tr from-[#6FE6FC] to-blue-800',
        text: 'Silver Package - $600\nEvent within your budget.',
      },
    },
    {
      title: 'Gold Package',
      price: '$1150',
      description:
        'Elevate your event to the next level with our Gold Package. Designed for mid-sized venues and events, this package offers Up-lights, bigger DJ booth with Moving head lights. Guaranteeing an electrifying atmosphere.',
      features: [
        'Everything in Silver Package.',
        'Sound for 200+ People.',
        '4 Moving Wash Lights.',
        '30 Up-lights.',
      ],
      innerCard: {
        gradient: 'bg-gradient-to-tr from-[#FCF259] to-yellow-500',
        text: 'Gold Package - $1150\nElevate your wedding or corporate event to the next level with our Gold package.',
      },
    },
    {
      title: 'Diamond Package',
      price: '$2500',
      description:
        'For those seeking the ultimate, our Diamond Package pulls out all the stops. Featuring Led dance floor and special effects. Perfect for weddings and high-profile events where only the best will suffice.',
      features: [
        'Everything in Gold Package.',
        'Sound for 300+ people.',
        '4 Moving head beam lights on totems.',
        '16ft*16ft 3D infinity mirror LED dance floor.',
        '4 * Remote control 650W cold sparkler firework machine for special moments.',
        '3500W dry ice low lying fog machine for first dance.',
      ],
      innerCard: {
        gradient: 'bg-gradient-to-tr from-[#6FE6FC] to-[#90C67C]',
        text: 'Diamond Package - $2500\nMake your special day SPECIAL.',
      },
    },
  ];

  return (
    <div className="p-6 pt-20 md:p-20 bg-[#1a1244] text-[#FBE4D6]" id="packages">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-6 md:mb-10 text-[#A86523]">
        Packages
      </h1>
      <p className="text-lg md:text-xl text-center mb-6 md:mb-10">
        Explore our tailored packages designed to make your events unforgettable.
      </p>
      <div className="flex flex-col gap-6 md:gap-8">
        {packagesData.map((pkg, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center bg-[#2a1b5b] rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
          >
            {/* Left Side: Fixed Card */}
            <div
              className={`w-full md:w-85 h-48 md:h-64 flex items-center justify-center rounded-t-lg md:rounded-l-lg md:rounded-tr-none text-center text-white ${pkg.innerCard.gradient} shadow-md`}
            >
              <p className="text-lg md:text-xl font-bold whitespace-pre-line px-4">
                {pkg.innerCard.text}
              </p>
            </div>
            {/* Right Side: Package Details */}
            <div className="flex-1 p-4 md:p-6">
              <h2 className="text-2xl md:text-3xl font-bold text-[#FBE4D6] mb-3 md:mb-4">
                {pkg.title}
              </h2>
              <p className="text-base md:text-lg text-justify mb-3 md:mb-4">
                {pkg.description}
              </p>
              <ul className="list-disc pl-5 space-y-2">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="text-sm md:text-lg">
                    {feature}
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

export default Packages;
