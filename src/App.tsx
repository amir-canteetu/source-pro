import { Refine, Authenticated } from "@refinedev/core";

import { dataProvider } from "./providers/data-provider";
import { authProvider } from "./providers/auth-provider";
import { ShowTender } from "./pages/tenders/show";
import { EditTender } from "./pages/tenders/edit";
import { ListTenders } from "./pages/tenders/list";
import { CreateTender } from "./pages/tenders/create";

import { Login } from "./pages/login";


export default function App(): JSX.Element {
  return (
    <Refine dataProvider={dataProvider} authProvider={authProvider}>

      <Authenticated key="protected" fallback={<Login />}>
        {/* <ShowTender /> */}
        <ListTenders />
        {/* <Login /> */}
        {/* <EditTender /> */}
        {/* <CreateTender /> */}
      </Authenticated>


    </Refine >
  );
}