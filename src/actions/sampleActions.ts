/**
 * サーバアクションはサーバコンポーネントであれば同一ファイルに記述できるが、
 * クライアントコンポーネントの場合は同一ファイルに記述できず、別ファイルに定義されたもののみ利用可能という制約がる。
 * サーバーアクションではディレクトリ名やファイル名に特別に指定しないといけないルールはない
 * サーバアクションでは'use server'を宣言する必要がある
 */
"use server"

interface formState {
  error: string;
}

export const createTask = async (
  taskId:number,
  state: formState,
  formData: FormData
) => {
  // DBにタスクを作成
  console.log("タスクを作成しました")
  // console.log("formData >", formData)
  // formData > FormData {
  //   '$ACTION_ID_7c6dce36796aac59a6e2ded3abc5c1d0de738fd2': '',
  //   name: 'testInput'
  // }
  // console.log(taskId, formData.get("name"))


  state.error ="エラーが発生"

  return state;
}