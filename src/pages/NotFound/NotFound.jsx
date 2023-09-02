import style from "./style.module.css";

function NotFound() {
  return (
    <div className={style.main}>
      <div className={style.content}>
        <h2>404</h2>
        <br />
        <h3>Такая страница не найдена </h3>
      </div>
    </div>
  );
}

export default NotFound;
