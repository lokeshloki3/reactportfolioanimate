import project0 from "../assets/projects/studysphere.png";
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
import project15 from "../assets/projects/aisafety.png";
import project16 from "../assets/projects/simpletaskmanager.png";
import project17 from "../assets/projects/simpleecom.png";
import project18 from "../assets/projects/embeddedyouTubeplayer.png";
import project19 from "../assets/projects/taskmanager.png";
import project20 from "../assets/projects/cards.png";
import project21 from "../assets/projects/weatherapi.png";
// import project22 from "../assets/projects/dinogame.png";

export const HERO_CONTENT = `I am a passionate front-end developer with 2 years of hands-on experience in building web applications using technologies like React, JavaScript, HTML, CSS, and Tailwind. Over the years, I have honed my skills in creating responsive, user-friendly interfaces and optimizing performance. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile front-end developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, JavaScript, HTML, CSS, and Tailwind. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Dec, 2024 - Present",
    role: "Web Development Intern",
    company: "Saral Tech, Bangalore",
    description: `Built a networking platform for early-stage startups using React.js, Next.js, and TailwindCSS to connect with investors, improving startup-investor interactions. Managed full-stack development, from backend architecture to frontend implementation. Integrated OAuth 2.0 for secure authentication and SSO, enhancing user security. Transitioned backend to a monolithic Next.js API and Edge model, optimizing performance. Implemented CI/CD pipelines using GitHub Actions and Cloudflare Pages, improving release efficiency. Currently working on an EdTech platform to connect tutors and students, facilitating better learning environments.`,
    technologies: ["React", "JavaScript", "HTML", "CSS", "Tailwind", "Next.js", "CI/CD", "OAuth 2.0"],
  },
  {
    year: "July, 2017 - Sept, 2018",
    role: "Software Engineer",
    company: "Samsung R&D Institute, Noida",
    // description: `Contributed to the development of various Samsung Smart TV components, including Cleaner, Remote Management, Settings, and Channel List, enhancing functionality across ATSC, DVB, and ISDB regions by efficiently processing data in JSON format. This work supports ongoing upgrades to the Smart TV UI, ensuring a seamless user experience.`,
    description: `Built an internal website using React to optimize access to new features and documentation for 52 teams working on Samsung Smart TV, improving workflow efficiency by 25%. Managed all stages of frontend development and deployment from scratch.  Created a responsive interface with CSS and JS, enhancing employee engagement. Reduced onboarding time for new team members by 20% for 500+ employees at SRI, Noida. Worked on ongoing Samsung Smart TV UI upgrades.`,
    technologies: ["React", "JavaScript", "HTML", "CSS", "Linux", "C++"],
  },
  {
    year: "Dec, 2016 - June, 2017",
    role: "Software Engineer Trainee",
    company: "Samsung R&D Institute, Noida",
    // description: `Gained comprehensive knowledge of Samsung Smart TV components while resolving software image bugs for production and developing a frontend UI to display daily results.`,
    description: `Developed a website to display Tizen native system cleaner results for Smart TVs. Stored and displayed results related to cache, memory, temperature, and app data for optimization on website. Resolved software image bugs and gained expertise in Samsung Smart TV components.`,
    technologies: ["HTML", "CSS", "Linux", "C++"],
  },
];

export const PROJECTS = [
  {
    title: "StudySphere EdTech Platform",
    image: project0,
    description:
      `Multi-role (admin, instructor, student), Responsive UI (tab, slider, animation), Email OTP signup, Reset Password, Profile edit (pic, about, cron deletion), Admin adds Category, Instructor creates/edits/deletes course (subsection, video, publish), Earnings charts, Student multi-course Cart, Buy Now, Razorpay payments, Video lectures (accordion, mark complete, navigate), Progress tracking, Star rating, Reviews, Frequently bought course, Contact form.`,
    technologies: ["React", "Express.js", "CSS", "Redux", "MERN", "Tailwind", "Razorpay", "MongoDB"],
    githubPage: "https://studysphere-edtech.vercel.app/",
  },
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "Frontend of a single-page e-commerce website with features such as product listing, shopping cart, total rate of added items, and the ability to add or remove items from the cart, along with toaster notifications.",
    technologies: ["React", "HTML", "CSS", "Redux", "Router"],
    githubPage: "https://lokeshloki3.github.io/shoppingcartreact/",
  },
  {
    title: "Blogging Platform",
    image: project2,
    description:
      "A single-page web application that displays blog posts, featuring options like navigating to the next page and filtering blogs by a selected category or hashtag.",
    technologies: [
      "React",
      "HTML",
      "CSS",
      "contextAPI",
      "Router",
      "customHook",
    ],
    githubPage: "https://lokeshloki3.github.io/react-blog/",
  },
  {
    title: "Jobs Posting Website",
    image: project3,
    description:
      "Frontend of a single-page website for job listings, with options to add a new job, view jobs, edit existing jobs with toaster notifications while maintaining their states, switch tabs, and used sessionStorage of the browser for these backend features.",
    technologies: [
      "HTML",
      "CSS",
      "React",
      "TailwindCSS",
      "Router",
      "Vite",
      "session Storage",
    ],
    githubPage: "https://lokeshloki3.github.io/reactjobsvitefull/",
  },
  {
    title: "Portfolio Website",
    image: project4,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: [
      "HTML",
      "CSS",
      "React",
      "TailwindCSS",
      "Router",
      "React Icons",
    ],
    githubPage: "https://lokeshloki3.github.io/reactportfolio/",
  },
  {
    title: "Clinic Appointment",
    image: project5,
    description:
      "Created a single-page React website for Doctor appointments, featuring blog categories, a blog page, testimonial slides, and a 'Book Appointment' popup form that stores data in Google Sheets via a POST request using Google Apps Script. The webpage is also mobile-responsive.",
    technologies: [
      "HTML",
      "CSS",
      "React",
      "TailwindCSS",
      "Router",
      "Apps Script",
      "Google Sheets",
    ],
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
    title: "E Com UI",
    image: project17,
    description:
      "The web application includes a sign-up system with OTP verification and a login process secured by a token. Categories are dynamically loaded using Faker.js and the app supports pagination for easier navigation. Users can save their interests from the categories into a database, with their selections persisting even after they log out and log back in.",
    technologies: ["React", "JavaScript", "Tailwind", "Vercel", "Express.js", "MongoDB", "Faker.js"],
    githubPage: "https://e-com-nine-tau.vercel.app/",
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
    technologies: ["HTML", "CSS", "TailwindCSS"],
    githubPage: "https://lokeshloki3.github.io/discordclone/",
  },
  {
    title: "Task Manager",
    image: project19,
    description:
      "Built a website with Google sign-in for authentication, task management with title, date, status, and delete options. Tasks can be categorized and filtered by status or due date, with both list and board views. Includes popup modals for editing/adding tasks, sorting by date, and retaining checkbox history after logout or refresh. Mobile responsive design.",
    technologies: ["React", "TypeScript", "Firebase", "Google Auth", "HTML", "CSS", "TailwindCSS"],
    githubPage: "https://altertodotaskmanager.vercel.app/",
  },
  {
    title: "Search Cards UI",
    image: project20,
    description:
      "Website with search functionality with data retrieval from a Mock API, loader during data fetch, Shadcn Dialog popup under the Navbar, direct search from the Navbar’s 'Show Info' section, and a 'No user found' message with an image/logo when no results are matched.",
    technologies: ["React", "JavaScript", "Mock API", "Shadcn", "HTML", "CSS", "TailwindCSS"],
    githubPage: "https://lokeshloki3.github.io/girmanreact/",
  },
  {
    title: "Weather API",
    image: project21,
    description:
      "Webpage showing Real-time city search with API-driven latitude/longitude retrieval, weather data fetch based on coordinates, and an option to add/remove cities from Favourites stored in local storage. Displays up to 8 favourites with current weather info on the homepage, detailed weather on click, toast notifications for add/remove actions, and mobile-responsive design",
    technologies: ["React", "JavaScript", "Toast", "Local Storage", "HTML", "CSS", "TailwindCSS"],
    githubPage: "https://lokeshloki3.github.io/weatherreact/",
  },
  {
    title: "AI Safety Simple UI",
    image: project15,
    description:
      "Frontend of a safety incident management system with features such as adding new safety incidents, displaying all incidents with filtering options by severity (Low, Medium, High) and incident age (Newest or Oldest), and the ability to view incident descriptions upon clicking 'Show Description', all designed with mobile responsiveness",
    technologies: ["React", "JavaScript", "HTML", "CSS", "TailwindCSS"],
    githubPage: "https://lokeshloki3.github.io/ai-safety/",
  },
  {
    title: "Simple Task Manager UI",
    image: project16,
    description:
      "The webpage is built using React and includes features such as the ability to add and delete tasks, with all operations saved to localStorage to ensure tasks persist even after a page reload. Users can mark tasks as completed or pending, filter tasks based on their status, and drag and drop tasks for easy reordering. It also offers a toggle for switching between dark and light themes and is fully mobile responsive.",
    technologies: ["React", "JavaScript", "LocalStorage", "HTML", "CSS", "TailwindCSS"],
    githubPage: "https://lokeshloki3.github.io/task-manager/",
  },
  {
    title: "Simple YouTube Embedded Player",
    image: project18,
    description:
      "The web application includes an embedded YouTube player with a customizable start time, checkboxes to mark videos as watched, and a progress bar to track completion. Users can navigate through tabs for files, comments, reviews, and challenges",
    technologies: ["JavaScript", "HTML", "CSS", "YouTube API"],
    githubPage: "https://lokeshloki3.github.io/youtube-aggregated/",
  },
];

export const CONTACT = {
  phoneNo: "+91 9311354886",
  email: "lokesh1992p@gmail.com",
};
