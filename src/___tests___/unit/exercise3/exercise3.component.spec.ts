import { Exercise3Service } from '../../../exercise3/exercise3.component';

describe('Exercise 3, averagePair', () => {
  let service: Exercise3Service;
  beforeEach(() => {
    service = new Exercise3Service();
  })
  it('should give true if any average between two numbers matches target average', () => {
    const input = [1,2,3];
    const target = 2.5;
    const result = service.averagePair(input, target);
    expect(result).toBe(true);
  });
  it('should give false if no average between two numbers match target average', () => {
    const input = [-1,0,3,4,5,6];
    const target = 4.1;
    const result = service.averagePair(input, target);
    expect(result).toBe(false);
  });
});
