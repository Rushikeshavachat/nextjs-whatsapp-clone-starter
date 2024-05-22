import getPrismaInstance from "../utils/PrismaClient.js"
export const checkUser= async(req, res ,next)=>{
try {
  const {email}=req.body;
if (!email) {
    return res.json({msg :'Email is required', status:false});

}
const prisma = getPrismaInstance()
const user = await prisma.user.findUnique({ where :{ email}})
if (!user) {
  return res.json({msg : "User is not found" , status:false})  
}else{
    return res.json({msg : "User is  found" , status:true , data:user})   
}
} catch (err) {
    next(err)
}
}
export const onBoardUser= async(req, res ,next)=>{
try {
  const {email , name , about , image:profilePicture}=req.body;
  if ( !email || !name || !profilePicture) {
    return res.send('Email , Name & Image are required!!')
  }
  const prisma=getPrismaInstance()
 const user= await prisma.user.create({
    data: {email , name , about , profilePicture}
  });
  console.log({data});
  return res.json({msg:"Success" ,  status:true, user});

} catch (err) {
  console.log(err);
  next(err)
}
}
export  const getAllUsers= async(req, res ,next)=>{
try {
  const prisma = getPrismaInstance;
  const users= await prisma?.user?.findMany({ orderBy :{name :"asc"} , select :{
    id:true,
    email:true,
    name:true,
    profilePicture:true,
    about:true,
  } 
})
const usersGroupedByInitialLetters={}
users.forEach((user)=>{
  const initialLetter= user.name.charAt(0).toUpperCase()
  if (!usersGroupedByInitialLetters[initialLetter]) {
    usersGroupedByInitialLetters[initialLetter]=[]
  }
  usersGroupedByInitialLetters[initialLetter].push(user)
})
return res.status(200).send({users : usersGroupedByInitialLetters})
} catch (err) {
  next(err)
  console.log(err);
}
}