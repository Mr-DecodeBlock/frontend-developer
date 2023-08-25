import React from "react";

// @Layouts
import { MainLayout } from "../../../layout/main";

// @Components


// @Views
import ChangePasswordForm from "../views/ChagePassword";

// @Styles
import styles from "./styles.module.css";



export function ChangePasswordContainer() {
  return (
    <MainLayout >
      <div className={styles.container}>
      <ChangePasswordForm />
      </div>
    </MainLayout>
  );
}
