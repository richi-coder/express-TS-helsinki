import express from 'express';
import diaryService from '../services/diaryService';
import toNewDiaryEntry from '../utils';
import diaryEntries from '../data/diaries';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(diaryService.getNonSensitiveEntries());
})

router.get('/:id', (req, res) => {
    console.log(req.params.id, 'verGET');
    const diary = diaryService.findById(Number(req.params.id))
    if (diary) {
        res.send(diary)
    } else {
        res.sendStatus(404)
    }
})

router.post('/', (req, res) => {
    console.log(req.body, 'POST to be "SAVED');
    try {
    const newDiaryEntry = toNewDiaryEntry(req.body);
    const addedEntry = diaryService.addEntry(newDiaryEntry);
    console.log(diaryEntries, 'Final posts data including the last post added!');
    res.json(addedEntry);
    } catch(e: any) {
        res.status(400).send(e.message);
    }
})

export default router;