// 1.CSSモジュールのインポート
import style from './page.module.css';

export default function Home() {
  return (
    // 2.スタイルの適用
    <div className={style.container}>
      <h1 className={style.heading}>はじめてのTodoアプリ</h1>
      <p className={style.box}>やることリストを簡単に管理できます</p>
      <button className={style.button}>始める</button>
    </div>
  );
}