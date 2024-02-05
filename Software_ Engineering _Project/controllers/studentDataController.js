
// function checkDate(input) {
// 	if (input.value == today()) {
// 		document.getElementById("validationDate").className = "form-control is-valid";
// 		document.getElementById("validationDateFeedback").innerHTML = "";
// 		document.getElementById("validationDateFeedback").className = "valid-feedback";
// 		document.getElementById("validationDate").style.pointerEvents = "none";
// 		studentFormData.date = input.value;
// 	}
// }

function checkTitle(input) {
	if (document.getElementById("validationTitle").value == "") {
		document.getElementById("validationTitle").className = "form-select is-invalid";
		document.getElementById("validationTitleFeedback").innerHTML = "";
		document.getElementById("validationTitleFeedback").className = "invalid-feedback";
		studentFormData.title = input.value;
	} else {
		document.getElementById("validationTitle").className = "form-select is-valid";
		document.getElementById("validationTitleFeedback").innerHTML = "";
		document.getElementById("validationTitleFeedback").className = "valid-feedback";
		studentFormData.title = input.value;
	}
}

function checkFirstname(input) {
	if (document.getElementById("validationFirstname").value == "") {
		document.getElementById("validationFirstname").className = "form-control is-invalid";
		document.getElementById("validationFirstnameFeedback").innerHTML = "invalid firstname!";
		document.getElementById("validationFirstnameFeedback").className = "invalid-feedback";
		studentFormData.firstName = null;
	} else {
		document.getElementById("validationFirstname").className = "form-control is-valid";
		document.getElementById("validationFirstnameFeedback").innerHTML = "";
		document.getElementById("validationFirstnameFeedback").className = "valid-feedback";
		studentFormData.firstName = input.value;
	}
}

function checkLastname(input) {
	if (document.getElementById("validationLastname").value == "") {
		document.getElementById("validationLastname").className = "form-control is-invalid";
		document.getElementById("validationLastnameFeedback").innerHTML = "invalid lastname!";
		document.getElementById("validationLastnameFeedback").className = "invalid-feedback";
		studentFormData.lastName = null;
	} else {
		document.getElementById("validationLastname").className = "form-control is-valid";
		document.getElementById("validationLastnameFeedback").innerHTML = "";
		document.getElementById("validationLastnameFeedback").className = "valid-feedback";
		studentFormData.lastName = input.value;
	}
}

function checkStudentId(input) {
	if (document.getElementById("validationStudentId").value == "") {
		return;
	} 
	if (input.value.length == 10) {
		document.getElementById("validationStudentId").className = "form-control is-valid";
		document.getElementById("validationStudentIdFeedback").innerHTML = "";
		document.getElementById("validationStudentIdFeedback").className = "valid-feedback";
		studentFormData.studentId = input.value;
	} else {
		document.getElementById("validationStudentId").className = "form-control is-invalid";
		document.getElementById("validationStudentIdFeedback").innerHTML = "invalid student-id!";
		document.getElementById("validationStudentIdFeedback").className = "invalid-feedback";
		studentFormData.studentId = null;
	}
}

function checkGrade(input) {
	if (document.getElementById("validationGrade").value == "") {
		document.getElementById("validationGrade").className = "form-select is-invalid";
		document.getElementById("validationGradeFeedback").innerHTML = "";
		document.getElementById("validationGradeFeedback").className = "invalid-feedback!";
		studentFormData.grade = null;
	} else {
		document.getElementById("validationGrade").className = "form-select is-valid";
		document.getElementById("validationGradeFeedback").innerHTML = "";
		document.getElementById("validationGradeFeedback").className = "valid-feedback!";
		studentFormData.grade = input.value;
	}
}

function checkField(input) {
	if (document.getElementById("validationField").value == "") {
		document.getElementById("validationField").className = "form-control is-invalid";
		document.getElementById("validationFieldFeedback").innerHTML = "invalid field!";
		document.getElementById("validationFieldFeedback").className = "invalid-feedback";
		studentFormData.field = null;
	} else {
		document.getElementById("validationField").className = "form-control is-valid";
		document.getElementById("validationFieldFeedback").innerHTML = "";
		document.getElementById("validationFieldFeedback").className = "valid-feedback!";
		studentFormData.field = input.value;
	}
}

