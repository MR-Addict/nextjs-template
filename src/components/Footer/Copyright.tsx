import Darkmode from "./Darkmode";

export default function Copyright() {
  return (
    <div className='dark:text-white w-full flex flex-col md:flex-row justify-between gap-2'>
      <div className='flex flex-col md:flex-row gap-1 md:gap-4'>
        <div>Copyright &copy; {new Date().getFullYear()}. All rights reserved.</div>
        <div className='flex flex-row gap-1'>
          <span>Powered by</span>
          <a href='https://vercel.com/' target='_blank' className='underline'>
            vercel
          </a>
          <span>and</span>
          <a href='https://www.mongodb.com/atlas/database' target='_blank' className='underline'>
            mongodb
          </a>
          <span>.</span>
        </div>
      </div>
      <Darkmode />
    </div>
  );
}
