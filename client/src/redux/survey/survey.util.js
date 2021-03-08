
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