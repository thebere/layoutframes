import { IParameters, ISquare } from '../@types';
import { range } from '../commons';

export class GridService {
  cellDimension = {
    width: 200,
    height: 200,
  };

  generateSquares = (parameters: IParameters): ISquare[] => {
    const totalCol = Math.ceil(parameters.width / this.cellDimension.width);
    const totalRow = Math.ceil(parameters.height / this.cellDimension.height);
    const totalCell = totalRow * totalCol;
    const values = range(0, totalCell);

    return values.map((value) => {
      const col = (value % totalCol) * this.cellDimension.width;
      const row = Math.floor(value / totalCol) * this.cellDimension.height;

      return {
        id: `${value + 1}`,
        x: col,
        y: row,
      }
    });
  }
}

export default new GridService();
