const AdminLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className='bg-green-300 p-4'>
      管理者レイアウト
      {children}
    </div>
  )
}

export default AdminLayout