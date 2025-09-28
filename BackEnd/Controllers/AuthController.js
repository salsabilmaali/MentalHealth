const bcrypt=require('bcrypt')
const users=[]
class AuthController{
    
    async register(req,res){
    const{name,prenom,email,password}=req.body;
    const existing=users.find(user=>user.email===email);
    if(existing)
        return res.status(400).json({message:"user already exists"});
    const hashedPassword=await bcrypt.hash(password,10);
    users.push({name,prenom,email,password:hashedPassword})
    res.status(201).json({message:"user created"});
}
async login(req,res){
    const {email,password}=req.body;
    const user=users.find(user=>user.email===email)
    if(!user)
        return res.status(404).json({message: "Invalid credentials(email"})
    const match = await bcrypt.compare(password, user.password); // ✅ Secure comparison
    if(!match)
        return res.status(404).json({message: "Invalid credentials(password)"})
    req.session.user=user;
    res.json({message:"user logged in",user:req.session.user})
}

//Check if user is logged in 
async getSession(req, res){
  if (req.session.user) {
    res.json({ user: req.session.user });
  } else {
    res.status(401).json({ message: 'Not authenticated' });
  }
}

async logout(req,res){
    req.session.destroy(()=>{
        res.clearCookie('thrivmind.sid');
        res.json({message:"logged out"})
    })
}
}
module.exports=AuthController