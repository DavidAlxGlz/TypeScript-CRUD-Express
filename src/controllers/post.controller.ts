import { Request, Response } from 'express'
import { connect } from "../database";
import { Post } from '../interface/Post';


export async function getPosts(req:Request,res:Response): Promise<Response>{
    const conn = await connect();
    const post = await conn.query('Select * from posts');
    return res.json(post[0]);
}

export async function createPost(req: Request, res: Response) {
    const newPost: Post = req.body;
     const conn = await connect();
     await conn.query('INSERT INTO posts SET ?', [newPost]);
    res.json({
        message: 'New Post Created'
    });
}