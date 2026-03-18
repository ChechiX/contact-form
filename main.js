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

    contactForm.reset();
  }

  if (!firstName) {
    document.getElementById('firstName').setAttribute('aria-invalid', 'true');
  }

  if (!lastName) {
    document.getElementById('lastName').setAttribute('aria-invalid', 'true');
  }

  if (!email) {
    document.getElementById('email').setAttribute('aria-invalid', 'true');
  }

  if (!queryType) {
    document.querySelectorAll('input[name="queryType"]').forEach((input) => {
      input.setAttribute('aria-invalid', 'true');
    });
  }

  if (!message) {
    document.getElementById('message').setAttribute('aria-invalid', 'true');
  }

  if (!consent) {
    document.getElementById('consent').setAttribute('aria-invalid', 'true');
  }
});
