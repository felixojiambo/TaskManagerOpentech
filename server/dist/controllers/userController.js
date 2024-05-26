"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserProfile = exports.activateUserProfile = exports.changeUserPassword = exports.getTeamList = exports.logoutUser = exports.loginUser = exports.registerUser = void 0;
const typeorm_1 = require("typeorm");
const user_1 = require("../models/user");
const index_1 = require("../utils/index");
const registerUser = async (req, res) => {
    const userRepository = (0, typeorm_1.getRepository)(user_1.User);
    try {
        const { name, email, password, isAdmin, role, title } = req.body;
        const userExist = await userRepository.findOne({ where: { email } });
        if (userExist) {
            return res.status(400).json({
                status: false,
                message: "User already exists",
            });
        }
        const user = userRepository.create({
            name,
            email,
            password,
            isAdmin,
            role,
            title,
        });
        await userRepository.save(user);
        if (user) {
            isAdmin ? (0, index_1.createJWT)(res, user.id) : null;
            user.password = undefined;
            res.status(201).json(user);
        }
        else {
            return res.status(400).json({ status: false, message: "Invalid user data" });
        }
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({ status: false, message: error.message });
    }
};
exports.registerUser = registerUser;
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        // Ensure your User model has a findOne method that accepts an object with an email property
        const userRepository = (0, typeorm_1.getRepository)(user_1.User);
        const user = await userRepository.findOne({
            where: { email }
        });
        if (!user) {
            return res.status(401).json({ status: false, message: "Invalid email or password." });
        }
        // Ensure your User model has an isActive property
        if (!user.isActive) {
            return res.status(401).json({
                status: false,
                message: "User account has been deactivated, contact the administrator",
            });
        }
        // Ensure your User model has a matchPassword method
        const isMatch = await user.matchPassword(password);
        if (isMatch) {
            const token = (0, index_1.createJWT)(res, user.id);
            // Omit the password property from the user object before sending it
            const { password, ...userWithoutPassword } = user;
            return res.status(200).json(userWithoutPassword);
        }
        else {
            return res.status(401).json({ status: false, message: "Invalid email or password" });
        }
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({ status: false, message: error.message });
    }
};
exports.loginUser = loginUser;
// export const logoutUser = async (req: any, res: { cookie: (arg0: string, arg1: string, arg2: { httpOnly: boolean; expires: Date; }) => void; status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: any; status?: boolean; }): void; new(): any; }; }; }) => {
//   try {
//     res.cookie("token", "", {
//       httpOnly: true,
//       expires: new Date(0),
//     });
//     res.status(200).json({ message: "Logout successful" });
//   } catch (error: any) {
//     console.log(error);
//     return res.status(400).json({ status: false, message: error.message });
//   }
// };
const logoutUser = async (req, res) => {
    try {
        // Clear the JWT token from the cookie
        res.clearCookie('token', { httpOnly: true, expires: new Date(0) });
        // Respond with success message
        res.status(200).json({ message: "Logout successful" });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ status: false, message: "An error occurred during logout." });
    }
};
exports.logoutUser = logoutUser;
const getTeamList = async (req, res) => {
    const userRepository = (0, typeorm_1.getRepository)(user_1.User);
    try {
        const users = await userRepository.find({
            select: ["name", "title", "role", "email", "isActive"]
        });
        // Ensure the response is consistent with the expected type
        res.status(200).json(users);
    }
    catch (error) {
        console.log(error);
        // Make sure the error response matches the expected type
        return res.status(400).json({ status: false, message: error.message });
    }
};
exports.getTeamList = getTeamList;
// export const getNotificationsList = async (req: Request, res: Response) => {
//   const noticeRepository = getRepository(Notice);
//   try {
//     // Now TypeScript knows about req.user
//     const { userId } = req.user;
//     const notices = await noticeRepository.find({
//       where: { team: userId },
//       relations: ["task"],
//     });
//     res.status(200).json({ notices, status: true });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ notices: [], status: false, message: "Internal server error" });
//   }
// };
// export const updateUserProfile = async (req: Request, res: Response) => {
//   const userRepository = getRepository(User);
//   try {
//     const { userId, isAdmin } = req.user;
//     const { _id } = req.body;
//     const id = isAdmin && userId === _id? userId : isAdmin && userId!== _id? _id : userId;
//     const user = await userRepository.findOne(id);
//     if (user) {
//       user.name = req.body.name || user.name;
//       user.title = req.body.title || user.title;
//       user.role = req.body.role || user.role;
//       const updatedUser = await userRepository.save(user);
//       // Omit the password property from the user object before sending it
//       const { password,...userWithoutPassword } = updatedUser;
//       res.status(201).json({
//         status: true,
//         message: "Profile Updated Successfully.",
//         user: userWithoutPassword,
//       });
//     } else {
//       res.status(404).json({ status: false, message: "User not found" });
//     }
//   } catch (error:any) {
//     console.log(error);
//     res.status(400).json({ status: false, message: error.message });
//   }
// };
// export const markNotificationRead = async (req: { user: { userId: any; }; query: { isReadType: any; id: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { status: boolean; message: any; }): void; new(): any; }; }; }) => {
//   const noticeRepository = getRepository(Notice);
//   try {
//     const { userId } = req.user;
//     const { isReadType, id } = req.query;
//     if (isReadType === "all") {
//       // Assuming you want to update all unread notices for the user's team
//       const notices = await noticeRepository.createQueryBuilder("notice")
//       .where("notice.team = :userId AND notice.isRead NOT IN (:...userId)", { userId })
//       .getMany();
//       for (const notice of notices) {
//         notice.isRead.push(userId); // Directly modify the isRead array
//         await noticeRepository.save(notice);
//       }
//     } else {
//       // Update a single notice
//       const notice = await noticeRepository.createQueryBuilder("notice")
//       .where("_id = :id AND isRead NOT IN (:...userId)", { id, userId })
//       .getOne();
//       if (notice) {
//         notice.isRead.push(userId); // Directly modify the isRead array
//         await noticeRepository.save(notice);
//       }
//     }
//     res.status(201).json({ status: true, message: "Done" });
//   } catch (error: any) {
//     console.log(error);
//     return res.status(400).json({ status: false, message: error.message });
//   }
// };
const changeUserPassword = async (req, res) => {
    const userRepository = (0, typeorm_1.getRepository)(user_1.User);
    try {
        const { userId } = req.user;
        const user = await userRepository.findOne(userId);
        if (user) {
            user.password = req.body.password;
            await userRepository.save(user);
            // user.password = undefined;
            // Omit the password property from the user object before sending it
            const { password, ...userWithoutPassword } = user;
            res.status(201).json({
                status: true,
                message: `Password changed successfully.`,
            });
        }
        else {
            res.status(404).json({ status: false, message: "User not found" });
        }
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({ status: false, message: error.message });
    }
};
exports.changeUserPassword = changeUserPassword;
const activateUserProfile = async (req, res) => {
    const userRepository = (0, typeorm_1.getRepository)(user_1.User);
    try {
        const { id } = req.params;
        const user = await userRepository.findOne(id);
        if (user) {
            user.isActive = req.body.isActive;
            await userRepository.save(user);
            res.status(201).json({
                status: true,
                message: `User account has been ${user.isActive ? "activated" : "disabled"}`,
            });
        }
        else {
            res.status(404).json({ status: false, message: "User not found" });
        }
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({ status: false, message: error.message });
    }
};
exports.activateUserProfile = activateUserProfile;
const deleteUserProfile = async (req, res) => {
    const userRepository = (0, typeorm_1.getRepository)(user_1.User);
    try {
        const { id } = req.params;
        await userRepository.delete(id);
        res.status(200).json({ status: true, message: "User deleted successfully" });
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({ status: false, message: error.message });
    }
};
exports.deleteUserProfile = deleteUserProfile;
//# sourceMappingURL=userController.js.map