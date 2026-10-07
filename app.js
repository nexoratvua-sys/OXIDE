const DISCORD_INVITE = "https://discord.gg/ВАШ-КОД";
const app=document.getElementById("app");
const gate=document.getElementById("desktopGate");
function isPhone(){
  const ua=navigator.userAgent||"";
  return /Android|iPhone|iPod|Windows Phone|webOS|BlackBerry/i.test(ua)&&window.innerWidth<=768;
}
function deviceGate(){
  const ok=isPhone();
  app.style.display=ok?"block":"none";
  gate.style.display=ok?"none":"flex";
  gate.setAttribute("aria-hidden",ok?"true":"false");
}
deviceGate();
window.addEventListener("resize",deviceGate);

const discord=document.getElementById("discordLink");
if(discord) discord.href=DISCORD_INVITE;

function toast(msg){
  const t=document.getElementById("toast");
  t.textContent=msg;t.style.opacity="1";t.style.transform="translate(-50%,0)";
  clearTimeout(window.__toast);
  window.__toast=setTimeout(()=>{t.style.opacity="0";t.style.transform="translate(-50%,20px)"},1700);
}
document.querySelectorAll("[data-copy]").forEach(el=>{
  el.addEventListener("click",async()=>{
    try{await navigator.clipboard.writeText(el.dataset.copy);toast("Скопійовано: "+el.dataset.copy)}
    catch{toast("Не вдалося скопіювати")}
  });
});
document.getElementById("copyLink").addEventListener("click",async()=>{
  try{await navigator.clipboard.writeText(location.href);toast("Посилання скопійовано")}
  catch{toast("Скопіюй адресу сайту вручну")}
});
document.querySelectorAll(".nav nav a").forEach(a=>{
  a.addEventListener("click",()=>{
    document.querySelectorAll(".nav nav a").forEach(x=>x.classList.remove("active"));
    a.classList.add("active");
  });
});
if("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js").catch(()=>{});
