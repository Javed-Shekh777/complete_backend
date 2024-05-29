import User from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  //get user details from frontend
  // validation of users data
  // check if user already exist
  //  check for images , check for avatar
  // upload then to cloudinay , avatar
  // create user object - create a new entry in db
  // remove password and refreshtooken field from response
  // check for user creation
  // return response

  const { username, fullName, email, password } = req.body;

  console.log(fullName, email);
  console.log(req.files);
 

  if (
    [fullName, email, password, username].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }

 const existedUser = await User.findOne({
    $or: [{ username }, { email }],
  });

  if(existedUser){
    throw new ApiError(409,"User Already Exist");
  }

  const avatarLocalPath = req.files?.avatar[0]?.path;
  const coverImageLocalPath = req.files?.coverImage[0]?.path;

//   if(!avatarLocalPath){
//     throw new ApiError(404,"Avatar file is required");
//   }

//   const avatar = await uploadCloudinary(avatarLocalPath);
//   const coverImage = await uploadCloudinary(coverImageLocalPath);

 const user = await User.create({
    fullName,
    // avatar: avatar?.secure_url || avatarLocalPath,
    // coverImage:coverImage?.secure_url || coverImageLocalPath,
    avatar:  avatarLocalPath,
    coverImage: coverImageLocalPath,
    email:email.toLowerCase(),
    password:password,
    username:username.toLowerCase()
  });

  const createdUser = await User.findById(user._id).select("-password -refreshToken");
  
  if(!createdUser){
    throw new ApiError(500,"Something went wrong registering the user");
  }

  return res.status(201).json(
    new ApiResponse(200,createdUser,"User Registered Successfully!!")
  );






});

export { registerUser };




// {
//     "statusCode": 200,
//     "data": {
//       "_id": "665618803f3a982c40d72ad5",
//       "username": "javed shekh",
//       "email": "javed@gmail.com",
//       "fullName": "Md Javed Shekh",
//       "avatar": "public\\images\\avatar-1716918400232-3feafc795736ffc1ad6e32c31037ee983b9dc59c.jpg",
//       "coverImage": "public\\images\\coverImage-1716918400232-0f8954ea2813fd8140a4df091aba580c6e81e238.jpg",
//       "watchHistory": [],
//       "createdAt": "2024-05-28T17:46:40.271Z",
//       "updatedAt": "2024-05-28T17:46:40.271Z",
//       "__v": 0
//     },
//     "message": "User Registered Successfully!!",
//     "success": true
//   }