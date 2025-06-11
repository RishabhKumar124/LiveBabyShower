document.getElementById('rsvp-form').addEventListener('submit', async e => {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);

  // send to Formspree
  const resp = await fetch(form.action, {
    method: form.method,
    body: data,
    headers: { 'Accept': 'application/json' }
  });

  if (resp.ok) {
    form.classList.add('hidden');
    document.getElementById('thank-you').classList.remove('hidden');
  } else {
    alert('Oops! There was a problem submitting your RSVP.');
  }
});
