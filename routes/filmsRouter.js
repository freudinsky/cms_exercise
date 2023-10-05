import express from 'express';
import { getAllfilms } from '../controllers/films.js';

const filmsRouter = express.Router();

filmsRouter.route('/').get(getAllfilms);

// booksRouter.route('/').get(getAllbooks).post(addNewBook);
// booksRouter.route('/:id').get(getBookById).put(updateBook).delete(deleteBook);


export default filmsRouter;