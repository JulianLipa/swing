"use client";

import styles from "@/app/components/Cart/Cart.module.css";
import { useForm } from "react-hook-form";

const FormCheckout = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={styles["div-form"]}>
      <form className={styles["form"]} onSubmit={handleSubmit(onSubmit)}>
        <strong>Datos de tarjeta</strong>
        <div className={styles["separadores"]}>

          <div className={styles["div"]}>
            <div className={styles["holder"]}>
              <input
                type='text'
                id='nombre-tarjeta'
                name='nombre-tarjeta'
                placeholder='Nombre'
                {...register("nombre", {
                  required: true,
                })}
                
              />
              {errors.nombre?.type === "required" && (
                <p>El campo nombre es obligatorio</p>
              )}
            </div>

            <div className={styles["holder"]}>
              <input
                type='text'
                id='apellido-tarjeta'
                name='apellido-tarjeta'
                placeholder='Apellido'
                {...register("apellido", {
                  required: true,
                })}
                
              />
              {errors.apellido?.type === "required" && (
                <p>El campo apellido es obligatorio</p>
              )}
            </div>
          </div>

          <div className={styles["div"]}>
            <div className={styles["holder"]}>
              <input
                type='text'
                id='numero-tarjeta'
                name='numero-tarjeta'
                placeholder='Número de tarjeta'
                {...register("tarjeta", {
                  required: true,
                })}
                
              />
              {errors.tarjeta?.type === "required" && (
                <p>El campo tarjeta es obligatorio</p>
              )}
            </div>

            <div className={styles["holder"]}>
              <input
                type='password'
                id='pin'
                name='pin'
                placeholder='PIN'
                {...register("pin", {
                  required: true,
                })}
                
              />
              {errors.pin?.type === "required" && (
                <p>El campo nombre es obligatorio</p>
              )}
            </div>
          </div>

          <div className={styles["div"]}>
            <div className={styles["holder"]}>
              <select
                id='mes-vencimiento'
                name='mes-vencimiento'
                {...register("mesvencimiento", {
                  required: true,
                })}
                
              >
                <option value=''>Mes de vencimiento</option>
                <option value='01'>01</option>
                <option value='02'>02</option>
                <option value='02'>03</option>
                <option value='02'>04</option>
                <option value='02'>05</option>
                <option value='02'>06</option>
                <option value='02'>07</option>
                <option value='02'>08</option>
                <option value='02'>09</option>
                <option value='02'>10</option>
                <option value='02'>11</option>
                <option value='02'>12</option>
              </select>
              {errors.mesvencimiento?.type === "required" && (
                <p>El campo mes es obligatorio</p>
              )}
            </div>

            <div className={styles["holder"]}>
              <select
                id='anio-vencimiento'
                name='anio-vencimiento'
                {...register("aniovencimiento", {
                  required: true,
                })}
                
              >
                <option value=''>Año de vencimiento</option>
                <option value='2024'>2024</option>
                <option value='2025'>2025</option>
                <option value='2025'>2026</option>
                <option value='2025'>2027</option>
                <option value='2025'>2028</option>
                <option value='2025'>2029</option>
                <option value='2025'>2030</option>
              </select>
              {errors.aniovencimiento?.type === "required" && (
                <p>El campo nombre es obligatorio</p>
              )}
            </div>
          </div>

        </div>

        <strong>Datos de entrega</strong>
        <div className={styles["separadores"]}>

          <div className={styles["div"]}>
            <div className={styles["holder"]}>
              <input
                type='text'
                id='nombre-entrega'
                name='nombre-entrega'
                placeholder='Nombre'
                {...register("nombreentrega", {
                  required: true,
                })}
                
              />
              {errors.nombreentrega?.type === "required" && (
                <p>El campo nombre es obligatorio</p>
              )}
            </div>

            <div className={styles["holder"]}>
              <input
                type='text'
                id='apellido-entrega'
                name='apellido-entrega'
                placeholder='Apellido'
                {...register("apellidoentrega", {
                  required: true,
                })}
                
              />
              {errors.apellidoentrega?.type === "required" && (
                <p>El campo nombre es obligatorio</p>
              )}
            </div>
          </div>

          <input
            type='text'
            id='calle'
            name='calle'
            placeholder='Calle'
            {...register("calle", {
              required: true,
            })}
            className={styles["calle"]}
          />
          {errors.calle?.type === "required" && (
            <p>El campo calle es obligatorio</p>
          )}

          <div className={styles["div"]}>
            <div className={styles["holder"]}>
              <input
                type='text'
                id='numero'
                name='numero'
                placeholder='Número'
                {...register("altura", {
                  required: true,
                })}
                
              />
              {errors.altura?.type === "required" && (
                <p>El campo de direccion es obligatorio</p>
              )}
            </div>

            <input
              type='text'
              id='piso'
              name='piso'
              placeholder='Piso (Opcional)'
              {...register("piso")}
              
            />
          </div>

          <div className={styles["div"]}>
            <div className={styles["holder"]}>
              <input
                type='text'
                id='ciudad'
                name='ciudad'
                placeholder='Ciudad'
                {...register("ciudad", {
                  required: true,
                })}
                
              />
              {errors.ciudad?.type === "required" && (
                <p>El campo de ciudad es obligatorio</p>
              )}
            </div>

            <div className={styles["holder"]}>
              <input
                type='text'
                id='localidad'
                name='localidad'
                placeholder='Localidad'
                {...register("localidad", {
                  required: true,
                })}
                
              />
              {errors.localidad?.type === "required" && (
                <p>El campo de localidad es obligatorio</p>
              )}
            </div>
          </div>

          <div className={styles["div"]}>
            <div className={styles["holder"]}>
              <input
                type='text'
                id='codigo-postal'
                name='codigo-postal'
                placeholder='Código postal'
                {...register("cp", {
                  required: true,
                })}
                
              />
              {errors.cp?.type === "required" && (
                <p>El campo de codigo postal es obligatorio</p>
              )}
            </div>
            <div className={styles["holder"]}>
              <select
                id='pais'
                name='pais'
                placeholder='País'
                {...register("pais", {
                  required: true,
                })}
                
              >
                <option value=''>País</option>
                <option value='argentina'>Argentina</option>
                <option value='chile'>Chile</option>
                <option value='brasil'>Brasil</option>
                <option value='ecuador'>Ecuador</option>
                <option value='bolivia'>Bolivia</option>
                <option value='peru'>Perú</option>
                <option value='paraguay'>Paraguay</option>
                <option value='uruguay'>Uruguay</option>
                <option value='colombia'>Colombia</option>
                <option value='venezuela'>Venezuela</option>
              </select>
              {errors.pais?.type === "required" && (
                <p>El campo de localidad es obligatorio</p>
              )}
            </div>
          </div>
        </div>

        <button type='submit'>Comprar</button>
      </form>
    </div>
  );
};

export default FormCheckout