$(document).ready(onReady);

let employees = [];

function onReady() {

	console.log('Checking if Jquery Loaded up properly');

	$('#addEmployee-Btn').on('click', addingEmployee);


}




function addingEmployee() {

	employees = {
		firstName: $('#firstNameInput').val(),
		lastName: $('#lastNameInput').val(),
		iDNumber: $('#idNumberInput').val(),
		jobTitle: $('#jobTitle').val(),
		annualSalary: $('#annualSalaryInput').val()
	}
	console.log('Current Array of employee: ', employees);

	$('#firstNameInput').val('');
	$('#lastNameInput').val('');
	$('#idNumberInput').val('');
	$('#jobTitle').val('');
	$('#annualSalaryInput').val('');

}