function checkAdvisor(input) {
	if (document.getElementById("validationAdvisor").value == "") {
		document.getElementById("validationAdvisor").className = "form-control is-invalid";
		document.getElementById("validationAdvisorFeedback").innerHTML = "invalid adviser!";
		document.getElementById("validationAdvisorFeedback").className = "invalid-feedback";
		studentFormData.advisor = null;
	} else {
		document.getElementById("validationAdvisor").className = "form-control is-valid";
		document.getElementById("validationAdvisorFeedback").innerHTML = "";
		document.getElementById("validationAdvisorFeedback").className = "valid-feedback";
		studentFormData.advisor = input.value;
	}
}

function checkHouseNo(input) {
	if (document.getElementById("validationHouseNo").value == "") {
		document.getElementById("validationHouseNo").className = "form-control is-invalid";
		document.getElementById("validationHouseNoFeedback").innerHTML = "invalid house No!";
		document.getElementById("validationHouseNoFeedback").className = "invalid-feedback";
		studentFormData.houseNo = null;
	} else {
		document.getElementById("validationHouseNo").className = "form-control is-valid";
		document.getElementById("validationHouseNoFeedback").innerHTML = "";
		document.getElementById("validationHouseNoFeedback").className = "valid-feedback";
		studentFormData.houseNo = input.value;
	}
}

function checkVillage(input) {
	if (document.getElementById("validationVillage").value == "") {
		document.getElementById("validationVillage").className = "form-control is-invalid";
		document.getElementById("validationVillageFeedback").innerHTML = "invalid village!";
		document.getElementById("validationVillageFeedback").className = "invalid-feedback";
		studentFormData.village = null;
	} else {
		document.getElementById("validationVillage").className = "form-control is-valid";
		document.getElementById("validationVillageFeedback").innerHTML = "";
		document.getElementById("validationVillageFeedback").className = "valid-feedback";
		studentFormData.village = input.value;
	}
}

function checkSubArea(input) {
	if (document.getElementById("validationSubArea").value == "") {
		document.getElementById("validationSubArea").className = "form-control is-invalid";
		document.getElementById("validationSubAreaFeedback").innerHTML = "invalid sub-area!";
		document.getElementById("validationSubAreaFeedback").className = "invalid-feedback";
		studentFormData.subarea = null;		
	} else {
		document.getElementById("validationSubArea").className = "form-control is-valid";
		document.getElementById("validationSubAreaFeedback").innerHTML = "";
		document.getElementById("validationSubAreaFeedback").className = "valid-feedback";
		studentFormData.subarea = input.value;
	}
}

function checkArea(input) {
	if (document.getElementById("validationArea").value == "") {
		document.getElementById("validationArea").className = "form-control is-invalid";
		document.getElementById("validationAreaFeedback").innerHTML = "invalid area!";
		document.getElementById("validationAreaFeedback").className = "invalid-feedback";
		studentFormData.area = null;
	} else {
		document.getElementById("validationArea").className = "form-control is-valid";
		document.getElementById("validationAreaFeedback").innerHTML = "";
		document.getElementById("validationAreaFeedback").className = "valid-feedback";
		studentFormData.area = input.value;
	}
}

function checkProvince(input) {
	if (document.getElementById("validationProvince").value == "") {
		document.getElementById("validationProvince").className = "form-control is-invalid";
		document.getElementById("validationProvinceFeedback").innerHTML = "invalid province!";
		document.getElementById("validationProvinceFeedback").className = "invalid-feedback";
		studentFormData.province = null;
	} else {
		document.getElementById("validationProvince").className = "form-control is-valid";
		document.getElementById("validationProvinceFeedback").innerHTML = "";
		document.getElementById("validationProvinceFeedback").className = "valid-feedback";
		studentFormData.province = input.value;
	}
}

function checkPostcode(input) {
	if (document.getElementById("validationPostcode").value == "") {
		return;
	} 
	if (input.value.length == 5) {
		document.getElementById("validationPostcode").className = "form-control is-valid";
		document.getElementById("validationPostcodeFeedback").innerHTML = "";
		document.getElementById("validationPostcodeFeedback").className = "valid-feedback";
		studentFormData.postcode = input.value;
	} else {
		document.getElementById("validationPostcode").className = "form-control is-invalid";
		document.getElementById("validationPostcodeFeedback").innerHTML = "invalid postcode!";
		document.getElementById("validationPostcodeFeedback").className = "invalid-feedback";
		studentFormData.postcode = null;
	}
}

