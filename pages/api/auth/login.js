import connectDB from "../../../utils/connectDB"
import User from "../../../models/userModel"
import { createAcessToken, createRefreshToken } from  '../../../utils/generateToken'
import bcrypt from "bcrypt"
import acessToken from "../auth/acessToken"


connectDB()

export default async (req, res) => {
    switch(req.method) {
        case "POST":
            await login(req, res)
            break;
    }

}

const login = async (req, res) => {
    try  {
        
        const {email, password } = req.body
        const user = await User.findOne({ email })
        if (!user) return res.status(400).json({ err: "This user doen not exist" })
        
        const isMatch = await bcrypt.compare(password, user.password)

        
        if(!isMatch) return res.status(400).json({err: "Incorrect Password" })
        
        const access_token = createAcessToken({id: user._id })
        const refresh_token = createRefreshToken({id: user._id})
        
        res.json({
            msg: "Login Succes!",
            refresh_token,
            access_token,
            user: {
                name: user.name,
                email: user.email,
                role: user.role,
                root: user.root
            }


    })

    } catch(err) {

        console.log( "Erro no Registro")
        return res.status(500).json({err: err.message})
    }
 
}




