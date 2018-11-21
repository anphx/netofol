const QUESTION_TYPE = {
    SINGLE_CHOICE: 0,
    MULTI_CHOICE: 1,
    CONTROL_QUESTION: 2,
    TEXT: 3,
    MIXED: 4,
    NO_CHOICE: 5
}

const TOPICS = {
    YOUR_COMPANY: "Your Company",
    INFRASTRUCTURES_SUB: [
        "Information System",
        "Server/Computer Room",
        "Server / A cupboard or a dedicated room",
        "Workstation"
    ],
    INFRASTRUCTURES: "Infrastructures",
    MANAGEMENT: "Management",
    ENERGY: "Energy Consumption",
    PRINTING: "Printing",
    PRINTING_SUB: "Consumables"
}

const DEPARTMENTS = ["IT Services", "Management", "Facility Management"];



// TODO: Mixed choice: 11, 15, 42, 77
const QUESTION_MAP = [
    // Topic: Your Company
    {
        ind: 1,
        q: "In which sector of activity is your company active? (linked with your APE code)",
        a: [
            "Industry",
            "Business",
            "Information and communication",
            "Other services activity",
            "All other activities (financial, agricultural activities ...)",
            "Construction",
            "Public sector",
            "Specialized, Scientific and Technical or Administrative and Support Services Activities",
            "Real estate"
        ],
        topic: TOPICS.YOUR_COMPANY,
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },
    {
        ind: 2,
        q: "What is the number of employees in your company on 18/12/31 ?",
        a: ["0", "1 to 2", "3 to 9", "10 to 49", "50 to 249", "250 to 4999", "More than 5000"],
        topic: TOPICS.YOUR_COMPANY,
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },
    {
        ind: 3,
        q: "What is the turnover of your company in the last fiscal year? (or annual budget for Public sector)",
        a: ["0 to 100K €", "100 to 500 K€", "500 to 2 M €", "2 to 10 M€", "10 to 50 M€", "More than 50 M€"],
        topic: TOPICS.YOUR_COMPANY,
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },
    {
        ind: 4,
        q: "Do you develop digital services for internal or external use (sales to customers)?",
        a: ["Yes", "No"],
        topic: TOPICS.YOUR_COMPANY,
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },
    {
        ind: 5,
        q: "What is the number of users of your digital services?",
        a: [],
        topic: TOPICS.YOUR_COMPANY,
        qType: QUESTION_TYPE.TEXT
    },
    {
        ind: 6,
        q: "Do you apply the rules and best practices for digital accessibility?",
        a: ["Yes", "No", "I don't know"],
        topic: TOPICS.YOUR_COMPANY,
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },
    {
        ind: 7,
        q: "Have you optimized the states and printouts in your application tools (reduced number of pages when printing, ink consumption ...)",
        a: ["Yes", "No", "I don't know"],
        topic: TOPICS.YOUR_COMPANY,
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },
    {
        ind: 8,
        q: "Do you integrate the principles of the ecodesign of digital services?",
        a: ["Yes", "No", "I don't know"],
        topic: TOPICS.YOUR_COMPANY,
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },
    {
        ind: 9,
        q: "Do you use a modular application architecture?",
        a: ["Yes", "No", "I don't know"],
        topic: TOPICS.YOUR_COMPANY,
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },
    {
        ind: 10,
        q: "Do you do a design review at the end of your application's development?",
        a: ["Yes", "No", "I don't know"],
        topic: TOPICS.YOUR_COMPANY,
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },
    // Topic INFRASTRUCTURES --> Information Technology
    {
        ind: 11,
        q: "What is the overall storage volume of your corporate data (centralized on external hard drives, centralized server, NAS, SAN ...) in Terabytes (TB) useful?",
        a: ["I don't know", "I do not want to answer", "x TB"], // >> response field to be added,
        topic: TOPICS.INFRASTRUCTURES,
        subTopic: TOPICS.INFRASTRUCTURES_SUB[0],
        qType: QUESTION_TYPE.MIXED
    },
    {
        ind: 12,
        q: "Do you have a server or do you only work with one or more workstations?",
        a: ["We work with workstation (s), without centralized physical server", "We have (at least) a centralized physical server"],
        topic: TOPICS.INFRASTRUCTURES,
        subTopic: TOPICS.INFRASTRUCTURES_SUB[0],
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },
    {
        ind: 13,
        q: "Do you have a dedicated room, simple room or cupboard with bay dedicated to your IT infrastructure?",
        a: ["A closet or a room without any specific system", "A dedicated room"],
        topic: TOPICS.INFRASTRUCTURES,
        subTopic: TOPICS.INFRASTRUCTURES_SUB[0],
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },
    // Topic INFRASTRUCTURES --> Server/Computer Room
    {
        ind: 14,
        q: "Is your computer room in house or at a host?",
        a: ["Internal", "Host Member of the European Code of Conduct for Datacenters", "Non-adhering Host of the European Code of Conduct for Data Centers"],
        topic: TOPICS.INFRASTRUCTURES,
        subTopic: TOPICS.INFRASTRUCTURES_SUB[1],
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },
    {
        ind: 15,
        q: "What is the total area of your computer rooms (excluding technical infrastructure *)? (in m2)",
        a: [
            "X m2", //>> response field to be added
            "I don't know",
            "I do not want to answer"
        ],
        topic: TOPICS.INFRASTRUCTURES,
        subTopic: TOPICS.INFRASTRUCTURES_SUB[1],
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },
    {
        ind: 16,
        q: "Do you know the PUE * of your Data Center?",
        a: ["*PUE : Power Usage Effectiveness", "Less than 1,6 ", "Between 1,6 and 2,1 ", "More than 2,1 ", "I don't know"],
        topic: TOPICS.INFRASTRUCTURES,
        subTopic: TOPICS.INFRASTRUCTURES_SUB[1],
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },
    {
        ind: 17,
        q: "What is the rate of charge or energy use of your computer rooms?",
        a: [
            "Rate = Electrical power absorbed by your IT equipment, divided by room capacity in kW, then multiplied by 100 (used energy / available energy)",
            "100% - 90% ",
            "90% - 60% ",
            "Less than 60% ",
            "I don't know"
        ],
        topic: TOPICS.INFRASTRUCTURES,
        subTopic: TOPICS.INFRASTRUCTURES_SUB[1],
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },
    {
        ind: 18,
        q: "Have you led or are you planning actions to optimize your infrastructure? Especially :",
        a: [],
        topic: TOPICS.INFRASTRUCTURES,
        subTopic: TOPICS.INFRASTRUCTURES_SUB[1],
        qType: QUESTION_TYPE.NO_CHOICE
    },
    {
        ind: 19,
        q: "The purchase of non-IT equipment from IT rooms (air conditioning, air treatment, inverters, etc.) according to energy efficiency criteria",
        a: ["Yes", "No", "I don't know"],
        topic: TOPICS.INFRASTRUCTURES,
        subTopic: TOPICS.INFRASTRUCTURES_SUB[1],
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },
    {
        ind: 20,
        q: 'Implementing the good practices of the "European Code of Conduct for DataCenter"?',
        a: ["Yes", "No", "I don't know"],
        topic: TOPICS.INFRASTRUCTURES,
        subTopic: TOPICS.INFRASTRUCTURES_SUB[1],
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },
    {
        ind: 21,
        q: "Data center PUE tracking",
        a: ["Yes", "No", "I don't know"],
        topic: TOPICS.INFRASTRUCTURES,
        subTopic: TOPICS.INFRASTRUCTURES_SUB[1],
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },
    {
        ind: 22,
        q: "Regular monitoring of environmental indicators of computer rooms",
        a: ["Yes", "No", "I don't know"],
        topic: TOPICS.INFRASTRUCTURES,
        subTopic: TOPICS.INFRASTRUCTURES_SUB[1],
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },
    {
        ind: 23,
        q: "Environmental impact analysis of the datacenter in life cycle approach",
        a: ["Yes", "No", "I don't know"],
        topic: TOPICS.INFRASTRUCTURES,
        subTopic: TOPICS.INFRASTRUCTURES_SUB[1],
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },
    {
        ind: 24,
        q: "Optimizing the architecture and layout of rooms",
        a: ["Yes", "No", "I don't know"],
        topic: TOPICS.INFRASTRUCTURES,
        subTopic: TOPICS.INFRASTRUCTURES_SUB[1],
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },
    {
        ind: 25,
        q: "The urbanization of halls in hot / cold aisles",
        a: ["Yes", "No", "I don't know"],
        topic: TOPICS.INFRASTRUCTURES,
        subTopic: TOPICS.INFRASTRUCTURES_SUB[1],
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },
    {
        ind: 26,
        q: "Containment of air flows (corridors)",
        a: ["Yes", "No", "I don't know"],
        topic: TOPICS.INFRASTRUCTURES,
        subTopic: TOPICS.INFRASTRUCTURES_SUB[1],
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },
    {
        ind: 27,
        q: "The use of natural cooling sources (freecooling)",
        a: ["Yes", "No", "I don't know"],
        topic: TOPICS.INFRASTRUCTURES,
        subTopic: TOPICS.INFRASTRUCTURES_SUB[1],
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },
    {
        ind: 28,
        q: "Implementation of a heat recovery system for computer rooms (heating)",
        a: ["Yes", "No", "I don't know"],
        topic: TOPICS.INFRASTRUCTURES,
        subTopic: TOPICS.INFRASTRUCTURES_SUB[1],
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },
    {
        ind: 29,
        q: "The set temperature in the cold corridor remains higher than 24 °",
        a: ["Yes", "No", "I don't know"],
        topic: TOPICS.INFRASTRUCTURES,
        subTopic: TOPICS.INFRASTRUCTURES_SUB[1],
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },
    {
        ind: 30,
        q: "The choice of a modular datacenter architecture",
        a: ["Yes", "No", "I don't know"],
        topic: TOPICS.INFRASTRUCTURES,
        subTopic: TOPICS.INFRASTRUCTURES_SUB[1],
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },

    // Topic INFRASTRUCTURES --> Server / A cupboard or a dedicated room
    {
        ind: 31,
        q: "Have you led or are you planning actions to optimize your infrastructure? Especially :",
        a: [],
        topic: TOPICS.INFRASTRUCTURES,
        subTopic: TOPICS.INFRASTRUCTURES_SUB[2],
        qType: QUESTION_TYPE.NO_CHOICE
    },
    {
        ind: 32,
        q: "Suspending network equipment",
        a: ["Yes", "No", "I don't know"],
        topic: TOPICS.INFRASTRUCTURES,
        subTopic: TOPICS.INFRASTRUCTURES_SUB[2],
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },
    {
        ind: 33,
        q: "Pooling physical equipment",
        a: ["Yes", "No", "I don't know"],
        topic: TOPICS.INFRASTRUCTURES,
        subTopic: TOPICS.INFRASTRUCTURES_SUB[2],
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },
    {
        ind: 34,
        q: "Uninstalling unnecessary infrastructure",
        a: ["Yes", "No", "I don't know"],
        topic: TOPICS.INFRASTRUCTURES,
        subTopic: TOPICS.INFRASTRUCTURES_SUB[2],
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },
    {
        ind: 35,
        q: "Traceability of material elements (CMDB)",
        a: ["Yes", "No", "I don't know"],
        topic: TOPICS.INFRASTRUCTURES,
        subTopic: TOPICS.INFRASTRUCTURES_SUB[2],
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },
    {
        ind: 36,
        q: "The correct sizing of the servers in relation to their use",
        a: ["Yes", "No", "I don't know"],
        topic: TOPICS.INFRASTRUCTURES,
        subTopic: TOPICS.INFRASTRUCTURES_SUB[2],
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },
    {
        ind: 37,
        q: "Give priority to ASHRAE 2 compatible equipment",
        a: ["Yes", "No", "I don't know"],
        topic: TOPICS.INFRASTRUCTURES,
        subTopic: TOPICS.INFRASTRUCTURES_SUB[2],
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },
    {
        ind: 38,
        q: "A procedure for provisioning and de-provisioning data-processing equipment in datacenters",
        a: ["Yes", "No", "I don't know"],
        topic: TOPICS.INFRASTRUCTURES,
        subTopic: TOPICS.INFRASTRUCTURES_SUB[2],
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },
    {
        ind: 39,
        q: "Do you know the number of physical servers and virtual servers in your company?",
        a: ["No", "I do not want to answer", "Yes"],
        topic: TOPICS.INFRASTRUCTURES,
        subTopic: TOPICS.INFRASTRUCTURES_SUB[2],
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },
    {
        ind: 40,
        q: "How many physical servers do you have?",
        a: [],
        topic: TOPICS.INFRASTRUCTURES,
        subTopic: TOPICS.INFRASTRUCTURES_SUB[2],
        qType: QUESTION_TYPE.TEXT
    },
    {
        ind: 41,
        q: "How many virtual servers do you have?",
        a: [],
        topic: TOPICS.INFRASTRUCTURES,
        subTopic: TOPICS.INFRASTRUCTURES_SUB[2],
        qType: QUESTION_TYPE.TEXT
    },
    {
        ind: 42,
        q: "What will be the evolution of your number of physical servers for 2019? (in% or quantity)",
        a: [
            "In %", //>> response field to be added
            "In quantity", // >> response field to be added
            "I do not want to answer",
            "I don't know"
        ],
        topic: TOPICS.INFRASTRUCTURES,
        subTopic: TOPICS.INFRASTRUCTURES_SUB[2],
        qType: QUESTION_TYPE.MIXED
    },
    {
        ind: 43,
        q: "What will be the evolution of your number of virtual servers for 2019? (in% or quantity)",
        a: [
            "In %", //>> response field to be added
            "In quantity", // >> response field to be added
            "I do not want to answer",
            "I don't know"
        ],
        topic: TOPICS.INFRASTRUCTURES,
        subTopic: TOPICS.INFRASTRUCTURES_SUB[2],
        qType: QUESTION_TYPE.MIXED
    },
    // Topic: Management
    {
        ind: 44,
        q: "Has your company appointed a Green IT Manager / Digital Manager?",
        a: ["Yes", "No", "I don't know"],
        topic: TOPICS.MANAGEMENT,
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },
    {
        ind: 45,
        q: "Do you have a responsible digital strategy broken down into an action plan?",
        a: ["Yes", "No", "I don't know"],
        topic: TOPICS.MANAGEMENT,
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },
    {
        ind: 46,
        q: "Is Green IT a topic integrated into your CSR strategy?",
        a: ["Yes", "No", "I don't know"],
        topic: TOPICS.MANAGEMENT,
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },
    {
        ind: 47,
        q: "Do you regularly evaluate the environmental impacts of your information system?",
        a: [
            "Yes partially, including only equipment present in the company",
            "Yes totally, including our internal equipment and services hosted by third parties",
            "No",
            "I do not know"
        ],
        topic: TOPICS.MANAGEMENT,
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },
    {
        ind: 48,
        q: "Do you have a team of competent referees on the topics of Green IT?",
        a: ["Yes", "No", "I don't know"],
        topic: TOPICS.MANAGEMENT,
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },
    {
        ind: 49,
        q: "Have you integrated Green IT into your business strategy",
        a: ["Yes", "No", "I don't know"],
        topic: TOPICS.MANAGEMENT,
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },
    // Topic: Infrastructure --> Workstation
    {
        ind: 50,
        q: "Do you have those equipments in your company:|" +
            "Used: equipment used in the business activity \n" +
            "Not used functional: equipment in working order but no more used by the company (stored) \n" +
            "Neither used nor functional: out of service equipment (HS) waiting for end of life treatment",
        a: [],
        topic: TOPICS.INFRASTRUCTURES,
        subTopic: TOPICS.INFRASTRUCTURES_SUB[3],
        qType: QUESTION_TYPE.NO_CHOICE
    },
    {
        ind: 51,
        q: "Fixed stations, workstations",
        a: ["Used", "Not used functional", "Neither used nor functional"],
        topic: TOPICS.INFRASTRUCTURES,
        subTopic: TOPICS.INFRASTRUCTURES_SUB[3],
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },
    {
        ind: 52,
        q: "Laptops, digital tablets",
        a: ["Used", "Not used functional", "Neither used nor functional"],
        topic: TOPICS.INFRASTRUCTURES,
        subTopic: TOPICS.INFRASTRUCTURES_SUB[3],
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },
    {
        ind: 53,
        q: "Small printers (<15kg, potentially used by a household)",
        a: ["Used", "Not used functional", "Neither used nor functional"],
        topic: TOPICS.INFRASTRUCTURES,
        subTopic: TOPICS.INFRASTRUCTURES_SUB[3],
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },
    {
        ind: 54,
        q: " Flat screen monitors",
        a: ["Used", "Not used functional", "Neither used nor functional"],
        topic: TOPICS.INFRASTRUCTURES,
        subTopic: TOPICS.INFRASTRUCTURES_SUB[3],
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },
    {
        ind: 55,
        q: "Other flat screens (TV, projection screen, digital board ...)",
        a: ["Used", "Not used functional", "Neither used nor functional"],
        topic: TOPICS.INFRASTRUCTURES,
        subTopic: TOPICS.INFRASTRUCTURES_SUB[3],
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },
    {
        ind: 56,
        q: "CRT monitors (monitors or other)",
        a: ["Used", "Not used functional", "Neither used nor functional"],
        topic: TOPICS.INFRASTRUCTURES,
        subTopic: TOPICS.INFRASTRUCTURES_SUB[3],
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },
    {
        ind: 57,
        q: "Video projectors",
        a: ["Used", "Not used functional", "Neither used nor functional"],
        topic: TOPICS.INFRASTRUCTURES,
        subTopic: TOPICS.INFRASTRUCTURES_SUB[3],
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },
    {
        ind: 58,
        q: "Mobile phones",
        a: ["Used", "Not used functional", "Neither used nor functional"],
        topic: TOPICS.INFRASTRUCTURES,
        subTopic: TOPICS.INFRASTRUCTURES_SUB[3],
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },
    {
        ind: 59,
        q: "Fixed telephones (standalone not connected to such a standard)",
        a: ["Used", "Not used functional", "Neither used nor functional"],
        topic: TOPICS.INFRASTRUCTURES,
        subTopic: TOPICS.INFRASTRUCTURES_SUB[3],
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },
    {
        ind: 60,
        q: "Digital cameras",
        a: ["Used", "Not used functional", "Neither used nor functional"],
        topic: TOPICS.INFRASTRUCTURES,
        subTopic: TOPICS.INFRASTRUCTURES_SUB[3],
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },
    {
        ind: 61,
        q: "Hard Disk Devices, Storage, Backup",
        a: ["Used", "Not used functional", "Neither used nor functional"],
        topic: TOPICS.INFRASTRUCTURES,
        subTopic: TOPICS.INFRASTRUCTURES_SUB[3],
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },
    {
        ind: 62,
        q: "Do you have other devices in your company?|" +
            "Keyboards, mouse, graphic tablets, scanners, microphones, speakers, office equipment ...",
        a: ["Yes", "No"],
        topic: TOPICS.INFRASTRUCTURES,
        subTopic: TOPICS.INFRASTRUCTURES_SUB[3],
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },
    {
        ind: 63,
        q: "Regarding other devices, do you have in your company:|" +
            "Used: equipment used in the business activity \n" +
            "Not used functional: equipment in working order but no more used by the company (stored) \n" +
            "Neither used nor functional: out of service equipment (HS) waiting for end of life treatment",
        a: [],
        topic: TOPICS.INFRASTRUCTURES,
        subTopic: TOPICS.INFRASTRUCTURES_SUB[3],
        qType: QUESTION_TYPE.NO_CHOICE
    },
    {
        ind: 64,
        q: "Keyboards",
        a: ["Used", "Not used functional", "Neither used nor functional"],
        topic: TOPICS.INFRASTRUCTURES,
        subTopic: TOPICS.INFRASTRUCTURES_SUB[3],
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },
    {
        ind: 65,
        q: "Mouse",
        a: ["Used", "Not used functional", "Neither used nor functional"],
        topic: TOPICS.INFRASTRUCTURES,
        subTopic: TOPICS.INFRASTRUCTURES_SUB[3],
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },
    {
        ind: 66,
        q: "Graphic tablets",
        a: ["Used", "Not used functional", "Neither used nor functional"],
        topic: TOPICS.INFRASTRUCTURES,
        subTopic: TOPICS.INFRASTRUCTURES_SUB[3],
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },
    {
        ind: 67,
        q: "Scanners",
        a: ["Used", "Not used functional", "Neither used nor functional"],
        topic: TOPICS.INFRASTRUCTURES,
        subTopic: TOPICS.INFRASTRUCTURES_SUB[3],
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },
    {
        ind: 68,
        q: "Speakers",
        a: ["Used", "Not used functional", "Neither used nor functional"],
        topic: TOPICS.INFRASTRUCTURES,
        subTopic: TOPICS.INFRASTRUCTURES_SUB[3],
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },
    {
        ind: 69,
        q: "Office automation",
        a: ["Used", "Not used functional", "Neither used nor functional"],
        topic: TOPICS.INFRASTRUCTURES,
        subTopic: TOPICS.INFRASTRUCTURES_SUB[3],
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },
    // Topic: Energy consumption
    {
        ind: 70,
        q: "Do you know the consumption of your workstation in kWh per year?",
        a: [
            "Yes (please specify how much in kWh / year)", // >> response field to be added"
            "No"
        ],
        topic: TOPICS.ENERGY,
        qType: QUESTION_TYPE.MIXED
    },
    {
        ind: 71,
        q: "Do you track the energy consumption of your compagny activities?",
        a: [
            "Yes",
            "No",
            "I don't know"
        ],
        topic: TOPICS.ENERGY,
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },
    {
        ind: 72,
        q: "Do you know the share of IT and IT equipment in your company's total energy consumption?",
        a: [
            "Yes (please specify how much in %)", // >> response field to be added
            "No"
        ],
        topic: TOPICS.ENERGY,
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },
    {
        ind: 73,
        q: "Have you set up a power management system? (automatic shutdown / shutdown of workstations)",
        a: [
            "Yes",
            "No",
            "I don't know"
        ],
        topic: TOPICS.ENERGY,
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },

    // Topic: Printing
    {
        ind: 74,
        q: "Do you use copiers from a repackaging industry (second-hand / second-hand)?",
        a: ["Yes", "No", "I don't know"],
        topic: TOPICS.PRINTING,
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },
    {
        ind: 75,
        q: "Do you consolidate individual printers to shared printers?",
        a: ["Yes", "No", "I don't know"],
        topic: TOPICS.PRINTING,
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },
    {
        ind: 76,
        q: "Have you set up an identification system on printers (to trigger printing)?",
        a: ["Yes", "No", "I don't know"],
        topic: TOPICS.PRINTING,
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },
    {
        ind: 77,
        q: "What is the average life of your professional copier / MFP *?|* MFP Multi Fonction Printer",
        a: [
            "I do not know",
            "Do not want to answer",
            "x years (please specify)" //" >> response fields "comment" to be added"
        ],
        topic: TOPICS.PRINTING,
        qType: QUESTION_TYPE.MIXED
    },
    {
        ind: 78,
        q: "Are your printers set by default in eco mode? Especially:|Answer following questions",
        a: [],
        topic: TOPICS.PRINTING,
        qType: QUESTION_TYPE.NO_CHOICE
    },
    {
        ind: 79,
        q: "Energy saving (Automatic standby)",
        a: ["Yes", "No", "I don't know"],
        topic: TOPICS.PRINTING,
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },
    {
        ind: 80,
        q: "Black and white by default",
        a: ["Yes", "No", "I don't know"],
        topic: TOPICS.PRINTING,
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },
    {
        ind: 81,
        q: "Default duplex",
        a: ["Yes", "No", "I don't know"],
        topic: TOPICS.PRINTING,
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },
    {
        ind: 82,
        q: "Default draft mode",
        a: ["Yes", "No", "I don't know"],
        topic: TOPICS.PRINTING,
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },
    // Topic: Printing --> Consumables
    {
        ind: 83,
        q: "What is the number of pages printed / day / employee? (A4 equivalent)",
        a: ["Less than 10", "From 10 to 20", "From 20 to 30", "More than 30", "I don't know"],
        topic: TOPICS.PRINTING,
        subTopic: TOPICS.PRINTING_SUB,
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },
    // TODO: Render text for each answer choice
    // concat str using |
    {
        ind: 84,
        q: "Can you specify the number of cartridges / toners:",
        a: [
            "Cartridges used a year", // >> response field to be added
            "Cartridges stored in the average business", // >> response field to be added
            "Toners used a year", // >> response fields to be added
            "Toners stored in the average business" //>> response field to be added
        ],
        topic: TOPICS.PRINTING,
        subTopic: TOPICS.PRINTING_SUB,
        qType: QUESTION_TYPE.TEXT
    },
    {
        ind: 85,
        q: "Do you organize the separate collection of waste cartridges / toners?",
        a: [
            "Yes, to a repackaging industry",
            "Yes, towards a recycling channel (destruction)",
            "No no separate collection device is planned"
        ],
        topic: TOPICS.PRINTING,
        subTopic: TOPICS.PRINTING_SUB,
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },
    {
        ind: 86,
        q: "Do you prefer the use of recycled paper?",
        a: [
            "Yes, our paper is made from virgin paste",
            "Yes, mixed paper",
            "Yes, 100% recycled",
            "I'm not paying attention"
        ],
        topic: TOPICS.PRINTING,
        subTopic: TOPICS.PRINTING_SUB,
        qType: QUESTION_TYPE.MULTI_CHOICE
    },
    {
        ind: 87,
        q: "Do you choose certified paper?",
        a: [
            "Yes, FSC",
            "Yes, PEFC",
            "Yes, Blue Angel",
            "Yes, European Label",
            "Yes, other", // >> comment fields to add
            "I'm not paying attention"
        ],
        topic: TOPICS.PRINTING,
        subTopic: TOPICS.PRINTING_SUB,
        qType: QUESTION_TYPE.MULTI_CHOICE
    },
    {
        ind: 88,
        q: "Do you organize the separate collection of waste paper for recycling?",
        a: ["Yes", "No", "I don't know"],
        topic: TOPICS.PRINTING,
        subTopic: TOPICS.PRINTING_SUB,
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },
];

