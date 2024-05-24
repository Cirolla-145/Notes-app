import User from "../models/userModel.js"
import bcrypt from 'bcryptjs'
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;
        console.log(req.body)

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "password doesnt match" })
        }

        const user = await User.findOne({ username })

        if (user) {
            return res.status(400).json({ error: "user exists" })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender
        })

        if (newUser) {

            generateTokenAndSetCookie(newUser._id, res)

            await newUser.save()

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username
            })
        } else {
            res.status(400).json({ error: "invalid user" })
        }

    } catch (error) {
        console.log('error in signup controller', error)
        res.status(500).json({ error: error })
    }
}

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username })
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

        if (!user || !isPasswordCorrect) {
            return res.status(400).json({ error: "Invalid Credentials" })
        }

        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.fullName,
            
        })
    }
    catch (error) {
        console.log("error in login controller",error)
        res.status(500).json({error:error})
    }
}

export const logout = (req,res)=>{
    try {
        res.cookie("jwt","",{maxAge:0})
        res.status(200).json({message:"logged out succesfully"})
    } catch (error) {
        console.log("error in logout controller",error)
        res.status(500).json({error:error})
    }
}