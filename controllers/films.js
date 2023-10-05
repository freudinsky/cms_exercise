import pool from '../db/server.js';


export const getAllfilms = async(req, res) => {
    try {
        const result = await pool.query('SELECT * from films');
        res.json(result);
    } catch (error) {
        res.status(500).json({message:"something broke"});
    }
};

export const getFilmById = async(req, res) => {
    const {id} = req.params;
    try {
        const result = await pool.query('SELECT * from films WHERE id = $1', [id]);
        res.json(result.rows[0]);
    } catch (error) {
        res.status(500).json({message: 'something broke'});
    }
};

export const addNewFilm = async(req, res) => {
    const {name, author, image_url} = req.body;

    try {
        const result = await pool.query('INSERT INTO films (name, author, image_url) VALUES ($1, $2, $3) RETURNING *', [name, author, image_url]);
        res.status(201).json(result.rows[0]);
    }
    catch (error) {
        res.status(500).json({message: 'something broke'});      
    }
};

export const updateFilm = async (req, res) => {
    const {id} = req.params;
    const {name, author, image_url} = req.body;

    try {
        const result = await pool.query('UPDATE films SET name = $1, author = $2, image_url = $3 WHERE id = $4 RETURNING *', [name, author, image_url, id] ); 
        res.json(result.rows[0]);
    } catch (something) {
        res.status(500).json({message:'something broke'});
        console.log(something);
    }
};

export const deleteFilm = async(req, res) => {
    const {id} = req.params;
    try {
        await pool.query ('DELETE FROM films WHERE ID = $1', [1]);
        res.status(200).json({message:'book deleted'});
    } catch (err) {
        res.status(500).json({message: 'something broke'});
        console.log(err);
    }
};
