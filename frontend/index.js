const QUESTION_MAP = [{
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
        ind: 5,
        q: "Ecoconception good practices",
        a: ["Yes", "No", "I don't know"],
        topic: TOPICS.YOUR_COMPANY,
        qType: QUESTION_TYPE.CONTROL_QUESTION
    },
    {
        ind: 6,
        q: "Do you apply the rules and best practices for digital accessibility?",
        a: [],
        topic: TOPICS.YOUR_COMPANY,
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },


// 5. 

// Ecoconception good practices
// 6. Do you apply the rules and best practices for digital accessibility?
// 7. Have you optimized the states and printouts in your application tools (reduced number of pages when printing, ink consumption ...)
// 8. Do you integrate the principles of the ecodesign of digital services?
// 9. Do you use a modular application architecture?
// 10. Do you do a design review at the end of your application's development?



    /*
    {
        ind: ,
        q: "",
        a: [],
        topic: TOPICS.YOUR_COMPANY,
        qType: QUESTION_TYPE.SINGLE_CHOICE
    },
    */

];

const QUESTION_TYPE = {
    SINGLE_CHOICE: 0,
    MULTI_CHOICE: 1,
    CONTROL_QUESTION: 2,
    TEXT: 3
}

const TOPICS = {
    YOUR_COMPANY: "Your Company",


}

function test() {
    // body...
    console.log("abcs");
}

test();
