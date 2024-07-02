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

const jsonFormat = `const TalentProfileSchema = {
    indexes: {
        primary: {
            hash: 'pk',
            sort: 'sk'
        }
    },
    models: {
        TalentProfile: {
            pk: { value: 'talentProfile' },
            sk: { value: 'talentProfile#firstName_secondNameasinitial' },
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
};`;
const prompt = `You have this information from the cv ${cvText} please extract all the data from it and fill out this json object as exact same the data in it because it is a schema and it will be stored in the db ${jsonFormat}
after json creation return a downlable link for this json file`;
const textToJson = async () => {
  const chatCompletion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
  });
  return chatCompletion.choices[0].message.content;
};
module.exports = { textToJson };
