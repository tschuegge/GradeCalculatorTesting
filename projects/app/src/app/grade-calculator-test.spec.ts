import { TestBed } from '@angular/core/testing';
import { GradeCalculator } from '@tschuegge/angular-coding-resources';

describe('GradeCalculator', () => {
  let gradeCalc: GradeCalculator;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    gradeCalc = TestBed.inject(GradeCalculator);
  });

  it('should be created', () => {
    expect(gradeCalc).toBeTruthy();
  });

  it('should be grade 6.0', () => {

    // Ausführliche Schreibweise nach dem AAA-Schema (Arrange, Act, Assert)

    // Arrange
    let pointsMax = 10;
    let pointsReached = 10;
    let expectedGrade = 6;

    // Act
    let gradeCalculated = gradeCalc.calcGradeByPoints(pointsReached, pointsMax);

    // Assert
    expect(gradeCalculated).toBe(expectedGrade);

  });

  it('should be grade 1.0', () => {
    expect(gradeCalc.calcGradeByPoints(0, 10)).toBe(1);
  });

  it('should not accept negative reached points', () => {

    // Fehler können auch überprüft werden mit .toThrow()
    // beachte, dass der Funktionsaufruf dabei in einem Lambda-Ausdruck stehen musss
    expect(() => gradeCalc.calcGradeByPoints(-1, 0)).toThrow('pointsReached can not be smaller than 0');
  });

  it('should not accept zero max points', () => {

    // Fehler können auch überprüft werden mit .toThrow()
    // beachte, dass der Funktionsaufruf dabei in einem Lambda-Ausdruck stehen musss
    expect(() => gradeCalc.calcGradeByPoints(0, 0)).toThrow('pointsMaximum must be greater than 0');
  });

  it('should not calculate grades over 6.0', () => {

    // Hier wird ein Fehler im GradeCalculator aufgedeckt
    // es können nicht mehr Punkte gesammelt werden, wie maximal möglich sind
    expect(gradeCalc.calcGradeByPoints(11, 10)).toBe(6);
  });

});
