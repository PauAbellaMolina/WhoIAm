years = document.getElementById('years');
months = document.getElementById('months');
days = document.getElementById('days');

let today = moment(); 
let birthDate = moment('2001-12-03');

let yearsDiff = today.diff(birthDate, 'years');
birthDate.add(yearsDiff, 'years');

let monthsDiff = today.diff(birthDate, 'months');
birthDate.add(monthsDiff, 'months');

let daysDiff = today.diff(birthDate, 'days');

years.innerHTML = yearsDiff;
months.innerHTML = monthsDiff;
days.innerHTML = daysDiff;