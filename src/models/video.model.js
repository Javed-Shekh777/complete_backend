import mongoose from "mongoose";
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2';


const videoSchema = new mongoose.Schema({
    videoFile : {
        type : String,
        required:true,
    },
    thumbnail : {
        type : String,
        required:true,
    },
    owner : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
    },
    title : {
        type : String,
        required : true,
        trim : true,
    },
    duration:{
        type:Number,
        required:true,
    },
    description : {
        type : String,
        trim : true,
        required : true,
    },
    views : {
        type : Number,
        default : 0
    },
    isPublished : {
        type : Boolean,
        default : true,
    }
}, { timestamps: true });

videoSchema.plugin(mongooseAggregatePaginate);

export default videoModel = mongoose.model("Video",videoSchema);
