const {Schema, model, Types} = require('mongoose');


const projectSchema = new Schema(
    {
      projectId: {
        type: Schema.Types.ObjectId,
      },
      projectTitle: {
        type: String,
        required: true,
        maxlength: 280,
      },
      username: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
      lastUpdatedAt: {
          // ?????
        type: Date,
        default: Date.now,
        // ?????
      },
      componentArray: {
        type: [ componentArray] ,
      },

    },
    {
      toJSON: {
        getters: true,
      },
    });

    export default projectSchema;