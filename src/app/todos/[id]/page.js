export default function TodoDetail({params}) {
  // params.id でURLのパラメータを取得できます（例：/todos/1 の場合、params.id は "1"）
  return <div>Todo ID: {params.id}</div>
}