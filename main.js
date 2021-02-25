class invoice {
  constructor(Invoice, ToForm, Detail, Amount) {
    this.Invoice = Invoice // 'invoice'
    this.ToForm = ToForm //'form'
    this.Detail = Detail // 'details'
    this.Amount = Amount //'amount'
  }

  add() {
    var x = []
    var x = `${this.ToForm.value} is owes ${this.Amount.value} for ${this.Detail.value}`
    var div = document.getElementById('display')
    var ul = document.createElement('ul')
    ul.className = 'list'
    div.appendChild(ul)
    var li = document.createElement('li')
    var p = document.createElement('h4')
    p.innerHTML = Type.value
    li.appendChild(p)
    var p1 = document.createElement('p')
    p1.innerHTML = x
    li.appendChild(p1)
    var btn = document.createElement('BUTTON')
    btn.innerHTML = 'Delete'
    btn.className = 'close'
    btn.style.marginLeft = '90%'
    li.appendChild(btn)
    ul.appendChild(li)
    btn.onclick = function () {
      var del = confirm('are you sure for delete?')
      if (del) {
        li.remove('list')
      }
    }
  }
}
class payment extends invoice {
  constructor(Payment) {
    super(Payment)
    this.Payment = Payment // 'payment'
  }
}
var x = []
const form = document.querySelector('.form')
const Invoice = document.getElementById('invoice')
const Payment = document.getElementById('payment')
const Type = document.getElementById('my_select')
const ToForm = document.getElementById('form')
const Detail = document.getElementById('details')
const Amount = document.getElementById('amount')

if (Type.value == 'invoice') {
  var input = new invoice(Invoice, ToForm, Detail, Amount)
  document.getElementById('add').addEventListener('click', function () {
    input.add()
  })
} else {
  console.log(Type.value, 'payment')

  var input2 = new payment(Payment, ToForm, Detail, Amount)
  document.getElementById('add').addEventListener('click', function () {
    input2.add()
  })
}
