const HomeSectionCard = () => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3'>
      <div className="h-[13rem] w-[10rem]">
        <img className="object-cover object-top w-full h-full" src="https://plus.unsplash.com/premium_photo-1669703777695-f8052a432411?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">Nofap</h3>
        <p className="mt-2 text-sm text-gray-500">Shirt</p>
      </div>
    </div>
  )
}

export default HomeSectionCard
