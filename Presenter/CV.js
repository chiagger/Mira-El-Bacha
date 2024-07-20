const column1 = document.querySelector(".column1");
const column2 = document.querySelector(".column2");
const topExperience = document.querySelector(".topExperience");

function appendWorkExperience(column, jobTitle, employer, date, description) {
  var workexperience1 = document.createElement("div");
  workexperience1.classList.add("work-experience1");

  // Create and append h3 element for job title
  var h3 = document.createElement("h3");
  h3.textContent = jobTitle;
  workexperience1.appendChild(h3);

  // Create and append h4 element for date range
  var h4 = document.createElement("h4");
  h4.textContent = employer + date;
  workexperience1.appendChild(h4);

  // Create and append p element for description
  var p = document.createElement("p");
  p.textContent = description;
  workexperience1.appendChild(p);

  column.appendChild(workexperience1);
  // Append the new workExperienceDiv to the container div
}

appendWorkExperience(
  topExperience,
  "1st Assistant Director",
  "The Black Pill | ",
  "2024",
  ""
);

appendWorkExperience(
  topExperience,
  "1st Assistant Director",
  "The Sandman | ",
  "2024",
  ""
);

appendWorkExperience(
  topExperience,
  "1st Assistant Director",
  "The Chopping Block | ",
  "2024",
  ""
);

appendWorkExperience(
  topExperience,
  "1st Assistant Director",
  "That's All From Me | ",
  "2024",
  ""
);
appendWorkExperience(
  topExperience,
  "1st Assistant Director",
  "PVC Real Estate | ",
  "2024",
  ""
);
appendWorkExperience(
  topExperience,
  "1st Assistant Director",
  "The Barn | ",
  "2024",
  ""
);
appendWorkExperience(
  topExperience,
  "1st Assistant Director",
  "In Two Minds | ",
  "2024",
  ""
);
appendWorkExperience(
  topExperience,
  "1st Assistant Director",
  "You Won't Help Me | ",
  "2023 - 2024",
  ""
);
appendWorkExperience(
  topExperience,
  "1st Assistant Director",
  "Datura Daydream | ",
  "2022",
  ""
);
appendWorkExperience(
  topExperience,
  "1st Assistant Director",
  "The Morning After | ",
  "2022",
  ""
);
appendWorkExperience(
  topExperience,
  "1st Assistant Director",
  "Rise Like Water | ",
  "2021",
  ""
);
appendWorkExperience(
  topExperience,
  "1st Assistant Director",
  "Fragile | ",
  "2021",
  ""
);

//appendWorkExperience(column1, "____________________________________________","","","");

appendWorkExperience(
  column1,
  "Production Assistant",
  "This Person Does Not Exist | ",
  "2022",
  "Short film production."
);
appendWorkExperience(
  column1,
  "Documentary Film Maker",
  "Il sole in cantina | ",
  "2019",
  "Production of a short documentary about music and history. Production of a series of interviews."
);
appendWorkExperience(
  column1,
  "Film Festival Organiser",
  "Some Prefer Cake and Genderbender | ",
  "2014 - 2020",
  "Administrative work to put the festival together, from getting more volunteers to helping choose the films to be screened."
);
appendWorkExperience(
  column1,
  "Film Tutor",
  "Mediateca di San Lazzaro | ",
  "2019",
  "Tutor younger people in making a short video."
);
appendWorkExperience(
  column2,
  "Events Organiser",
  "Cassero LGBT Center | ",
  "2015 - 2020",
  "Coordinated a team to organise events and awareness campaigns. Did a lot of team-building."
);
appendWorkExperience(
  column2,
  "Internship TV",
  "Twofour54 | ",
  "2018",
  "Internship in television where I rehearsed every role in a live news programme."
);
appendWorkExperience(
  column2,
  "Documentary Film Maker",
  "Younet | ",
  "2017 - 2018",
  "Cultural exchange in Germany to make a documentary about young jugglers. Interviewer."
);
appendWorkExperience(
  column2,
  "Director",
  "Salaborsa, Cineteca di Bologna | ",
  "2014 - 2015",
  "Production of a short film for the municipal library."
);

/*<h2>Work Experience</h2>
<h3>Event Photographer</h3>
<h4>2017 - Present</h4>
<p>Photographer for Cassero LGBT center, JamSession music school, film festivals and private events.
</p> */
