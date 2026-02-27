document.addEventListener("DOMContentLoaded", () => {
  const starsContainer = document.querySelector(".stars-container")
  const numStars = 100 

  for (let i = 0; i < numStars; i++) {
    const star = document.createElement("div")
    star.classList.add("star")

    star.style.left = `${Math.random() * 100}vw`
    star.style.top = `${Math.random() * 100}vh`

    const size = Math.random() * 3 + 1 
    star.style.width = `${size}px`
    star.style.height = `${size}px`

    star.style.animationDelay = `${Math.random() * 10}s`
    star.style.animationDuration = `${Math.random() * 10 + 5}s` 

    starsContainer.appendChild(star)
  }

  document.querySelectorAll("nav ul li a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      })
    })
  })

  document.querySelectorAll(".btn-add-to-cart").forEach((button) => {
    button.addEventListener("click", () => {
      alert("Mahsulot savatga qo'shildi!")
    })
  })

  const contactForm = document.querySelector(".contact-form")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()
      alert("Xabaringiz yuborildi! Tez orada siz bilan bog'lanamiz.")
      contactForm.reset() 
    })
  }
})
