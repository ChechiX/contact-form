const toast = document.getElementById('toast');
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const { firstName, lastName, email, queryType, message, consent } =
    Object.fromEntries(new FormData(contactForm).entries());

  console.log({ firstName, lastName, email, queryType, message, consent });

  if (firstName && lastName && email && queryType && message && consent) {
    toast.classList.add('toast--visible');

    setTimeout(() => {
      toast.classList.remove('toast--visible');
    }, 3000);
  }
});
