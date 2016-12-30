/*
This is empty on purpose! Your code to build the resume will go here.
 */

/*
var email = "amertens114@gmail.com";
var newEmail = email.replace("gmail", "rogers");

console.log(email);
console.log(newEmail);
*/

//Creating my bio
var bio	= {
	"name": "Alexander James Mertens",
	"role": "Computer Engineering Student",
	"skills": ["enter", "skills", "here", "later"],
	"picture": "images/fry.jpg",
	"email": "amertens114@gmail.com",
	"message": "fill this in later",
	"city": "Toronto"
};

var work = {
	"jobs": [
		{"employer": "Tracy",
		"title": "Coach",
		"location": "Toronto",
		"dates": "Summer 2016",
		"description": "RAYMOND IS A HUUUUUUUGEF FAGGOT AND HE REALLY DID IT"},
		{"employer": "Nick",
		"title": "Senior Assistant Manager",
		"location": "Toronto",
		"dates": "Summer 2016",
		"description": "INSERT DESCRIPTION OF NICK"}
	]
};


var education = {
	"schools": [
		{
		"name": "University of Toronto",
		"years": "2015 - 2019",
		"major": "Computer Engineering"
		},
		{
		"name": "Upper Canada College"
		}
	]
};

var projects = {};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

//Adding them to the screen
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

if(bio.skills.length > 0)	{
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
}

for(job in work.jobs)	{
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	var formattedWork = formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription;

	$(".work-entry:last").append(formattedWork);
}
//other shit

//education["school"] = "University of Toronto";



//var formattedContact = HTMLcontactGeneric.replace("%contact%", "contact");
//formattedContact = HTMLcontactGeneric.replace("%data%", "data");
//var formattedSchoolName = HTMLschoolName.replace("%data%", "University of Toronto");



//$("#education").append(formattedSchoolName);


//$("#main").append(work["employer"], education.schools[0].name);