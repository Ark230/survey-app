
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

export const deleteQuestion = (surveys, dataForUpdate) => {
     const {surveyId, questionId} = dataForUpdate;

     const sur = surveys.map(survey => {
          if(survey.id === surveyId){

                    const updatedQuestions = survey.Questions.filter(question => question.id !== parseInt(questionId));
                    survey.Questions = [].concat(updatedQuestions);
     
                    return survey;
          }
     });

     console.log(sur);
     return sur;
     
}