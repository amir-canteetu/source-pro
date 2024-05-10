import { Refine, WelcomePage } from "@refinedev/core";

import { dataProvider } from "./providers/data-provider";
import { ShowTender } from "./pages/tenders/show";
import { EditTender } from "./pages/tenders/edit";

export default function App(): JSX.Element {
  return (
    <Refine dataProvider={dataProvider}>
      <EditTender />
    </Refine>
  );
}