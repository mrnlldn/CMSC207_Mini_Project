// Smooth scrolling for anchor links
document.querySelectorAll('nav a').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const targetId = this.getAttribute('href')
    const targetElement = document.querySelector(targetId)

    window.scrollTo({
      top: targetElement.offsetTop - 70,
      behavior: 'smooth',
    })
  })
})

// Cat paw cursor effect
const pawCursor = document.getElementById('pawCursor')

document.addEventListener('mousemove', function (e) {
  pawCursor.style.left = e.pageX + 'px'
  pawCursor.style.top = e.pageY + 'px'
  pawCursor.style.opacity = '1'

  // Hide the paw cursor after 2 seconds of no movement
  clearTimeout(window.pawTimeout)
  window.pawTimeout = setTimeout(function () {
    pawCursor.style.opacity = '0'
  }, 2000)
})
