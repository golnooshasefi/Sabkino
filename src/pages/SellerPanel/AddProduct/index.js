import { useForm } from "react-hook-form";
import classes from "./AddProduct.module.scss";
import Button from "../../../components/shared/Button";
import Survey from "./AddProductSurvey";
import AddProductSurvey from "./AddProductSurvey";
import { useState } from "react";
import axiosInstance from "../../../axios";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({ mode: "onChange" });

  const [answers, setAnswers] = useState([]);
  const navigate = useNavigate();
  // console.log(1, answers);

  let newObject = {};
  for (let [key, value] of Object.entries(answers)) {
    newObject = {
      ...newObject,
      [`style_param_${key}`]: Array.isArray(value) ? value.join(",") : value,
    };
  }
  const onSubmit = (values) => {
    // console.log(data);
    const newValues = {
      ...values,
      ...newObject,
    };

    // console.log("add product submit");
    // console.log(newValues);
    // console.log(...newValues);

    axiosInstance
      .post(`accounts/add_products_to_shop/`, {
        inventory: Number(newValues.inventory),
        product_color: newValues.product_color,
        product_country: newValues.product_country,
        product_design: newValues.product_design,
        product_group: newValues.product_group,
        product_height: Number(newValues.product_height),
        product_image: newValues.product_image,
        product_material: newValues.product_material,
        product_name: newValues.product_name,
        product_price: Number(newValues.product_price),
        product_size: newValues.product_size,
        style_param_1: newValues.style_param_1,
        style_param_2: newValues.style_param_2,
        style_param_3: newValues.style_param_3,
        style_param_4: newValues.style_param_4,
        style_param_5: newValues.style_param_5,
      })
      .then((res) => {
        if (res.status === 201) {
          console.log("add product");
          navigate("/seller-panel");
        }
      });
    console.log(1, newValues);
  };
  return (
    <>
      <div className={classes.container}>
        <div className={classes.container__headerContainer}>
          <div className={classes.container__headerContainer__header}>
            <span className={classes.container__headerContainer__text}>
              ???????????? ????????
            </span>
          </div>
        </div>
        <form className={classes.form}>
          {/* <div className={classes.row}> */}
          <div className={classes.column}>
            <div className={classes.form__group}>
              <label className={classes.form__label}>?????????? ????????</label>
              <input
                type="text"
                placeholder="?????????? ????????"
                {...register("product_name", {
                  required: true,
                })}
                className={classes.form__input}
              />
            </div>
            <div className={classes.form__group}>
              <label for="color" className={classes.form__label}>
                ??????
              </label>
              <input
                name="color"
                id="color"
                list="colors"
                placeholder="?????? ??????????"
                {...register("product_color", {
                  required: true,
                })}
                className={classes.form__input}
              />
              <datalist id="colors">
                <option>????????</option> <option>??????</option>
                <option>??????</option> <option>??????</option>
                <option>????????????</option> <option>????????</option>
                <option>????????</option> <option>????????</option>
                <option>??????????????</option> <option>????????</option>
              </datalist>
            </div>

            <div className={classes.form__group}>
              <label className={classes.form__label}>???? ??????????</label>
              <input
                type="number"
                placeholder="????"
                {...register("product_height", {
                  required: true,
                })}
                className={classes.form__input}
              />
            </div>

            <div className={classes.form__group}>
              <label className={classes.form__label}>?????? ???????? </label>
              <input
                type="text"
                placeholder="??????"
                {...register("product_design", {
                  required: true,
                })}
                className={classes.form__input}
              />
            </div>
            <div className={classes.form__group}>
              <label className={classes.form__label}>???????????? </label>
              <input
                type="number"
                placeholder="????????????"
                {...register("inventory", {
                  required: true,
                })}
                className={classes.form__input}
              />
            </div>

            <div className={classes.form__group}>
              <label for="group" className={classes.form__label}>
                ???????????????????
              </label>
              <input
                name="product_group"
                id="group"
                list="groupes"
                placeholder="??????????????????? "
                {...register("product_group", {
                  required: true,
                })}
                className={classes.form__input}
              />
              <datalist id="groupes">
                <option>??????????</option> <option>????????????</option>{" "}
                <option>??????????</option>
                <option>????</option> <option>??????????????</option>{" "}
                <option>????????</option>
              </datalist>
            </div>
          </div>
          <div className={classes.column}>
            <div className={classes.form__group}>
              <label for="size" className={classes.form__label}>
                ????????
              </label>
              <input
                name="size"
                id="size"
                list="sizes"
                placeholder="???????? ??????????"
                {...register("product_size", {
                  required: true,
                })}
                className={classes.form__input}
              />
              <datalist id="sizes">
                <option>XS</option> <option>S</option> <option>M</option>
                <option>L</option> <option>XL</option> <option>XXL</option>
                <option>XXXL</option>
              </datalist>
            </div>
            <div className={classes.form__group}>
              <label className={classes.form__label}>?????? ????????</label>
              <input
                type="text"
                placeholder="?????? ????????"
                {...register("product_material", {
                  required: true,
                })}
                className={classes.form__input}
              />
            </div>

            <div className={classes.form__group}>
              <label className={classes.form__label}>????????</label>
              <input
                type="number"
                placeholder="????????"
                {...register("product_price", {
                  required: true,
                })}
                className={classes.form__input}
              />
            </div>

            <div className={classes.form__group}>
              <label className={classes.form__label}>???????? ?????????? ?????????? </label>
              <input
                type="text"
                placeholder="????????"
                {...register("product_country", {
                  required: true,
                })}
                className={classes.form__input}
              />
            </div>
            <div className={classes.form__group}>
              <label className={classes.form__label}>
                ?????????? ??????????
                <i class="fa-regular fa-file-image"></i>
              </label>
              <input
                type="text"
                {...register("product_image", {
                  required: true,
                })}
                className={classes.form__input}
              />
            </div>
          </div>
        </form>
        <AddProductSurvey answersHandler={setAnswers} />
        <button
          onClick={handleSubmit(onSubmit)}
          className={isValid ? classes.btn : classes["btn--disable"]}
          disabled={!isValid}
        >
          ??????
        </button>
      </div>
    </>
  );
}

export default AddProduct;
