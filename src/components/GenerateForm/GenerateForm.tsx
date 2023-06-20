import React, { FC } from "react";
import style from "./GenerateForm.module.css";
import designOptions from "../../data/iconDesigns";
import uniqid from "uniqid";

interface Props {
  register: any;
  handleGenerate: any;
  isLoading: boolean;
}

const colorOptions = [
  { display: "crimson", value: "red" },
  { display: "orange", value: "orange" },
  { display: "gold", value: "yellow" },
  { display: "forestgreen", value: "dark green" },
  { display: "steelblue", value: "blue" },
  { display: "mediumpurple", value: "purple" },
];

const GenerateForm: FC<Props> = (props) => {
  const { register, handleGenerate, isLoading } = props;

  return (
    <form className={style.container}>
      <div className={style.formControl}>
        <label className={style.label} htmlFor="description">
          1. Describe your icon
        </label>
        <input
          className={style.textInput}
          type="text"
          id="description"
          placeholder="a silly goose"
          {...register("description")}
          required
        ></input>
      </div>
      <div className={style.formControl}>
        <label className={style.label}>2. Select an accent colour</label>
        <div className={style.colors}>
          {colorOptions.map((color) => (
            <div className={style.color} key={uniqid()}>
              <label
                className="sr-only"
                htmlFor={"color-" + color.value}
              ></label>
              <input
                value={color.value}
                style={{ backgroundColor: `${color.display}` }}
                className={style.radioInput}
                type="radio"
                id={"color-" + color.value}
                {...register("color")}
                required
              ></input>
            </div>
          ))}
        </div>
      </div>
      <div className={style.formControl}>
        <label>3. Choose a design type</label>
        <div className={style.designs}>
          {designOptions.map((design, index) => (
            <div className={style.design} key={index}>
              <div className={style.radioWrap}>
                <input
                  name="design"
                  type="radio"
                  id={"design-" + design.name}
                  value={design.name}
                  className={style.hidden}
                  {...register("design")}
                  required
                />
                <img src={design.img} alt={design.name} />
              </div>
              <label htmlFor={"design-" + design.name}>{design.name}</label>
            </div>
          ))}
        </div>
      </div>
      <div className={style.formControl}>
        <label htmlFor="variants">4. Number of variants</label>
        <div className={style.variants}>
          <input
            className={style.textInput}
            max="10"
            type="number"
            id="variants"
            placeholder="3"
            {...register("variants")}
            required
          ></input>
        </div>
      </div>
      <div className={style.formControl}>
        <button onClick={(e) => handleGenerate(e)} disabled={isLoading}>
          {!isLoading ? (
            "Generate"
          ) : (
            <div className={style.loader}>
              {"Generating..."} <div className={style.spinner}>{"0"}</div>
            </div>
          )}
        </button>
      </div>
    </form>
  );
};

export default GenerateForm;
