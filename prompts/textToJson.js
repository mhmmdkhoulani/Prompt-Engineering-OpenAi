const { openai } = require("../openAiConfig");

const cvText = `MOHAMMAD KHOULANI
Beqa, Lebanon | 0096178920212 | mhmmdkholani@gmail.com | LinkedIn Profile
Summary
A versatile software engineer with a Bachelor's in Computer Science and over three years of industry
experience. Proficient in developing responsive web applications, APIs, and business solutions, with a Secret
Clearance. Dedicated to continuous learning, currently exploring modern cloud solution development.
Passionate about supporting students' career growth and eager to contribute to innovative tech projects.
Work Experience
Full Stack Developer | Freelancer
Beqaa, Lebanon

Nov 2017 - Present

Engaged in various freelance projects on platforms like Upwork, showcasing expertise in full-stack
development.
● Developed Flutter-based mobile apps for iOS and Android, focusing on integration and consistency.
● Integrated data from diverse sources using ORM frameworks like Entity Framework, enhancing data
flow.
● Designed and optimized database schemas with Microsoft SQL Server, improving data management.
● Managed code efficiently with Git, facilitating collaboration within teams.
● Implemented rigorous testing protocols for robust application functionality.
● Introduced cutting-edge tools to streamline development workflows.
● Created responsive web interfaces with HTML, CSS, and JavaScript, emphasizing user-centric design.
● Facilitated collaboration between design and backend teams for seamless integration.
● Conducted thorough cross-browser testing for peak performance and compatibility.
● Transformed design mock-ups into polished, accurate websites, emphasizing attention to detail.
Technologies: HTML, CSS, JavaScript, ASP.Net, Cross-browser stack
Full Stack Web Developer (Remotely)
Kuzluk Creative Agency - Istanbul, Turkey

Mar 2018 - May 2019

Engaged as a full-stack web developer at a digital marketing firm serving clients in the Gulf region. The firm
specializes in addressing diverse marketing needs through advanced software and analytical tools.
● Engineered, coded, and upheld websites catering to a wide array of clientele.
●
● Installed robust security protocols such as firewalls and encryption, fortifying website defenses and
shielding user data.
● Produced premium commercial websites that met stringent coding criteria, prioritizing seamless
performance across multiple browsers.
Technologies: HTML, CSS, JavaScript, Security Implementation, Website Optimization

Web Development Trainer
Multi Aid Programs - Beqa, Lebanon

Jul 2018 - Mar 2019

Engaged as a web development trainer for a Syrian-led NGO that focuses on marginalized communities
offering health, relief, and education to refugees and vulnerable populations.
● Led front-end development training sessions for refugees, empowering them with valuable technical
skills.
● Provided hands-on guidance in technology applications, fostering an environment conducive to
learning and skill development.
● Inspired students to embrace learning, cultivating self-assurance and a proactive approach to
education.
● Designed personalized assessment materials to gauge and enhance student comprehension.
● Offered tailored study techniques and exam tactics to bolster academic advancement.
● Advocated for self-motivation and resilience as pivotal factors in the learning process.
● Contributed to the development and upkeep of the MAPs website, ensuring its effectiveness and
relevance.
Technologies: HTML, CSS, JavaScript, Front-End Development

Education
Lebanese International University | Lebanon
Bachelor Degree - Computer Science

Aug 2019 - May 2022

Skills
Programming Languages: C#
Front-End Development: Angular, Flutter
Web Development: WordPress Development, ASP.NET, HTML, CSS
Project Management: Team Oversight, Project Management
Quality Assurance: Software Testing
Web Technologies: Website Optimization, SEO
Languages
Arabic (Native or bilingual proficiency)
English (Highly Proficient)

Projects
1. Top-up Cards - Mobile Application and Website Development | Lebanon
Developed a mobile application and corresponding website for the buying and selling of top-up, gift,
gaming, and entertainment cards. The app is available on both iOS and Android platforms.
Link: [http://topupcards.co]
Technologies: ASP.NET Core, Web API, SQL Server, HTML, CSS, JavaScript, Angular, Flutter, Dart
2. Light Peace Initiative Corp - Website Development | Lebanon
Link: [https://lpicorp.org/]
Technologies: HTML, CSS, JavaScript, WordPress
3. Peanut Butter Collection - Website Development | United States
Link: [https://www.peanutbuttercollection.com/]
Technologies: HTML, CSS, JavaScript, WordPress, Shopify
4. Multi Aid Programs - Website Development | Lebanon
Link: [http://multiaidprograms.org/]
Technologies: HTML, CSS, JavaScript, WordPress`;