$(document).ready(function() {
    var startBtn = $("#start-btn");
    var nextBtn = $("<button>Next</button>").attr('id', 'next-btn');
    var prevBtn = $("<button>Previous</button>").attr('id', 'previous-btn');
    var saveBtn = $("<button>Save</button>").attr('id', 'save-btn');
    var continueBtn = $("<button>Continue previous survey</button>").attr('id', 'continue-btn');
    var chooseDeptBtn = $("<button>Go to survey</button>").attr('id', 'continue-btn');
    var radioBtn;
    var question = QUESTION_MAP[1].q;
    

    var startBtnClick = function(e) {
        $("#content").html("Choose your department");
         startBtn.remove();
         for (i = 0; i < DEPARTMENTS.length; i++) {
         radioBtn = $('<input type="radio" class="department" name="rbtnCount" value="'+i+'" >' + DEPARTMENTS[i] + '</input>').attr('id', 'dept'+i);
         radioBtn.appendTo('body');
     }
         chooseDeptBtn.appendTo('body');
         continueBtn.appendTo('body');
    }

    var chooseDepartment= function(e) {
      $("input").remove(".department");
        chooseDeptBtn.remove();
        continueBtn.remove();
       $("#content").html(question);
        $("#content").append("<ul>answer A</ul>");
        prevBtn.appendTo('body');
        saveBtn.appendTo('body');
        nextBtn.appendTo('body');
        
    }

    var nextBtnClick = function(e) {
        alert("Next btn clicked");
    }

    var prevBtnClick = function(e) {
        alert("Prev btn clicked");
    }
    var saveBtnClick = function(e) {
        alert("Save btn clicked");
    }

    startBtn.on('click', startBtnClick);
    chooseDeptBtn.on('click', chooseDepartment);
    prevBtn.on('click', prevBtnClick);
    nextBtn.on('click', nextBtnClick);
    saveBtn.on('click', saveBtnClick);

});
