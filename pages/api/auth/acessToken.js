import connectDB from "../../../utils/connectDB"
import { createAcessToken } from "../../../utils/generateToken"
import jwt from "jsonwebtoken"
import User from "../../../models/userModel"


connectDB()

export default async (req, res) => {
    try {
        const rf_token = req.cookies.refreshtoken;
        
        
        if(!rf_token) return res.status(400).json({ err: " Please Login now!"})
        const result = jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET)
        if(!result) return res.status(400).json({ err: "Your Token in incorrect"})
   
        const user = await User.findById(result.id)

        if(!user) return res.status(400).json({err: 'User does not exist' })
        

        const acess_token = createAcessToken({id: user._id})
        

        res.json({
            acess_token,
            user: {
            name: user.name,
            email: user.email,
            role: user.role,
            root: user.root
        }
    })
    } catch(err) {
        return res.status(500).json({ err: err.messagem})

    }
}