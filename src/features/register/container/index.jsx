import React from "react";

// @Layouts
import { MainLayout } from "../../../layout/main";

// @Components

// @Views
// import {
// } from "../views";

// @Styles
import styles from "./styles.module.css";
import RegisterForm from "../views/RegisterForm";

export function RegisterContainer() {
  return (
    <MainLayout>
      <div className={styles.container}>
        <RegisterForm></RegisterForm>
      </div>
    </MainLayout>
  );
}
