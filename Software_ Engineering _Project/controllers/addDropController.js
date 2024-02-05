var rowcount = 2;
var day = new Date();
var myJSON;

function createRow() {
	if(rowcount==11) {
		alert("Maximun subject");
	}
	else {
		var table = document.getElementById('subjectList');
		var row = table.insertRow(rowcount);
		var num = row.insertCell(0);
		var sub = row.insertCell(1);
		var sname = row.insertCell(2);
		var sec = row.insertCell(3);
		var date = row.insertCell(4);
		var unit = row.insertCell(5);
		var tname = row.insertCell(6);
		var allow = row.insertCell(7);
		var addOr = row.insertCell(8);
		num.innerHTML = rowcount + '.';
		sub.innerHTML = "<input type='text' class='form-control' id='validationSubjectId' name='subjectId' placeholder='subject-ID' required>";
		sname.innerHTML = "<input type='text' class='form-control' id='validationSubjectName' name='subjectName' placeholder='subject name' required>";
		sec.innerHTML = "<input type='number' class='form-control' id='validationSection' name='section' max='999999' placeholder='section' required>";
		date.innerHTML = "<input type='text' class='form-control' id='validationDate' name='classDate' placeholder='class date' required>"; 
		unit.innerHTML = "<input type='number' class='form-control' id='validationUnit' name='unit' min=1 placeholder='unit' required>";
		tname.innerHTML = "<input type='text' class='form-control' id='validationTeacher' name='teacher' placeholder='instructor name' required>";
		allow.innerHTML = "<input type='checkbox' class='form-checkbox' id='validationAllow' name='allow'>";
		addOr.innerHTML = "<select class='form-select' id='validationAddOrwithdraw' name='addOrwithdraw' required><option selected disabled value=''>-</option><option value='add'>เพิ่ม</option><option value='withdraw'>ถอน</option></select>";
		document.getElementById("count").innerHTML = rowcount;
		rowcount++;
	}
	for(let i in studentform.subjectList) {
		let shifted = studentform.subjectList.shift();
	}
}

function deleteRow() {
	if(rowcount==2) {
		alert("A request should be submitted for at least one subject.");
	}
	else {
		var table = document.getElementById('subjectList');
		var row = table.deleteRow(rowcount-1);
		rowcount--;
		document.getElementById("count").innerHTML = rowcount-1;
	}
	for(let i in studentform.subjectList) {
		let shifted = studentform.subjectList.shift();
	}
}

let studentform = {
	studentId:  null,
	subjectList : []
};

function getTableData() {
	let newSubject = {
		subjectId : null,
		subjectName : null,
		section : null,
		classDate : null,
		unit : null,
		teacherName : null,
		allow : null,
		addOrWithdraw : null
	};
	var table = document.getElementById('subjectList');
	let j=1;
	for(let i=1 ; i<rowcount ; i++) {
		for(let keys in newSubject) {
			newSubject[keys] = table.rows[i].cells[j].children[0].value;
			if(keys == "allow") {
				newSubject[keys] = document.getElementById("validationAllow").checked;
			}
			j++;
		}
		j=1;
		studentform.subjectList.push(newSubject);
		newSubject = {
		subjectId : null,
		subjectName : null,
		section : null,
		classDate : null,
		unit : null,
		teacherName : null,
		allow : null,
		addOrWithdraw : null
	};
	}
	myJSON = JSON.stringify(studentform);
}

function today() {
	var dd = String(day.getDate()).padStart(2, '0');
	var mm = String(day.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = day.getFullYear();
	var today = yyyy + '-' + mm + '-' + dd;
	document.getElementById("validationDate").defaultValue = today;
	return today;
}
function checkDate(input) {
	if (document.getElementById("validationDate").value == today()) {
		document.getElementById("validationDate").className = "form-control is-valid";
		document.getElementById("validationDateFeedback").innerHTML = "";
		document.getElementById("validationDateFeedback").className = "valid-feedback";
		document.getElementById("validationDate").style.pointerEvents = "none";
		studentform.date = input.value;
	} else {
        document.getElementById("validationDate").className = "form-control is-invalid";
		document.getElementById("validationDateFeedback").innerHTML = "date must be today";
		document.getElementById("validationDateFeedback").className = "invalid-feedback";
		document.getElementById("validationDate").style.pointerEvents = "none";
    }
}
window.onpageshow  = function(){
    today();
    checkDate(document.getElementById("validationDate").value);
}