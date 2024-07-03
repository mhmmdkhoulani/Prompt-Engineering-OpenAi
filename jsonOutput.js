const jsonOutput = {
  pk: { S: "talentProfile" },
  sk: { S: "talentProfile#MohammadK" },
  firstName: { S: "Mohammad" },
  secondNameInitials: { S: "K" },
  userName: { S: "MohammadK" },
  photo: { S: "" },
  level: { S: "" },
  seniority: { S: "" },
  specialization: { S: "" },
  scoresheetLink: { S: "" },
  yearsExperience: { N: "3" },
  domainExperience: {
    L: [
      { S: "Web Development" },
      { S: "Mobile Development" },
      { S: "API Development" },
    ],
  },
  keyStrengths: {
    L: [
      { S: "Full Stack Development" },
      { S: "Team Collaboration" },
      { S: "Attention to Detail" },
    ],
  },
  uniqueness: {
    S: "Dedicated to continuous learning, currently exploring modern cloud solution development.",
  },
  summary: {
    S: "A versatile software engineer with a Bachelor's in Computer Science and over three years of industry experience. Proficient in developing responsive web applications, APIs, and business solutions, with a Secret Clearance. Dedicated to continuous learning, currently exploring modern cloud solution development. Passionate about supporting students' career growth and eager to contribute to innovative tech projects.",
  },
  bases: { M: { cityState: { S: "Beqa" }, country: { S: "Lebanon" } } },
  languages: {
    L: [
      {
        M: {
          name: { S: "Arabic" },
          proficiencyLevel: { S: "Native or bilingual proficiency" },
        },
      },
      {
        M: {
          name: { S: "English" },
          proficiencyLevel: { S: "Highly Proficient" },
        },
      },
    ],
  },
  technicalSkills: {
    L: [
      {
        M: {
          sectionName: { S: "Programming Languages" },
          skills: { L: [{ S: "C#" }] },
        },
      },
      {
        M: {
          sectionName: { S: "Front-End Development" },
          skills: { L: [{ S: "Angular" }, { S: "Flutter" }] },
        },
      },
      {
        M: {
          sectionName: { S: "Web Development" },
          skills: {
            L: [
              { S: "WordPress Development" },
              { S: "ASP.NET" },
              { S: "HTML" },
              { S: "CSS" },
            ],
          },
        },
      },
      {
        M: {
          sectionName: { S: "Project Management" },
          skills: { L: [{ S: "Team Oversight" }, { S: "Project Management" }] },
        },
      },
      {
        M: {
          sectionName: { S: "Quality Assurance" },
          skills: { L: [{ S: "Software Testing" }] },
        },
      },
      {
        M: {
          sectionName: { S: "Web Technologies" },
          skills: { L: [{ S: "Website Optimization" }, { S: "SEO" }] },
        },
      },
    ],
  },
  experiences: {
    L: [
      {
        M: {
          companyName: { S: "Freelancer" },
          companyDomain: { S: "Web Development" },
          companyIndustry: { S: "Freelance" },
          companyBusinessActivity: { S: "Software Development" },
          candidatesUniqueAchievement: { S: "" },
          summary: { S: "" },
          positions: {
            L: [
              {
                M: {
                  title: { S: "Full Stack Developer" },
                  startDate: { S: "Nov 2017" },
                  endDate: { S: "" },
                  note: { S: "" },
                  employmentType: { S: "Freelance" },
                },
              },
            ],
          },
          location: {
            M: { cityState: { S: "Beqaa" }, country: { S: "Lebanon" } },
          },
          responsibilitiesAndAccomplishments: {
            L: [
              {
                S: "Developed Flutter-based mobile apps for iOS and Android, focusing on integration and consistency",
              },
              {
                S: "Integrated data from diverse sources using ORM frameworks like Entity Framework, enhancing data flow",
              },
              {
                S: "Designed and optimized database schemas with Microsoft SQL Server, improving data management",
              },
              {
                S: "Managed code efficiently with Git, facilitating collaboration within teams",
              },
              {
                S: "Implemented rigorous testing protocols for robust application functionality",
              },
              {
                S: "Introduced cutting-edge tools to streamline development workflows",
              },
              {
                S: "Created responsive web interfaces with HTML, CSS, and JavaScript, emphasizing user-centric design",
              },
              {
                S: "Facilitated collaboration between design and backend teams for seamless integration",
              },
              {
                S: "Conducted thorough cross-browser testing for peak performance and compatibility",
              },
              {
                S: "Transformed design mock-ups into polished, accurate websites, emphasizing attention to detail",
              },
            ],
          },
          toolsAndTechnologies: {
            L: [
              { S: "HTML" },
              { S: "CSS" },
              { S: "JavaScript" },
              { S: "ASP.Net" },
            ],
          },
          projects: { L: [] },
        },
      },
      {
        M: {
          companyName: { S: "Kuzluk Creative Agency" },
          companyDomain: { S: "Marketing" },
          companyIndustry: { S: "Digital Marketing" },
          companyBusinessActivity: { S: "Software Development" },
          candidatesUniqueAchievement: { S: "" },
          summary: { S: "" },
          positions: {
            L: [
              {
                M: {
                  title: { S: "Full Stack Web Developer" },
                  startDate: { S: "Mar 2018" },
                  endDate: { S: "May 2019" },
                  note: { S: "Remote Work" },
                  employmentType: { S: "Remote" },
                },
              },
            ],
          },
          location: {
            M: { cityState: { S: "Istanbul" }, country: { S: "Turkey" } },
          },
          responsibilitiesAndAccomplishments: {
            L: [
              {
                S: "Engineered, coded, and upheld websites catering to a wide array of clientele",
              },
              {
                S: "Installed robust security protocols such as firewalls and encryption, fortifying website defenses and shielding user data",
              },
              {
                S: "Produced premium commercial websites that met stringent coding criteria, prioritizing seamless performance across multiple browsers",
              },
            ],
          },
          toolsAndTechnologies: {
            L: [
              { S: "HTML" },
              { S: "CSS" },
              { S: "JavaScript" },
              { S: "Security Implementation" },
              { S: "Website Optimization" },
            ],
          },
          projects: { L: [] },
        },
      },
      {
        M: {
          companyName: { S: "Multi Aid Programs" },
          companyDomain: { S: "NGO" },
          companyIndustry: { S: "Non-Profit" },
          companyBusinessActivity: { S: "Education, Health, Relief" },
          candidatesUniqueAchievement: { S: "" },
          summary: { S: "" },
          positions: {
            L: [
              {
                M: {
                  title: { S: "Web Development Trainer" },
                  startDate: { S: "Jul 2018" },
                  endDate: { S: "Mar 2019" },
                  note: { S: "" },
                  employmentType: { S: "Onsite" },
                },
              },
            ],
          },
          location: {
            M: { cityState: { S: "Beqa" }, country: { S: "Lebanon" } },
          },
          responsibilitiesAndAccomplishments: {
            L: [
              {
                S: "Led front-end development training sessions for refugees, empowering them with valuable technical skills",
              },
              {
                S: "Provided hands-on guidance in technology applications, fostering an environment conducive to learning and skill development",
              },
              {
                S: "Inspired students to embrace learning, cultivating self-assurance and a proactive approach to education",
              },
              {
                S: "Designed personalized assessment materials to gauge and enhance student comprehension",
              },
              {
                S: "Offered tailored study techniques and exam tactics to bolster academic advancement",
              },
              {
                S: "Advocated for self-motivation and resilience as pivotal factors in the learning process",
              },
              {
                S: "Contributed to the development and upkeep of the MAPs website, ensuring its effectiveness and relevance",
              },
            ],
          },
          toolsAndTechnologies: {
            L: [
              { S: "HTML" },
              { S: "CSS" },
              { S: "JavaScript" },
              { S: "Front-End Development" },
            ],
          },
          projects: { L: [] },
        },
      },
    ],
  },
  educations: {
    L: [
      {
        M: {
          institutionName: { S: "Lebanese International University" },
          location: { M: { cityState: { S: "" }, country: { S: "Lebanon" } } },
          level: { S: "Bachelor Degree" },
          major: { S: "Computer Science" },
          scoreGPA: { S: "" },
          startDate: { S: "Aug 2019" },
          endDate: { S: "May 2022" },
        },
      },
    ],
  },
  additionalProjects: {
    L: [
      {
        M: {
          projectName: {
            S: "Top-up Cards - Mobile Application and Website Development",
          },
          link: { S: "http://topupcards.co" },
          description: {
            S: "Developed a mobile application and corresponding website for the buying and selling of top-up, gift, gaming, and entertainment cards. The app is available on both iOS and Android platforms.",
          },
          responsibilities: { L: [] },
          technologies: {
            L: [
              { S: "ASP.NET Core" },
              { S: "Web API" },
              { S: "SQL Server" },
              { S: "HTML" },
              { S: "CSS" },
              { S: "JavaScript" },
              { S: "Angular" },
              { S: "Flutter" },
              { S: "Dart" },
            ],
          },
        },
      },
      {
        M: {
          projectName: {
            S: "Light Peace Initiative Corp - Website Development",
          },
          link: { S: "https://lpicorp.org/" },
          description: { S: "" },
          responsibilities: { L: [] },
          technologies: {
            L: [
              { S: "HTML" },
              { S: "CSS" },
              { S: "JavaScript" },
              { S: "WordPress" },
            ],
          },
        },
      },
      {
        M: {
          projectName: { S: "Peanut Butter Collection - Website Development" },
          link: { S: "https://www.peanutbuttercollection.com/" },
          description: { S: "" },
          responsibilities: { L: [] },
          technologies: {
            L: [
              { S: "HTML" },
              { S: "CSS" },
              { S: "JavaScript" },
              { S: "WordPress" },
              { S: "Shopify" },
            ],
          },
        },
      },
      {
        M: {
          projectName: { S: "Multi Aid Programs - Website Development" },
          link: { S: "http://multiaidprograms.org/" },
          description: { S: "" },
          responsibilities: { L: [] },
          technologies: {
            L: [
              { S: "HTML" },
              { S: "CSS" },
              { S: "JavaScript" },
              { S: "WordPress" },
            ],
          },
        },
      },
    ],
  },
  volunteering: { L: [] },
  awardsCertificates: { L: [] },
  recommendations: { L: [] },
  courses: { L: [] },
};
