import { Field, reduxForm } from "redux-form";
import { Input } from "../../components/FormsControls/Forms";
import React from "react";
import { AppInput } from "../../components/AppInput/AppInput";
import { AppButton } from "../../components/AppButton/AppButton";

const AddBookForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        name={"author"}
        component={Input}
        children={<AppInput title="Автор" />}
      />
      <Field
        name={"name"}
        component={Input}
        children={<AppInput title="Название" />}
      />
      <Field
        name={"description"}
        component={Input}
        children={<AppInput title="Описание" description={true} />}
      />
      {/* description определяет, нужно ли большое поле для текса, то есть для описания книги/>*/}
      <h2>
        Не забудь прикрепить малярный скочт на книгу с указанием порядкового
        номера и своего ника
      </h2>
      <AppButton header="Добавить книгу" />
    </form>
  );
};
const AddBookReduxForm = reduxForm({
  form: "addBook",
})(AddBookForm);

export default AddBookReduxForm;
