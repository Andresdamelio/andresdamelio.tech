import { NavBar, Content } from 'components/ui';

const Body = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row mb-4 mt-4">
      
        <NavBar />
      <div className="w-full md:w-6/7 p-7 bg-white dark:bg-dark-400 rounded-20 relative">
        <Content />
      </div>
  </div>
  )
}

export default Body;