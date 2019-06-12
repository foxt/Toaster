document.querySelector("#show").onclick = function() {
  toast = new Toast({
    title: document.querySelector("#title").value,
    description: document.querySelector("#description").value,
    style: document.querySelector("#style").value,
    color: document.querySelector("#colour").value,
    timeout: parseInt(document.querySelector("#timeout").value),
    closable: document.querySelector("#closable").checked
  })
  toast.show()
}

setInterval(function() {
  var code = `toast = new Toast({
  title: "${document.querySelector("#title").value.replace('"','\\"')}",
  description: "${document.querySelector("#description").value.replace('"','\\"')}",
  style: "${document.querySelector("#style").value.replace('"','\\"')}",
  color: "${document.querySelector("#colour").value.replace('"','\\"')}",
  timeout: ${document.querySelector("#timeout").value.replace('"','\\"')},
  closable: ${document.querySelector("#closable").checked}
})
toast.show()`
  if (document.querySelector("#code").innerText != code) {
    document.querySelector("#code").innerText = code
  }
},15)