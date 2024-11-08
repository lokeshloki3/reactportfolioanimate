import project1 from "../assets/projects/shoppingcart.png";
import project2 from "../assets/projects/blog.png";
import project3 from "../assets/projects/jobs.png";
import project4 from "../assets/projects/portfolio.png";
import project5 from "../assets/projects/cortihear.png";
import project6 from "../assets/projects/weather.png";
import project7 from "../assets/projects/password.png";
import project8 from "../assets/projects/topcourses.png";
import project9 from "../assets/projects/testimonials.png";
import project10 from "../assets/projects/tictactoe.png";
import project11 from "../assets/projects/1-8puzzle.png";
import project12 from "../assets/projects/plantour.png";
import project13 from "../assets/projects/devdetectivegithub.png";
import project14 from "../assets/projects/discord.png";

export const HERO_CONTENT = `I am a passionate front-end developer with hands-on experience in building web applications using technologies like React, JavaScript, HTML, CSS, Tailwind. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile front-end developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, JavaScript, HTML, CSS, and Tailwind. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [

  {
    year: "July, 2017 - Sept, 2018",
    role: "Software Engineer",
    company: "Samsung R&D Institute, Noida",
    description: `Contributed to the development of various Samsung Smart TV components, including Cleaner, Remote Management, Settings, and Channel List, enhancing functionality across ATSC, DVB, and ISDB regions by efficiently processing data in JSON format. This work supports ongoing upgrades to the Smart TV UI, ensuring a seamless user experience.`,
    technologies: ["Python", "React", "JavaScript", "HTML", "CSS", "Linux", "C++"],
  },
  {
    year: "Dec, 2016 - June, 2017",
    role: "Software Engineer Trainee",
    company: "Samsung R&D Institute, Noida",
    description: `Gained comprehensive knowledge of Samsung Smart TV components while resolving software image bugs for production and developing a frontend UI to display daily results.`,
    technologies: ["Python", "HTML", "CSS", "Linux", "C++"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "Frontend of a single-page e-commerce website with features such as product listing, shopping cart, total rate of added items, and the ability to add or remove items from the cart, along with toaster notifications.",
    technologies: ["React","HTML", "CSS", "Redux", "Router"],
	githubPage: "https://lokeshloki3.github.io/shoppingcartreact/",

  },
  {
    title: "Blogging Platform",
    image: project2,
    description:
      "A single-page web application that displays blog posts, featuring options like navigating to the next page and filtering blogs by a selected category or hashtag.",
    technologies: ["React","HTML", "CSS", "contextAPI", "Router", "custom Hook"],
	githubPage: "https://lokeshloki3.github.io/react-blog/",
  },
  {
    title: "Jobs Posting Website",
    image: project3,
    description:
      "Frontend of a single-page website for job listings, with options to add a new job, view jobs, edit existing jobs with toaster notifications while maintaining their states, switch tabs, and used sessionStorage of the browser for these backend features.",
    technologies: ["HTML", "CSS", "React", "Tailwind CSS", "Router", "sessionStorage", "Vite"],
	githubPage: "https://lokeshloki3.github.io/reactjobsvitefull/",
  },
  {
    title: "Portfolio Website",
    image: project4,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind CSS", "Router", "React Icons"],
	githubPage: "https://lokeshloki3.github.io/reactportfolio/",
  },
  {
    title: "Cortihear - Dr Appointment",
    image: project5,
    description:
    "Created a single-page React website for Doctor appointments, featuring blog categories, a blog page, testimonial slides, and a 'Book Appointment' popup form that stores data in Google Sheets via a POST request using Google Apps Script. The webpage is also mobile-responsive.",
    technologies: ["HTML", "CSS", "React", "Tailwind CSS", "Router", "Google Sheets & Apps Script"],
	githubPage: "https://lokeshloki3.github.io/drappointment/",
  },
  {
    title: "Weather App",
    image: project6,
    description:
      "The website displays weather data for your current city as well as any city you search for. The data is fetched using an API call.",
    technologies: ["HTML", "CSS", "JavaScript", "fetch API"],
	githubPage: "https://lokeshloki3.github.io/Weather-App-api-fetch-JS/",
  },
  {
    title: "Password Generator",
    image: project7,
    description:
      "Created a Random Password Generator webpage with slider to adjust length, password strength indicator, and options for numbers, uppercase and lowercase letters, special characters, and password copy functionality.",
    technologies: ["HTML", "CSS", "JavaScript"],
	githubPage: "https://lokeshloki3.github.io/Password-Generator/",
  },
  {
    title: "Top Courses",
    image: project8,
    description:
      "Created a top courses webpage with tabs for different course categories and a heart icon for favouriting, featuring toast notifications that indicate whether a course is added or removed from favourites",
    technologies: ["HTML", "CSS", "JavaScript", "Toastify"],
	githubPage: "https://lokeshloki3.github.io/topcoursesreact/",
  },
  {
    title: "Testimonials",
    image: project9,
    description:
      "Created a testimonial webpage featuring Next and Previous buttons for scrolling through testimonials and a Surprise Me button for random selections. Designed with a clean layout to enhance readability and user engagement.",
    technologies: ["HTML", "CSS", "JavaScript"],
	githubPage: "https://lokeshloki3.github.io/testimonialreact/",
  },
  {
    title: "Tic Tac Toe Game",
    image: project10,
    description:
      "Created a Tic Tac Toe game that allows players to select the first player and highlights winning combinations with colored lines. Features a clickable grid, a reset button, and a win-checking algorithm.",
    technologies: ["HTML", "CSS", "JavaScript"],
	githubPage: "https://lokeshloki3.github.io/tictactoe/",
  },
  {
    title: "1-8 Numbers Slider Puzzle Game",
    image: project11,
    description:
      "Developed a Numbers Slider Puzzle Game featuring a grid-based interface where players can slide numbered tiles to arrange them in order. Features a move counter, and reset button. Utilized JavaScript for game logic, CSS for responsive design, and HTML for structure.",
    technologies: ["HTML", "CSS", "JavaScript"],
	githubPage: "https://lokeshloki3.github.io/1-8-Slider-Puzzle/",
  },
  {
    title: "Plan Tour",
    image: project12,
    description:
      "Created an interactive tour guide webpage featuring cards of Indian cities. Option to remove city cards of no interest, with a refresh option to display all cards again once all have been removed.",
    technologies: ["HTML", "CSS", "React", "JavaScript"],
	githubPage: "https://lokeshloki3.github.io/tourguidereact/",
  },
  {
    title: "Github Users - Dev Detective",
    image: project13,
    description:
      "Developed a Dev Detective project that fetches GitHub user data using the API and displays it in an organized format. Features a user-friendly search interface and detailed profiles for each user.",
    technologies: ["HTML", "CSS", "JavaScript", "fetch API"],
	githubPage: "https://lokeshloki3.github.io/devdetectivegithub/",
  },
  {
    title: "Discord Clone",
    image: project14,
    description:
      "A website that is a clone of the Discord website using HTML, and Tailwind CSS.",
    technologies: ["HTML", "CSS", "Tailwind CSS"],
	githubPage: "https://lokeshloki3.github.io/discordclone/",
  },
];

export const CONTACT = {
  phoneNo: "+91 9311354886",
  email: "lokesh1992p@gmail.com",
};
