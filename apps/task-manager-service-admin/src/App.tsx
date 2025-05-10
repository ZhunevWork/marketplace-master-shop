import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { StatusList } from "./status/StatusList";
import { StatusCreate } from "./status/StatusCreate";
import { StatusEdit } from "./status/StatusEdit";
import { StatusShow } from "./status/StatusShow";
import { UrgencyList } from "./urgency/UrgencyList";
import { UrgencyCreate } from "./urgency/UrgencyCreate";
import { UrgencyEdit } from "./urgency/UrgencyEdit";
import { UrgencyShow } from "./urgency/UrgencyShow";
import { ImportanceList } from "./importance/ImportanceList";
import { ImportanceCreate } from "./importance/ImportanceCreate";
import { ImportanceEdit } from "./importance/ImportanceEdit";
import { ImportanceShow } from "./importance/ImportanceShow";
import { TaskList } from "./task/TaskList";
import { TaskCreate } from "./task/TaskCreate";
import { TaskEdit } from "./task/TaskEdit";
import { TaskShow } from "./task/TaskShow";
import { TenantList } from "./tenant/TenantList";
import { TenantCreate } from "./tenant/TenantCreate";
import { TenantEdit } from "./tenant/TenantEdit";
import { TenantShow } from "./tenant/TenantShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"Task Manager Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Status"
          list={StatusList}
          edit={StatusEdit}
          create={StatusCreate}
          show={StatusShow}
        />
        <Resource
          name="Urgency"
          list={UrgencyList}
          edit={UrgencyEdit}
          create={UrgencyCreate}
          show={UrgencyShow}
        />
        <Resource
          name="Importance"
          list={ImportanceList}
          edit={ImportanceEdit}
          create={ImportanceCreate}
          show={ImportanceShow}
        />
        <Resource
          name="Task"
          list={TaskList}
          edit={TaskEdit}
          create={TaskCreate}
          show={TaskShow}
        />
        <Resource
          name="Tenant"
          list={TenantList}
          edit={TenantEdit}
          create={TenantCreate}
          show={TenantShow}
        />
      </Admin>
    </div>
  );
};

export default App;
