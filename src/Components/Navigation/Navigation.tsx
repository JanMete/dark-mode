import { Link } from 'react-scroll';
import { Switch } from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { themeState } from '../../Interfaces/ThemeStateInterface';
import './navigation.css';

export function Navigation({ theme, handleThemeSwitch }: themeState) {
  const switchClickHandler = () => {
    handleThemeSwitch((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <nav className=' fixed text-2xl z-10 p-6 w-screen bg-white/50 dark:bg-black/50 font-oswald navigation max-md:text-lg '>
      <ul className='flex '>
        <li className='cursor-pointer '>
          <Link to='home' spy={true} smooth={true} offset={0} duration={500}>
            HOME
          </Link>
        </li>
        <li className='cursor-pointer'>
          <Link to='about' spy={true} smooth={true} offset={-80} duration={500}>
            ABOUT
          </Link>
        </li>
        <li className='cursor-pointer'>
          <Link
            to='projects'
            spy={true}
            smooth={true}
            offset={20}
            duration={500}
          >
            PROJECTS
          </Link>
        </li>
        <li className='cursor-pointer'>
          <Link
            to='contact'
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            CONTACT
          </Link>
        </li>
        <li className='ml-auto mr-2'>
          <Switch
            defaultSelected={theme === 'dark'}
            onClick={switchClickHandler}
            size='lg'
            color='secondary'
            thumbIcon={({ isSelected }) =>
              isSelected ? (
                <FontAwesomeIcon icon={faSun} style={{ color: '#000000' }} />
              ) : (
                <FontAwesomeIcon icon={faMoon} style={{ color: '#000000' }} />
              )
            }
          />
        </li>
      </ul>
    </nav>
  );
}
