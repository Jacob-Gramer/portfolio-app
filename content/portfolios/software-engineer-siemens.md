---
title: Job Board Site
description: Built out a job board site with a team using Next.js
employee: Jacob Gramer
employmentTime: 10
mainPage: https://res.cloudinary.com/dbvgiuj6d/image/upload/v1673819746/Personal%20Site/ezgif.com-gif-maker_ayhfvh.gif
coverImage: https://res.cloudinary.com/dbvgiuj6d/image/upload/v1672785690/Personal%20Site/Screenshot_from_2023-01-03_16-41-18_e2vtrg.png
date: "2022-10-10"
highlights: [
  "Next.js framework",
  "Authentication using Auth0",
  "MongoDB used to store relevant information"
]
techStack: [
  "JavaScript",
  "Next.JS",
  "Auth0",
  "Axios",
  "React Bootstrap",
  "Google Maps API"
]
---
This job board was the final capstone project from my time at Hack Reactor.  I worked with a team of five other developers to build a site to the specifications of the client that we get through a series of planning meetings with them.
\
\
The home page is set up to serve as a landing page for any users coming to the site, regardless of whether they have logged in or not.  Users can navigate using the navbar on top, or scroll through the page to see the available services, customer testimonials, as well as a footer containing company info and a contact link.
\
\
![Gif of Home Page](https://res.cloudinary.com/dbvgiuj6d/image/upload/v1673819746/Personal%20Site/ezgif.com-gif-maker_ayhfvh.gif)
Home Page
\
\
Authentication for the site was set up using the identity platform Auth0.  Auth0 allows the users to easily register a new account with their email and password, or just through their Google account, and it also allowed us to define the user's role (client, employee, or manager).
\
\
Another responsibility of mine was to design the portal for employers and employees.  I set up the Next Page to conditionally render based on whether the current user had the role of employee or manager.
\
\
![Gif of Manager Portal](https://res.cloudinary.com/dbvgiuj6d/image/upload/v1673820706/Personal%20Site/ezgif.com-gif-maker_2_sfk2tg.gif)
Manager Dashboard
\
\
The manager dashboard gives the user access to all jobs that have been requested by clients.  Using an unfolding accordian, the manager can look at the details of the job and assign it to a specific employee or just add any necessary notes.
\
Below the accordian of jobs is the google maps embed that tracks the specific address of each active job and the schedule of the jobs sorted by date.
\
\
![Gif of Employee Portal](https://res.cloudinary.com/dbvgiuj6d/image/upload/v1673820349/Personal%20Site/ezgif.com-gif-maker_1_rcpug9.gif)
