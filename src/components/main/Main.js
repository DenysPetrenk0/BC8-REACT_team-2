/** @format */

import React, { Suspense } from "react";
import ContentSwitcher from "../../contentSwitcher/ContentSwitcher";
import { headerRoutes } from "../../routes/headerRoutes";

const Main = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContentSwitcher routes={headerRoutes} />
    </Suspense>
  );
};

export default Main;
