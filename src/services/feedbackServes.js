/**
 * Отправляет отзыв в телеграм бот
 * @param  text текст сообщения
 * @param  file фото сообщения
 * @return объект со статусом запроса
 */
export const addFeedback = async (text, file) => {
  let feedback = {};
  try {
    text ? (text = text) : (text = "__только фото__");
    let str = `https://api.telegram.org/bot${process.env.REACT_APP_TG_TOKEN}/sendMessage?chat_id=406153580&text=${text}`;
    await fetch(str);
    if (file) {
      const formData = new FormData();
      formData.append("photo", file);
      let str2 = `https://api.telegram.org/bot${process.env.REACT_APP_TG_TOKEN}/sendPhoto?chat_id=406153580`;
      await fetch(str2, {
        method: "POST",
        body: formData,
      });
    }
    feedback.status = "ok";
  } catch (e) {
    feedback.status = "error";
    feedback.error = e;
    console.log(e);
  } finally {
    return feedback;
  }
};
