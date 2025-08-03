import me from "./me.png"
import resume from "./resume.pdf"

export const portfolioData = {
  personal: {
    name: "Shivam Dubey",
    role: "Full-Stack Developer",
    bio: "Passionate full-stack developer with 3 years of experience building scalable applications and GenAI-powered systems. I love creating innovative solutions that make a real impact.",
    email: "shivamdubeyagra8@gmail.com",
    phone: "+91 6395367426",
    location: "Ahmedabad, India",
    resumeUrl: resume,
    avatarUrl: me,
    // avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2"
  },

  about: {
    summary: "3-year full-stack developer passionate about scalable applications and GenAI-powered systems. I enjoy tackling complex problems and building solutions that enhance user experiences while maintaining clean, efficient code.",
    education: {
      degree: "M.Sc. (Computer Science)",
      institution: "IET, Khandari Campus, Agra",
      year: "2021"
    }
  },

  skills: {
    frontend: [
      "HTML", "CSS", "TailwindCSS", "JavaScript", "TypeScript",
      "React", "Next.js", "Remix", "React Native"
    ],
    backend: [
      "Node.js", "Express.js", "GraphQL", "NestJS", "Python", "FastAPI",
      "Golang", "Fiber"
    ],
    databases: [
      "MongoDB", "PostgreSQL", "Neo4j", "QdrantDB"
    ],
    cloudDevOps: [
      "Docker", "Kubernetes", "Terraform", "AWS", "GCP"
    ],
    messaging: [
      "Kafka", "RabbitMQ", "Redis"
    ],
    aiMl: [
      "GENAI", "RAG", "Agentic AI"
    ],
    softSkills: [
      "Team Collaboration", "Attention to Detail", "Patience",
      "Communication", "Presentation"
    ]
  },

  experience: [
    {
      id: 1,
      company: "Adsolut Media Pvt. Ltd.",
      position: "Software Developer I",
      startDate: "Jul 2024",
      endDate: "Present",
      location: "Ahmedabad",
      description: "Working on scalable web applications and AI-powered solutions, collaborating with cross-functional teams to deliver high-quality software products."
    },
    {
      id: 2,
      company: "CodMiners InfoTech Pvt. Ltd.",
      position: "Software Developer",
      startDate: "May 2023",
      endDate: "Feb 2024",
      location: "Surat",
      description: "Developed full-stack applications using modern web technologies, implemented efficient database solutions, and contributed to team knowledge sharing."
    },
    {
      id: 3,
      company: "SP Webconnect Solutions",
      position: "Software Developer",
      startDate: "Mar 2022",
      endDate: "Apr 2023",
      location: "Remote",
      description:  "Built full-stack apps, wrote backend APIs, optimized databases, and gained practical experience with modern frameworks and deployment tools."
    },
    {
      id: 4,
      company: "SP Webconnect Solutions",
      position: "Software Developer Trainee",
      startDate: "Sep 2021",
      endDate: "Feb 2022",
      location: "Remote",
      description: "Focused on frontend development using React, built responsive UI components, and learned real-world coding standards and collaboration practices."
    }
  ],

  projects: [
    {
      id: 1,
      title: "Play Stream Ad Server",
      description: "High-performance ad serving platform with real-time analytics and campaign management capabilities.",
      technologies: ["React.js", "MongoDB", "Node.js", "Docker", "GCP"],
      category: "Web Application",
      featured: true
    },
    {
      id: 2,
      title: "Learning Management System",
      description: "Comprehensive LMS with course management, progress tracking, and interactive learning modules.",
      technologies: ["Next.js", "Node.js", "TailwindCSS", "Redux Toolkit"],
      category: "Education Platform",
      featured: true
    },
    {
      id: 3,
      title: "Rankivity",
      description: "SEO and digital marketing analytics platform with advanced reporting and competitor analysis.",
      technologies: ["Next.js", "Node.js", "MongoDB", "GCP"],
      category: "Analytics Platform",
      featured: true
    },
    {
      id: 4,
      title: "Daily Thread App",
      description: "Social networking mobile application with real-time messaging and content sharing features.",
      technologies: ["React Native", "Node.js", "Redux Toolkit"],
      category: "Mobile Application",
      featured: false
    },
    {
      id: 5,
      title: "Email AI Assistant",
      description: "AI-powered email management system with smart categorization and automated responses.",
      technologies: ["FastAPI", "Python", "Qdrant", "NeonDB", "React"],
      category: "AI Application",
      featured: true
    }
  ],

  blogPosts: [
    {
      id: 1,
      title: "Building Scalable Full-Stack Applications with Modern Tech Stack",
      excerpt: "Exploring the best practices for creating maintainable and scalable applications using React, Node.js, and cloud technologies.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Development"
    },
    {
      id: 2,
      title: "Getting Started with GenAI and RAG Systems",
      excerpt: "A comprehensive guide to implementing Retrieval-Augmented Generation systems for enhanced AI applications.",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "AI/ML"
    },
    {
      id: 3,
      title: "Mastering Docker and Kubernetes for Modern DevOps",
      excerpt: "Learn how to containerize applications and orchestrate them effectively using Docker and Kubernetes.",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "DevOps"
    }
  ],

  social: {
    github: "https://github.com/code-farms",
    linkedin: "https://www.linkedin.com/in/shivam-dubey-1652511a9/",
    blog: "https://codefarms.in",
    portfolio: "https://portfolio.codefarms.in"
  }
};