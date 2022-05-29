import { lazy } from "react";

// Public
import Home from '../pages/Home'
import Mentors from "../pages/Mentors";
import Contact from "../pages/Contact";

// Instructors
const Instructors = lazy(() => import("../pages/Instructors"));
const BroadCasting = lazy(() => import("../pages/BroadCasting"));
const Reports = lazy(() => import("../pages/Reports"));
const Activity = lazy(() => import("../pages/Activity"));
const Client = lazy(() => import("../pages/Client"));

// Clients
const Meeting = lazy(() => import("../pages/Meeting"));
const Program = lazy(() => import("../pages/Program"));


export const publicRoutes = [
  { path: "/", component: <Home />, index: true },
  { path: "/contact", component: <Contact />, index: false },
  { path: "/mentors", component: <Mentors />, index: false },
];

export const protectedRoutes = [
  // Instructors
  { path: "/instructors", component: <Instructors />, index: false },
  { path: "/clients", component: <Client />, index: false },
  { path: "/activity", component: <Activity />, index: false },
  { path: "/broadcasting", component: <BroadCasting />, index: false },
  { path: "/reports", component: <Reports />, index: false },

  // Students or Clients
  { path: "/meeting", component: <Meeting />, index: false },
  { path: "/programs", component: <Program />, index: false },
];
