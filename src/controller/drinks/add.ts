import { Request, Response } from 'express';
import Drink from '../../entity/Drinks';

export default async (req, res: Response): Promise<void> => {
  try {
    if (req.file) {
      await Drink.addDrinkList(
        req.body.drinkName,
        req.body.type,
        req.body.price,
        req.body.taste,
        req.body.ingredients,
        req.body.alcohol,
        req.body.origin,
        req.body.url,
        req.body.desc,
        req.file.location
      );
    }
    res.status(200).send({ message: 'success' });
  } catch (err) {
    res.status(404).send({ message: 'error message' });
  }
};
