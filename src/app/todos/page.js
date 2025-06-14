import style from './page.module.css';
import Link from 'next/link';

export default function Todos() {
  return (
    <section className={style.container}>
      <h1>Todoリスト</h1>
      <div className={style.checkbox}>
        <div>
          <label>
            <input type="checkbox" />
            買い物に行く
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" />
            メールを確認する
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" />
            資料を作成する
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" />
            友達に電話する
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" />
            部屋の掃除
          </label>
        </div>
      </div>
      <Link href="/">トップへ戻る</Link>
    </section>
  );
}