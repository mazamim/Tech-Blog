const store = require("store2");


module.exports = {

  check_userid: (value1,value2) => {
   var myStore = store('user')
    if (value1 === myStore.id) {
 
      return `<button type="button" id=delete-${value2} class="ui red button">Delete</button>`;
    }
  },

  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
},

  // count_comments: async(id) => {
  //   const response = await fetch(`api/recipes/${id}`)

  //   if (response.ok){
  //     const recipe = await response.json();
  //     return recipe.comments.length
  //   }

  // }


//   count_comments: async(myarray) => {
//  if( myarray.length > 0){
//    return myarray.length
//  }
//  else{
//    return '0'
//  }

//   }


}