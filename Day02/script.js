let wrapper = document.querySelector(".wrapper");
let loginLink = document.querySelector(".login-link"); 
let singupLink = document.querySelector(".signup-link"); 
let btn = document.querySelector(".btn");
let closeBtn = document.querySelector(".close-btn");


singupLink.addEventListener("click", () => {
    wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
    wrapper.classList.remove("active");
})

btn.addEventListener("click", () => {
    wrapper.classList.add("open");
})

closeBtn.addEventListener("click", () => {
    wrapper.classList.remove("open");
})