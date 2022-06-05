import { lazy, Suspense } from "react";

// Spinner
import Loading from "../components/Loading";

// Public
import Home from '../pages/Home'
import Mentors from "../pages/Mentors";
import Contact from "../pages/Contact";

// Instructors
const Instructors = lazy(() => import("../pages/Instructors"));
const BroadCasting = lazy(() => import("../pages/BroadCasting"));
const Reports = lazy(() => import("../pages/Reports"));
const Activity = lazy(() => import("../pages/Activity"));

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
  {
    path: "/instructors",
    component: (
      <Suspense fallback={<Loading />}>
        <Instructors />
      </Suspense>
    ),
    index: false,
  },
  {
    path: "/activity",
    component: (
      <Suspense fallback={<Loading />}>
        <Activity />
      </Suspense>
    ),
    index: false,
  },
  {
    path: "/broadcasting",
    component: (
      <Suspense fallback={<Loading />}>
        <BroadCasting />
      </Suspense>
    ),
    index: false,
  },
  {
    path: "/reports",
    component: (
      <Suspense fallback={<Loading />}>
        <Reports />
      </Suspense>
    ),
    index: false,
  },

  // Students or Clients
  {
    path: "/meeting",
    component: (
      <Suspense fallback={<Loading />}>
        <Meeting />
      </Suspense>
    ),
    index: false,
  },
  {
    path: "/programs",
    component: (
      <Suspense fallback={<Loading />}>
        <Program />
      </Suspense>
    ),
    index: false,
  },
];
