import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// views
import ApplyForJobs from "views/work/ApplyForJobs.js";
import HireDevelopers from "views/work/HireDevelopers.js";

export default function Work() {
  return (
    <>
      <div className="relative bg-blueGray-100">
        <div className="px-4 md:px-10 mx-auto w-full">
          <Switch>
            <Route path="/work/jobs" exact component={ApplyForJobs} />
            <Route path="/work/hire" exact component={HireDevelopers} />
            <Redirect from="/work" to="/work/jobs" />
          </Switch>
        </div>
      </div>
    </>
  );
}
