import { Request, Response } from "express";
import { ILocation, IParameters, ISquare } from '../@types';
import grdiService from '../services/Grid';

class GridController {
  getSquares = async (request: Request, response: Response) => {
    const parameters: IParameters = {
      width: parseInt(request.params.width),
      height: parseInt(request.params.height),
    };

    const loc: ILocation = { x: 145, y: 398 };
    const squares: ISquare[] = grdiService.generateSquares(parameters);

    const filtered = squares.filter((square: ISquare) => {
      return square.x >= loc.x && square.y <= loc.y;
    });

    response.json({
      squares,
      filtered,
    });
  }
}

export default new GridController();
