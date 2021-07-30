/**
 * Module dependencies.
 *  File name: index.ts, 
    Author's:  Ofovwe Ewere,Gagandeep Kaur,  Qiuqi Lu, Duy Hieu Nguyen, Farishta Sultani
    Student's id: 301188196
    Web App name: The Favorite Book List App
    Date: July 30, 2021
 */
import express, { Request, Response, NextFunction } from 'express';

import * as DBConfig from '../Config/db';

export function UserDisplayName(req: Request): string
{
    if(req.user)
    {
        let user = req.user as UserDocument;
        return user.displayName.toString();
    }
    return '';
}

export function UserName(req: Request): string
{
    if(req.user)
    {
        let user = req.user as UserDocument;
        return user.username.toString();
    }
    return '';
}

export function AuthGuard(req: Request, res: Response, next: NextFunction): void
{
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}