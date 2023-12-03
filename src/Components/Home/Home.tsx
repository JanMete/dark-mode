export function Home() {
  return (
    <section
      id='home'
      className='min-h-screen flex justify-center items-center flex-col'
    >
      <div className='text-center'>
        <h1 className='max-md:text-6xl text-9xl mb-5 font-kaushan dark:text-white'>
          Dark Mode
        </h1>
        <h2 className='max-md:text-xl text-2xl font-normal text-onBackgroundAlt dark:text-darkOnBackgroundAlt'>
          Click the button in the top right corner to change the theme!
        </h2>
      </div>
    </section>
  );
}
