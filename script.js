const menuBtn = document.querySelector(".icon-tabler-menu-2");
const menu = document.querySelector(".menu");

const studentBtn = document.querySelector(".student-button");
const dashboardBtn = document.querySelector(".class-button");
const settingsBtn = document.querySelector(".settings-button");

const getCurrentTime = () => {
   const date = new Date();

   var day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

   var hour = date.getHours();
   var minute = date.getMinutes();
   minute = minute < 10 ? "0" + minute : minute;
   var AMPM = date.getHours() > 12 ? "PM" : "AM";
   hour = hour > 12 || hour == 0 ? Math.abs(hour - 12) : hour;
   var time = `${hour}:${minute}${AMPM}`;
   var day = day[date.getDay()];

   document.getElementById("time").innerText = time;
   document.getElementById("day").innerText = day;
   console.log(time);
   setTimeout(getCurrentTime, 500);
};
const getCurrentDate = () => {
   if (document.getElementById("date_") != null) {
      const date = new Date();
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      var currentDate = `${year}-${month}-${day}`;

      // console.log(currentDate);
      document.getElementById("date_").value = currentDate;
   }
};

getCurrentTime();
getCurrentDate();

studentBtn.addEventListener("click", function () {
   if (window.location.href != window.location.origin + "/student.html") {
      window.location.href = "student.html";
   }
});

dashboardBtn.addEventListener("click", function () {
   if (window.location.href != window.location.origin + "/index.html") {
      window.location.href = "index.html";
   }
});
settingsBtn.addEventListener("click", function () {
   if (window.location.href != window.location.origin + "/settings.html") {
      window.location.href = "settings.html";
   }
});

var comment = document.createComment("Jones lapinig");
document.body.appendChild(comment);

if (window.location.href == window.location.origin + "/student.html") {
   console.log("Hello");
   const filterContainer = document.querySelector(".filter-container");
   const sortContainer = document.querySelector(".sort-list");
   const filterBtn = document.querySelector(".filter");
   const sortBtn = document.querySelector(".sort");
   filterBtn.addEventListener("click", function () {
      filterContainer.style.display = "flex";
      return;
   });
   sortBtn.addEventListener("click", function () {
      sortContainer.style.display = "flex";
      return;
   });
}

document.addEventListener("click", (event) => {
   if (event.target.tagName == "svg") {
      return;
   } else if (!event.target.closest(".menu")) {
      menu.style.display = "none";
   }

   if (window.location.hre == window.location.origin + "/student.html") {
      if (event.target == "circle") {
         filterContainer.style.display = "none";
      } else if (!event.target.closest(".filter-container")) {
         filterContainer.style.display = "none";
      }
      if (event.target == "div.sort") {
         sortContainer.style.display = "none";
      } else if (!event.target.closest(".sort-list")) {
         sortContainer.style.display = "none";
      }
   }
});

menuBtn.addEventListener("click", function () {
   menu.style.display = "flex";
   return;
});

console.log(window.location.href);
