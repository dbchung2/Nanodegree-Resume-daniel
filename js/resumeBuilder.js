/*
This is empty on purpose! Your code to build the resume will go here.
 */

 
	var bio = {
			"name": "Daniel Chung",
			"role": "University of Toronto New Grade",
			"contacts": [{
				"mobile": "6479648587",
				"email": "dbchung2@gmail.com",
				"github": "https://github.com/dbchung2",
				"location": "toronto"
			}],
			"welcomeMessage": "Welcome to Daniel's resume :) .",
			"skills": ["Java", "Python", "C", "MATLAB", "SQL", "Shell Script", "JavaScript", "HTML", "XML", "CSS", "GitHub"],
			"image" : "images/daniel.jpg",
			"biopic": "https://www.linkedin.com/in/daniel-chung-1a3567a0?trk=hp-identity-name"

		};

	bio.display = function() {
		let formattedName = HTMLheaderName.replace("%data%",bio.name);
		let formattedRole = HTMLheaderRole.replace("%data%",bio.role);
		let formattedImage = HTMLbioPic.replace("%data%",bio.image);
		let formattedMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);

		$("#header").prepend(formattedRole).prepend(formattedName).append(formattedImage,formattedMessage).append(HTMLskillsStart);

		for(skill in bio.skills) {
			let formattedSkills = HTMLskills.replace("%data%",bio.skills[skill]);
			$("#skills").append(formattedSkills);
		};

		for(contact in bio.contacts) {
			let formattedMobile = HTMLmobile.replace("%data%",bio.contacts[contact].mobile);
			let formattedEmail = HTMLemail.replace("%data%",bio.contacts[contact].email);
			let HTMLgithub = HTMLcontactGeneric.replace("%contact%","github").replace("%data%",bio.contacts[contact].github);
			$("#footerContacts").append(formattedMobile,formattedEmail,HTMLgithub);
			$("#topContacts").append(formattedMobile,formattedEmail,HTMLgithub);
		};
	};

	var education  = {
		"schools": [{
			"name": "University of Toronto",
			"location": "Toronto",
			"degree": "HONOURS B.Sc",
			"majors": "Computer Science Specialist",
			"dates": "2012-2016"
		}, {
			"name": "Fu Dan",
			"location": "Taiwan",
			"degree": "High School",
			"dates": "2010-2012"
		}],
		"onlineCourses": [{
			"title": "JavaScript",
			"school": "Udacity",
			"date": "2016",
			"url": "https://classroom.udacity.com/courses/ud804/lessons/3077038869/concepts/30710886400923#"
		}, {
			"title": "JavaScript Road Trip & SE2015",
			"school": "Code School",
			"date": "2016",
			"url": "https://www.codeschool.com/courses/es2015-the-shape-of-javascript-to-come"
		}]
	};


	education.display = function() {
		for(school in education.schools) {
			$("#education").append(HTMLschoolStart);
			
			let formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
			let formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
			let formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
			let formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
			let formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
			$(".education-entry:last").append(formattedName + formattedDegree,formattedDates,formattedLocation,formattedMajor);
		}
	};

	var work = {
		"jobs" : [
		{
			"employer" : "Hong Ming Cram School", 
			"title" : "Taiwan & china's History Teaching assistant",
			"dates" : "2012",
			"location" : "Taiwan",
			"description" : "Help during lecture"
		}]
	};

	work.display = function() {
		for(job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			
			let formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
			let formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
			let formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
			let formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
			let formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);

			$(".work-entry:last").append(formattedEmployer + formattedTitle,formattedDates,formattedLocation,formattedDescription);
		}

	};

	var projects = {
		"project" : [{
			"title" : "Android Food App (Dish review) - prototype",
			"dates" : "2015", 
			"description" :  ["* Developed a dish reviewing app under an agile software development life Cycle written in Android and SQLite." ,
							 "* Communicated, cooperated and developed with a group of six members by using GitHub as our version control system." ,
							 "* Built an application in which users could sign up to share, review, comment, and discuss specified dishes at a given restaurant"],
			"images" : []
		},
		{
			"title" : "Facial Tracking Software ",
			"dates" : "2016", 
			"description" : ["* Created a facial recognition program that performs shot, logo and face detection, face tracking and gender classification. (written in MATLAB)",
							 "* Received a 92 percent accuracy on shots detecting by using the Euclidean distance of binary level histogram comparison method.",
							 "* Demonstrated the result with robust face tracking video result."
							], 
			"images" : ["images/1 (1).jpg","images/1 (2).jpg","images/1 (3).jpg","images/1 (4).jpg","images/1 (5).jpg","images/1 (6).jpg"]
		}]
	};

	projects.display = function(){
		for(item in projects.project){
			$("#projects").append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace("%data%",projects.project[item].title);
			var formattedDates = HTMLprojectDates.replace("%data%",projects.project[item].dates);	
			$(".project-entry:last").append(formattedTitle,formattedDates);

			for (description in projects.project[item].description){
				var formattedDescription = HTMLprojectDescription.replace("%data%",projects.project[item].description[description]);
				$(".project-entry:last").append(formattedDescription);
			}
			
		    $(".project-entry:last").append(HTMLprojectContainer);
			for (image in projects.project[item].images) {
				var formattedImage = HTMLprojectImage.replace("%data%",projects.project[item].images[image]);
				$(".container:last").append(formattedImage);
			};

		}
	};


	bio.display();
	work.display();
	education.display();
	projects.display();

	$("#main").append(internationalizeButton);
    $("#mapDiv").append(googleMap);
    /*$('.biopic').hover(function() {
    	$(this).toggle({
          effect: "scale",
          percent: "90%"
        });})*/
