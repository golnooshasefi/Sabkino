function EditProductPage() {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm();

  const [answers, setAnswers] = useState([]);
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
    console.log(1, newValues);
  };
  return (
    <>
      <div className={classes.container}>
        <div className={classes.container__headerContainer}>
          <div className={classes.container__headerContainer__header}>
            <span className={classes.container__headerContainer__text}>
              ویرایش کالا
            </span>
          </div>
        </div>
        <form className={classes.form}>
          {/* <div className={classes.row}> */}
          <div className={classes.column}>
            <div className={classes.form__group}>
              <label className={classes.form__label}>عنوان کالا</label>
              <input
                type="text"
                placeholder="عنوان کالا"
                {...register("product_name", {
                  required: true,
                })}
                className={classes.form__input}
              />
            </div>
            <div className={classes.form__group}>
              <label for="color" className={classes.form__label}>
                رنگ
              </label>
              <input
                name="color"
                id="color"
                list="colors"
                placeholder="رنگ محصول"
                {...register("product_color", {
                  required: true,
                })}
                className={classes.form__input}
              />
              <datalist id="colors">
                <option>قرمز</option> <option>زرد</option>
                <option>آبی</option> <option>سبز</option>
                <option>نارنجی</option> <option>بنفش</option>
                <option>سیاه</option> <option>سفید</option>
                <option>خاکستری</option>
              </datalist>
            </div>

            <div className={classes.form__group}>
              <label className={classes.form__label}>قد محصول</label>
              <input
                type="text"
                placeholder="قد"
                {...register("product_height", {
                  required: true,
                })}
                className={classes.form__input}
              />
            </div>

            <div className={classes.form__group}>
              <label className={classes.form__label}>طرح لباس </label>
              <input
                type="text"
                placeholder="طرح"
                {...register("product_design", {
                  required: true,
                })}
                className={classes.form__input}
              />
            </div>
            <div className={classes.form__group}>
              <label className={classes.form__label}>موجودی </label>
              <input
                type="number"
                placeholder="موجودی"
                {...register("inventory", {
                  required: true,
                })}
                className={classes.form__input}
              />
            </div>

            <div className={classes.form__group}>
              <label for="group" className={classes.form__label}>
                دسته‌بندی
              </label>
              <input
                name="group"
                id="group"
                list="groupes"
                placeholder="دسته‌بندی "
                {...register("group", {
                  required: true,
                })}
                className={classes.form__input}
              />
              <datalist id="groupes">
                <option>شلوار</option> <option>پیراهن</option>{" "}
                <option>تیشرت</option>
                <option>کت</option> <option>سوییشرت</option>{" "}
                <option>هودی</option>
              </datalist>
            </div>
          </div>
          <div className={classes.column}>
            <div className={classes.form__group}>
              <label for="size" className={classes.form__label}>
                سایز
              </label>
              <input
                name="size"
                id="size"
                list="sizes"
                placeholder="سایز محصول"
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
              <label className={classes.form__label}>جنس لباس</label>
              <input
                type="text"
                placeholder="جنس لباس"
                {...register("product_material", {
                  required: true,
                })}
                className={classes.form__input}
              />
            </div>

            <div className={classes.form__group}>
              <label className={classes.form__label}>قیمت</label>
              <input
                type="text"
                placeholder="قیمت"
                {...register("product_price", {
                  required: true,
                })}
                className={classes.form__input}
              />
            </div>
            <div className={classes.form__group}>
              <label className={classes.form__label}>کشور تولید کننده </label>
              <input
                type="text"
                placeholder="کشور"
                {...register("product_country", {
                  required: true,
                })}
                className={classes.form__input}
              />
            </div>
            <div className={classes.form__group}>
              <label className={classes.form__label}>
                تصویر محصول
                <i class="fa-regular fa-file-image"></i>
              </label>
              <input
                type="file"
                {...register("upload", {
                  required: true,
                })}
              />
            </div>
          </div>
        </form>
        <AddProductSurvey answersHandler={setAnswers} />
        <button
          onClick={handleSubmit(onSubmit)}
          className={classes.btn}
          // disabled={!isValid}
        >
          ثبت
        </button>
      </div>
    </>
  );
}