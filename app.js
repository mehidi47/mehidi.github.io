var swiper = new Swiper(".section-wraper", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

function menu() {
  let menu = document.querySelector(".menu");
  menu.classList.toggle("active");
}
let web = [
  {
    title: "Personal portfolio",
    thumbnail: "images/w1.png",
    live: "https://www.fasterning.com",
    cetagory: "website",
  },
  {
    title: "Freedup.co",
    thumbnail: "images/w2.png",
    live: "https://freedup.co.uk",
    cetagory: "website",
  },
  {
    title: "SoaRising",
    thumbnail: "images/w3.png",
    live: "https://www.soarising.com",
    cetagory: "website",
  },
];

let ui = [
  {
    title: "No content",
    thumbnail: "images/fplaceholder.png",
    live: "#",
    cetagory: "ui/ux",
  },
  {
    title: "No content",
    thumbnail: "images/fplaceholder.png",
    live: "#",
    cetagory: "ui/ux",
  },
  {
    title: "No content",
    thumbnail: "images/fplaceholder.png",
    live: "#",
    cetagory: "ui/ux",
  },
];

let app = [
  {
    title: "No content",
    thumbnail: "images/aplaceholder.png",
    live: "#",
    cetagory: "app",
  },
  {
    title: "No content",
    thumbnail: "images/aplaceholder.png",
    live: "#",
    cetagory: "app",
  },
  {
    title: "No content",
    thumbnail: "images/aplaceholder.png",
    live: "#",
    cetagory: "app",
  },
];

let projectTab = document.querySelectorAll(".tabs .tab");
let projectTab2 = document.querySelectorAll(".project-tabs .tab");
function tab(t) {
  t.forEach((e) => {
    e.addEventListener("click", () => {
      t.forEach((i) => {
        i.classList.remove("active");
      });
      e.classList.toggle("active");
    });
  });
}
tab(projectTab);
tab(projectTab2);

let tabBtn = document.querySelectorAll(".tabs .tab");
let tabBtn2 = document.querySelectorAll(".project-tabs .tab");
let tabContent = document.querySelectorAll(".tab-content");
let projectCetalog = document.querySelectorAll(".project-tab");

function content(x, y) {
  x.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      function maw(tab) {
        tab.forEach((d) => {
          if (btn.dataset.target == d.dataset.content) {
            d.classList.add("tab-ac");
          } else {
            d.classList.remove("tab-ac");
          }
        });
      }
      maw(y);
    });
  });
}
content(tabBtn, tabContent);
content(tabBtn2, projectCetalog);

let cetalog = document.querySelector("#web .project-cetalog");
let cetalog1 = document.querySelector("#ui .project-cetalog");
let cetalog2 = document.querySelector("#app .project-cetalog");
function show(item, ce) {
  ce.map((e) => {
    item.innerHTML += `
    <a href="${e.live}" target="_blank">
      <div class="item">
        <div class="thumb">
          <img src="${e.thumbnail}" alt="" />
        </div>
        <p class="cetagory">${e.cetagory}</p>
        <div class="title">
          <h3>${e.title}</h3>
          <i class="uil uil-external-link-alt"></i>
        </div>
      </div>
    </a>`;
  });
}
show(cetalog, web);
show(cetalog1, ui);
show(cetalog2, app);
