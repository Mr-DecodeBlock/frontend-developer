import React from "react";

// @Layouts
import { MainLayout } from "../../../layout/main";

// @Components

// @Views
// import {
// } from "../views";

// @Styles
import styles from "./styles.module.css";
import LoginForm from "../views/LoginForm";

export function LoginContainer() {
  return (
    <MainLayout>
      <div className={styles.container}>
        <LoginForm />
      </div>
    </MainLayout>
  );
}