function checkPhone(input) {
	if (document.getElementById("validationPhone").value == "") {
		return;
	} 
	if (input.value.length == 10 && input.value[0] == 0) {
		document.getElementById("validationPhone").className = "form-control is-valid";
		document.getElementById("validationPhoneFeedback").innerHTML = "";
		document.getElementById("validationPhoneFeedback").className = "valid-feedback";
		studentFormData.phone = input.value;
	} else {
		document.getElementById("validationPhone").className = "form-control is-invalid";
		if(input.value[0] != 0) {
			document.getElementById("validationPhoneFeedback").innerHTML = "first digits must be 0!";
		} else {
			document.getElementById("validationPhoneFeedback").innerHTML = "phone number must contain 10 digits!";
		}
		document.getElementById("validationPhoneFeedback").className = "invalid-feedback";
		studentFormData.phone = null;
	}
}

function checkCall(input) {
	if (document.getElementById("validationPhone").value == "") {
		return;
	}
	if (input.value != null && input.value != "") {
		document.getElementById("validationCall").className = "form-control";
		document.getElementById("validationCallFeedback").innerHTML = "Optional";
		document.getElementById("validationCallFeedback").className = "";
		studentFormData.call = "-";
	}
	if (input.value.length == 10 && input.value[0] == 0 && input.value[1] == 1) {
		document.getElementById("validationCall").className = "form-control is-valid";
		document.getElementById("validationCallFeedback").innerHTML = "";
		document.getElementById("validationCallFeedback").className = "valid-feedback";
		studentFormData.call = input.value;
	} else {
		document.getElementById("validationCall").className = "form-control is-invalid";
		if(input.value[0] != 0 || input.value[1] != 1) {
			document.getElementById("validationCallFeedback").innerHTML = "first two digits must be 01!";
		} else {
			document.getElementById("validationCallFeedback").innerHTML = "call number must contain 10 digits!";
		}
		document.getElementById("validationCallFeedback").className = "invalid-feedback";
		studentFormData.call = null;
	}
	
}

// today 
// var day = new Date();
// function today() {
// 	var dd = String(day.getDate()).padStart(2, '0');
// 	var mm = String(day.getMonth() + 1).padStart(2, '0'); //January is 0!
// 	var yyyy = day.getFullYear();
// 	var today = yyyy + '-' + mm + '-' + dd;
// 	return today;
// }

let studentFormData = {
	date: null,
	title:  null,
	firstName:  null,
	lastName:  null,
	studentId:  null,
	grade:  null,
	faculty:  null,
	advisor:  null,
	houseNo:  null,
	village:  null,
	subarea:  null,
	area:  null,
	province:  null,
	postcode:  null,
	phone:  null,
	call:  "-",
	subjectList : []
};

window.onpageshow = function(){
	// checkDate(document.getElementById("validationDate").value);
    checkAdvisor(document.getElementById("validationAdvisor").value);
	checkArea(document.getElementById("validationArea").value);
	checkCall(document.getElementById("validationCall").value);
	checkField(document.getElementById("validationField").value);
	checkFirstname(document.getElementById("validationFirstname").value);
	checkGrade(document.getElementById("validationGrade").value);
	checkHouseNo(document.getElementById("validationHouseNo").value);
	checkLastname(document.getElementById("validationLastname").value);
	checkPhone(document.getElementById("validationPhone").value);
	checkPostcode(document.getElementById("validationPostcode").value);
	checkProvince(document.getElementById("validationProvince").value);
	checkStudentId(document.getElementById("validationStudentId").value);
	checkSubArea(document.getElementById("validationSubArea").value);
	checkTitle(document.getElementById("validationTitle").value);
	checkVillage(document.getElementById("validationVillage").value);
}

// jquery disable input
editform(0);
function editform(x) {
	if (x == 0) {
		$(document).ready(function(){
			$(".needs-validation :input").prop("disabled", true);
		});
	} else {
		$(document).ready(function(){
			$(".needs-validation :input").prop("disabled", false);
		});
	}
}