_toaster.styles["bulma"] = function(toast) {
  var dom = document.createElement("div");
  dom.className = `toaster bulma-toast message is-${toast.color}`
  dom.innerHTML = `
  <div class="message-header">
    <p>${toast.title}</p>

  </div>
  <div class="message-body">
    ${toast.description}
  </div>`
  dom.style.transform = "translate(100%,0%)"
  dom.style.transition = "0.5s transform"
  setTimeout(function() {
    dom.style.transform = "translate(0%,0%)"
  })
  if (toast.timeout > 0) {
    setTimeout(function() {
      dom.style.transform = "translate(100%,0%)"
    },toast.timeout - 500)
  }
  if (toast.closable) {
    dom.querySelector(".message-header").innerHTML += `<button class="delete toastClose" aria-label="delete"></button>`
    dom.querySelector("button.toastClose.delete").onclick = function() {
      dom.style.transform = "translate(100%,0%)"
      setTimeout(function() {
        dom.remove()
      },500)
    }
  }
  return dom
}