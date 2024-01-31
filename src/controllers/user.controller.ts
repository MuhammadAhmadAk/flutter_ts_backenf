import { Response, Request, } from 'express';
import { createUserRepo, deleteUserRepo, getUserRepo, updateUserRepo } from '../Repositories/user.repo';
import { IUserInterface } from '../databases/Interfaces/user.interface';

export class UserController {
    static getUserbyId = async (req: Request, res: Response) => {
        const userId = req.body.userId as string;
        try {
            const user = await getUserRepo(userId);
            if (user) {
                res.status(200).json(
                    {
                        status: true,
                        data: user
                    }
                )
            } else {
                res.json({
                    error: 'User Not found'
                })
            }

        } catch (error) {
            res.json({
                statuscode: req.statusCode,
                error: error
            })
        }


    }

    static createUser = async (req: Request, res: Response) => {
        const user: IUserInterface = req.body;
        const existingUser = await createUserRepo(user);

        try {

            const success = await createUserRepo(user);
            if (success) {
                res.status(200).json(
                    {
                        "status ": success,
                        "messege ": "user created successfully ",
                        "data ": user,
                    }
                )
            }
            else {
                res.json({
                    "error": "User Not created "
                })
            }


        } catch (error) {
            res.json({
                "statuscode ": req.statusCode,
                "error ": error
            })
        }


    }

    static updateUser = async (req: Request, res: Response) => {
        const updatedUser: IUserInterface = req.body;
        try {
            const success = await updateUserRepo(updatedUser.uid, updatedUser);
            if (success) {
                res.status(200).json({
                    status: success,
                    message: 'User updated successfully',
                    data: updatedUser,
                });
            } else {
                res.status(500).json({
                    error: 'User not updated',
                });
            }
        } catch (error) {
            console.error('Error updating user:', error);
            res.status(500).json({
                statusCode: res.statusCode,
                error: 'Internal Server Error',
            });
        }
    };


    static deleteUser = async (req: Request, res: Response) => {
        const userId = req.body.userId as string;
        try {
            const success = await deleteUserRepo(userId);
            if (success) {
                res.status(200).json(
                    {
                        status: success,
                        messege: 'user deketed successfully',


                    }
                )
            }
            else {
                res.json({
                    statuscode: req.statusCode,
                    error: 'User Not Delete'
                })
            }

        } catch (error) {
            res.json({
                statuscode: req.statusCode,
                error: error
            })
        }


    }
}