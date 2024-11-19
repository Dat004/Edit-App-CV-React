import { MainLayout, MyDocumentLayout, ViewLayout } from "../layouts";
import { Home, MyDocument, View } from "../pages";
import router from "../router";

export const routerConfig = [
  {
    id: 1,
    path: router.home,
    component: Home,
    layout: MainLayout,
  },
  {
    id: 2,
    path: router.myDocument,
    component: MyDocument,
    layout: MyDocumentLayout,
  },
  {
    id: 1,
    path: router.view,
    component: View,
    layout: ViewLayout,
  },
];
