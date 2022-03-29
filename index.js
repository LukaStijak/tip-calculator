window.onload = function () {
  let billValue = 0
  let peopleValue = 1
  let percentValue = 0
  let customValue = 0
  const tipAmount = document.querySelector(".tip-amount")
  const totalAmount = document.querySelector(".total-amount")
  const bill = document.querySelector("#bill")
  const people = document.querySelector("#people")
  const percents = document.querySelectorAll(".percent")
  const custom = document.querySelector("#custom")
  const reset = document.querySelector(".res")

  bill.addEventListener("keyup", function (e) {
    billValue = (+e.target.value).toFixed(2)
    updateOutput(billValue, peopleValue, percentValue)
  })
  people.addEventListener("keyup", function (e) {
    if (e.target.value < 1) return
    peopleValue = +e.target.value
    updateOutput(billValue, peopleValue, percentValue)
  })

  percents.forEach(function (percent) {
    percent.addEventListener("click", function (e) {
      percentValue = e.target.dataset.percent
      updateOutput(billValue, peopleValue, percentValue)
    })
  })

  function updateOutput(billValue, peopleValue, percent) {
    totalAmount.innerText = (
      +(billValue / peopleValue).toFixed(2) +
      (+billValue / peopleValue) * (+percent / 100)
    ).toFixed(2)
    tipAmount.innerText = ((+billValue * +percent) / 100 / peopleValue).toFixed(
      2
    )
  }

  custom.addEventListener("keyup", function (e) {
    customValue = (+e.target.value).toFixed(2)
    updateOutput(billValue, peopleValue, percentValue, customValue)
  })

  custom.addEventListener("keyup", function (e) {
    customValue = e.target.value
    updateOutput(billValue, peopleValue, customValue)
  })

  function updateOutput(billValue, peopleValue, customValue) {
    totalAmount.innerText = (
      +(billValue / peopleValue).toFixed(2) +
      (+billValue / peopleValue) * (+customValue / 100)
    ).toFixed(2)
    tipAmount.innerText = (
      (+billValue * +customValue) /
      100 /
      peopleValue
    ).toFixed(2)
  }

  reset.addEventListener("click", function () {
    percentValue = 0
    billValue = 0
    customValue = 0
    peopleValue = 1
    bill.value = ""
    people.value = ""
    updateOutput(billValue, peopleValue, percentValue, customValue)
  })
}
