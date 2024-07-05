const { openai } = require("../openAiConfig");

const { downloadAndParsePdf } = require("../helpers");

const fileProcessing = async (req) => {
  const { cvUlr, linkedInProfileUrl, linkedInCVUrl } = req.body;
  const cvContent = await downloadAndParsePdf(cvUlr);
  const linkedInContent = await downloadAndParsePdf(linkedInProfileUrl);
  const linkedCv = await downloadAndParsePdf(linkedInCVUrl);

  const prompt = `You are a professional profile builder and recruiter with 10+ years of experience. Extract and organize the relevant data from the provided CV, cover letter, and additional information. Fill the data into the given JSON object structure.

IMPORTANT:

1- Keep it an empty string if you didn't find data for a specific attribute.

2-You can only elaborate to make data more appealing and don't summarize.

3-exclude the last name from the whole output, but use the second initial instead.

Construct a summary:

From the documents provided, collect the following information:
Name: First name only, 
Years of experience: From the CV

 

Level: From the CV (e.g., software engineer level 3)

 

Specialization: From the CV (e.g., backend)

 

Domain expertise: From their CV experience sections

 

Key technical and non-technical strengths: Matching must-have tech from the CV (select 2 or 3)

 

Use all the information extracted to write the summary section of the candidate's CV. Make it appealing to hiring managers for a senior software engineering role.


Construct the summary for each company presented in the experience section of the CV:

 

From the documents provided, collect the following information for each company presented:

 

Company name: From the CV

 

Company domain: From the CV

 

Company industry: From the CV

 

Company business activity: From the CV

 

Positions: From the CV

 

Projects: From the CV

 

Responsibilities: From the CV

 

Use the information provided above to write at least a 2-line summary of experience gained in this company.

 

Refine the responsibilities and achievements from the experience section of a candidate's CV. Use language that would be appealing to a hiring manager, keeping it simple yet professional, in bullet points (max 6).

 

 

 

Construct the technical skills section:

 

Extract the technical skills from the CV.

 

Categorize them and arrange them as comma-separated in the following expected categories. Skip the category if there are no technical skills that represent it:

 

Programming Languages & Frameworks:

 

Databases:

 

Web Development Tools & Technologies:

 

Payment Gateways & Integrations:

 

Cloud & Hosting Services:

 

Email Delivery Services:

 

Operating Systems & Virtualization:

 

Development Environments & Debugging Tools:

 

PHP & YII Framework Versions:

 

AWS Services:

 

Other technical skills:

 

 

 

Use the provided additional data:

 

Score sheet URL: https://docs.google.com/document/d/1kEA5rncUnEMfk3G_u368fgGz0U22BBIp/edit?usp=drive_web&ouid=109713922223403895942&rtpof=trueConnect your Google account  

 

Image URL: https://drive.google.com/file/d/1hkqLne2QX1_d-ZsMV36wuMGUmuWVI7-0/view?usp=drive_linkConnect your Google account 

 

 

Extract the details of the recommendations only from the provided Linkedin pdf:
${linkedInContent}



Fill the JSON object with the extracted and refined data.

Here is the input data:

 ${cvContent}

 

 


Here is the JSON object template:


json

 

{

 

  "firstName": { "type": "String" },

 

  "secondNameInitials": { "type": "String" },

 

  "slug": { "type": "String" },

 

  "photo": { "type": "String" },

 

  "level": { "type": "String" },

 

  "specialization": { "type": "String" },

 

  "scoresheetLink": { "type": "String" },

 

  "yearsExperience": { "type": "Number" },

 

  "summary": { "type": "String" },

 

  "bases": {

 

    "type": "Object",

 

    "properties": {

 

      "cityState": { "type": "String" },

 

      "country": { "type": "String" }

 

    }

 

  },

 

  "languages": {

 

    "type": "Array",

 

    "items": {

 

      "type": "Object",

 

      "properties": {

 

        "name": { "type": "String" },

 

        "proficiencyLevel": { "type": "String" }

 

      }

 

    }

 

  },

 

  "technicalSkills": {

 

    "type": "Array",

 

    "items": {

 

      "type": "Object",

 

      "properties": {

 

        "sectionName": { "type": "String" },

 

        "skills": { "type": "Array", "items": "String" }

 

      }

 

    }

 

  },

 

  "experiences": {

 

    "type": "Array",

 

    "items": {

 

      "type": "Object",

 

      "properties": {

 

        "companyName": { "type": "String" },

 

        "companyDomain": { "type": "String" },

 

        "companyIndustry": { "type": "String" },

 

        "companyBusinessActivity": { "type": "String" },

 

        "candidatesUniqueAchievement": { "type": "String" },

 

        "summary": { "type": "String" },

 

        "positions": {

 

          "type": "Array",

 

          "items": {

 

            "type": "Object",

 

            "properties": {

 

              "title": { "type": "String" },

 

              "startDate": { "type": "String" },

 

              "endDate": { "type": "String" },

 

              "note": { "type": "String" },

 

              "location": {

 

                "type": "Object",

 

                "properties": {

 

                  "cityState": { "type": "String" },

 

                  "country": { "type": "String" }

 

                }

 

              },

 

              "employmentType": { "type": "String" }

 

            }

 

          }

 

        },

 

        "responsibilitiesAndAccomplishments": {

 

          "type": "Array",

 

          "items": "String"

 

        },

 

        "toolsAndTechnologies": {

 

          "type": "Array",

 

          "items": "String"

 

        },

 

        "projects": {

 

          "type": "Array",

 

          "items": {

 

            "type": "Object",

 

            "properties": {

 

              "projectName": { "type": "String" },

 

              "link": { "type": "String" },

 

              "description": { "type": "String" },

 

              "responsibilities": { "type": "Array" },

 

              "technologies": { "type": "Array", "items": "String" }

 

            }

 

          }

 

        }

 

      }

 

    }

 

  },

 

  "educations": {

 

    "type": "Array",

 

    "items": {

 

      "type": "Object",

 

      "properties": {

 

        "startDate": { "type": "String" },

 

        "endDate": { "type": "String" },

 

        "institutionName": { "type": "String" },

 

        "location": {

 

          "type": "Object",

 

          "properties": {

 

            "cityState": { "type": "String" },

 

            "country": { "type": "String" }

 

          }

 

        },

 

        "level": { "type": "String" },

 

        "major": { "type": "String" },

 

        "scoreGPA": { "type": "String" }

 

      }

 

    }

 

  },

 

  "additionalProjects": {

 

    "type": "Array",

 

    "items": {

 

      "type": "Object",

 

      "properties": {

 

        "projectName": { "type": "String" },

 

        "link": { "type": "String" },

 

        "description": { "type": "String" },

 

        "responsibilities": { "type": "Array" },

 

        "technologies": { "type": "Array", "items": "String" }

 

      }

 

    }

 

  },

 

  "volunteering": {

 

    "type": "Array",

 

    "items": {

 

      "type": "Object",

 

      "properties": {

 

        "startDate": { "type": "String" },

 

        "endDate": { "type": "String" },

 

        "nameOfVolunteeringActivity": { "type": "String" },

 

        "location": {

 

          "type": "Object",

 

          "properties": {

 

            "cityState": { "type": "String" },

 

            "country": { "type": "String" }

 

          }

 

        },

 

        "type": { "type": "String" },

 

        "description": { "type": "String" }

 

      }

 

    }

 

  },

 

  "awardsCertificates": {

 

    "type": "Array",

 

    "items": {

 

      "type": "Object",

 

      "properties": {

 

        "gradeScore": { "type": "String" },

 

        "eventCourseTitle": { "type": "String" },

 

        "description": { "type": "String" },

 

        "courseDate": { "type": "String" }

 

      }

 

    }

 

  },

 

  "recommendations": {

 

    "type": "Array",

 

    "items": {

 

      "type": "Object",

 

      "properties": {

 

        "recommenderName": { "type": "String" },

 

        "recommenderRelation": { "type": "String" },

 

        "recommendationText": { "type": "String" },

 

        "recommenderImg": { "type": "String" },

 

        "recommendationDate": { "type": "String" }

 

      }

 

    }

 

  },

 

  "courses": {

 

    "type": "Array",

 

    "items": {

 

      "type": "Object",

 

      "properties": {

 

        "courseProvider": { "type": "String" },

 

        "coursesNames": { "type": "Array" }

 

      }

 

    }

 

  }

 

}

 

 

 

Example of the Expected output: json

 

{

 

  "firstName": "Monish",

 

  "secondNameInitials": "V.",

 

  "slug": "",

 

  "photo": "https://drive.google.com/file/d/1hkqLne2QX1_d-ZsMV36wuMGUmuWVI7-0/view?usp=drive_linkConnectConnect your Google account  your Google account ",

 

  "level": "Technical Lead",

 

  "specialization": "Backend Development",

 

  "scoresheetLink": "https://docs.google.com/document/d/1X83uIHQ9HI0nGxiRVvqJAiFucyYQlLFm/editConnectConnect your Google account  your Google account ",

 

  "yearsExperience": 6,

 

  "summary": "Monish is a seasoned Technical Lead with over 6 years of extensive experience in the e-learning industry and web development. Specializing in backend development, Monish has demonstrated expertise in leading development teams and managing complex projects. With a comprehensive skill set that includes PHP, YII Framework, and Docker, he has successfully led projects involving Dockerizing services, migrating server architectures, and ensuring PII data protection. His proven abilities in enhancing technology stacks and efficiently managing DevOps processes, coupled with strong leadership skills, make him a valuable asset for any senior software engineering role focused on delivering high-quality, scalable solutions.",

 

  "bases": {

 

    "cityState": "Surat, Gujarat",

 

    "country": "India"

 

  },

 

  "languages": [],

 

  "technicalSkills": [

 

    {

 

      "sectionName": "Programming Languages & Frameworks",

 

      "skills": ["PHP", "YII Framework", "Laravel", "BackboneJS", "React", "Typescript"]

 

    },

 

    {

 

      "sectionName": "Databases",

 

      "skills": ["MariaDB"]

 

    },

 

    {

 

      "sectionName": "Web DevelopmentTools & Technologies",

 

      "skills": ["Docker", "Bootstrap", "Stylus", "Handlebars"]

 

    },

 

    {

 

      "sectionName": "Payment Gateways & Integrations",

 

      "skills": ["Paypal", "SignEasy", "SurveyMonkey", "Citcon", "YouTube", "iFramely"]

 

    },

 

    {

 

      "sectionName": "Cloud & Hosting Services",

 

      "skills": ["Amazon AWS", "DigitalOcean", "Cloudways"]

 

    },

 

    {

 

      "sectionName": "Email Delivery Services",

 

      "skills": ["Mailgun"]

 

    },

 

    {

 

      "sectionName": "Operating Systems & Virtualization",

 

      "skills": ["Ubuntu", "Hyper-V on Windows"]

 

    },

 

    {

 

      "sectionName": "Development Environments & Debugging Tools",

 

      "skills": ["Integrated Development Environments (IDEs)", "Debuggers"]

 

    },

 

    {

 

      "sectionName": "PHP & YII Framework Versions",

 

      "skills": ["PHP 7.0", "PHP 8.1", "YII 1.0", "YII 1.1.28"]

 

    },

 

    {

 

      "sectionName": "AWS Services",

 

      "skills": ["AWS S3"]

 

    },

 

    {

 

      "sectionName": "Other Technical Skills",

 

      "skills": ["G-Suite APIs", "Sprint planning", "DevOps processes"]

 

    }

 

  ],

 

  "experiences": [

 

    {

 

      "companyName": "Jewel Pro Tech",

 

      "companyDomain": "E-commerce",

 

      "companyIndustry": "Jewelry",

 

      "companyBusinessActivity": "Developing jewelry e-commerce web applications",

 

      "candidatesUniqueAchievement": "",

 

      "summary": "Jewel Pro Tech operates in the e-commerce industry, specializing in developing solutions for the jewelry market. As a Technical Lead, Monish directed a team of developers, ensuring the efficient delivery of high-quality web applications while managing DevOps processes and infrastructure enhancement.",

 

      "positions": [

 

        {

 

          "title": "Technical Lead",

 

          "startDate": "Nov 2023",

 

          "endDate": "Present",

 

          "note": "",

 

          "location": {

 

            "cityState": "Surat, Gujarat",

 

            "country": "India"

 

          },

 

          "employmentType": ""

 

        }

 

      ],

 

      "responsibilitiesAndAccomplishments": [

 

        "Led a team of 9 developers in building a jewelry e-commerce web application using Laravel and Vue.js.",

 

        "Managed DevOps processes and cloud infrastructure on Cloudways.",

 

        "Facilitated sprint planning sessions, collaborating with stakeholders to define sprint goals and prioritize tasks.",

 

        "Identified areas for process improvement and implemented solutions to enhance efficiency.",

 

        "Oversaw the full-stack development of web application features."

 

      ],

 

      "toolsAndTechnologies": [],

 

      "projects": []

 

    },

 

    {

 

      "companyName": "Zeus Learning",

 

      "companyDomain": "E-learning",

 

      "companyIndustry": "Educational Technology",

 

      "companyBusinessActivity": "Providing e-learning solutions, developing and maintaining educational platforms",

 

      "candidatesUniqueAchievement": "",

 

      "summary": "Zeus Learning is an e-learning solution provider, focusing on the development and maintenance of educational platforms. Monish held multiple roles, advancing from Software Engineer to Module Lead. He led teams through the development of innovative, tech-intensive projects, always ensuring data security and system improvements.",

 

      "positions": [

 

        {

          "title": "Module Lead",

          "startDate": "Jul 2021",
          "endDate": "Nov 2023",
          "note": "",

          "location": {
            "cityState": "Mumbai, Maharashtra",
            "country": "India"
          },
          "employmentType": ""

        },

        {

          "title": "Senior Software Engineer",
          "startDate": "Jan 2020",
          "endDate": "Jul 2021",

          "note": "",
          "location": {
            "cityState": "Mumbai, Maharashtra",
            "country": "India"
          },
          "employmentType": ""
        },

        {
          "title": "Software Engineer",
          "startDate": "Jun 2018",
          "endDate": "Jan 2020",
          "note": "",
          "location": {
            "cityState": "Mumbai, Maharashtra",
            "country": "India"
          },
          "employmentType": ""

        }
      ],
      "responsibilitiesAndAccomplishments": [
        "Managed multiple teams across diverse projects as a Module Lead.",
        "Technically led a team of 12 developers and 4 quality assurance professionals on a React-based graphic-intensive project.",
        "Dockerized project services, including e-learning platform components and marketing websites.",
        "Migrated server architecture from DigitalOcean to AWS with rigorous data protection measures.",
        "Upgraded technology stacks, transitioning PHP 7.0 to 8.1 and YII framework to 1.1.28.",
        "Directed initial planning for server migrations, including environment transition from Ubuntu to Hyper-V on Windows.",
        "Implemented integration with third-party services such as Citcon, YouTube, and G-Suite APIs."
      ],
      "toolsAndTechnologies": [],
      "projects": []
    }
  ],
  "educations": [
    {
      "startDate": "Jun 2015",

      "endDate": "Mar 2018",
      "institutionName": "CHARUSAT University",
      "location": {
        "cityState": "Changa, Gujarat",
        "country": "India"
      },
      "level": "Bachelors of Technology",
      "major": "Computer Engineering",
      "scoreGPA": "9.18/10 GPA"
    }
  ],
  "additionalProjects": [],
  "volunteering": [],
  "awardsCertificates": [],
  "recommendations": [
    {
      "recommenderName": "Shruti Gada",
      "recommenderRelation": "Senior Cybersecurity Engineer",
      "recommendationText": "I had the privilege of working alongside Monish at Zeus Learning, where he excelled in the role of a Software Engineer. His exceptional willingness to support his teammates and go the extra mile always stood out. Monish demonstrated strong troubleshooting skills, promptly resolving any project issues to ensure smooth progress. Furthermore, his effective task delegation and clear communication with the team showcased his strong leadership qualities. Throughout our collaboration, Monish's potential for leadership was evident, and I am thrilled to see him now in the position of a Module Lead at Zeus Learning. He consistently proved himself to be an exceptional team member, making a positive impact on our collaborative efforts. I confidently recommend Monish for his outstanding skills, dedication, and profound understanding of projects, coupled with his keen aptitude for learning and attentive listening. I am certain that he will continue to thrive in his career and make significant contributions to any endeavor he undertakes.",
      "recommenderImg": "",
      "recommendationDate": "August 2, 2023"
    },
    {
      "recommenderName": "Priti Mainkar",
      "recommenderRelation": "Software Engineer",
      "recommendationText": "Monish was a pleasure to work with. He is an exceptional leader who combines expertise with a supportive management style. In the team, he set clear goals, provided guidance, and fostered a positive work environment. Their mentorship and feedback have helped me grow. I wholeheartedly recommend Monish for their dedication and leadership qualities.",
      "recommenderImg": "",
      "recommendationDate": "July 14, 2023"
    }
  ],
  "courses": []
}`;
  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });
  console.log(response.choices[0].message.content);
  return response.choices[0].message.content;
};

module.exports = { fileProcessing };
