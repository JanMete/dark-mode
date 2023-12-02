import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

export function Contact({ theme }: { theme: string }) {
  const [isHovered, setIsHovered] = useState([false, false, false]);

  function handleHover(index: number) {
    const currentIsHovered = [...isHovered];
    currentIsHovered[index] = !currentIsHovered[index];
    setIsHovered(currentIsHovered);
  }

  function changeColor(index: number) {
    const baseColor = theme === 'dark' ? 'rgb(150, 65, 255)' : '#ff5c5c';
    const hoverColor = theme === 'dark' ? 'white' : 'black';

    return isHovered[index] ? hoverColor : baseColor;
  }

  return (
    <section
      id='contact'
      className='min-h-screen flex justify-center items-center flex-col'
    >
      <div className='flex gap-16 max-md:flex-col max-md:items-center'>
        <a href='https://github.com/JanMete' target='_blank'>
          <FontAwesomeIcon
            icon={faGithub}
            style={{ color: changeColor(0) }}
            className='hover:cursor-pointer mobileButton'
            size='8x'
            onMouseEnter={() => handleHover(0)}
            onMouseLeave={() => handleHover(0)}
          />
        </a>
        <a
          href='https://www.linkedin.com/in/jan-metela%C5%84ski-746427212/'
          target='_blank'
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className='hover:cursor-pointer mobileButton'
            style={{ color: changeColor(1) }}
            size='8x'
            onMouseEnter={() => handleHover(1)}
            onMouseLeave={() => handleHover(1)}
          />
        </a>
        <a href='https://www.instagram.com/jasiekm_/' target='_blank'>
          <FontAwesomeIcon
            className='hover:cursor-pointer mobileButton'
            icon={faInstagram}
            style={{ color: changeColor(2) }}
            size='8x'
            onMouseEnter={() => handleHover(2)}
            onMouseLeave={() => handleHover(2)}
          />
        </a>
      </div>
    </section>
  );
}
