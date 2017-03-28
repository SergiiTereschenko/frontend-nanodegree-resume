//$("#main").append("Segiy Tereschenko");


//var email = "sergii.tereschenko@ukr.net";
//var newMail = email.replace("ukr.net", "gmail.com");
//
//console.log(email);
//console.log(newMail);


//var awesomeThoughts = "I am Sergey and I am awesome!";
//var funThoughts = awesomeThoughts.replace("awesome", "fun");
//$("#main").append(funThoughts);


//var formattedName, formattedRole;
//formattedName = "Sergiy Tereschenko";
//formattedRole = "web developer";
//formattedName = HTMLheaderName.replace("%data%", formattedName);
//formattedRole = HTMLheaderRole.replace("%data%", formattedRole);
//$("#header").append(formattedName);
//$("#header").append(formattedRole);


//var toReplace = "audacity";
//var slice = toReplace.slice(1);
//$("#header").append(slice);
//console.log(slice.replace("u", "U"));
//console.log(slice.prepend("FFFF"));


//var arr1 = [1,2,3];
//$("#main").append(arr1);


//arr1.forEach(function (elem, index, arr) {
//    console.log("Before: ", arr1);
//    arr1.push(arr1.pop() + 1);
//    console.log("After : ",arr1);
//});


//var beginStr = "cAmEROn PittMAN";
//
//var split = beginStr.trim().split(" ");
//
//var part1 = split[0].toLowerCase();
//var firstLetter = part1.charAt(0).toUpperCase();
//var slicedPart1 = part1.slice(1);
//var result = firstLetter + slicedPart1 + " " + split[1].toUpperCase();
//console.log(result);


var skills = ["clever", "self-confident", "experienced", "senior Java developer"];

var bio = {
    "name": "Sergiy Tereschenko",
    "role": "Web Developer",
    "contacts": {
        mobile: "900-082-516-25-23",
        email: "test@mail.com",
        github: "SergiiTereschenko",
        twitter: "@STers",
        location: "Ukraine, Kiev"
    },
    welcomeMessage: "Hi There, World! I'm glad to see you!",
    //pictureUrl : "images/SuperMario.jpg",
    pictureUrl: "images/benderovec.png",
    "skills": skills
};

//bio.age = "35";
//bio["city"] = "Kiev";

//var work = {};
//work.position = "Java Developer";
//work.employer = "Global Logic";
//work.years = "2002-2015";

//var education = {};
//education["name"] = "National Technical University of Ukraine KPI";
//education["schoolYears"] = "1998-2002";
//education["city"] = "Kiev";


var work = {
    "jobs" : [
        {
            "employer": "NTUU KPI",
            "tittle" : "engineer",
            "location" : "Политехнический институт, город Киев, Украина",
            "dates" : "2003 - 2010",
            "description" : "Engineer and Fortran developer. And some longer longer longer longer description to fill the layout with some longer longer longer text."
        },
        {
            "employer": "GlobalLogic",
            "tittle" : "java developer",
            "location" : "вулиця Миколи Грінченка, 2/1, Київ, Украина",
            "dates" : "2010 - 2013",
            "description" : "GlobalLogic Ukraine.  And some longer longer longer longer description to fill the layout with some longer longer longer text."
        },
        {
            "employer": "EngagePoint",
            "tittle" : "java developer",
            "location" : "вул. Кутузова, 18/7, Київ, Украина",
            "dates" : "2013 - Current time",
            "description" : "EngagePoint Ukraine.  And some longer longer longer longer description to fill the layout with some longer longer longer text."
        }
    ]
};

var projects = {
    "projects" : [
        {
            "tittle" : "DCAT",
            "dates" : "2010-2012",
            "description" : "GlobalLogic/Telcordia, Tool for fast telecommunication product creation",
            "images" : ["http://en.samsyn.is/media/originals/12a060fdc022d8ae.PNG"]
        },
        {
            "tittle" : "Ericsson Experience Manager",
            "dates" : "2012-2013",
            "description" : "GlobalLogic/Ericsson, Monitoring system",
            "images" : ["http://sony-ericsson.ru/uploads/posts/2012-11/1352985276_Telcel-Partners-With-Ericsson-For-4G-LTE-Launch-In-Mexico.png",
                        "http://www.biztechafrica.com/media/images/stories/_thumbs/ericssontelcordia_jpg_410x270_upscale_q85.jpg"]
        },
        {
            "tittle" : "Transact",
            "dates" : "2013-2014",
            "description" : "EngagePoint, Event system",
            "images" : ["http://s.developers.org.ua/CACHE/images/img/static/companies/ep/05a1084c2dcce9c1bf5d0424b1f9b588.png",
                "http://mediavektor.org/uploads/it17.jpg"]
        },
        {
            "tittle" : "Finance",
            "dates" : "2014-current time",
            "description" : "EngagePoint, Health care related billing system.",
            "images" : ["http://s.developers.org.ua/CACHE/images/img/static/companies/ep/05a1084c2dcce9c1bf5d0424b1f9b588.png",
                "http://mediavektor.org/uploads/it17.jpg"]
        }
    ]
};


var education = {
    "schools": [
        {
            "name": "Secondary School #8",
            "city": "Brovary, UA",
            "degree": "pupil",
            "major": ["CompSci", "Math"],
            "year": 1997,
            "url": "http://example.com",
            "location": "вулиця Марії Лагунової, 11А Бровари Київська область Украина"
        },
        {
            "name": "NTUU KPI",
            "city": "Kiev, UA",
            "degree": "master",
            "major": ["Strength of Materials", "CompSci", "Math"],
            "year": 2002,
            "url" : "http://example.com",
            "location": "Политехнический институт, город Киев, Украина"
        }
    ],
    "onlineCourses" : {
        "title" : "udacity",
        "school" : "js",
        "dates" : 2016,
        "url" : "https://www.udacity.com/course/"
    }
};



var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#nameRole").append(formattedName);
$("#nameRole").append(formattedRole);


$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
//$("#header").append(HTMLlocation.replace("%data%", bio["age"]));
$("#topContacts").append(HTMLblog.replace("%data%", bio["city"]));

$("#header").append(HTMLbioPic.replace("%data%", bio.pictureUrl));
$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));



if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    bio.skills.forEach(function(item){
        $("#skills").append(HTMLskills.replace("%data%", item));
    });
}



//
//$("#main").append(work["position"]);
//$("#main").append(education.name);


function displayWork() {
    for(job in work.jobs){
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].tittle);
        $(".work-entry:last").append(formattedEmployer + formattedTitle);
        //$(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
        $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
        $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
    }
}

displayWork();


//$(document).click(function(loc) {
//    logClicks(loc.pageX, loc.pageY);
//});


function locationizer(work_obj) {
    var array = [];
        work_obj.jobs.forEach(function(job){
            array.push(job.location);
        });
    return array;
}


function inName() {
    var name = bio.name.split(" ");
    name[1] = name[1].toUpperCase();
    name[0] = name[0].toLowerCase();
    var firstLetter = name[0].charAt(0).toUpperCase();
    var slicedPart1 = name[0].slice(1);
    return firstLetter + slicedPart1 + " " + name[1];
}

$("#main").append(internationalizeButton);




projects.display = function() {
    for(p in projects.projects){
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[p].tittle));
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[p].dates));
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[p].description));
        $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[p].images[0]));
    }
};

projects.display();


//$(document).click(function(loc) {
//    console.log(loc.pageX, loc.pageY);
//});


$("#mapDiv").append(googleMap);