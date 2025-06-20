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

  const message = document.querySelector('[name="message"]').value.trim();

  const subject = encodeURIComponent("Contact naar Bram Grippeling");
  const body = encodeURIComponent(`${message}`);
  const recipient = "38999@ma-web.nl";

  const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;

  // Open user's email app
  window.location.href = mailtoLink;
}
