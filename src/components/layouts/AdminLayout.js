import Sidebar from '../organisms/Sidebar'

const AdminLayout = ({ children }) => {

  return (
    <div className="flex bg-gray-50">
      <Sidebar />
      <div className="flex-1 max-h-[100vh] overflow-auto">
        <div>{children}</div>
      </div>
    </div>
  )
}

export default AdminLayout
