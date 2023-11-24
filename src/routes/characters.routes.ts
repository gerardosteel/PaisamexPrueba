import {Router} from 'express';
import {getAllCharacters, getCharacterById, getCharacterByIdComic, getCharacterByIdEvent} from '../controllers/characters.controller';
const router: Router = Router();

router.route('/')
    .get(getAllCharacters);

router.route('/:id')
    .get(getCharacterById);

router.route('/:id/comics')
    .get(getCharacterByIdComic);

router.route('/:id/events')
    .get(getCharacterByIdEvent);

export default router;