import Button from "../components/Button";
import { useState } from "react";
import ShoeCard from "../components/ShoeCard";
import type { IShoe } from "../types";
import { shoes } from "../constants";

interface Props {
  page: number;
  setPage: (arg0: number) => void;
}

const SuperQuality = ({
  page,
  setPage,
}: Props) => {

  // let currentAnimate = isOpen ? "open" : "closed";
  const [bigShoeImg, setBigShoeImg] = useState<string>("https://media.istockphoto.com/id/1473636673/vector/cute-honeybee-character-flying-3d-illustration.jpg?s=612x612&w=0&k=20&c=iodVcFdMPhDVklriOUr_-3LYv9s23CZ3TuCCzIwufeQ=");
  
  const [tba, setTBA] = useState(false);

  const mintTBA = () => {
    setTBA(false)
    setPage(1)
  }

  return (
    <section
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      {tba &&
        <div className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover" id="modal-id">
          <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
          <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">

            <div className="">

              <div className="text-center p-5 flex-auto justify-center">
                <img src={bigShoeImg} />
                <h2 className="text-xl font-bold py-4 ">Congratulations! Your Avatar has minted</h2>
                <p className="text-sm text-gray-500 px-8">Click to Deploy Token Bound Account to start receiving rewards.
                </p>
              </div>

              <div className="p-3  mt-2 text-center space-x-4 md:block">
                <button onClick={() => mintTBA()} className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
                  Deploy Token Bound Account
                </button>

              </div>
            </div>
          </div>
        </div>

      }

      {page == 0 && <>
        <div className="flex flex-1 flex-col">

          <h2 className="sm:mt-16 mt-8 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
            Get ready to embark on an
            <span className="text-coral-red"> exciting journey </span>
            <span className="text-coral-red"> </span> of rewards
          </h2>
          {/* <p className="mt-4 lg:max-w-lg info-text">
            Ensuring premium comfort and style, our meticulously crafted footwear
            is designed to elevate your experience, providing you with unmatched
            quality, innovation, and a touch of elegance.
          </p>
          <p className="mt-6 lg:max-w-lg info-text">
            Our dedication to detail and excellence ensures your satisfaction
          </p> */}

        </div>

        <div className="relative flex-1 flex justify-center items-center xl:mt-16 max-xl:py-40 bg-hero bg-cover bg-center">

          <img
            src={bigShoeImg}
            alt="avatar"
            width={500}
            height={250}
            className="object-contain relative mt-8 "
          />


          <div className="flex sm:gap-6 gap-4 absolute bottom-[80%] sm:left-[10%] max-sm:px-6">
            {shoes.map((shoe: IShoe) => (
              <div key={shoe.thumbnail}>
                <ShoeCard
                  imgUrl={shoe}
                  changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                  bigShoeImg={bigShoeImg}
                />
              </div>
            ))}

          </div>
          <div className="flex self-center sm:gap-6 gap-4 absolute bottom-[10%] max-sm:px-6">
            <div className="mt-12">
              <button onClick={() => setTBA(true)}><Button label="Lock in Avatar" /></button>
            </div>
          </div>
        </div>

      </>
      }

    </section>
  )
}

export default SuperQuality