import { TestBed } from '@angular/core/testing';
import { GradeCalculator } from '@tschuegge/angular-coding-resources';

describe('GradeCalculator', () => {

  /**
   * Variabel in dem eine Referenz auf den GradeCalculator gespeichert wird
   */
  let gradeCalc: GradeCalculator;


  /**
   * Vorbereitung vor jedem Test
   */
  beforeEach(() => {

    // Vor jedem Test wird ein neues TestBed erzeugt
    // und der GradeCalculator neu geladen
    TestBed.configureTestingModule({});
    gradeCalc = TestBed.inject(GradeCalculator);
  });


  /**
   * Test 1: Smoke Test ob der Service geladen werden konnte
   */
  it('should be created', () => {
    expect(gradeCalc).toBeTruthy();
  });


  /**
   * Test 2: Oberer Grenzwert der Note
   */
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


  /**
   * Test 3: Unterer Grenzwert der Note
   */
  it('should be grade 1.0', () => {

    // Kompakte, gängigere Schreibweise eines Tests
    expect(gradeCalc.calcGradeByPoints(0, 10)).toBe(1);
  });


  /**
 * Test 4: Oberer Grenzwert der Note überschritten
 */
  it('should not calculate grades over 6.0', () => {

    // Hier wird ein Fehler im GradeCalculator aufgedeckt
    // es können nicht mehr Punkte gesammelt werden, wie maximal möglich sind
    expect(gradeCalc.calcGradeByPoints(11, 10)).toBe(6);

    // Schlecht geschriebener und nicht exakter Test. Er nimmt einfach an, dass zu hohe Noten auf 6.0 korrigiert werden.
  });


  /**
   * Test 5: Unterer Grenzwert der Note überschritten
   */
  it('should not calculate grades under 1.0', () => {

    // Fehler können auch überprüft werden mit .toThrow()
    // beachte, dass der Funktionsaufruf dabei in einem Lambda-Ausdruck stehen muss
    expect(() => gradeCalc.calcGradeByPoints(-1, 0)).toThrow('pointsReached can not be smaller than 0');

    // Dieser Test ist sehr exakt und gut geschrieben. Er überprüft die exakte Fehlermeldung und prüft somit ob auch
    // der erwartete Fehler auftritt.
  });


  /**
   * Test 6: Testet ob Tests mit 0 Punkten Maximum angegeben werden können
   */
  it('should not accept zero max points', () => {

    // Fehler können auch überprüft werden mit .toThrow()
    // beachte, dass der Funktionsaufruf dabei in einem Lambda-Ausdruck stehen musss
    expect(() => gradeCalc.calcGradeByPoints(0, 0)).toThrow('pointsMaximum must be greater than 0');


    // Dieser Test ist sehr exakt und gut geschrieben. Er überprüft die exakte Fehlermeldung und schlägt daher fehl,
    // weil nicht der genannte Fehler sondern ein "Division by 0"-Fehler zurückgegeben wird.
    // Der eigentliche Fehler versteckt sich hinter diesem Fehler (Fehler Maskierung).
  });

});
