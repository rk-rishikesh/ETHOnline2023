import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";
import type { IService } from "../types";
import { useState } from "react";
import Button from "../components/Button";

interface Props {
  page: number;
  setPage: (arg0: number) => void;
}

const Services = ({
  page,
  setPage,
}: Props) => {

  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);

  return (

    <section className="mt-16 max-container flex justify-center flex-wrap gap-9">
      {page == 1 &&
        <>
          {/* CHALLENGE I */}
          <div className="flex-1 justify-center align-center sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-8">
            {/* <div className="w-11 h-11 justify-center items-center bg-coral-red rounded-full"> */}

            <div className="p-3  mt-2 text-center space-x-4 md:block">
              <div className="self-center xl:ml-12">
                <img src={services[0].imgUrl} alt={services[0].label} width={240} height={240} /></div>

              <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">
                {services[0].label}
              </h3>
              <button onClick={() => setOne(true)} className="mt-8 mb-2 md:mb-0 px-5 py-2 text-sm">
                <div className="flex max-sm:justify-end items-center max-sm:w-full">
                  {one ? <Button label="Claimed" fullWidth />: <Button label="Claim Reward" fullWidth />}
                </div>
              </button>

            </div>
          </div>

          {/* CHALLENGE II */}
          <div className="flex-1 justify-center align-center sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-8">
            {/* <div className="w-11 h-11 justify-center items-center bg-coral-red rounded-full"> */}

            <div className="p-3  mt-2 text-center space-x-4 md:block">
              <div className="self-center xl:ml-12">
                <img src={services[1].imgUrl} alt={services[1].label} width={240} height={240} /></div>

              <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">
                {services[1].label}
              </h3>
              <button onClick={() => setTwo(true)} className="mt-8 mb-2 md:mb-0 px-5 py-2 text-sm">
                <div className="flex max-sm:justify-end items-center max-sm:w-full">
                {two ? <Button label="Claimed" fullWidth />: <Button label="Claim Reward" fullWidth />}
                </div>
              </button>

            </div>
          </div>

          {/* CHALLENGE III */}
          <div className="flex-1 justify-center align-center sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-8">
            {/* <div className="w-11 h-11 justify-center items-center bg-coral-red rounded-full"> */}

            <div className="p-3  mt-2 text-center space-x-4 md:block">
              <div className="self-center xl:ml-12">
                <img src={services[2].imgUrl} alt={services[2].label} width={240} height={240} /></div>

              <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">
                {services[2].label}
              </h3>
              <button onClick={() => setThree(true)} className="mt-8 mb-2 md:mb-0 px-5 py-2 text-sm">
                <div className="flex max-sm:justify-end items-center max-sm:w-full">
                {three ? <Button label="Claimed" fullWidth />: <Button label="Claim Reward" fullWidth />}
                </div>
              </button>

            </div>
          </div>

          {one && two && three && <>
            <div className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover" id="modal-id">
              <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
              <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">

                <div className="">

                  <div className="text-center p-5 flex-auto justify-center">
                    <img src="https://static.vecteezy.com/system/resources/previews/023/220/711/original/3d-cartoon-icon-gift-box-isolated-on-pink-background-3d-illustration-png.png" />
                    <h2 className="text-xl font-bold py-4 ">Congratulations !</h2>
                    <p className="text-sm text-gray-500 px-8">You have earned 500 Thums Up Points 🥤
                    </p>
                  </div>

                  <div className="p-3  mt-2 text-center space-x-4 md:block">
                    <button onClick={() => setPage(2)} className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
                      Claim to your wallet
                    </button>

                  </div>
                </div>
              </div>
            </div>

          </>}

        </>}
    </section>

  );
};

export default Services;
