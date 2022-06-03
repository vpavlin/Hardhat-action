import { baseContext } from "../shared/contexts";
import { unitTestUselessBank } from "./UselessBank/UselessBank.test";

baseContext("Unit Tests", function () {
  unitTestUselessBank();
});
