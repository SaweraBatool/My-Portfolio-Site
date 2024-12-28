import React from 'react';
import Image from 'next/image';

interface PropsType {
  title: string;
  desc: string;
  img: string;
  tags: string[];
}

const Card: React.FC<PropsType> = ({ title, desc, img, tags }) => {
  return (
    <div
      className="border border-neutral-600 w-[280px] sm:w-[350px] rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
      data-aos="flip-down"
    >
      <div>
        <Image
          className="w-full h-auto object-cover rounded-t-lg"
          src={img}
          width={350}
          height={350}
          alt={title}
        />
      </div>

      <div className="p-4 space-y-4">
        <h3 className="text-2xl sm:text-3xl font-light">{title}</h3>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{desc}</p>
        
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((el) => (
            <span className="text-xs bg-neutral-200 text-neutral-700 px-2 py-1 rounded-full" key={el}>
              {el}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
