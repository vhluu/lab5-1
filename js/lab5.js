
// This serves as a fake database:
var simpleData = {'title': 'Waiting in Line',
						'profilePic': 'images/lorempixel.people.1.jpeg',
						'index': 1};

var complexData = [
	{'title': 'Needfinding', 'profilePic': 'images/lorempixel.city.1.jpeg', 'index': 2},
	{'title': 'Prototyping', 'profilePic': 'images/lorempixel.technics.1.jpeg', 'index': 3},
	{'title': 'Heuristic Evaluation', 'profilePic': 'images/lorempixel.abstract.1.jpeg', 'index': 4},
	{'title': 'Visualization', 'profilePic': 'images/lorempixel.abstract.8.jpeg', 'index': 5},
	{'title': 'Social design', 'profilePic': 'images/lorempixel.people.2.jpeg', 'index': 6},
	{'title': 'Gestural interaction', 'profilePic': 'images/lorempixel.technics.2.jpeg', 'index': 7},
	{'title': 'Design tools', 'profilePic': 'images/lorempixel.city.2.jpeg', 'index': 8}
]

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	console.log("rendering Handlebars template");

	// compile the template
	var source   = $("#entry-template").html();
	var template = Handlebars.compile(source);

	var parentDiv = $("#templatedProjects");

	var choice = JSON.parse(localStorage.getItem("grid"));
	
	// start with a simple template
	simpleData.grid = choice;
	var html = template(simpleData);
	// console.log(html);
	parentDiv.append(html);

	// now iterate through the complexData list and keep appending:
	for (var i = 0; i < complexData.length; i++) {
		complexData[i].grid = choice;
		var curData = complexData[i];
		var curHtml = template(curData);
		parentDiv.append(curHtml);
	}


	// when you first load the page, set a custom name if you have one:
	var name = localStorage.getItem("customName");
	if (name) {
		$("#myName").html(name);
	}

	// use localStorage to store your name
	$("#changeName").click(function() {
		var newName = prompt("What's your new name?");
		if (newName) {
			$("#myName").html(newName);
			localStorage.setItem("customName", newName);
		}
	});

	// insert click handler here
	// so that it will be registered once the page has been loaded
	$(".likeBtn").click(function() {
		console.log("like button clicked"); // fix smart quote from slide!
		// tracker code here, refer to slide #26 and #27
		tracker = ga.getAll()[0];
		tracker.send('event', 'like', 'click');
	});
});

// do not write click handler here!
