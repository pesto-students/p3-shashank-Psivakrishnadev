let name = {
  firstName: 'Siva ',
  lastName: 'Krishna',
}

let printFullName = function (place) {
  console.log(
    'My name is ' + this.firstName + ' ' + this.lastName + ',' + 'from ' + place
  )
}

let name2 = {
  firstName: 'Siva',
  lastName: 'Krishna',
}
printFullName.call(name, 'Hyd')
printFullName.apply(name2, ['Secunderabad'])

//bind keeps the copy and invoked later

let myFullName = printFullName.bind(name, 'Secunderabad')
myFullName()
