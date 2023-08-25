import React from "react";

// @Styles
import styles from './styles.module.css'
import { CardDropDown } from "@/src/common/cardDropDown/cardDropDown";

//example data
const data = [
  {
    title: "Contacto",
    text: "Se puede contactar a nuestro oficial de protección de datos en privacy@businessshop.com y trabajará para abordar cualquier pregunta o problema que tenga con respecto a la recopilación y el procesamiento de su información personal.",
  },
  {
    title: "Niños y Servicios",
    text: "BSP Chain no permite que los menores utilicen los Servicios de BSP Chain y no recopila deliberadamente información personal de menores.",
  },
  {
    title: "Tus Derechos",
    text: "Tienes derecho a acceder, corregir, actualizar y eliminar tu información personal. También puedes solicitar la restricción del procesamiento de tu información o presentar una objeción al procesamiento. Si deseas ejercer alguno de estos derechos o tienes alguna pregunta o inquietud sobre l de tus datos, puedes comunicarte con nuestro oficial de protección de datos.",
  },
  {
    title: "Bases Legales",
    text: "El RGPD de la UE y las leyes de protección de datos del Reino Unido requieren una base legal para nuestro uso de la información personal. Nuestra base varía según el propósito específico para el que usamos la información personal.",
  },
  {
    title: "Cambios de Politica",
    text: "Esta Política d puede actualizarse periódicamente para reflejar cambios en nuestras prácticas d. Te recomendamos revisar esta política regularmente para estar informado sobre cómo protegemos tu información personal y cuáles son tus derechos en relación con ella.",
  },
];

export function InformationGuides() {
  return (
    <div className={styles.container}>
      <CardDropDown data={data}></CardDropDown>
    </div>
  );
}
