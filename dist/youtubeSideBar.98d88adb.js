const i=[{title:""},{title:"Library"},{title:"Settings"}];document.querySelector(".sidebarMenu");let e="",t="",s="";[{title:"Home",icon:'<i class="ri-home-4-line"></i>'},{title:"Explore",icon:'<i class="ri-compass-3-line"></i>'},{title:"Shorts",icon:'<i class="ri-movie-line"></i>'},{title:"Subscription",icon:'<i class="ri-add-box-line"></i>'}].forEach(i=>{e+=`
        <li class="sidebar__item">
            ${i.icon}
            <h3 class="sidebar__item-title">${i.title}</h3>
        </li>
    `}),[{title:"History",icon:'<i class="ri-history-line"></i>'},{title:"Watch Later",icon:'<i class="ri-timer-2-line"></i>'},{title:"PlayLists",icon:'<i class="ri-play-circle-line"></i>'},{title:"Liked Videos",icon:'<i class="ri-heart-3-line"></i>'}].forEach(i=>{s+=`
        <li class="sidebar__item">
            ${i.icon}
            <h3 class="sidebar__item-title">${i.title}</h3>
        </li>
    `}),[{title:"Notifications",icon:'<i class="ri-notification-4-line"></i>'},{title:"Settings",icon:'<i class="ri-settings-4-line"></i>'},{title:"Logout",icon:'<i class="ri-logout-box-r-line"></i>'}].forEach(i=>{t+=`
        <li class="sidebar__item">
            ${i.icon}
            <h3 class="sidebar__item-title">${i.title}</h3>
        </li>
    `});const l=[e,s,t];i.forEach((i,e)=>{i.HTML=l[e]}),console.log(i);let c="";i.forEach(i=>{c+=`
    
    <div class="sidebar__menu">
                <h2 class="sidebar__title">${i.title}</h2>
                <ul class="sidebar__list">
                    ${i.HTML}
                </ul>
            </div>
    `}),document.querySelector(".sidebar__menu-all").innerHTML=c;const a=document.getElementById("sidebar"),o=document.getElementById("sidebar-toggle");a&&o&&o.addEventListener("click",()=>{a.classList.toggle("sidebar-show")});const n=document.querySelectorAll(".sidebar__item");function r(){n.forEach(i=>i.classList.remove("active")),this.classList.add("active")}n.forEach(i=>i.addEventListener("click",r));
//# sourceMappingURL=youtubeSideBar.98d88adb.js.map
