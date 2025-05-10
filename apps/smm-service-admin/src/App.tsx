import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PictureList } from "./picture/PictureList";
import { PictureCreate } from "./picture/PictureCreate";
import { PictureEdit } from "./picture/PictureEdit";
import { PictureShow } from "./picture/PictureShow";
import { VideoList } from "./video/VideoList";
import { VideoCreate } from "./video/VideoCreate";
import { VideoEdit } from "./video/VideoEdit";
import { VideoShow } from "./video/VideoShow";
import { SocialNetworkList } from "./socialNetwork/SocialNetworkList";
import { SocialNetworkCreate } from "./socialNetwork/SocialNetworkCreate";
import { SocialNetworkEdit } from "./socialNetwork/SocialNetworkEdit";
import { SocialNetworkShow } from "./socialNetwork/SocialNetworkShow";
import { ContentList } from "./content/ContentList";
import { ContentCreate } from "./content/ContentCreate";
import { ContentEdit } from "./content/ContentEdit";
import { ContentShow } from "./content/ContentShow";
import { DescriptionList } from "./description/DescriptionList";
import { DescriptionCreate } from "./description/DescriptionCreate";
import { DescriptionEdit } from "./description/DescriptionEdit";
import { DescriptionShow } from "./description/DescriptionShow";
import { PublicationScheduleList } from "./publicationSchedule/PublicationScheduleList";
import { PublicationScheduleCreate } from "./publicationSchedule/PublicationScheduleCreate";
import { PublicationScheduleEdit } from "./publicationSchedule/PublicationScheduleEdit";
import { PublicationScheduleShow } from "./publicationSchedule/PublicationScheduleShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"SMM Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Picture"
          list={PictureList}
          edit={PictureEdit}
          create={PictureCreate}
          show={PictureShow}
        />
        <Resource
          name="Video"
          list={VideoList}
          edit={VideoEdit}
          create={VideoCreate}
          show={VideoShow}
        />
        <Resource
          name="SocialNetwork"
          list={SocialNetworkList}
          edit={SocialNetworkEdit}
          create={SocialNetworkCreate}
          show={SocialNetworkShow}
        />
        <Resource
          name="Content"
          list={ContentList}
          edit={ContentEdit}
          create={ContentCreate}
          show={ContentShow}
        />
        <Resource
          name="Description"
          list={DescriptionList}
          edit={DescriptionEdit}
          create={DescriptionCreate}
          show={DescriptionShow}
        />
        <Resource
          name="PublicationSchedule"
          list={PublicationScheduleList}
          edit={PublicationScheduleEdit}
          create={PublicationScheduleCreate}
          show={PublicationScheduleShow}
        />
      </Admin>
    </div>
  );
};

export default App;
