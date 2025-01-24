import project1 from "../assets/project1.jpg";
import project2 from "../assets/download.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";

export const HERO_CONTENT = `I possess a sharp eye for detail, which I use to find even the smallest errors in text.
 I work well under pressure and can produce high-quality work in short periods of time. I have strong interpersonal skills and work with a wide variety of people.I am a passionate full stack developer with a knack for crafting robust and scalable web applications.  I have honed my skills in front-end technologies like React  as well as back-end technologies like MySQL,springboot,java. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am looking for an opportunity to work with a team that runs on clear communication. I want to align myself with a company I believe in and where I can create positive change. I am always looking to learn more and am open to taking on challenging projects.I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, MySQL. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024-2025",
    company: "Amazon Cloud Architecting ",
    description: `AWS Solution Architects are responsible for application deployment to the AWS cloud infrastructure. More and more companies are migrating to the cloud because of lower costs since they do not have to invest in on-premises infrastructures. But shifting is not as easy as it sounds; many in the early adopting community have reasons for cost surprises. Thus, AWS Solution Architects help design cost-effective Cloud solutions, focusing on usability, reliability, scalability, and performance.`,
    technologies: [ "AmazonEc2", "AmazonCloudwatch", "AmazonS3"],
  },
  {
    year: "2023 - 2024",
    company: "Salesforce Developer  ",
    description: `Salesforce is the World's leading CRM platform, enabling businesses to connect the customer efficiently, anytime, anywhere. To better understand the Salesforce, we first need to understand the CRM, its functionality, aspects, and why to choose salesforce CRM.It also allows us to track and manage the sales, marketing, and prospects given to customers.`,
    technologies: ["Apex", "Lighting",],
  },
  {
    year: "2023 - 2024",
    company: "Amazon Cloud Practioner",
    description: `AWS Solution Architects are responsible for application deployment to the AWS cloud infrastructure. More and more companies are migrating to the cloud because of lower costs since they do not have to invest in on-premises infrastructures. But shifting is not as easy as it sounds; many in the early adopting community have reasons for cost surprises. Thus, AWS Solution Architects help design cost-effective Cloud solutions, focusing on usability, reliability, scalability, and performance.`,
    technologies: ["AmazonEc2", "AmazonCloudwatch", "AmazonS3"],
  },
  {
    year: "2022 - 2023",
    company: "Salesforce Administrator",
    description: `Salesforce is a SaaS or Software as a Service, which means there is no need to install the software or server to work on. Users can simply sign-up in Salesforce.com and can start running the business instantly.`,
    technologies: ["Apex", "Lighting"],
  },
];

export const PROJECTS = [
  {
    title: " Contact Manager",
    image: project1,
    description:
      "The Contact Manager is a comprehensive web application designed to simplify and enhance the management of contacts efficiently. Leveraging cutting-edge technologies.this application provides users with a seamless experience to manage their contacts and profiles..",
    technologies: ["HTML", "CSS", "React", "springboot", "MySql"],
  },
  {
    title: "Goal Tracking",
    image: project2,
    description:
      "Goal tracking is the process of setting goals, measuring progress, and determining the steps needed to achieve those goals.",
    technologies: ["HTML", "CSS", "React"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React"],
  },
  {
    title: "Netflix Clone",
    image: project4,
    description:
    "The Netflix clone project is a web application developed using HTML, CSS, and JavaScript, aiming to replicate the user interface and some features of the popular streaming service, Netflix. Let’s break down the project into its key components and functionalities. "
       ,technologies: ["HTML", "CSS", "mySQL"],
  },
];

export const CONTACT = {
  address: "gwalior ",
  phoneNo: "+91 8818813641",
  email: "Chaturvedidrashti@gmail.com",
};
