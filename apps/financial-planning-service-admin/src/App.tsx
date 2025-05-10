import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { SalePriceList } from "./salePrice/SalePriceList";
import { SalePriceCreate } from "./salePrice/SalePriceCreate";
import { SalePriceEdit } from "./salePrice/SalePriceEdit";
import { SalePriceShow } from "./salePrice/SalePriceShow";
import { ProfitabilityAnalysisList } from "./profitabilityAnalysis/ProfitabilityAnalysisList";
import { ProfitabilityAnalysisCreate } from "./profitabilityAnalysis/ProfitabilityAnalysisCreate";
import { ProfitabilityAnalysisEdit } from "./profitabilityAnalysis/ProfitabilityAnalysisEdit";
import { ProfitabilityAnalysisShow } from "./profitabilityAnalysis/ProfitabilityAnalysisShow";
import { PurchasePriceList } from "./purchasePrice/PurchasePriceList";
import { PurchasePriceCreate } from "./purchasePrice/PurchasePriceCreate";
import { PurchasePriceEdit } from "./purchasePrice/PurchasePriceEdit";
import { PurchasePriceShow } from "./purchasePrice/PurchasePriceShow";
import { MarketplaceDiscountList } from "./marketplaceDiscount/MarketplaceDiscountList";
import { MarketplaceDiscountCreate } from "./marketplaceDiscount/MarketplaceDiscountCreate";
import { MarketplaceDiscountEdit } from "./marketplaceDiscount/MarketplaceDiscountEdit";
import { MarketplaceDiscountShow } from "./marketplaceDiscount/MarketplaceDiscountShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"Financial Planning Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="SalePrice"
          list={SalePriceList}
          edit={SalePriceEdit}
          create={SalePriceCreate}
          show={SalePriceShow}
        />
        <Resource
          name="ProfitabilityAnalysis"
          list={ProfitabilityAnalysisList}
          edit={ProfitabilityAnalysisEdit}
          create={ProfitabilityAnalysisCreate}
          show={ProfitabilityAnalysisShow}
        />
        <Resource
          name="PurchasePrice"
          list={PurchasePriceList}
          edit={PurchasePriceEdit}
          create={PurchasePriceCreate}
          show={PurchasePriceShow}
        />
        <Resource
          name="MarketplaceDiscount"
          list={MarketplaceDiscountList}
          edit={MarketplaceDiscountEdit}
          create={MarketplaceDiscountCreate}
          show={MarketplaceDiscountShow}
        />
      </Admin>
    </div>
  );
};

export default App;
