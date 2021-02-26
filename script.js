class invoice {
  constructor(Type, ToForm, Detail, Amount) {
    this.Type = Type // 'type'
    this.ToForm = ToForm //'form'
    this.Detail = Detail // 'details'
    this.Amount = Amount //'amount'
  }
  add() {
    return `${this.ToForm.value} is owes ${this.Amount.value} for ${this.Detail.value}.`
  }
}
class payment extends invoice {
  constructor() {
    super()
  }
}
class List extends invoice {
  constructor(Type, ToForm, Detail, Amount) {
    super(Type, ToForm, Detail, Amount)
    var div = document.getElementById('display')
    var ul = document.createElement('ul')
    ul.className = 'list'
    div.appendChild(ul)
    var li = document.createElement('li')
    var p = document.createElement('h4')
    p.innerHTML = Type.value
    li.appendChild(p)
    var p1 = document.createElement('p')
    p1.innerHTML = super.add()
    li.appendChild(p1)
    ul.appendChild(li)
    var btn = document.createElement('button')
    btn.innerHTML = 'Delete'
    li.appendChild(btn)
    btn.onclick = function () {
      var del = confirm('are you sure for delete?')
      if (del) {
        li.remove('list')
      }
    }
  }
}
const Type = document.getElementById('my_select')
const ToForm = document.getElementById('form')
const Detail = document.getElementById('details')
const Amount = document.getElementById('amount')

document.getElementById('add').addEventListener('click', function () {
  if (Type.value == 'invoice') {
    var input = new invoice(Type, ToForm, Detail, Amount)
  } else {
    var input = new payment(Type, ToForm, Detail, Amount)
  }
  const list = new List(Type, ToForm, Detail, Amount)
  list.add()
})
