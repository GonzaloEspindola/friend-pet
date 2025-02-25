export function showToast(
  message: string,
  variant: string = 'success',
  bg: string = '',
) {
  const classVariant = `alert-${variant}`
  const toastContainer = document.createElement('div')
  toastContainer.classList.add('toast')

  const alertDiv = document.createElement('div')
  alertDiv.classList.add('alert')
  alertDiv.classList.add(classVariant)
  alertDiv.classList.add(`text-white`)
  alertDiv.classList.add(`${bg}`)

  const messageSpan = document.createElement('span')
  messageSpan.textContent = message

  alertDiv.appendChild(messageSpan)
  toastContainer.appendChild(alertDiv)

  document.body.appendChild(toastContainer)

  setTimeout(() => {
    toastContainer.remove()
  }, 3000)
}
