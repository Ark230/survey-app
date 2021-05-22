    
// let questionChanges = [];
// let optionChanges = {};
// let finalArray = [];

// function isObject(object) {
//   return object != null && typeof object === 'object';
// }

// function deepEqual(object1, object2) {
  
//   const keys1 = Object.keys(object1);
//   const keys2 = Object.keys(object2);

//   for (const key of keys2) {
      
//     const val1 = object1[key];
//     const val2 = object2[key];

//     console.log(val2, 'entered');
//     const areObjects = isObject(val1) && isObject(val2);
//     if(val1 === undefined){
//         console.log(val1, val2);
//         continue;
//     }

//    if(areObjects && key === 'Options'){ 
//      optionChanges = {[key] : []};
//     }

//     if (
//       areObjects && !deepEqual(val1, val2) ||
//       !areObjects && val1 !== val2
//     ) {

//       if(Object.keys(optionChanges).length > 0){
				
//         const [keys3] = Object.keys(optionChanges);
        
//         if(optionChanges[keys3].length === 0){
            
//            optionChanges[keys3] = [{[key] : val2, id: object2['id']}];
//                      const {Options} = optionChanges;

// 					 if(questionChanges.length === 0){
// 						questionChanges = [{id: object2['id_pregunta'], Options}]

// 					 }else{
// 						questionChanges[0].Options = Options;
// 					 }
           
//         }else{
         
// 				optionChanges.Options.push({[key]: object2[key], id:object2['id']})

// 				const {Options} = optionChanges;

// 				questionChanges[0].Options = Options;					

//         }
       
//       }else{
    
//         questionChanges.push({id:object2['id'], [key]: val2});

//       }

//     }
//   }

//     if(questionChanges.length > 0) {
//         console.log(questionChanges, 'changes');
//         finalArray.push(questionChanges);
//     }
    

//     optionChanges = [];
//     questionChanges = [];
    
//     return true;
  
// }


let questionChanges = [];
let optionChanges = {};
let finalArray = [];
let optionsLength = 0;

function isObject(object) {
  return object != null && typeof object === 'object';
}

function deepEqual(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  for (const key of keys2) {
    const val1 = object1[key];
    const val2 = object2[key];

    const areObjects = isObject(val1) && isObject(val2);
    
    if(val1 === undefined){
        console.log(val1, val2);
        continue;
    }

   if(areObjects && key === 'Options'){ 
     optionChanges = {[key] : []};
     optionsLength = object2['Options'].length;
    }

    if (
      areObjects && !deepEqual(val1, val2) ||
      !areObjects && val1 !== val2
    ) {

        if(optionsLength > 0){
            optionsLength--;
           // console.log(optionsLength);
        }else if(optionsLength === 0){
            //cuando llegue a 0 actualizar pregunta
           optionChanges = {};
        }

    //si es mayor a 0 es porque se deben agregar opciones. sino es porque
    //se debe cambiar solo la descripcion de la pregunta
      if(Object.keys(optionChanges).length > 0){
                
        
        const [keys3] = Object.keys(optionChanges);
        //optioChanges['Options'] si no se han agregado cambios de opciones aun
        if(optionChanges[keys3].length === 0){
            
           optionChanges[keys3] = [{id: object2['id'], [key] : val2}];
                     const {Options} = optionChanges;
                    //si no existe un cambio en la desc de la pregunta, se agrega
                    //solo el cambio de opciones
					 if(questionChanges.length === 0){
						questionChanges = [{id: object2['id_pregunta'], Options}]
                    //setea desde 0 el objeto la propiedad Options con los cambios
                    // de las opciones hasta el momento
					 }else{
                        
                        //questionChanges[0].Options = Options;
                        questionChanges.forEach(change => {
                            if(change.id === object2['id_pregunta']){
                                change.Options = Options
                            }
                        });
					 }
           
        //si se van a agregar más cambios de opciones   
        }else{
         
				optionChanges.Options.push({id:object2['id'], [key]: object2[key]})

				const {Options} = optionChanges;
                //el array esta vacio porque se borro en una pasada anterior
                //se tiene el 0 porque se creia que siempre debia ser la primera
                //posicion, ver como acceder a la posicion que corresponda
                //mediante el id quizas
                
                questionChanges.forEach(change => {
                    if(change.id === object2['id_pregunta']){
                        change.Options = Options
                    }
                });

				//testArray[0].Options = Options;					

        }
       
      }else{
    
        questionChanges.push({id:object2['id'], [key]: val2});

      }

    }
  }

    if(questionChanges.length > 0) {
        finalArray.push(questionChanges);
    }
    
    questionChanges = [];
    
  return true;
}





finalArray.map(questions => {
   console.log(questions);
      // questions.map(question => question.Options.map(x => console.log(x)))

});



module.exports = deepEqual;