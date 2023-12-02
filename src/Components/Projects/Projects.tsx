import './projects.css';

export function Projects() {
  return (
    <section
      id='projects'
      className='min-h-screen flex justify-center items-center flex-col'
    >
      <h1 className='max-md:text-7xl max-md:mb-5 text-8xl mb-5 font-kaushan dark:text-white'>
        Buttons
      </h1>
      <div className=' mb-12 max-md:flex max-md:flex-wrap max-md:justify-center'>
        <button className='bg-primaryColor mt-4 dark:bg-darkPrimaryColor text-onPrimary dark:text-darkOnPrimary hover:brightness-125 mr-5'>
          Primary
        </button>
        <button className=' border-solid bg-secondaryColor dark:bg-darkSecondaryColor border-secondaryColor dark:border-darkSecondaryColor border-2 hover:bg-secondaryColor hover:dark:bg-darkSecondaryColor text-onPrimary dark:text-darkOnPrimary hover:brightness-125 max-md:mb-5 mr-5'>
          Secondary
        </button>
        <button
          className='opacity-50 cursor-default bg-primaryColor dark:bg-darkPrimaryColor text-onPrimary dark:text-darkOnPrimary hover:brightness-125 mr-5'
          disabled
        >
          Disabled
        </button>
        <button className='bg-background dark:bg-darkBackground text-onBackground dark:text-darkOnBackground hover:bg-primaryColor hover:dark:bg-darkPrimaryColor hover:text-onPrimary hover:dark:text-darkOnPrimary mr-5'>
          Outline
        </button>
        <button className='bg-background dark:bg-darkBackground text-onBackground dark:text-darkOnBackground border-2 border-secondaryColor dark:border-darkSecondaryColor hover:bg-secondaryColor dark:hover:bg-darkSecondaryColor hover:text-onPrimary dark:hover:text-darkOnPrimary mr-5'>
          Alt Outline
        </button>
        <button
          disabled
          className='opacity-50 cursor-default dark:hover:bg-darkPrimaryColor dark:text-darkOnBackground dark:hover:text-darkOnPrimary mr-5'
        >
          Disabled
        </button>
      </div>
      <div className='w-2/5 text-justify bg-black/50 text-onPrimary dark:bg-white/50 dark:text-darkOnPrimary rounded-xl p-8 max-md:p-3 max-md:w-11/12'>
        <p className='m-0 leading-6'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          impedit, labore culpa nemo reiciendis adipisci eligendi dolorem cum
          perspiciatis numquam? Autem aliquam explicabo excepturi expedita
          minima! Tempore laborum odit exercitationem?
        </p>
      </div>
    </section>
  );
}
