// import { Dropdown } from "react-bootstrap";
import Image from "next/image";
import * as Dropdown from "@radix-ui/react-dropdown-menu";

// @Styles
import styles from "./styles.module.css";

// @Images
import LanguageSVG from "@/public/assets/img/header/language.svg";

export function LanguageDropdown({ fullWidth = false }) {
  return (
    // <div className={styles.container}>
    <Dropdown.Root>
      <Dropdown.Trigger asChild className={styles.container}>
        <button className={styles.button}>
          <svg
            className={styles.language}
            width={19}
            height={19}
            // style={{ marginRight: "0.625rem" }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="a"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x={0}
              y={0}
              width={19}
              height={19}
            >
              <path fill="#D9D9D9" d="M0 0h19v19H0z" />
            </mask>
            <g mask="url(#a)">
              <path
                d="M9.5 17.417a7.66 7.66 0 0 1-3.068-.624 8.03 8.03 0 0 1-2.523-1.702 8.03 8.03 0 0 1-1.702-2.523A7.66 7.66 0 0 1 1.583 9.5c0-1.095.208-2.121.624-3.078A8.062 8.062 0 0 1 3.909 3.91a8.03 8.03 0 0 1 2.523-1.702A7.66 7.66 0 0 1 9.5 1.583c1.095 0 2.121.208 3.078.624a8.062 8.062 0 0 1 2.513 1.702 8.06 8.06 0 0 1 1.702 2.513c.416.957.624 1.983.624 3.078a7.659 7.659 0 0 1-.624 3.068 8.029 8.029 0 0 1-1.702 2.523 8.061 8.061 0 0 1-2.513 1.702 7.64 7.64 0 0 1-3.078.624Zm0-1.623c.343-.475.64-.97.89-1.485.251-.514.456-1.062.614-1.642H7.996a9.37 9.37 0 0 0 .613 1.642c.251.515.548 1.01.891 1.485Zm-2.058-.317a10.978 10.978 0 0 1-.624-1.356 11.624 11.624 0 0 1-.445-1.454H4.038c.382.66.86 1.233 1.434 1.722.574.488 1.23.85 1.97 1.088Zm4.116 0a5.696 5.696 0 0 0 1.97-1.088 6.567 6.567 0 0 0 1.434-1.722h-2.335c-.119.501-.267.986-.445 1.454-.178.469-.386.92-.624 1.356Zm-8.193-4.394h2.691a10.457 10.457 0 0 1-.09-2.385c.021-.257.05-.517.09-.781H3.365A6.3 6.3 0 0 0 3.167 9.5a6.3 6.3 0 0 0 .198 1.583Zm4.275 0h3.72a10.451 10.451 0 0 0 .09-2.385c-.02-.257-.05-.517-.09-.781H7.64a10.457 10.457 0 0 0-.09 2.385c.02.257.05.517.09.781Zm5.304 0h2.691a6.317 6.317 0 0 0 .198-1.583 6.317 6.317 0 0 0-.198-1.583h-2.691a10.452 10.452 0 0 1 .089 2.385c-.02.257-.05.517-.09.781Zm-.317-4.75h2.335a6.568 6.568 0 0 0-1.434-1.722 5.696 5.696 0 0 0-1.97-1.088c.238.435.446.887.624 1.356.178.468.326.953.445 1.454Zm-4.631 0h3.008a9.376 9.376 0 0 0-.613-1.642A10.05 10.05 0 0 0 9.5 3.206c-.343.475-.64.97-.89 1.485a9.371 9.371 0 0 0-.614 1.642Zm-3.958 0h2.335c.119-.501.267-.986.445-1.454.178-.469.386-.92.624-1.356-.74.237-1.396.6-1.97 1.088a6.57 6.57 0 0 0-1.434 1.722Z"
                fill="#fff"
              />
            </g>
          </svg>
          {fullWidth && <span className={styles.languageText}>Español</span>}
          <svg
            className={styles.language}
            xmlns="http://www.w3.org/2000/svg"
            width={19}
            height={19}
            viewBox="0 0 19 19"
            // fill="none"
          >
            <mask
              id="mask0_1132_843"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x={0}
              y={0}
              width={19}
              height={19}
            >
              <rect width={19} height={19} fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_1132_843)">
              <path
                d="M9.5 12.1719L4.75 7.42187L5.85833 6.31354L9.5 9.9552L13.1417 6.31354L14.25 7.42187L9.5 12.1719Z"
                fill="#FFF"
              />
            </g>
          </svg>
        </button>
      </Dropdown.Trigger>
      <Dropdown.Portal>
        <Dropdown.Content className={styles.content}>
          <Dropdown.Item style={{ background: "transparent" }}>
            {"Español"}
          </Dropdown.Item>
        </Dropdown.Content>
      </Dropdown.Portal>
    </Dropdown.Root>
    // </div>
  );
}
