import Person from "../src/components/person/Person";
import { useState, useEffect } from "react";

// Laver en konstant funktion.
const App = () => {
  // Opretter en useState.
  const [isVisible, setIsVisible] = useState(true);

  // Opretter en useEffect, som opdaterer, når staten isVisible bliver opdateret.
  useEffect(() => {
    // Ændrer titlen på document til det ene eller det andet. ? er shorthand if-sætning. Hvis condition er sandt eller falsk.
    document.title = isVisible ? "Personerne bliver vist, efter en lang søgen, du taber." : "Personerne gemmer sig, øv."
    // Dependency-array, der tjekker om isVisible ændrer sig.
  }, [isVisible])

  return (
    <div className="container text-center p-4" >
      {/* Laver en knap, hver gang der bliver klikket på knappen toggler den mellem true og false med staten "isVisible". */}
      <button className="btn btn-outline-info mb-3 p-3" onClick={() => setIsVisible(!isVisible)}>Gemmer personerne sig, eller skal de gemme sig?</button>
      {isVisible && (
        <>
          {/* Person component med name props, som bliver vist i hvert element. */}
          <Person name="Beff Jezos" />
          <Person name="Jteve Sobs" />
          <Person name="Bames Jond" />
        </>
      )}
    </div>
  );
};

export default App;
