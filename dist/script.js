"use strict";var subMenu,toggle=document.querySelector(".toggle"),header=document.querySelector(".header"),body=document.querySelector("body"),fermer=document.querySelector(".fermer"),ouvrir=document.querySelector(".ouvrir"),headerlist=document.querySelector(".header__list"),headercontain=document.querySelector(".header__container"),returnback=headercontain.querySelector(".header__retourarriere");function scrollHeader(){var e=document.getElementById("header");this.scrollY>=80?e.classList.add("sticky"):e.classList.remove("sticky")}function showSubMenu(e){(subMenu=e.querySelector(".submenu")).classList.add("actived");var t=e.querySelector(".header__linktitle").textContent;headercontain.querySelector(".header__currentmenu").innerHTML=t,headercontain.querySelector(".header__currentmenu").classList.add("actived"),headercontain.querySelector(".header__retourarriere").classList.add("actived")}function hideSubMenu(){subMenu.style.animation="slideRight 0.5s ease forwards",setTimeout((function(){subMenu.classList.remove("actived")}),300),headercontain.querySelector(".header__currentmenu").innerHTML="",headercontain.querySelector(".header__currentmenu").classList.remove("actived"),headercontain.querySelector(".header__retourarriere").classList.remove("actived")}toggle.addEventListener("click",(function(){body.classList.toggle("unscrollable"),fermer.classList.toggle("open"),ouvrir.classList.toggle("open"),headerlist.classList.toggle("open")})),window.addEventListener("scroll",scrollHeader),headerlist.addEventListener("click",(function(e){e.target.closest(".header__child")&&showSubMenu(e.target.closest(".header__child"))})),returnback.addEventListener("click",(function(){hideSubMenu()})),fermer.addEventListener("click",(function(){hideSubMenu()}));var zoomBtn=document.querySelectorAll(".zoom-text"),allImages=document.querySelectorAll(".img-container"),imageView=document.querySelector(".image-view"),nextBtn=document.getElementById("next-btn"),prevBtn=document.getElementById("prev-btn"),imageBox=document.querySelector(".image-box"),currentImageIdx=0;function currentImageDisplay(e){imageBox.style.background="url(images/Sites/Realisation/img".concat(currentImageIdx,".png) center/cover no-repeat")}imageView.addEventListener("click",(function(){this.style.display="none",imageBox.style.display="none"})),zoomBtn.forEach((function(e,t){e.addEventListener("click",(function(){imageView.style.display="block",imageBox.style.display="block",currentImageDisplay(currentImageIdx=t+1)}))})),nextBtn.addEventListener("click",(function(){5===++currentImageIdx&&(currentImageIdx=1),currentImageDisplay(currentImageIdx)}));var i,acc=document.getElementsByClassName("accordion");for(i=0;i<acc.length;i++)acc[i].addEventListener("click",(function(){this.classList.toggle("active");var e=this.nextElementSibling;"block"===e.style.display?e.style.display="none":e.style.display="block"}));function autoSlide(){setInterval((function(){slide(getItemActiveIndex()+1)}),4e3)}function slide(e){var t=Array.from(document.querySelectorAll(".carousel_item")),n=document.querySelector(".carousel_item__active");e>=t.length&&(e=0);var l=t[e];l.classList.add("carousel_item__pos_next"),setTimeout((function(){l.classList.add("carousel_item__next"),n.classList.add("carousel_item__next")}),20),l.addEventListener("transitionend",(function(){n.className="carousel_item",l.className="carousel_item carousel_item__active"}),{once:!0})}function getItemActiveIndex(){var e=Array.from(document.querySelectorAll(".carousel_item")),t=document.querySelector(".carousel_item__active");return e.indexOf(t)}window.addEventListener("load",(function(){autoSlide()}));var windowWidth=window.innerWidth;function changetomission(){windowWidth<=950?(document.querySelector(".subtitle2").style.backgroundColor="#2a9bd4",document.querySelector(".subtitle2").style.color="#fff",document.querySelector(".subtitle3").style.color="#2a9bd4",document.querySelector(".subtitle1").style.color="#2a9bd4",document.querySelector(".subtitle1").style.backgroundColor="transparent",document.querySelector(".subtitle3").style.backgroundColor="transparent",document.getElementById("text__tw").style.display="block",document.getElementById("sar__tw").style.display="block",document.getElementById("text__on").style.display="none",document.getElementById("sar__on").style.display="none",document.getElementById("text__thre").style.display="none",document.getElementById("sar__thre").style.display="none"):(document.getElementById("text__tw").style.display="block",document.getElementById("sar__tw").style.display="block",document.getElementById("text__on").style.display="none",document.getElementById("sar__on").style.display="none",document.getElementById("text__thre").style.display="none",document.getElementById("sar__thre").style.display="none")}function changetovision(){windowWidth<=950?(document.querySelector(".subtitle3").style.backgroundColor="#2a9bd4",document.querySelector(".subtitle3").style.color="#fff",document.querySelector(".subtitle2").style.color="#2a9bd4",document.querySelector(".subtitle1").style.color="#2a9bd4",document.querySelector(".subtitle2").style.backgroundColor="transparent",document.querySelector(".subtitle1").style.backgroundColor="transparent",document.getElementById("text__thre").style.display="block",document.getElementById("sar__thre").style.display="block",document.getElementById("text__on").style.display="none",document.getElementById("sar__on").style.display="none",document.getElementById("text__tw").style.display="none",document.getElementById("sar__tw").style.display="none"):(document.getElementById("text__thre").style.display="block",document.getElementById("sar__thre").style.display="block",document.getElementById("text__on").style.display="none",document.getElementById("sar__on").style.display="none",document.getElementById("text__tw").style.display="none",document.getElementById("sar__tw").style.display="none")}function changetoapropos(){windowWidth<=950?(document.querySelector(".subtitle1").style.backgroundColor="#2a9bd4",document.querySelector(".subtitle1").style.color="#fff",document.querySelector(".subtitle2").style.color="#2a9bd4",document.querySelector(".subtitle3").style.color="#2a9bd4",document.querySelector(".subtitle2").style.backgroundColor="transparent",document.querySelector(".subtitle3").style.backgroundColor="transparent",document.getElementById("text__thre").style.display="none",document.getElementById("sar__thre").style.display="none",document.getElementById("text__on").style.display="block",document.getElementById("sar__on").style.display="block",document.getElementById("text__tw").style.display="none",document.getElementById("sar__tw").style.display="none"):(document.getElementById("text__thre").style.display="none",document.getElementById("sar__thre").style.display="none",document.getElementById("text__on").style.display="block",document.getElementById("sar__on").style.display="block",document.getElementById("text__tw").style.display="none",document.getElementById("sar__tw").style.display="none")}var slideIndex=1;function currentSlide(e){showSlides(slideIndex=e)}function plusSlides(e){showSlides(slideIndex+=e)}function showSlides(e){var t,n=document.getElementsByClassName("mySlides"),l=document.getElementsByClassName("demo"),o=document.getElementById("caption");for(e>n.length&&(slideIndex=1),e<1&&(slideIndex=n.length),t=0;t<n.length;t++)n[t].style.display="none";for(t=0;t<l.length;t++)l[t].className=l[t].className.replace(" active","");n[slideIndex-1].style.display="block",l[slideIndex-1].className+=" active",o.innerHTML=l[slideIndex-1].alt}function submit(){var e=document.getElementById("contactForm");$.ajax({type:"POST",url:"https://digital-x-sarl.com/api/contact",data:$(e).serialize()}).done((function(){fbq("track","Contact"),window.location=window.location}))}showSlides(slideIndex),showSlides(slideIndex);
//# sourceMappingURL=script.js.map