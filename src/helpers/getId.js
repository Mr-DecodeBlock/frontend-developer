import { v4 as uuidv4 } from 'uuid';

// Función para generar un UUID
export const generateUUID = () => {
  const storedUUID = localStorage.getItem('deviceId');
  if (storedUUID) {
    return storedUUID;
  } else {
    const newUUID = uuidv4();
    localStorage.setItem('deviceId', newUUID);
    return newUUID;
  }
};
