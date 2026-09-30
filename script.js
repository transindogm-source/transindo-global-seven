document.documentElement.classList.add('js');
const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.main-nav');
if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Tutup menu':'Buka menu')});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Buka menu')}))}
const sections=[...document.querySelectorAll('main section[id]')];const links=[...document.querySelectorAll('.main-nav a[href^="#"]')];const setActive=()=>{let current='home';for(const s of sections){if(scrollY+120>=s.offsetTop)current=s.id}links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+current))};addEventListener('scroll',setActive,{passive:true});setActive();
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const backTop=document.querySelector('.back-top');
if(backTop){const update=()=>backTop.classList.toggle('show',scrollY>500);addEventListener('scroll',update,{passive:true});update();backTop.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));}