const dbSchema = `const TalentProfileSchema = {
    indexes: {
        primary: {
            hash: 'pk',
            sort: 'sk'
        }
    },
    models: {
        TalentProfile: {
            pk: { value: 'talentProfile' },
            sk: { value: 'talentProfile#userName' },
            firstName: { type: String, required: true },
            secondNameInitials: { type: String, required: true },
            userName: {type: String, required: true},
            photo: { type: String },
            level: { type: String },
            seniority: { type: String },
            specialization: { type: String },
            scoresheetLink: { type: String },
            yearsExperience: { type: Number },
            domainExperience: { type: Array, items: String },
            keyStrengths: { type: Array, maxItems: 3, items: String },
            uniqueness: { type: String, optional: true },
            summary: { type: String },
            bases: {
                type: Object,
                properties: {
                    cityState: { type: String },
                    country: { type: String }
                }
            },
            languages: {
                type: Array,
                items: {
                    type: Object,
                    properties: {
                        name: { type: String },
                        proficiencyLevel: { type: String }
                    }
                }
            },
            technicalSkills: {
                type: Array,
                items: {
                    type: Object,
                    properties: {
                        sectionName: { type: String },
                        skills: { type: Array, items: String }
                    }
                }
            },
            experiences: {
                type: Array,
                items: {
                    type: Object,
                    properties: {
                        companyName: { type: String },
                        companyDomain: { type: String },
                        companyIndustry: { type: String },
                        companyBusinessActivity: { type: String },
                        candidatesUniqueAchievement: { type: String },
                        summary: { type: String },
                        positions: {
                            type: Array,
                            items: {
                                type: Object,
                                properties: {
                                    title: { type: String },
                                    startDate: { type: String },
                                    endDate: { type: String, optional: true },
                                    note: {type: String, optional: true},
                                    employmentType: { type: String }
                                }
                            }
                        },
                        location: {
                            type: Object,
                            properties: {
                                cityState: { type: String },
                                country: { type: String }
                }
                        },
                        responsibilitiesAndAccomplishments: { type: Array, items: String },
                        toolsAndTechnologies: { type: Array, items: String },
                        projects: {
                            type: Array,
                            optional: true,
                            items: {
                                type: Object,
                                properties: {
                                    projectName: { type: String },
                                    link: { type: String },
                                    description: { type: String },
                                    responsibilities: {type: Array, optional: true},
                                    technologies: { type: Array, items: String, optional: true }
                                }
                            }
                    }
                }
            },
            educations: {
                type: Array,
                items: {
                    type: Object,
                    properties: {
                        startDate: { type: String },
                        endDate: { type: String },
                        institutionName: { type: String },
                        location: {
                            type: Object,
                            properties: {
                                cityState: { type: String },
                                country: { type: String }
                            }
                        },
                        level: { type: String },
                        major: { type: String },
                        scoreGPA: { type: String }
                    }
                }
            },
            additionalProjects: {
                type: Array,
                optional: true,
                items: {
                    type: Object,
                    properties: {
                        projectName: { type: String },
                        link: { type: String },
                        description: { type: String },
                        responsibilities: {type: Array, optional: true},
                        technologies: { type: Array, items: String, optional: true }
                    }
                }
            },
            volunteering: {
                type: Array,
                optional: true,
                items: {
                    type: Object,
                    properties: {
                        startDate: { type: String },
                        endDate: { type: String },
                        nameOfVolunteeringActivity: { type: String },
                        location: {
                            type: Object,
                            properties: {
                                cityState: { type: String },
                                country: { type: String }
                            }
                        },
                        type: { type: String },
                        description: { type: String }
                    }
                }
            },
            awardsCertificates: {
                type: Array,
                optional: true,
                items: {
                    type: Object,
                    properties: {
                        gradeScore: { type: String },
                        eventCourseTitle: { type: String },
                        description: { type: String }, 
                        courseDate: {type: String}
                    }
                }
            }, 
            recommendations: {
                type: Array, 
                optional: true, 
                items: {
                    type: Object,
                    properties: {
                        recommenderName: {type: String}, 
                        recommenderRelation: {type: String}, 
                        recommendationText: {type: String}, 
                        recommenderImg: {type: String},
                        recommendationDate: {type: String}
                    }
                }
            }, 
            courses: {
                type: Array, 
                    optional: true, 
                    items: {
                        type: Object,
                        properties: {
                        courseProvider: {type: String}, 
                        coursesNames: {type: Array}
                        }
            }
        }
    }
};
`;
const example1 = `{
  "pk": {
    "S": "talentProfile"
  },
  "sk": {
    "S": "talentProfile#mugheesm"
  },
  "additionalProjects": {
    "L": []
  },
  "awardsCertificates": {
    "L": []
  },
  "bases": {
    "M": {
      "cityState": {
        "S": "Lahore"
      },
      "country": {
        "S": "Pakistan"
      }
    }
  },
  "courses": {
    "L": [
      {
        "M": {
          "courseProvider": {
            "S": "Coursera"
          },
          "coursesNames": {
            "L": [
              {
                "S": "AWS Fundamentals"
              },
              {
                "S": "Deep Learning Specialization"
              },
              {
                "S": "Generative Adversarial Networks (GANs) Specialization"
              },
              {
                "S": "Generative AI with LLMS"
              }
            ]
          }
        }
      },
      {
        "M": {
          "courseProvider": {
            "S": "Deep Learning AI"
          },
          "coursesNames": {
            "L": [
              {
                "S": "Prompt Engineering"
              }
            ]
          }
        }
      }
    ]
  },
  "domainExperience": {
    "L": [
      {
        "S": "AI"
      },
      {
        "S": "Sports"
      },
      {
        "S": "Enterprise"
      },
      {
        "S": "SaaS"
      }
    ]
  },
  "educations": {
    "L": [
      {
        "M": {
          "endDate": {
            "S": "Apr 2019"
          },
          "institutionName": {
            "S": "Information Technology University"
          },
          "level": {
            "S": "Master"
          },
          "location": {
            "M": {
              "cityState": {
                "S": "Lahore"
              },
              "country": {
                "S": "Pakistan"
              }
            }
          },
          "major": {
            "S": "Data Science"
          },
          "startDate": {
            "S": "Jan 2017"
          }
        }
      },
      {
        "M": {
          "endDate": {
            "S": "Apr 2018"
          },
          "institutionName": {
            "S": "University of California San Diego (Edx)"
          },
          "level": {
            "S": "Micro-Master"
          },
          "location": {
            "M": {
              "cityState": {
                "S": "San Diego"
              },
              "country": {
                "S": "USA"
              }
            }
          },
          "major": {
            "S": "Data Science"
          },
          "startDate": {
            "S": "Jan 2017"
          }
        }
      },
      {
        "M": {
          "endDate": {
            "S": "Apr 2016"
          },
          "institutionName": {
            "S": "PUCIT-University Of Punjab"
          },
          "level": {
            "S": "Bachelor"
          },
          "location": {
            "M": {
              "cityState": {
                "S": "Lahore"
              },
              "country": {
                "S": "Pakistan"
              }
            }
          },
          "major": {
            "S": "Computer Software Engineering"
          },
          "startDate": {
            "S": "Jan 2012"
          }
        }
      }
    ]
  },
  "email": {
    "S": "mugheesmehdi@gmail.com"
  },
  "experiences": {
    "L": [
      {
        "M": {
          "candidatesUniqueAchievement": {
            "S": ""
          },
          "companyBusinessActivity": {
            "S": "Software Development"
          },
          "companyDomain": {
            "S": "Software"
          },
          "companyIndustry": {
            "S": "Software"
          },
          "companyName": {
            "S": "RootPointers"
          },
          "location": {
            "M": {
              "cityState": {
                "S": "Lahore"
              },
              "country": {
                "S": "Pakistan"
              }
            }
          },
          "positions": {
            "L": [
              {
                "M": {
                  "employmentType": {
                    "S": "Onsite"
                  },
                  "endDate": {
                    "S": "Mar 2024"
                  },
                  "note": {
                    "S": ""
                  },
                  "startDate": {
                    "S": "Aug 2021"
                  },
                  "title": {
                    "S": "Senior Full-Stack Developer"
                  }
                }
              },
              {
                "M": {
                  "endDate": {
                    "S": "Apr 2022"
                  },
                  "note": {
                    "S": ""
                  },
                  "startDate": {
                    "S": "Aug 2021"
                  },
                  "title": {
                    "S": "Software Engineer II"
                  }
                }
              }
            ]
          },
          "projects": {
            "L": [
              {
                "M": {
                  "description": {
                    "S": "An AI-based sports technology company designs LED pitching targets for baseball and softball, providing vital data and feedback to players and coaches worldwide."
                  },
                  "link": {
                    "S": "https://www.smartmitt.com/"
                  },
                  "projectName": {
                    "S": "SmartMitt"
                  },
                  "responsibilities": {
                    "L": []
                  },
                  "technologies": {
                    "L": [
                      {
                        "S": "Deep Learning"
                      },
                      {
                        "S": "Flask"
                      },
                      {
                        "S": "React.js"
                      },
                      {
                        "S": "MongoDB"
                      },
                      {
                        "S": "AWS"
                      },
                      {
                        "S": "Python"
                      },
                      {
                        "S": "JavaScript"
                      }
                    ]
                  }
                }
              }
            ]
          },
          "responsibilitiesAndAccomplishments": {
            "L": [
              {
                "S": "Pioneered the complete development and testing cycle of diverse enterprise applications"
              },
              {
                "S": "Led a dynamic team of Web/Mobile frontend and backend developers"
              },
              {
                "S": "Innovated in sports analytics with AI-driven features for SmartMitt"
              },
              {
                "S": "Developed an AI-powered email client platform, integrating with Outlook/Gmail"
              }
            ]
          },
          "summary": {
            "S": "Employed as a Senior Full-stack developer at RootPointers, worked on multiple software projects, and led SmartMitt's AI-driven implementation."
          },
          "toolsAndTechnologies": {
            "L": [
              {
                "S": "Python"
              },
              {
                "S": "React"
              },
              {
                "S": "Django"
              },
              {
                "S": "AWS"
              },
              {
                "S": "MongoDB"
              },
              {
                "S": "Git"
              }
            ]
          }
        }
      },
      {
        "M": {
          "candidatesUniqueAchievement": {
            "S": ""
          },
          "companyBusinessActivity": {
            "S": "AI-Driven Sales & Marketing"
          },
          "companyDomain": {
            "S": "Software"
          },
          "companyIndustry": {
            "S": "Software"
          },
          "companyName": {
            "S": "xiQ Inc."
          },
          "location": {
            "M": {
              "cityState": {
                "S": "Remote"
              },
              "country": {
                "S": "USA"
              }
            }
          },
          "positions": {
            "L": [
              {
                "M": {
                  "employmentType": {
                    "S": "Remote"
                  },
                  "endDate": {
                    "S": "Aug 2021"
                  },
                  "note": {
                    "S": "Started as a Full Stack Developer, later got promoted to Lead Developer in Jun 2022"
                  },
                  "startDate": {
                    "S": "Jan 2020"
                  },
                  "title": {
                    "S": "Full-Stack Developer"
                  }
                }
              }
            ]
          },
          "projects": {
            "L": [
              {
                "M": {
                  "description": {
                    "S": "A Silicon Valley B2B Sales and Marketing Startup with major clientele like DELL, AWS, Nutanix"
                  },
                  "link": {
                    "S": "https://xiqinc.com/"
                  },
                  "projectName": {
                    "S": "xiQ Inc Website"
                  },
                  "responsibilities": {
                    "L": []
                  },
                  "technologies": {
                    "L": [
                      {
                        "S": "Django"
                      },
                      {
                        "S": "React.js"
                      },
                      {
                        "S": "SQL"
                      },
                      {
                        "S": "Microservices"
                      },
                      {
                        "S": "Python"
                      }
                    ]
                  }
                }
              }
            ]
          },
          "responsibilitiesAndAccomplishments": {
            "L": [
              {
                "S": "Led the revamp of the email marketing platform, Workbench, transitioning from legacy Django code to a Microservices architecture"
              },
              {
                "S": "Implemented Test Driven Development to integrate new features into production"
              },
              {
                "S": "Mentored junior developers to enhance their skills and contribute effectively"
              }
            ]
          },
          "summary": {
            "S": "mployed as a Full-Stack developer at xiQ, a Silicon Valley-based, software development company that brings together generative AI (xGPT) with behavioural psychology. Responsible for transitioning legacy code to microservices."
          },
          "toolsAndTechnologies": {
            "L": [
              {
                "S": "Python"
              },
              {
                "S": "Django"
              },
              {
                "S": "React"
              },
              {
                "S": "SQL"
              },
              {
                "S": "Git"
              },
              {
                "S": "Microservices"
              }
            ]
          }
        }
      },
      {
        "M": {
          "candidatesUniqueAchievement": {
            "S": ""
          },
          "companyBusinessActivity": {
            "S": "Software Development"
          },
          "companyDomain": {
            "S": "AI"
          },
          "companyIndustry": {
            "S": "Software"
          },
          "companyName": {
            "S": "Datics AI"
          },
          "location": {
            "M": {
              "cityState": {
                "S": "Lahore"
              },
              "country": {
                "S": "Pakistan"
              }
            }
          },
          "positions": {
            "L": [
              {
                "M": {
                  "employmentType": {
                    "S": "Onsite"
                  },
                  "endDate": {
                    "S": "Jan 2020"
                  },
                  "note": {
                    "S": ""
                  },
                  "startDate": {
                    "S": "Jan 2019"
                  },
                  "title": {
                    "S": "Backend Developer"
                  }
                }
              }
            ]
          },
          "projects": {
            "L": []
          },
          "responsibilitiesAndAccomplishments": {
            "L": [
              {
                "S": "Specialized in backend development, focusing on robust database solutions and API integrations"
              },
              {
                "S": "Pioneered the development of Sparrowcharts.com, centering on server-side logic and cloud-based solutions"
              },
              {
                "S": "Utilized GCP to create efficient data pipelines for sensor data management"
              }
            ]
          },
          "summary": {
            "S": "Engaged as a Backend Developer at Datics AI's product development life cycle using various technologies."
          },
          "toolsAndTechnologies": {
            "L": [
              {
                "S": "Python"
              },
              {
                "S": "Django"
              },
              {
                "S": "Flask"
              },
              {
                "S": "MySQL"
              },
              {
                "S": "Git"
              }
            ]
          }
        }
      },
      {
        "M": {
          "candidatesUniqueAchievement": {
            "S": ""
          },
          "companyBusinessActivity": {
            "S": "Game Development"
          },
          "companyDomain": {
            "S": "Gaming"
          },
          "companyIndustry": {
            "S": "Gaming"
          },
          "companyName": {
            "S": "Brain Games Studio"
          },
          "location": {
            "M": {
              "cityState": {
                "S": "Lahore"
              },
              "country": {
                "S": "Pakistan"
              }
            }
          },
          "positions": {
            "L": [
              {
                "M": {
                  "employmentType": {
                    "S": "Onsite"
                  },
                  "endDate": {
                    "S": "Dec 2018"
                  },
                  "note": {
                    "S": ""
                  },
                  "startDate": {
                    "S": "Mar 2017"
                  },
                  "title": {
                    "S": "Software Engineer"
                  }
                }
              }
            ]
          },
          "projects": {
            "L": []
          },
          "responsibilitiesAndAccomplishments": {
            "L": [
              {
                "S": "Developed Ed-tech games and a platform for local schools to teach basics of English, Math, and Rhymes"
              },
              {
                "S": "Developed an engine for tracing games to detect English, Urdu words, and numbers"
              },
              {
                "S": "Led a team of developers, designers, and QA to meet project goals"
              }
            ]
          },
          "summary": {
            "S": "Employed as a Software Engineer ( Unity & C# ) at Brain Game Studios, a leading game development company. Responsible for developing multiple games related to Education."
          },
          "toolsAndTechnologies": {
            "L": [
              {
                "S": "Unity 3D"
              },
              {
                "S": "C#"
              }
            ]
          }
        }
      },
      {
        "M": {
          "candidatesUniqueAchievement": {
            "S": ""
          },
          "companyBusinessActivity": {
            "S": "Game Development"
          },
          "companyDomain": {
            "S": "Gaming"
          },
          "companyIndustry": {
            "S": "Gaming"
          },
          "companyName": {
            "S": "GenITeam Solutions"
          },
          "location": {
            "M": {
              "cityState": {
                "S": "Lahore"
              },
              "country": {
                "S": "Pakistan"
              }
            }
          },
          "positions": {
            "L": [
              {
                "M": {
                  "employmentType": {
                    "S": "Onsite"
                  },
                  "endDate": {
                    "S": "Oct 2017"
                  },
                  "note": {
                    "S": ""
                  },
                  "startDate": {
                    "S": "Jun 2016"
                  },
                  "title": {
                    "S": "Software Engineer"
                  }
                }
              }
            ]
          },
          "projects": {
            "L": []
          },
          "responsibilitiesAndAccomplishments": {
            "L": [
              {
                "S": "Designed and developed a basic C# framework for Endless Running Games, increasing account game user retention from 17% to 32%"
              },
              {
                "S": "Worked in Tapinator/T2Play Division on Fighting and Rampage Style Games development"
              },
              {
                "S": "Developed plugins using Unity's Editor customization code for development ease"
              }
            ]
          },
          "summary": {
            "S": "Started the career as a Software Engineer at GenITeam Solutions, recognized as one of the top 100 Asian companies by Red Herring in 2012. Developed multiple games with the team."
          },
          "toolsAndTechnologies": {
            "L": [
              {
                "S": "Unity 3D"
              },
              {
                "S": "C#"
              }
            ]
          }
        }
      }
    ]
  },
  "firstName": {
    "S": "Mughees"
  },
  "keyStrengths": {
    "L": [
      {
        "S": "Full-Stack Development"
      },
      {
        "S": "Python & React Expertise"
      },
      {
        "S": "AI Integration"
      },
      {
        "S": "Problem Solving"
      },
      {
        "S": "Team Collaboration"
      }
    ]
  },
  "languages": {
    "L": [
      {
        "M": {
          "name": {
            "S": "Urdu"
          },
          "proficiencyLevel": {
            "S": "Native"
          }
        }
      },
      {
        "M": {
          "name": {
            "S": "English"
          },
          "proficiencyLevel": {
            "S": "Highly Proficient"
          }
        }
      }
    ]
  },
  "level": {
    "S": "Full-stack Developer: Python & React"
  },
  "photo": {
    "S": "mughees.png"
  },
  "recommendations": {
    "L": []
  },
  "scoresheetLink": {
    "S": "https://docs.google.com/document/d/1e0Sh7IiMoOPBZ9e3e8E4fs9kcf6PMTJp/edit?usp=sharing&ouid=107685680368408005620&rtpof=true&sd=true"
  },
  "secondNameInitials": {
    "S": "M"
  },
  "seniority": {
    "S": ""
  },
  "specialization": {
    "S": ""
  },
  "status": {
    "S": "draft"
  },
  "summary": {
    "S": "As a seasoned Senior Full-Stack Developer with extensive experience in developing, testing, and maintaining enterprise-level applications, he is proficient in integrating cutting-edge technologies and AI into web solutions. Excels in delivering high-quality, scalable, and efficient software solutions. Additionally, his adeptness at problem-solving, time management, and team collaboration makes him a valuable addition to any team."
  },
  "technicalSkills": {
    "L": [
      {
        "M": {
          "sectionName": {
            "S": "Programming Languages & Frameworks"
          },
          "skills": {
            "L": [
              {
                "S": "Python"
              },
              {
                "S": "Django"
              },
              {
                "S": "Flask"
              },
              {
                "S": "JavaScript"
              },
              {
                "S": "React"
              },
              {
                "S": "Redux"
              },
              {
                "S": "HTML"
              },
              {
                "S": "CSS"
              },
              {
                "S": "C#"
              }
            ]
          }
        }
      },
      {
        "M": {
          "sectionName": {
            "S": "Databases & Tools"
          },
          "skills": {
            "L": [
              {
                "S": "MSSQL"
              },
              {
                "S": "PostgreSQL"
              },
              {
                "S": "MySQL"
              },
              {
                "S": "MongoDB"
              },
              {
                "S": "DynamoDB"
              },
              {
                "S": "Elastic Search"
              },
              {
                "S": "Apache Solr"
              }
            ]
          }
        }
      },
      {
        "M": {
          "sectionName": {
            "S": "Machine Learning & Data Processing"
          },
          "skills": {
            "L": [
              {
                "S": "TensorFlow"
              },
              {
                "S": "PyTorch"
              },
              {
                "S": "Keras"
              },
              {
                "S": "Pandas"
              },
              {
                "S": "NumPy"
              },
              {
                "S": "Spacy"
              },
              {
                "S": "NLTK"
              },
              {
                "S": "OpenCV"
              },
              {
                "S": "Pillow"
              },
              {
                "S": "Moviepy"
              }
            ]
          }
        }
      },
      {
        "M": {
          "sectionName": {
            "S": "DevOps & Cloud"
          },
          "skills": {
            "L": [
              {
                "S": "AWS"
              },
              {
                "S": "Docker"
              },
              {
                "S": "NGINX"
              },
              {
                "S": "Apache"
              },
              {
                "S": "Heroku"
              },
              {
                "S": "CI/CD"
              },
              {
                "S": "GitHub Actions"
              }
            ]
          }
        }
      },
      {
        "M": {
          "sectionName": {
            "S": "Architectures"
          },
          "skills": {
            "L": [
              {
                "S": "Microservices"
              },
              {
                "S": "RESTful APIs"
              },
              {
                "S": "MVC"
              },
              {
                "S": "Serverless"
              }
            ]
          }
        }
      },
      {
        "M": {
          "sectionName": {
            "S": "Miscellaneous"
          },
          "skills": {
            "L": [
              {
                "S": "LLMs"
              },
              {
                "S": "GPT"
              },
              {
                "S": "Falcon"
              },
              {
                "S": "Bard"
              },
              {
                "S": "Image Processing"
              },
              {
                "S": "Video Processing"
              },
              {
                "S": "SDK Integrations"
              }
            ]
          }
        }
      }
    ]
  },
  "uniqueness": {
    "L": [
      {
        "S": "Pioneered SmartMitt's AI-driven implementation, analyzing baseball pitches through video"
      },
      {
        "S": "Led revamp of xiQ's email marketing platform to microservices architecture"
      },
      {
        "S": "Developed an AI-powered email client platform integrated with Outlook/Gmail"
      }
    ]
  },
  "userName": {
    "S": "MugheesM"
  },
  "volunteering": {
    "L": []
  },
  "yearsExperience": {
    "N": "8"
  }
}`;
const example2 = `{
  "pk": {
    "S": "talentProfile"
  },
  "sk": {
    "S": "talentProfile#monishv"
  },
  "additionalProjects": {
    "L": [
      {
        "M": {
          "description": {
            "S": "Ivista is a comprehensive healthcare tool designed to streamline the assessment process for medical "
          },
          "link": {
            "S": "https://ivistamedicaleducation.com/"
          },
          "projectName": {
            "S": "IVISTA"
          },
          "responsibilities": {
            "L": [
              {
                "S": "Worked as a project lead"
              },
              {
                "S": "API integration to communicate with the backend"
              }
            ]
          },
          "technologies": {
            "L": [
              {
                "S": "ReactJS"
              },
              {
                "S": "Redux"
              }
            ]
          }
        }
      }
    ]
  },
  "awardsCertificates": {
    "L": [
      {
        "M": {
          "courseDate": {
            "S": ""
          },
          "description": {
            "S": "Won first place in a regional"
          },
          "eventCourseTitle": {
            "S": "Hackathon Winner"
          },
          "gradeScore": {
            "S": "1st Place"
          }
        }
      },
      {
        "M": {
          "courseDate": {
            "S": "Aug 2025"
          },
          "description": {
            "S": ""
          },
          "eventCourseTitle": {
            "S": "AWS Certified Developer Associate"
          },
          "gradeScore": {
            "S": ""
          }
        }
      }
    ]
  },
  "bases": {
    "M": {
      "cityState": {
        "S": "Surat, Gujarat"
      },
      "country": {
        "S": "India"
      }
    }
  },
  "courses": {
    "L": []
  },
  "domainExperience": {
    "L": [
      {
        "S": "Ed-tech"
      },
      {
        "S": "E-commerce"
      },
      {
        "S": "Sports"
      },
      {
        "S": "Hospitality"
      },
      {
        "S": "Media sectors"
      }
    ]
  },
  "educations": {
    "L": [
      {
        "M": {
          "endDate": {
            "S": "March 2018"
          },
          "institutionName": {
            "S": "Charotar University of Science and Technology"
          },
          "level": {
            "S": "Bachelor"
          },
          "location": {
            "M": {
              "cityState": {
                "S": "Anand "
              },
              "country": {
                "S": "India"
              }
            }
          },
          "major": {
            "S": "Computer engineering "
          },
          "scoreGPA": {
            "S": "9.18/10"
          },
          "startDate": {
            "S": "Jun 2015"
          }
        }
      }
    ]
  },
  "email": {
    "S": "monish.vadhwani@gmail.com"
  },
  "experiences": {
    "L": [
      {
        "M": {
          "candidatesUniqueAchievement": {
            "S": ""
          },
          "companyBusinessActivity": {
            "S": "Providing tailored technology solutions for Diamond ICQ, a prestigious luxury diamond jewelry company."
          },
          "companyDomain": {
            "S": "Luxury Jewelry"
          },
          "companyIndustry": {
            "S": "Luxury Jewelry"
          },
          "companyName": {
            "S": "Jewel Pro Tech"
          },
          "location": {
            "M": {
              "cityState": {
                "S": "Surat, Gujarat"
              },
              "country": {
                "S": "India"
              }
            }
          },
          "positions": {
            "L": [
              {
                "M": {
                  "employmentType": {
                    "S": "Onsite"
                  },
                  "endDate": {
                    "S": ""
                  },
                  "note": {
                    "S": "Started as a Full Stack Developer, later got promoted to Lead Developer in Jul 2024"
                  },
                  "startDate": {
                    "S": "Nov 2023"
                  },
                  "title": {
                    "S": "Technical Lead"
                  }
                }
              }
            ]
          },
          "projects": {
            "L": [
              {
                "M": {
                  "description": {
                    "S": "An e-commerce platform for high-value jewelry and precious gemstones."
                  },
                  "link": {
                    "S": "http://gemgem.com"
                  },
                  "projectName": {
                    "S": "gemgem.com"
                  },
                  "responsibilities": {
                    "L": [
                      {
                        "S": "Lead a team of 9 developers in a Laravel and Vue.js-based project."
                      },
                      {
                        "S": "Plan sprints for efficient project management."
                      },
                      {
                        "S": "Engage in full-stack development activities."
                      },
                      {
                        "S": "Developed a comprehensive user engagement platform integrating Email, SMS"
                      }
                    ]
                  },
                  "technologies": {
                    "L": [
                      {
                        "S": "Laravel"
                      },
                      {
                        "S": "PHP"
                      },
                      {
                        "S": "Vue"
                      }
                    ]
                  }
                }
              }
            ]
          },
          "responsibilitiesAndAccomplishments": {
            "L": [
              {
                "S": "Lead a team of 9 developers in a Laravel and Vue.js-based project."
              },
              {
                "S": "Plan sprints for efficient project management."
              },
              {
                "S": "Engage in full-stack development activities."
              },
              {
                "S": "Developed a comprehensive user engagement platform integrating Email, SMS"
              }
            ]
          },
          "summary": {
            "S": "At Zeus Learning, an educational technology company known for its innovative e-learning solutions, Monish began his career as a Software Engineer and later advanced to the position of Senior Software Engineer before assuming the role of Module Lead. In this capacity, he effectively managed and coordinated multiple cross-functional teams across diverse projects."
          },
          "toolsAndTechnologies": {
            "L": [
              {
                "S": "Laravel"
              },
              {
                "S": "PHP"
              },
              {
                "S": "Vue"
              }
            ]
          }
        }
      }
    ]
  },
  "firstName": {
    "S": "Monish"
  },
  "keyStrengths": {
    "L": [
      {
        "S": "PHP-based technologies"
      },
      {
        "S": "Yii framework"
      },
      {
        "S": "Academic excellence"
      },
      {
        "S": "Rapid professional growth"
      },
      {
        "S": "Tech lead experience"
      }
    ]
  },
  "languages": {
    "L": [
      {
        "M": {
          "name": {
            "S": "English"
          },
          "proficiencyLevel": {
            "S": "Highly Proficient"
          }
        }
      },
      {
        "M": {
          "name": {
            "S": "Hindi"
          },
          "proficiencyLevel": {
            "S": "Native"
          }
        }
      },
      {
        "M": {
          "name": {
            "S": "Urdu"
          },
          "proficiencyLevel": {
            "S": "Native"
          }
        }
      }
    ]
  },
  "level": {
    "S": "Engineer Level 3"
  },
  "photo": {
    "S": "MonishV.jpg"
  },
  "recommendations": {
    "L": [
      {
        "M": {
          "recommendationDate": {
            "S": "2018"
          },
          "recommendationText": {
            "S": "Monish is an outstanding engineer with exceptional technical skills"
          },
          "recommenderImg": {
            "S": ""
          },
          "recommenderName": {
            "S": "John Doe"
          },
          "recommenderRelation": {
            "S": "Senior Software Engineer at Tech Solutions Ltd"
          }
        }
      }
    ]
  },
  "scoresheetLink": {
    "S": "https://docs.google.com/document/d/1b48zjgmvDHGaaMXQKtbZy9hCoj5nig8w/edit"
  },
  "secondNameInitials": {
    "S": "V"
  },
  "seniority": {
    "S": "React Developer"
  },
  "specialization": {
    "S": ""
  },
  "status": {
    "S": "in-buisness-review"
  },
  "summary": {
    "S": "With 6 years of extensive experience as a Senior Software Engineer (Engineer Level 3), Monish is a seasoned professional specializing in the domains of Ed-tech and E-commerce. His expertise lies in the latest PHP-based technologies, particularly excelling in the Yii framework. Beyond technical proficiency, Monish distinguishes himself through a unique blend of academic excellence and rapid professional growth. Notably, he swiftly ascended to senior levels, assuming a tech lead role in his previous organization. This blend of industry acumen, technical prowess, and leadership capabilities positions Monish as a valuable asset poised to drive impactful solutions in any project or team environment."
  },
  "technicalSkills": {
    "L": [
      {
        "M": {
          "sectionName": {
            "S": "Programming Languages & Frameworks"
          },
          "skills": {
            "L": [
              {
                "S": "PHP"
              },
              {
                "S": "YII Framework"
              },
              {
                "S": "React"
              },
              {
                "S": "Typescript"
              },
              {
                "S": "BackboneJS"
              }
            ]
          }
        }
      },
      {
        "M": {
          "sectionName": {
            "S": "Databases"
          },
          "skills": {
            "L": [
              {
                "S": "MariaDB"
              },
              {
                "S": "MySQL"
              }
            ]
          }
        }
      },
      {
        "M": {
          "sectionName": {
            "S": "Web Development Tools & Technologies"
          },
          "skills": {
            "L": [
              {
                "S": "Docker"
              },
              {
                "S": "AWS"
              },
              {
                "S": "Handlebars"
              },
              {
                "S": "Stylus"
              },
              {
                "S": "Bootstrap"
              }
            ]
          }
        }
      },
      {
        "M": {
          "sectionName": {
            "S": "Payment Gateways & Integrations"
          },
          "skills": {
            "L": [
              {
                "S": "Fusebill"
              },
              {
                "S": "Citcon"
              },
              {
                "S": "Infusionsoft"
              },
              {
                "S": "Paypal"
              },
              {
                "S": "G Suite"
              },
              {
                "S": "SignEasy"
              },
              {
                "S": "SurveyMonkey"
              },
              {
                "S": "iFramely"
              }
            ]
          }
        }
      },
      {
        "M": {
          "sectionName": {
            "S": "AWS Services"
          },
          "skills": {
            "L": [
              {
                "S": "AWS Lambda"
              },
              {
                "S": "AWS CodePipeline"
              }
            ]
          }
        }
      }
    ]
  },
  "uniqueness": {
    "L": [
      {
        "S": "Swiftly ascended to senior levels, assuming a tech lead role in previous organization."
      },
      {
        "S": "onceptualizing and executing a dynamic soccer match back-end module for 433"
      },
      {
        "S": "he drives project success through meticulous planning and execution."
      }
    ]
  },
  "userName": {
    "S": "MonishV"
  },
  "volunteering": {
    "L": [
      {
        "M": {
          "description": {
            "S": "Organized and conducted tech workshops"
          },
          "endDate": {
            "S": "Jun 2018"
          },
          "location": {
            "M": {
              "cityState": {
                "S": "Suart"
              },
              "country": {
                "S": "India"
              }
            }
          },
          "nameOfVolunteeringActivity": {
            "S": "Tech Community"
          },
          "startDate": {
            "S": "Jun 2017"
          },
          "type": {
            "S": "Comunity service"
          }
        }
      }
    ]
  },
  "yearsExperience": {
    "N": "6"
  }
}`;
const prompt = `You are a database expert and you have an assignment to fill out this information ${cvText} into a json object to be added to dynamodb database which has this schema ${dbSchema} convert all the 
Here are some examples of result of the json object: Example 1: ${example1} Example 2: ${example2}
Keep the names of properties as it is because it will effect the work of the app
If there are any additional properties don't add them and if there are any missing properties add them as emtpy string or object or whatever appear in the schema
in the response add just the object with out any explenations and ignore all the empty spaces and new line characters like 
Extract all the data from cv and fill related properties but if it is not present don't add them like you can extract the uniqness and seniority or similar fileds but you can't extract the courses and volantures `;
const textToJson = async () => {
  const chatCompletion = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [{ role: "user", content: prompt }],
  });
  return chatCompletion.choices[0].message.content;
};
module.exports = { textToJson };
