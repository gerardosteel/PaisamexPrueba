import { Request, Response } from "express";
import axios from 'axios';
const key: String = 'ts=1&apikey=f638ac817da779c754a4d346bd0b8be8&hash=cc977cd0237fbdc4c644d1b920b8e7a5';

export async function getAllCharacters (req: Request, res: Response): Promise<Response> {
    try {
        const resp = await axios.get(`https://gateway.marvel.com/v1/public/characters?${key}`);
        return res.json({code: resp.status, data: resp.data, message: resp.statusText});
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return res.json({code: error, data: [], message: error.message});
        } else {
            return res.json({code: 500, data: [], message:`An unexpected error occurred`});
        }
    }
}

export async function getCharacterById (req: Request, res: Response): Promise<Response> {
    try {
        const characterId:Number = Number(req.params.id);
        const resp = await axios.get(`https://gateway.marvel.com/v1/public/characters/${characterId}?${key}`);
        return res.json({code: resp.status, data: resp.data, message: resp.statusText});
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return res.json({code: error.response?.status, data: [], message: error.message});
        } else {
            return res.json({code: 500, data: [], message: `An unexpected error occurred`});
        }
    }
}

export async function getCharacterByIdComic (req: Request, res: Response): Promise<Response> {
    try {
        const characterId:Number = Number(req.params.id);
        const resp = await axios.get(`https://gateway.marvel.com/v1/public/characters/${characterId}/comics?${key}`);
        return res.json({code: resp.status, data: resp.data, message: resp.statusText});
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return res.json({code: error, data: [], message: error.message});
        } else {
            return res.json({code: 500, data: [], message:`An unexpected error occurred`});
        }
    }
}

export async function getCharacterByIdEvent (req: Request, res: Response): Promise<Response> {
    try {
        const characterId:Number = Number(req.params.id);
        const resp = await axios.get(`https://gateway.marvel.com/v1/public/characters/${characterId}/events?${key}`);
        return res.json({code: resp.status, data: resp.data, message: resp.statusText});
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return res.json({code: error, data: [], message: error.message});
        } else {
            return res.json({code: 500, data: [], message:`An unexpected error occurred`});
        }
    }
}

