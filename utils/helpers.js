
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




}