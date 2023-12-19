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

appendWorkExperience("Event Photographer", "", "2017 - Present", "Photographer for Cassero LGBT center, JamSession music school, film festivals and private events.");
appendWorkExperience("1st Assistant Director", "The Morning After | ","2022", "Short film production with Roundhouse.");
appendWorkExperience("1st Assistant Director", "Datura Daydream | ","2022", "Production of a series of interviews on reading with important people for Bologna.");
appendWorkExperience("Short Film Selection for Film Festival", "Gli anni in tasca | ","2017 - 2020", "Selection of short films to be shown in competition at YoungAbout Film Festival.");
appendWorkExperience("Film Judge", "Gli anni in tasca | ","2015 - 2020", "Film judge in the youth jury at YoungAbout Film Festival.");
appendWorkExperience("Documentary Film Maker", "Il sole in cantina | ","2019", "Production of a short documentary about music and history. Production of a series of interviews.");
appendWorkExperience("Film Festival Organiser", "Some Prefer Cake and Genderbender | ","2017 - 2019", "Usher, Photography, Technical Organisation of the Festival, Sales Operator.");
appendWorkExperience("Film Tutor", "Mediateca di San Lazzaro | ","2019", "Tutor younger people in making a short video.");
appendWorkExperience("Internship TV", "Twofour54 | ","2018", "Internship in television where I rehearsed every role in a live news programme.");
appendWorkExperience("Documentary Film Maker", "Younet | ","2017 - 2018", "Cultural exchange in Germany to make a documentary about young jugglers. Interviewer.");
appendWorkExperience("Director", "Salaborsa, Cineteca di Bologna | ","2014 - 2015", "Production of a short film for the municipal library.");



/*<h2>Work Experience</h2>
<h3>Event Photographer</h3>
<h4>2017 - Present</h4>
<p>Photographer for Cassero LGBT center, JamSession music school, film festivals and private events.
</p> */
