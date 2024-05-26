"use client"

import { createTask } from '@/actions/sampleActions'
import React from 'react'
import { useFormState, useFormStatus } from 'react-dom';

const ServerActionsPage = () => {
  const taskId = 1;
  const createTaskWithTaskId = createTask.bind(null, taskId)

  const initialState = { error: ''}
  // サーバーが返す値をクライアント側でステートとして扱うことができるhooks
  const [state, formAction] = useFormState(createTaskWithTaskId, initialState);

  const SubmitButton = () => {
    // サーバーアクションの状態を取得するhooks
    // フォームが定義されたコンポーネント直下で使用しても期待通りの動作をしない点に注意
    const { pending } = useFormStatus();
    return (
      <button
        type='submit'
        className='bg-gray-400 ml-2 px-2 disabled:bg-gray-300'
        disabled={pending}
        >
          送信
      </button>
    );
  };
  return (
    <div>
      {/* <form action={createTaskWithTaskId}> */}
      <form action={formAction}>
        <input type='text' id="name" name="name" className='bg-gray-200' />
        <SubmitButton />
        <div>{state.error}</div>
      </form>
    </div>
  )
}

export default ServerActionsPage