window.onload = addBios;

$(document).ready(function(){
	//smooth scroll for arrow
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});

	resizeSections();
});

//resize headerrow on window resize
$(window).resize(function(){
	resizeSections();
});

function resizeSections(){
	var heightwindow = $(window).height();
	$('.headerrow').css('height', heightwindow+'px');
	// $('.bannercontainer').css('height', heightwindow+'px');
	$('.section').css('min-height', heightwindow+'px');
}

var biosArray = [
["Michael Adams T '13","","Senior","Pinehurst, NC","Adams.jpg"],
["Jake Bernstein T '13","","Senior","St. Louis, MO","Bernstein.jpg"],
["Ryan Briggs T '13","","Senior","Charlotte, NC","Briggs.jpg"],
["Turker Bulut T '13","","Senior","Balikesir, Turkey","Bulut.jpg"],
["Joe Calder T '13","","Senior","Cary, North Carolina","Calder.jpg"],
["Michael Catalano T '13","","Senior","Smithtown, NY","Catalano.jpg"],
["Daniel Holmgren T '13","","Senior","Nixa, MO","Holmgren.jpg"],
["Fedor Kossakovski T '13","","Senior","Pasadena, CA","Kossakovski.jpg"],
["Daniel Peters T '13","","Senior","Nashville, TN","Peters.jpg"],
["Jacob Rosenberg T '13","","Senior","Greensboro, NC","Rosenberg.jpg"],
["Otis Skipper T '13","","Senior","Asheville, NC","Skipper.jpg"],
["Brandon Wong T '13","","Senior","Poolesville, MD","Wong.jpg"],
["Krunal Amin T '13","","Senior","","Amin.jpg"],
["Ezra Baeli-Wang T '13","","Junior","","Baeli-Wang.jpg"],
["Pranav Haravu T '13","","Senior","","Haravu.jpg"],
["Nabil Lachgar T '13","","Senior","Winston-Salem, NC", "NLachgar.jpg"],
["Jack Largess T '13","","Senior","Charlotte, NC","Largess.jpg"],
["Tony Liu T '13","","Junior","Lindon, UT","Liu.jpg"],
["Patrick Lowery T '13","","Senior","Appleton, WI","Lowery.jpg"],
["Theo Onigbinde T '13","","Junior","","Onigbinde.jpg"],
["Vijay Rajkumar T '13","Treasurer","Junior","Singapore","Rajkumar.jpg"],
["John Sincavage T '13","","Senior","Malvern, PA","Sincavage.jpg"],
["Jack Cordes T '14","Risk Chair","Junior","Lincolnshire, IL","Cordes.jpg"],
["Steven Deepee T '14","","Junior","Fayetteville, NC","Deepee.jpg"],
["Brannum Forsyth T '14","Secretary","Junior","Birmingham, AL","Forsyth.jpg"],
["Will Harris T '14","Brotherhood Chair","Junior","Gastonia, NC","Harris.jpg"],
["Erik Schoning T '14","Sergeant at Arms","Junior","","Schoning.jpg"],
["Brian Shields T '14","","Junior","","Shields.jpg"],
["Griffin Unger T '14","","Junior","","Unger.jpg"],
["Andrew Brennen T '14","","Sophomore","Lexington, KY","Brennen.jpg"],
["Paul Irby T '14","Head of House","Junior","","Irby.jpg"],
["Ege Partal T '14","","Sophomore","","Partal.jpg"],
["Ade Olatunde T '14","","Sophomore","","Olatunde.jpg"],
["Amogh Sharma T '14","Service Chair","Sophomore","Dubai, UAE","Sharma.jpg"],
["Mohit Chandi T '15","","Sophomore","Elizabeth City, NC","Chandi.jpg"],
["Andrew Clark T '15","Vice President","Sophomore","Chattanooga, TN","Clark.jpg"],
["David Doochin T '15","Social Chair","Sophomore","Franklin, TN","Doochin.jpg"],
["Derek Fulton T '15","","Sophomore","Charlotte, NC","Fulton.jpg"],
["Michael Gu T '15","","Sophomore","St. Louis, MO","Gu.jpg"],
["Sami Lachgar T '15","Service Chair","Sophomore","Winston-Salem, NC", "SLachgar.jpg"],
["Eric Lee T '15","","Sophomore","St. Louis, MO","Lee.jpg"],
["Lucas McCallen T '15","Pledge Chair","Sophomore","Apex, NC","McCallen.jpg"],
["Ian Muriuki T '15","","Sophomore","Nairobi, Kenya","Muriuki.jpg"],
["Brian Vaughn T '15","PR & Alumni Chair","Sophomore","Daytona Beach, FL","Vaughn.jpg"],
["Nicholas Byrne T '15","Rush Chair","Freshman","Athens, GA","Byrne.jpg"],
["Samuel Eure T '15","","Sophomore","Southern Shores, NC","Eure.jpg"],
["Rob Gourley T '15","","Sophomore","Mooresville, NC","Gourley.jpg"],
["Carter Guensler T '15","","Freshman","Atlanta, GA","Guensler.jpg"],
["Zakary Horine T '15","","Sophomore","Boone, NC","Horine.jpg"],
["Phillip Howard T '15","","Sophomore","Spokane Valley, WA","Howard.jpg"],
["Malik Jabati T '15","Academic Chair","Freshman","Alexandria, VA","Jabati.jpg"]
]

function addBios(){
	html = "";
	// html+= "<div class=\"row\"";
	for(var i = 0; i < biosArray.length;i++){
		if(i%4 == 0){
			html+= "<div class=\"row biosrow\">";
		}
		current = biosArray[i];
		html += "<div class=\"col-xs-6 col-sm-6 col-md-3 col-lg-3 brother\">"
		html += "<img class=\"profile\" src=\"profiles/";
		html += current[4] + "\">";
		html += "<div class=\"bio\"><h4 class=\"black_text\">" + current[0] + "</h4>";
		html += "<p>"+current[1]+"</p>"+"<p>"+current[2]+"</p>"+"<p>"+current[3]+"</p>";
		html += "</div></div>";

		if(i%4 == 3){
			html+="</div>";
		}
	}
	console.log(html);
	// html+="</div>";
	document.getElementById("bios").innerHTML = html;
}