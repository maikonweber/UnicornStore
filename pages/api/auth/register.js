import connectDB from "../../../utils/connectDB"
import User from "../../../models/userModel"
import valid from "../../../utils/valid"
import bcrypt from "bcrypt"


connectDB()

export default async (req, res) => {
    switch(req.method) {
        case "POST":
            await register(req, res)
            break;
    }

}

const register = async (req, res) => {
    try  {
        const { name, email, password, cf_password } = req.body


        const errMsg = valid(name, email, password, cf_password)
         if (errMsg) return res.status(400).json({err: errMsg})

        const user = await User.findOne({ email })
        if (user) return res.status(400).json({ err: "This Email already exist" })

        const passwordHash = await bcrypt.hash(password, 12)
        const newUser = new User({name, email, password: passwordHash, cf_password})
        newUser.save().then((newUser)=> {
            console.log('novo usuário criado')
        })
        res.json({msg: "Register Succes!"})
    } catch(err) {

        console.log( "Erro no Registro")
        return res.status(500).json({err: err.message})
    }
 
}




