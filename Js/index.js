// List of translations for "Get electricians in minutes"
const texts = [
  "Chọta ndị ọkụ eletrik ozugbo", // Igbo
  "Find electricians quick quick",
  "Nemo ƴan wutan lantarki nan da nan", // Hausa
  "Wa awọn onimọ ina lẹsẹkẹsẹ", // Yoruba
  "Get electricians in minutes",
];

// Get the h1 element
const h1Element = document.getElementById('changing-text');

let index = 0;

// Function to change the text
function changeText() {
  h1Element.style.opacity = 0; // Fade out
  setTimeout(() => {
      h1Element.textContent = texts[index];
      h1Element.style.opacity = 1; // Fade in
      index = (index + 1) % texts.length; // Loop back to the first text after the last one
  }, 1000); // Change text after 1 second when the opacity is 0
}

// Change text every 5 seconds (5000 milliseconds)
setInterval(changeText, 8000);





// ads display
function swiperOne(){


const swiper = new Swiper(".swiper-container", {
    loop: true, // Add this option to enable continuous sliding
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "fraction",
    },
  });

}

swiperOne()


  // services section

  function swiperTwo() {
    
 

  let swiperServices = new Swiper(".services_section", {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,
    autoplay: {
      delay: 8000,
    },
    // effect: "slide",


   pagination: {
     el: ".swiper-pagination",
     clickable: true, 
     type:"fraction",
     dynamicBullets: true,
   }, 
   breakpoints: {
       568: {
           slidesPerview: 2,
       }
   }
 });

}


swiperTwo();

// expert section

function swiperThree() {
    
 

  let swiperServices = new Swiper(".expert_section", {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,
    autoplay: {
      delay: 7000,
    },
    // effect: "slide",


   pagination: {
     el: ".swiper-pagination",
     clickable: true, 
     type:"fraction",
     dynamicBullets: true,
   }, 
   breakpoints: {
       568: {
           slidesPerview: 2,
       }
   }
 });

}


swiperThree();


// trending services

function swiperFour() {
    
 

  let swiperServices = new Swiper(".trending_services", {
    slidesPerView: 1,
    // loop: true,
    
    // spaceBetween: 10,
    autoplay: {
      delay: 7000,
    },
    // autoHeight: true,
    
      // when window width is >= 640px
      
     


  //  pagination: {
  //    el: ".swiper-pagination",
  //    clickable: true, 
  //    dynamicBullets: true,
  //  },
   },
 
 );

}


swiperFour();


let swiperTestimonial = new Swiper(".testimonial_container", {
  // loop: true,
  grabCursor: true,
  // spaceBetween: 48,
  autoplay: {
    delay: 5000,
  },

//  pagination: {
//    el: ".swiper-pagination",
//    clickable: true, 
//    dynamicBullets: true,
//  }, 
breakpoints: {
  // when window width is >= 320px
  320: {
    slidesPerView: 1,
    spaceBetween: 20
  },
  // when window width is >= 480px
  480: {
    slidesPerView: 1,
    spaceBetween: 30
  },
  // when window width is >= 640px
  676: {
    slidesPerView: 2,
    spaceBetween: 40
  },
  796: {
    slidesPerView: 2,
    spaceBetween: 40
  },
  900: {
    slidesPerView: 2,
    spaceBetween: 40
  },
  1200: {
    slidesPerView: 3,
    spaceBetween: 40
  },
}
});
