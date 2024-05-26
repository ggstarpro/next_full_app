import React, { useState } from 'react'

const ClientComponent = () => {
  console.log("client component")
  // 下記はクライアントコンポーネントでないと使用できない
  // - useState はエラー
  // - onCLickやonChangeはエラー
  // - ブラウザAPIはエラー
  return (
    <div>ClientComponent</div>
  )
}

export default ClientComponent