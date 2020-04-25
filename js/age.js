years = document.getElementById("years");
months = document.getElementById("months");
days = document.getElementById("days");

var today = moment(); 
var birthDate = moment("2001-12-03");  // 2000 (year), 12 (month), 31 (day)

var yearsDiff = today.diff(birthDate, 'years');
birthDate.add(yearsDiff, 'years');

var monthsDiff = today.diff(birthDate, 'months');
birthDate.add(monthsDiff, 'months');

var daysDiff = today.diff(birthDate, 'days');

years.innerHTML = yearsDiff;
months.innerHTML = monthsDiff;
days.innerHTML = daysDiff;