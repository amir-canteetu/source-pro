import { Refine, WelcomePage } from "@refinedev/core";

import { dataProvider } from "./providers/data-provider";
import { ShowTender } from "./pages/tenders/show";
import { EditTender } from "./pages/tenders/edit";
import { ListTenders } from "./pages/tenders/list";
import { CreateTender } from "./pages/tenders/create";

export default function App(): JSX.Element {
  return (
    <Refine dataProvider={dataProvider}>
      {/* <ShowProduct /> */}
      <EditTender />
      {/* <ListTenders /> */}
      {/* <CreateTender /> */}
    </Refine>
  );
}