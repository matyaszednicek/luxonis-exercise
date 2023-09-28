export const scrollToNav = () => {
  const navElement = document.getElementById('navbar');
  if (navElement) navElement.scrollIntoView({ behavior: 'smooth' });
};
