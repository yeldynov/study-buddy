import Link from 'next/link'

const Testing = () => {
  return (
    <div className='p-6 lg:p-20 flex flex-col gap-[60px]'>
      {/* TOP */}
      <Link href='/'>
        <h2 className='font-lora underline underline-offset-8 text-3xl font-medium mb-[26px] hover:text-blue-800'>
          Пройти тестування
        </h2>
      </Link>
    </div>
  )
}

export default Testing
