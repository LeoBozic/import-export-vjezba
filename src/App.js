import naslov from "./default";
import { kvadriranje, dodajPet, oduzmiSedam } from "./named";

function App() {
  return (
    <div>
      <h1>{naslov()}</h1>
      <h3>5 na kvadrat iznosi {kvadriranje(5)}</h3>
      <h3>5 uvecan za 5 je {dodajPet(5)}</h3>
      <h3>5 umanjen za 7 je {oduzmiSedam(5)}</h3>
    </div>
  );
}

export default App;
