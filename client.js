$(document).ready(onReady);

let employees = [];

function onReady() {

	console.log('Checking if Jquery Loaded up properly');

	$('#addEmployee-Btn').on('click', addingEmployee);


}




function addingEmployee() {

	addedEmployees = {
		firstName: $('#firstNameInput').val(),
		lastName: $('#lastNameInput').val(),
		iDNumber: $('#idNumberInput').val(),
		jobTitle: $('#jobTitleInput').val(),
		annualSalary: $('#annualSalaryInput').val()
	}
	console.log('Current Array of employee: ', employees);

	$('#firstNameInput').val('');
	$('#lastNameInput').val('');
	$('#idNumberInput').val('');
	$('#jobTitleInput').val('');
	$('#annualSalaryInput').val('');

	employees.push(addedEmployees);

}