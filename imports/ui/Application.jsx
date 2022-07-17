import React from "react";
import { Routes, Route } from "react-router-dom";
import { Loadable } from "meteor/npdev:react-loadable";

const Loading = () => <p>Loading ...</p>;

const Hello = Loadable({
  loader: () => import("./Hello"),
  loading: Loading,
});
const NotFound = Loadable({
  loader: () => import("./NotFound"),
  loading: Loading,
});

// import {
//   fetchHostIdFromAddress,
//   insertHost,
//   updateHost,
//   removeHost,
// } from "../api/hosts/hosts.validMethods";

// if (!Meteor.userId()) {
//   Meteor.loginWithPassword("noone", "01010101", (e) => {
//     if (e) console.error(e);
//   });
// }
// Meteor.logout();
// console.log(Meteor.userId());

// fetchHostIdFromAddress.call({ address: location.host }, (error, respond) => {
//   if (error) {
//     console.error(error);
//   }
//   console.log(respond);
// });

// insertHost.call(
//   {
//     address: "localhost.com",
//     name: "Local Com",
//     title: "Try new",
//   },
//   (error, respond) => {
//     if (error) {
//       console.error(error);
//     }
//     console.log(respond);
//   }
// );

// updateHost.call(
//   {
//     hostId: "qBzwMzzzGJgtK5GT7",
//     address: "localhost.com",
//     name: "Local Command",
//     title: "Try new",
//   },
//   (error, respond) => {
//     if (error) {
//       console.error(error);
//     }
//     console.log(respond);
//   }
// );

// removeHost.call({ hostId: "qBzwMzzzGJgtK5GT7" }, (error, respond) => {
//   if (error) console.error(error);
//   console.log(respond);
// });

export default Application = () => (
  <div className="app">
    <Routes>
      <Route index element={<Hello />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </div>
);
