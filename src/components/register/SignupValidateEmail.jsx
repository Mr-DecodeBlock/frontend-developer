import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Countdown, { zeroPad } from "react-countdown";

export default function SignupValidateEmail(props) {
  const {
    expiresAt,
    fields,
    setFields,
    errors,
    setErrors,
    onSubmit,
    onBack,
    onRequestNewCode,
  } = props;

  const [countdownActive, setCountdownActive] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fields.code) {
      setErrors({ ...errors, code: "Este campo es requerido" });
    } else if (fields.code.length < 4) {
      setErrors({ ...errors, code: "Mínimo 4 dígitos" });
    } else {
      setErrors({});
      onSubmit(fields.code);
    }
  };

  const handleOnChange = (e) => {
    setFields({
      ...fields,
      code: e.target.value,
    });
    setCountdownActive(false);
  };

  const countDownRenderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      return (
        <div className="w-100 text-center">
          <h1 className="text-muted">Su código ha expirado</h1>
          <div className="mt-3 mb-3">
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={onRequestNewCode}
            >
              Solicitar nuevo código
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="w-100 text-center">
          <h1 className="text-muted">
            {zeroPad(minutes)}:{zeroPad(seconds)}
          </h1>
          <div className="mt-3 mb-3">
            <input
              name="code"
              value={fields.code}
              onChange={handleOnChange}
              required
              className="form-control"
              placeholder="Código"
              type="text"
            />
          </div>
        </div>
      );
    }
  };

  useEffect(() => {
    if (expiresAt instanceof Date && !isNaN(expiresAt)) {
      setCountdownActive(true);
    }
  }, [expiresAt]);

  return (
    <form className="dz-form py-2" onSubmit={handleSubmit}>
      <h3 className="form-title">Regístrate en BusinessShop</h3>
      <div className="dz-separator-outer m-b5">
        <div className="dz-separator bg-primary style-liner"></div>
      </div>
      <p>Verificación de correo electrónico: </p>

      <h3 className="text-center">
        Hemos enviado un código de verificación a su correo electrónico:&nbsp;
        <label className="text-primary">{fields.email?.value}</label>
      </h3>

      <Countdown
        autoStart={countdownActive}
        date={expiresAt}
        renderer={countDownRenderer}
      />

      <div className="form-group d-flex w-100 justify-content-between">
        <Button
          onClick={onBack}
          className="btn btn-primary outline gray"
          type="button"
        >
          Atrás
        </Button>
        <Button
          variant="primary"
          type="submit"
          disabled={fields.code?.length < 4}
        >
          Validar código
        </Button>
      </div>
    </form>
  );
}
