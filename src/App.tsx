import { About } from './Components/About/About';
import { Contact } from './Components/Contact/Contact';
import { Home } from './Components/Home/Home';
import { Navigation } from './Components/Navigation/Navigation';
import { Projects } from './Components/Projects/Projects';
import { useState, useEffect } from 'react';

function App() {
  const savedTheme = localStorage.getItem('theme');
  const [theme, setTheme] = useState(savedTheme || '');

  useEffect(() => {
    if (
      !savedTheme &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      setTheme('dark');
    }
  }, [savedTheme]);

  useEffect(() => {
    localStorage.setItem('theme', theme);

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#121212';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = 'white';
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      <Navigation theme={theme} handleThemeSwitch={handleThemeSwitch} />
      <Home />
      <About theme={theme} />
      <Projects />
      <Contact theme={theme} />
    </>
  );
}

export default App;
