import styles from './about.module.css';
import UNDRAW_PROUD_CODER_LIGHT_ICON from '../../assets/undraw_proud_coder_light.svg';
import UNDRAW_FEELING_PROD_LIGHT_ICON from '../../assets/undraw_feeling_proud_light.svg';
import UNDRAW_CONCEPTUAL_IDEA_LIGHT_ICON from '../../assets/undraw_conceptual_idea_light.svg';

import UNDRAW_PROUD_CODER_DARK_ICON from '../../assets/undraw_proud_coder_dark.svg';
import UNDRAW_FEELING_PROD_DARK_ICON from '../../assets/undraw_feeling_proud_dark.svg';
import UNDRAW_CONCEPTUAL_IDEA_DARK_ICON from '../../assets/undraw_conceptual_idea_dark.svg';

export function About({ theme }: { theme: string }) {
  return (
    <section
      id='about'
      className='max-md:flex mb-16 min-h-screen flex justify-center items-center flex-col '
    >
      <h1 className='max-md:text-6xl text-center text-8xl mb-0 font-kaushan dark:text-white'>
        Undraw Illustrations
      </h1>
      <div className='flex mt-7 max-md:flex-col max-md:gap-7'>
        <div className={styles.imageContainer}>
          <h2>Web Innovation</h2>
          <img
            src={
              theme === 'dark'
                ? UNDRAW_PROUD_CODER_DARK_ICON
                : UNDRAW_PROUD_CODER_LIGHT_ICON
            }
            alt='Imgae of proud coder'
          />
        </div>
        <div className={styles.imageContainer}>
          <h2>Problem Solving</h2>
          <img
            src={
              theme === 'dark'
                ? UNDRAW_FEELING_PROD_DARK_ICON
                : UNDRAW_FEELING_PROD_LIGHT_ICON
            }
            alt='Imgae of proud coder'
          />
        </div>
        <div className={styles.imageContainer}>
          <h2>Web Innovation</h2>
          <img
            src={
              theme === 'dark'
                ? UNDRAW_CONCEPTUAL_IDEA_DARK_ICON
                : UNDRAW_CONCEPTUAL_IDEA_LIGHT_ICON
            }
            alt='Imgae of proud coder'
          />
        </div>
      </div>
    </section>
  );
}
