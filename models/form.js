const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const formSchema = new Schema({
   name:  {
       type: String,
       required: true
   },
   email: {
       type: String,
       required: true
   },
   phone: {
       type: String,
       required: true
   },
   message: {
       type: String,
       required: true
   }
}); 

const Form = mongoose.model('Form', formSchema);
module.exports = Form;