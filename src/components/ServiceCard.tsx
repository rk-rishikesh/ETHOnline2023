type Props = {
  imgUrl: string
  label: string
  subtext: string
}

import Button from "./Button";


const ServiceCard = ({ imgUrl, label, subtext }: Props) => {
  return (
    <div className="flex-1 justify-center align-center sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-8">
      {/* <div className="w-11 h-11 justify-center items-center bg-coral-red rounded-full"> */}

      <div className="p-3  mt-2 text-center space-x-4 md:block">
        <div className="self-center xl:ml-12">
          <img src={imgUrl} alt={label} width={240} height={240} /></div>

        <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">
          {label}
        </h3>
        {/* <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
        {subtext}
      </p> */}
        <button className="mt-8 mb-2 md:mb-0 px-5 py-2 text-sm">
          <div className="flex max-sm:justify-end items-center max-sm:w-full">
            <Button label="Claim Reward" fullWidth />
          </div>
        </button>

      </div>
    </div>
  )
}

export default ServiceCard