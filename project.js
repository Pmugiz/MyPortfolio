// Shared gallery + YouTube code. Usually you only edit the settings inside each project HTML file.
(()=>{'use strict';
if(typeof galleryImages==='undefined'||!galleryImages.length)return;
const root=document.querySelector('#project-gallery'),img=document.querySelector('#gallery-image'),caption=document.querySelector('#gallery-caption'),counter=document.querySelector('#gallery-counter'),thumbs=document.querySelector('#gallery-thumbs');
let current=0;
function show(index){current=(index+galleryImages.length)%galleryImages.length;const item=galleryImages[current];img.src=item.src;img.alt=item.alt;caption.textContent=item.caption;counter.textContent=`${current+1} / ${galleryImages.length}`;thumbs.querySelectorAll('button').forEach((b,i)=>b.setAttribute('aria-current',String(i===current)));}
galleryImages.forEach((item,i)=>{const b=document.createElement('button');b.type='button';b.className='thumb';b.setAttribute('aria-label',`Show image ${i+1}: ${item.caption}`);const mini=document.createElement('img');mini.src=item.src;mini.alt='';mini.loading='lazy';b.appendChild(mini);b.addEventListener('click',()=>{show(i);root.focus();});thumbs.appendChild(b);});
document.querySelector('#gallery-prev').addEventListener('click',()=>{show(current-1);root.focus();});document.querySelector('#gallery-next').addEventListener('click',()=>{show(current+1);root.focus();});
root.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();show(current+(e.key==='ArrowRight'?1:-1));}});show(0);
const title=document.querySelector('#video-title'),desc=document.querySelector('#video-description');title.textContent=VIDEO_TITLE;desc.textContent=VIDEO_DESCRIPTION;
if(VIDEO_ID.trim()){const frame=document.createElement('iframe');frame.src='https://www.youtube-nocookie.com/embed/'+encodeURIComponent(VIDEO_ID.trim());frame.title=VIDEO_TITLE;frame.setAttribute('allow','accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');frame.setAttribute('referrerpolicy','strict-origin-when-cross-origin');frame.allowFullscreen=true;frame.loading='lazy';const container=document.querySelector('#video-container');container.replaceChildren(frame);}
})();
