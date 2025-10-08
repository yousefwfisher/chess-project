  AOS.init({duration:700, easing:'ease-out-cubic', once:true});

    // mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const mobile = document.getElementById('mobile-menu');
    hamburger.addEventListener('click', ()=>{
      const open = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', String(!open));
      mobile.style.display = open ? 'none' : 'block';
      mobile.setAttribute('aria-hidden', String(open));
      // animate lines
      hamburger.classList.toggle('open');
    });

    // simple transform for hamburger when open
    const style = document.createElement('style');
    style.innerHTML = `
      .hamburger.open .line:nth-child(1){transform:translateY(6px) rotate(45deg)}
      .hamburger.open .line:nth-child(2){opacity:0}
      .hamburger.open .line:nth-child(3){transform:translateY(-6px) rotate(-45deg)}
    `;
    document.head.appendChild(style);

    // mobile sub toggles
    document.querySelectorAll('.m-toggle').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        const next = btn.nextElementSibling;
        const opened = next.classList.contains('m-open');
        next.classList.toggle('m-open', !opened);
        next.setAttribute('aria-hidden', String(opened));
      });
    });

    // improve accessibility: update aria-expanded for desktop hover menus when focused
    document.querySelectorAll('.has-sub').forEach(el=>{
      const trigger = el.querySelector('a');
      trigger.addEventListener('focus', ()=> trigger.setAttribute('aria-expanded','true'));
      trigger.addEventListener('blur', ()=> trigger.setAttribute('aria-expanded','false'));
    });

    