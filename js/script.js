const nav=document.getElementById("nav"),hamb=document.getElementById("hamb"),progress=document.getElementById("progress"),year=document.getElementById("year");
if(year)year.textContent=new Date().getFullYear();
hamb?.addEventListener("click",()=>nav.classList.toggle("open"));
nav?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add("show")),{threshold:.08});
document.querySelectorAll(".reveal").forEach(x=>io.observe(x));
const sections=[...document.querySelectorAll("main section[id]")],links=[...document.querySelectorAll("#nav a")];
window.addEventListener("scroll",()=>{
 const max=document.documentElement.scrollHeight-innerHeight; progress.style.width=(scrollY/max*100)+"%";
 let cur="home";sections.forEach(s=>{if(scrollY>=s.offsetTop-120)cur=s.id});
 links.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+cur));
},{passive:true});
