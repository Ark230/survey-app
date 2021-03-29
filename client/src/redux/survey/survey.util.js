
export const EditSurveyQuestions = (surveys, questionsUpdate) => {
     
     const {questions, surveyId} = questionsUpdate;
     
     const questionId = questions.id;

         return surveys.map(survey => {
               
               if(survey.id === parseInt(surveyId)){
                         const questionsToChange = survey.Questions.map(originalQuestion => {      

                              if(originalQuestion.id === questionId) originalQuestion = questions;    
                              
                              return originalQuestion;
                         });

                    survey.Questions = questionsToChange;
               }

               return survey;
          });

};


export const addQuestion = (surveys, updatedData) => {

     const {questions, surveyId} = updatedData;
    
     const newQuestion = questions[questions.length-1];

     const updatedSurveys = [].concat(surveys);

     updatedSurveys.forEach(survey => {
               
          if(survey.id === parseInt(surveyId)) survey.Questions.push(newQuestion);

     });

     return updatedSurveys;

}