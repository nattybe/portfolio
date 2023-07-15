import React from 'react';
import './los.css'
const SkillSet = ({ skills }) => {
  return (
    <div className="skill-set">
      <h3>Skills</h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};
const ContactForm = () => {
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic here
    };
  
    return (
      <form className="contact-form" onSubmit={handleSubmit}>
        {/* Add your form fields here */}
        <button type="submit">Submit</button>
      </form>
    );
  };

  const Footer = () => {
    return (
      <footer className="footer">
        Add your footer content here
      </footer>
    );
  };
  const TechnologyBadge = ({ technology }) => {
    return (
      <div className="technology-badge">
        <span>{technology}</span>
      </div>
    );
  };
  const BlogPost = ({ title, content, date }) => {
    return (
      <div className="blog-post">
        <h2>{title}</h2>
        <p>{content}</p>
        <p>{date}</p>
      </div>
    );
  };
  const Navigation = () => {
    return (
      <nav className="navigation">
        {/* Add your navigation links here */}
      </nav>
    );
  };
  const InteractiveElement = () => {
    return (
      <div className="interactive-element">
        {/* Add your interactive elements here */}
      </div>
    );
  };
  const CaseStudy = ({ title, challenge, solution, result }) => {
    return (
      <div className="case-study">
        <h3>{title}</h3>
        <h4>Challenge:</h4>
        <p>{challenge}</p>
        <h4>Solution:</h4>
        <p>{solution}</p>
        <h4>Result:</h4>
        <p>{result}</p>
      </div>
    );
  };
  const Testimonial = ({ quote, author }) => {
    return (
      <div className="testimonial">
        <blockquote>{quote}</blockquote>
        <cite>- {author}</cite>
      </div>
    );
  };
  const ProjectCard = ({ title, description, image }) => {
    return (
      <div className="project-card">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  };
  const Portfolio = () => {
    return (
      <div className="portfolio">
        <h1>My Web Designer Portfolio</h1>
  
        <h2>Projects</h2>
        <ProjectCard
          title="Project 1"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          image="project1.jpg"
        />
        <ProjectCard
          title="Project 2"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          image="project2.jpg"
        />
  
        <h2>Testimonials</h2>
        <Testimonial
          quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          author="John Doe"
        />
  
        <h2>Case Studies</h2>
        <CaseStudy
          title="Case Study 1"
          challenge="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          solution="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          result="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
  
        <h2>Interactive Elements</h2>
        <InteractiveElement />
  
        <h2>Navigation</h2>
        <Navigation />
  
        <h2>Blog Posts</h2>
        <BlogPost
          title="Blog Post 1"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          date="July 1, 2023"
        />
  
        <h2>Technology Badges</h2>
        <TechnologyBadge technology="HTML" />
        <TechnologyBadge technology="CSS" />
        <TechnologyBadge technology="JavaScript" />
  
        <h2>Contact Form</h2>
        <ContactForm />
  
        <h2>Skill Set</h2>
        <SkillSet skills={['HTML', 'CSS', 'JavaScript']} />
  
        <Footer />
      </div>
    );
  };
  
  export default Portfolio;                  
