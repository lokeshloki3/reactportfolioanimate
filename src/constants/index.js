import project1 from "../assets/projects/shoppingcart.png";
import project2 from "../assets/projects/blog.png";
import project3 from "../assets/projects/jobs.png";
import project4 from "../assets/projects/portfolio.png";
import project5 from "../assets/projects/cortihear.png";
import project6 from "../assets/projects/weather.png";
import project7 from "../assets/projects/password.png";
import project8 from "../assets/projects/discord.png";

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
    technologies: ["HTML", "CSS", "React", "Tailwind", "Router", "sessionStorage", "Vite"],
	githubPage: "https://lokeshloki3.github.io/reactjobsvitefull/",
  },
  {
    title: "Portfolio Website",
    image: project4,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind", "Router", "React Icons"],
	githubPage: "https://lokeshloki3.github.io/reactportfolio/",
  },
  {
    title: "Cortihear - Dr Appointment",
    image: project5,
    description:
    "Created frontend of a single-page website using React for Doctor appointments, which includes options for categories of blog posts, a blog page, and testimonial slides. The webpage is mobile-responsive.",
    technologies: ["HTML", "CSS", "React", "Tailwind CSS", "Router"],
	githubPage: "https://cortihear.netlify.app/",
  },
  {
    title: "Weather App",
    image: project6,
    description:
      "The website displays weather data for your current city as well as any city you search for. The data is fetched using an API call.",
    technologies: ["HTML", "CSS", "JavaScript"],
	githubPage: "https://lokeshloki3.github.io/Weather-App-api-fetch-JS/",
  },
  {
    title: "Password Generator",
    image: project7,
    description:
      "Created a Random Password Generator webpage with slider to adjust length, password strength indicator, and options for numbers, uppercase and lowercase letters, special characters, and copy functionality using JavaScript, CSS, HTML.",
    technologies: ["HTML", "CSS", "JavaScript"],
	githubPage: "https://lokeshloki3.github.io/Password-Generator/",
  },
  {
    title: "Discord Clone",
    image: project8,
    description:
      "A website that is a clone of the Discord website using Tailwind CSS.",
    technologies: ["HTML", "CSS", "Tailwind"],
	githubPage: "https://lokeshloki3.github.io/discordclone/",
  },
];

export const CONTACT = {
  phoneNo: "+91 9311354886",
  email: "lokesh1992p@gmail.com",
};
