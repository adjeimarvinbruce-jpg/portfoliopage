// Small UI helpers: smooth scroll, simple contact form UX (no backend)
(function(){
  // smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',(e)=>{
      const target = document.querySelector(a.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

  // basic contact form validation and "fake" send UX
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (form) {
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const name = form.querySelector('#name').value.trim();
      const email = form.querySelector('#email').value.trim();
      const msg = form.querySelector('#message').value.trim();
      if(!name || !email || !msg){
        status.style.display='block';
        status.style.color='salmon';
        status.textContent = 'Please fill in all fields before sending.';
        return;
      }
      status.style.display='block';
      status.style.color='lightgreen';
      status.textContent = 'Thanks — your message looks good! (This demo page does not send messages.)';
      form.reset();
    });
  }

  // prefer-reduced-motion: pause floating animation
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  if(mq && mq.matches){
    document.querySelectorAll('.profile-img').forEach(el => el.style.animation = 'none');
  }
})();
