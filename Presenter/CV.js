const workExperienceDiv = document.querySelector(".work-experience");

function appendWorkExperience(jobTitle, employer, date, description) {

    var workexperience1 = document.createElement("div");
    workexperience1.classList.add("1work-experience");

    // Create and append h3 element for job title
    var h3 = document.createElement('h3');
    h3.textContent = jobTitle;
    workexperience1.appendChild(h3);

    // Create and append h4 element for date range
    var h4 = document.createElement('h4');
    h4.textContent = employer + date;
    workexperience1.appendChild(h4);

    // Create and append p element for description
    var p = document.createElement('p');
    p.textContent = description;
    workexperience1.appendChild(p);

    // Append the new workExperienceDiv to the container div
    workExperienceDiv.appendChild(workexperience1);
}


appendWorkExperience("1st Assistant Director", "Datura Daydream | ","2022", "Short film production.");
appendWorkExperience("1st Assistant Director", "The Morning After | ","2022", "Short film production with Roundhouse.");
appendWorkExperience("1st Assistant Director", "Rise Like Water | ","2021", "Short film production.");
appendWorkExperience("1st Assistant Director", "Fragile | ","2021", "Short film production.");
appendWorkExperience("Production Assistant", "This Person Does Not Exist | ","2022", "Short film production.");
appendWorkExperience("Documentary Film Maker", "Il sole in cantina | ","2019", "Production of a short documentary about music and history. Production of a series of interviews.");
appendWorkExperience("Film Festival Organiser", "Some Prefer Cake and Genderbender | ","2014 - 2020", "Administrative work to put the festival together, from getting more volunteers to helping choose the films to be screened.");
appendWorkExperience("Film Tutor", "Mediateca di San Lazzaro | ","2019", "Tutor younger people in making a short video.");
appendWorkExperience("Events Organiser", "Cassero LGBT Center | ","2015 - 2020", "Coordinated a team to organise events and awareness campaigns. Did a lot of team-building.");
appendWorkExperience("Internship TV", "Twofour54 | ","2018", "Internship in television where I rehearsed every role in a live news programme.");
appendWorkExperience("Documentary Film Maker", "Younet | ","2017 - 2018", "Cultural exchange in Germany to make a documentary about young jugglers. Interviewer.");
appendWorkExperience("Director", "Salaborsa, Cineteca di Bologna | ","2014 - 2015", "Production of a short film for the municipal library.");



/*<h2>Work Experience</h2>
<h3>Event Photographer</h3>
<h4>2017 - Present</h4>
<p>Photographer for Cassero LGBT center, JamSession music school, film festivals and private events.
</p> */
