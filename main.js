const toast = document.getElementById('toast');
const contactForm = document.getElementById('contactForm');
const firstNameError = document.getElementById('firstNameError');
const lastNameError = document.getElementById('lastNameError');
const emailError = document.getElementById('emailError');
const queryTypeError = document.getElementById('queryTypeError');
const messageError = document.getElementById('messageError');
const consentError = document.getElementById('consentError');
const inputs = contactForm.querySelectorAll('.card__field-input');
const textarea = document.getElementById('message');
const radioInputs = contactForm.querySelectorAll('input[name="queryType"]');
const consentInput = document.getElementById('consent');

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

    firstNameError.classList.add('card__field-error--visible');
    inputs[0].classList.add('card__field-input--error');
  }

  if (!lastName) {
    document.getElementById('lastName').setAttribute('aria-invalid', 'true');

    lastNameError.classList.add('card__field-error--visible');
    inputs[1].classList.add('card__field-input--error');
  }

  if (!email) {
    document.getElementById('email').setAttribute('aria-invalid', 'true');

    emailError.classList.add('card__field-error--visible');
    inputs[2].classList.add('card__field-input--error');
  }

  if (!queryType) {
    document.querySelectorAll('input[name="queryType"]').forEach((input) => {
      input.setAttribute('aria-invalid', 'true');
    });

    queryTypeError.classList.add('card__field-error--visible');
  }

  if (!message) {
    document.getElementById('message').setAttribute('aria-invalid', 'true');

    messageError.classList.add('card__field-error--visible');
    textarea.classList.add('card__field-input--error');
  }

  if (!consent) {
    document.getElementById('consent').setAttribute('aria-invalid', 'true');

    consentError.classList.add('card__field-error--visible');
  }
});

inputs.forEach((input) => {
  input.addEventListener('input', () => {
    if (input.value) {
      input.setAttribute('aria-invalid', 'false');
      input.classList.remove('card__field-input--error');

      const errorElement = document.getElementById(`${input.id}Error`);

      if (errorElement) {
        errorElement.classList.remove('card__field-error--visible');
      }
    }
  });
});

radioInputs.forEach((input) => {
  input.addEventListener('change', () => {
    if (input.checked) {
      queryTypeError.classList.remove('card__field-error--visible');
    }
  });
});

textarea.addEventListener('input', () => {
  if (textarea.value) {
    textarea.setAttribute('aria-invalid', 'false');
    textarea.classList.remove('card__field-input--error');
    messageError.classList.remove('card__field-error--visible');
  }
});

consentInput.addEventListener('change', () => {
  if (consentInput.checked) {
    consentInput.setAttribute('aria-invalid', 'false');
    consentError.classList.remove('card__field-error--visible');
  }
});
