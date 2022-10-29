$(document).ready(onReady);

let employees = [];

function onReady() {

	console.log('Checking if Jquery Loaded up properly');

	
	

}




function addingEmployee() {

	employees = {
		firstName: $('#firstNameInput'),
		lastName: $('#lastNameInput'),
		iDNumber: $('#idNumberInput'),
		jobTitle: $('#jobTitle'),
		annualSalary: $('#annualSalaryInput')
	}

}