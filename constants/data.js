const userData = {
  githubUsername: "TeodoroTopa",
  name: "Teodoro Topa",
  designation: "Data Scientist",
  avatarUrl: "/avatar.png",
  email: "teodorotopa@gmail.com",
  phone: "+1 (202)-413-4213",
  address: "New York, NY, USA",
  projects: [
    {
      title: "Loisaba EarthRanger & Tableau Mapping Project",
      link: "https://github.com/TeodoroTopa/earthranger_tableau_integration_maps",
      imgUrl: "/leopard_leaving_tree.jpg",
    },
    {
      title: "Energy Generation Planning App",
      link: "https://github.com/cccdenhart/transmission-capacity",
      imgUrl: "/energy_planning_app.png"
    },
    {
      title: "Brazil Nut & Soy Production Mapping",
      link: "https://github.com/TeodoroTopa/cxl_brazilnut_mapping",
      imgUrl: "/brazil_nut_map.png"
    },
    {
      title: "Cornell Course Recommendation Website",
      link: "https://github.com/TeodoroTopa/course_recommender_site",
      imgUrl: "/ccr.png",
    },
    {
      title: "Transfer Learning App for Safari Animal Classification",
      link: "https://huggingface.co/spaces/tskst/safari_animal_classifier",
      imgUrl: "/safari_clf.png",
    },
    {
      title: "Yelp Review Classification NLP Project",
      link: "https://github.com/TeodoroTopa/yelp_review_classification",
      imgUrl: "/confusion_matrix.png",
    },
    {
      title: "Global Immigration Flow Visualization",
      link: "https://github.com/TeodoroTopa/global_immigrant_flow_viz",
      imgUrl: "/giflow.png",
    },
    {
      title: "Chicago Housing MiniProject",
      link: "https://github.com/TeodoroTopa/chicago_housing_miniproject",
      imgUrl: "https://user-images.githubusercontent.com/27015256/265310506-aed5001c-ad2a-4a39-9d1c-b0d208aebdd0.png",
    },
    {
      title: "Kenyan Bird Quiz",
      link: "https://github.com/TeodoroTopa/birdquiz",
      imgUrl: "https://user-images.githubusercontent.com/27015256/265303839-34791da9-3db2-4836-b0c4-090de2993c76.png",
    },
    {
      title: "Personal Website",
      link: "https://github.com/TeodoroTopa/teodorotopa_personal_website",
      imgUrl: "/pweb.png",
    },
  ],
  about: {
    title:
      "I'm a data scientist with a strong interest in conservation and sustainability.",
    description: [
      'My corporate experience is coupled with a wide range of coursework and professional experience that spans from natural language processing and classification to building an automated wildlife mapping pipeline. I thrive on getting projects out into the world, and love tackling novel challenges and field testing new solutions.',
      'Today, I live in New York and work at 84.51, a data science and analytics organization. In my position, I develop and execute custom data science projects for Fortune 500 retail clients as part of the Partnerships and Delivery team. I engage directly with clients, communicating insights and breaking down data science concepts for non-technical audiences.',
      'My special interest is in conservation. At Cornell University, I double majored in Information Science and Environmental and Sustainability Sciences, completing concentrations in data science and environmental biology and applied ecology. I have experience at the intersection of the two fields, both in the classroom (studying geographic information systems and population biology) and in the workplace (as an assistant to the Conservation Officer at Loisaba Conservancy in Kenya, and as a field researcher in the Galapagos).',
      'Technical expertise aside, I bring business acumen and exceptional interpersonal skills to the table. I\'ve honed these skills through diverse experiences in conservation, law, politics, and the private sector. Having lived on four continents and grown up studying four languages (not including Python! 🙂), I possess a unique cultural awareness and adaptability that allows me to thrive in varied work environments.',

      'Languages: English (fluent), Italian (fluent), Spanish (professional proficiency), French (Intermediate)',
      // '\nOther things that didn\'t fit in the short bio:',
      // 'After graduating high school in 2017, I took a gap year and did three things:',
      // '\t 1. Earned an apprentice safari guiding certification (FGASA Level 1) in South Africa. I lived on game reserves and was taught and assessed by Ecotraining, a guide training organization.',
      // '\t 2. Taught skiing in Verbier, Switzerland after completing a BASI level 2 ski instructing certification.',
      // '\t 3. Interned on Capitol Hill for Rep. Jerrold Nadler.',
      // 'I have Celiac and can\'t eat gluten (ask me for gluten free eats recs in DC, NYC, Ithaca, and Chicago!).',
      // 'My dad is Italian and I grew up speaking Italian at home. I want to live in Italy at some point!\n\n',
    ],
    currentProject: "the 84.51 Data Science team!",
    currentProjectUrl: "https://www.8451.com/solutions/research-analytics",
  },
  experience: [
    {
      title: "Data Scientist",
      company: "84.51",
      year: "2023",
      companyLink: "https://www.8451.com/",
      desc: "Data Scientist on the Commercial Insights and Loyalty, Partnerships & Delivery Team. \n\n  Develop, execute, and QA custom data science projects for Fortune 500 retail clients. Engage directly with stakeholders to communicate insights and break down data science concepts for non-technical audiences. \n\n Primarily leverage Databricks, PySpark, PowerBI, VSCode, Git, and DataRobot for modeling.",
    },
    {
      title: "Assistant to the Conservation Officer",
      company: "Loisaba Conservancy, Laikipia, Kenya",
      year: "2022",
      companyLink: "https://loisaba.com/",
      desc: "Automated mapping and reporting of wildlife sightings by security team on daily patrols using EarthRanger and Tableau, saving multiple days of work in the creation of monthly reports. \n\n Created a system for tracking touristic game drives in EarthRanger and Tableau, incorporating guests' wildlife sightings into the conservancy's tracking system while providing guests with interactive digital keepsakes.\n\n Guided guests on safari game drives, leading educational tours in both English and Italian.",
    },
    {
      title: "Graduation",
      company: "Cornell University, Ithaca, NY.",
      year: "2022",
      companyLink: "https://cals.cornell.edu/",
      desc: "Graduated Magna Cum Laude with a double major in Environmental and Sustainability Sciences, and Information Science.",
    },
    {
      title: "Project Manager and Consultant",
      company: "Social Business Consulting Cornell",
      year: "2019-22",
      companyLink: "https://www.sbccornell.org/",
      desc: "As a Project Manager: Led a team of six consultants building a market entry plan, educational partner shortlist, and revenue projection for a conservation organization entering the online professional training space. \n\n As a consultant: Contributed to various semester-long client engagements. Advised on marketing, investment strategy, management optimization, and performed data analytics and data system creation and management. For example, performed data analysis and assisted with data pipelining for a human rights protection organization in South Asia.",
    },
    {
      title: "Consulting Intern - Technology Segment",
      company: "FTI Consulting",
      year: "2021",
      companyLink: "https://www.fticonsulting.com/",
      desc: "Performed data intake, processing, quality assessment, and presentation tasks on external, client-facing eDiscovery engagements. Leveraged Relativity, Excel and PowerPoint to accomplish tasks. Managed internal training projects.",
    },
    {
      title: "Machine Learning Intern",
      company: "IvyOnline Academy",
      year: "2020",
      companyLink: "https://www.linkedin.com/company/ivyonline-academy/about/",
      desc: "Researched and assisted with the development of Machine Learning models in Python related to stock market predictions.",
    },  
    {
      title: "Data Science Intern",
      company: "Patriot Family Homes",
      year: "2020",
      companyLink: "https://www.patriotfamilyhomes.com/team",
      desc: "Performed data analysis and administration. Created MySQL database and migrated company data from excel to MySQL. Examined customer messages and leveraged Tableau visualizations to identify when customer service support must be most active.",
    },
    {
      title: "Data and Programming Intern",
      company: "RealtySage",
      year: "2020",
      companyLink: "https://www.realtysage.com/",
      desc: "Performed data aggregation and analysis, and completed programming tasks related to the creation of a home-ownership cost calculator for a sustainable real-estate listing service. Performed other related data tasks as needed.",
    },
    {
      title: "Plant Behavior & Biotic Interactions Teaching Assistant",
      company: "Cornell University Plant Sciences Department",
      year: "2020",
      companyLink: "https://cals.cornell.edu/",
      desc: "Assisted undergraduate students in understanding the role of plants in the biosphere. Guided discussions of course concepts and scientific literature and assessed student learning by building and grading quizzes.",
    },
    {
      title: "Policy Analyst",
      company: "Cornell Roosevelt Institute",
      year: "2019",
      companyLink: "https://cornellrooseveltinstitute.weebly.com/",
      desc: "Published an op-ed and developed a policy proposal as a member of the Environment and Technology team at a student think tank.",
    },
    {
      title: "Biodiversity Field Assistant",
      company: "Universidad San Francisco de Quito, Galapagos Islands, Ecuador",
      year: "2019",
      companyLink: "https://www.usfq.edu.ec/es/opi/internacional",
      desc: "Worked in Spanish on a two-person field research team in the Galapagos Islands. Captured terrestrial birds of the Galapagos and took blood samples and body measurements. Compiled data for Universidad San Francisco de Quito’s Zoology Department study.",
    },
    {
      title: "Congressional Intern",
      company: "Office of Congressman Jerrold Nadler",
      year: "2018",
      companyLink: "https://nadler.house.gov/",
      desc: "Wrote memoranda on bills & constituent correspondence, answered the office telephone, welcomed visitors.",
    },
    {
      title: "Ski Instructor",
      company: "Adrenaline International Ski & Snowboard School in Verbier, Switzerland",
      year: "2018",
      companyLink: "https://adrenaline-verbier.ch/en/",
      desc: "Taught groups and individuals of all ages in English, French, Italian, and Spanish.",
    },
    {
      title: "Field Guide Trainee",
      company: "EcoTraining Field Guide and Nature Training - South Africa",
      year: "2017",
      companyLink: "https://www.ecotraining.co.za/",
      desc: "Completed big game field guide training while living and camping in Kapama Private Game Reserve (PGR), Pridelands Conservancy, & Selati PGR. Studied for and passed exams on lowveld ecology and geology, animal behavior, bird sight and song recognition, hospitality, off-road driving, group safety and leadership, among others.",
    },
    {
      title: "High School, Washington, DC",
      company: "Woodrow Wilson (renamed Jackson Reed) High School, Washington, DC.",
      year: "2017",
      companyLink: "https://jacksonreedhs.org/",
      desc: "Graduated 3rd in a class of 400 with a GPA of 4.31.",
    },
  ],
  resumeUrl:
    "https://drive.google.com/file/d/185IzZVxsT3G28dQaGFUEldrVaoGfIz9Z/view?usp=sharing",
  socialLinks: {
    instagram: "https://www.instagram.com/uguay/",
    linkedin: "https://www.linkedin.com/in/teodoro-topa/",
    github: "https://github.com/TeodoroTopa",
    facebook: "https://www.facebook.com/teo.topa.7",
  },
};

export default userData;
