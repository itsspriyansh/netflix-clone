import useBillboards from '@/hooks/useBillboards'
import { AiOutlineInfoCircle } from "react-icons/ai"

const Billbaord = () => {

    const { data : randomMovie } = useBillboards() 

  return (
    <div className='h-[56.25vw] relative'>
        <video
            autoPlay
            muted
            loop
            poster={randomMovie?.thumbnailUrl}
            src={randomMovie?.videoUrl}
            className='w-full h-[56.25vw] object-cover brightness-[60%] transition duration-500'
        />
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        <p className="text-white text-1xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
            {randomMovie?.title}
        </p>
        <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
            {randomMovie?.description}
        </p>
        <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">

          <button

            className="
            bg-white
            text-white
              bg-opacity-30 
              rounded-md 
              py-1 md:py-2 
              px-2 md:px-4
              w-auto 
              text-xs lg:text-lg 
              font-semibold
              flex
              flex-row
              items-center
              hover:bg-opacity-20
              transition"
            >
            <AiOutlineInfoCircle className='mr-1' />
              More Info
          </button>
        </div>
      </div>
    </div>
  )
}

export default Billbaord
