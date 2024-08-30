const Student = require("../model/studentSchema")
const bcrypt = require('bcryptjs')



exports.Register = async (req, res) => {
    try {
        const { name, email, password, rollno } = req.body;

        const checkStudent = await Student.findOne({
            email
        });

        if (checkStudent) {
            return res.status(401).json({
                success: false,
                messege: "Student already exists",
                data: null
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const newStudent = await Student.create({
            name, 
            email, 
            password: hashedPassword, 
            rollno
        });

        await newStudent.save();



        return res.status(201).json({
            success: true,
            messege: "Student registered Successfully",
            data: newStudent
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            messege: "internal server error",
            error: error.messege
        })
    }
}


exports.Login = async (req, res) => {
    try {


        const { email, password } = req.body;
        const checkStudent = await Student.findOne({ email });

        if (!checkStudent) {
            return res.status(404).json({
                success: false,
                messege: "Student not found, Please register First",
                data: "null"
            })
        }


        const comparePassword = await bcrypt.compare(
            req.body.password,checkStudent.password
        )
r 
        if(!comparePassword){
            return res.status(403).json({
                success: true,
                messege: "Incorrect Password",
                data: null
            })
        }



        return res.status(200).json({
            success: true,
            messege: "Student loggedin Successfully",
            data: ""
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            messege: "internal server error",
            error: error.messege
        })
    }
}