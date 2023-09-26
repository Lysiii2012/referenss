// const body = document.body;
// const circleMouse = document.getElementById("circleMouse");

// body.addEventListener("mousemove", (e) => {
//   const mouseX = e.clientX - body.getBoundingClientRect().left;
//   const mouseY = e.clientY - body.getBoundingClientRect().top;
//   circleMouse.style.left = mouseX - 35 + "px";
//   circleMouse.style.top = mouseY - 20 + "px";
// });
document.addEventListener("DOMContentLoaded", function() {
  var links = document.querySelectorAll(".product-about a");

  // Условие для удаления классов при загрузке
  if (window.innerWidth <= 719) {
    links.forEach(function(link) {
      link.classList.remove("active");
      var id = link.id;
      var productInfoElements = document.querySelector("." + id);
      if (productInfoElements) {
        productInfoElements.classList.remove("show");
      }
    });
  }

  links.forEach(function(link) {
    link.addEventListener("click", function(event) {
      if (window.innerWidth <= 719) {
        event.preventDefault();
        var id = this.id;
        var productInfoElements = document.querySelector("." + id);

        if (productInfoElements) {
          var liElement = this.parentElement; // Получаем родительский элемент <li>
          var isActive = this.classList.contains("active");

          // Удаляем класс 'active' у всех элементов
          links.forEach(function(link) {
            link.classList.remove("active");
          });

          // Удаляем класс 'show' у всех элементов, находящихся внутри <li>
          var liElements = document.querySelectorAll(".product-about li");
          liElements.forEach(function(li) {
            var productInfo = li.querySelector(".product-info");
            if (productInfo) {
              productInfo.classList.remove("show");
            }
          });

          // Если текущий элемент уже был активным, то удаляем класс 'active'
          if (isActive) {
            this.classList.remove("active");
          } else {
            // Иначе, если текущий элемент не был активным, то добавляем классы 'active' и 'show'
            this.classList.add("active");
            productInfoElements.classList.add("show");
            liElement.appendChild(productInfoElements);
          }
        }
      }
    });
  });
});







/**************mouse-move */
const categoryContainers = document.querySelectorAll('.box-category');

categoryContainers.forEach((container) => {
  const categoryItems = container.querySelectorAll('.category-item');
  categoryItems.forEach((item, index) => {
    item.addEventListener('mouseenter', () => {
      if (window.innerWidth >= 720 && index !== 0) {
        categoryItems[0].style.opacity = '0.5';
        categoryItems[0].style.transition = 'all 0.5s linear';
      }
    });

    item.addEventListener('mouseleave', () => {
      if (window.innerWidth >= 720) {
        categoryItems[0].style.opacity = '1';
      }
    });
  });
});

/*********swioer-index */
var swiper = new Swiper(".galleryTop", {
    slidesPerView: 'auto',
    spaceBetween: 16,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-btn-next",
      prevEl: ".swiper-btn-prev",
    },
  });
  var swiper = new Swiper(".galleryBrend", {
    slidesPerView: 'auto',
    spaceBetween: 12,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-btn-next",
      prevEl: ".swiper-btn-prev",
    },
  });


  function addToggleHandler(btnClass, filterClass) {
    const btn = document.querySelector(btnClass);
    const filter = document.querySelector(filterClass);
  
    if (btn && filter) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        filter.classList.toggle('show');
      });
    }
  }
  
  addToggleHandler('.btn-brend', '.filter-brend');
  addToggleHandler('.btn-categore', '.filter-categor');
  addToggleHandler('.btn-subcategory', '.filter-subcategory');


var swiper = new Swiper(".prev-product-swiper", {
  loop: true,
  direction: 'vertical',
  spaceBetween: 13,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".swiper-btn-next",
    prevEl: ".swiper-btn-prev",
  },
});
var swiper2 = new Swiper(".product-swiper", {
  loop: true,
  spaceBetween: 10,
  thumbs: {
    swiper: swiper,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".videoSwiper", {
  slidesPerView: 3,
  spaceBetween: 12,
  direction: "vertical",
  pagination: {
    // el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
  breakpoints: {
    721: {
      direction: "horizontal"
    }
  }
});


document.addEventListener("DOMContentLoaded", function() {
  // Проверка ширины экрана
  if (window.innerWidth >= 720) {
    var links = document.querySelectorAll(".product-about a");

    links.forEach(function(link) {
      link.addEventListener("click", function(event) {
        event.preventDefault(); 
        var id = this.id;
        var productInfoElements = document.querySelectorAll(".product-info");

        productInfoElements.forEach(function(element) {
          element.classList.remove("show");
        });
        var targetElement = document.querySelector("." + id);
        if (targetElement) {
          targetElement.classList.add("show");
        }
        links.forEach(function(link) {
          link.classList.remove("active");
        });
        this.classList.add("active");
      });
    });
  }
});






let navMobile = document.querySelector('.nav-mobile');
    btnOpenNav = document.querySelector('.nav-btn')
    btnCloseNav = document.querySelector('.close-nav')
    
btnOpenNav.addEventListener('click', (e) => {
  e.preventDefault()
  navMobile.classList.add('show')
})
btnCloseNav.addEventListener('click', (e) => {
  e.preventDefault()
  navMobile.classList.remove('show')
})

// document.querySelector('.filter-btn').addEventListener('click', (e) => {
//   e.preventDefault();
//   if (window.innerWidth <= 1201) {
//     document.querySelector('.filter-items').classList.add('show');
//   }
// });
// document.querySelector('.close-filter a').addEventListener('click', (e) => {
//   e.preventDefault();
//   if (window.innerWidth <= 1201) {
//     document.querySelector('.filter-items').classList.remove('show');
//   }
// });