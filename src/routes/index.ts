import React from "react";
import LoginForm from "../components/LoginForm/LoginForm";
import SendForm from "../components/SendForm/SendForm";
import Main from "../components/Main/Main";
import AdminPanel from "../components/AdminPanel/AdminPanel";

export enum RoutesName {
  LOGIN = "/login",
  ADMIN = "/admin",
  SEND = "/send",
  MAIN = "/"
}

type IRoute = {
  path: string
  component: React.ComponentType
  exact?: boolean
}

export const publicRoutes: IRoute[] = [
  {path: RoutesName.LOGIN, component: LoginForm, exact: true},
  {path: RoutesName.SEND, component: SendForm, exact: true},
  {path: RoutesName.MAIN, component: Main, exact: true},
]

export const privateRoutes: IRoute[] = [
  {path: RoutesName.LOGIN, component: LoginForm, exact: true},
  {path: RoutesName.SEND, component: SendForm, exact: true},
  {path: RoutesName.MAIN, component: Main, exact: true},
  {path: RoutesName.ADMIN, component: AdminPanel, exact: true}
]