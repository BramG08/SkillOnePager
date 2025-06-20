const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('section--visible');
      }
    });
  },
  {
    threshold: 0.2
  }
);

sections.forEach(section => {
  observer.observe(section);
});

function sendMail(event) {
  event.preventDefault();

  const send_to_mail = document.querySelector('[name="send_to_mail"]').value.trim();
  const email = document.querySelector('[name="email"]').value.trim();
  const message = document.querySelector('[name="message"]').value.trim();
  const subject = encodeURIComponent("Contact naar Bram Grippeling");
  
  const body = encodeURIComponent(`${message}`);
  const recipient = encodeURIComponent(`${email}`);

  const mailtoLink = `mailto:${send_to_mail}&?cc=${recipient}&?subject=${subject}&body=${body}`;

  // Open user's email app
  window.location.href = mailtoLink;
}
