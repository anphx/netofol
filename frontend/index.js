$(document).ready(function(){
        var startBtn= $("#start-btn");
        var nextBtn = $("<button>Next</button>").attr('id','next-btn');
        var prevBtn = $("<button>Previous</button>").attr('id','previous-btn');
        var saveBtn =  $("<button>Save</button>").attr('id','save-btn');
    
    var startBtnClick = function(e){
        $("#content").text("temp_question"); 
        $("#content").append("<div>answer A</div>");
        prevBtn.appendTo('body');
        saveBtn.appendTo('body');
        nextBtn.appendTo('body');
        startBtn.remove();

    }

    var nextBtnClick = function(e){
        alert("Next btn clicked");
    }

    var prevBtnClick = function(e){
        alert("Prev btn clicked");
    }
    var saveBtnClick = function(e){
        alert("Save btn clicked");
    }

    startBtn.on('click', startBtnClick);
    prevBtn.on('click', prevBtnClick);
    nextBtn.on('click', nextBtnClick);
    saveBtn.on('click', saveBtnClick);
});


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
    YOUR_COMPANY: "Your Company"


}

