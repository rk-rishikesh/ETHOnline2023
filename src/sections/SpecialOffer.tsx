import Button from "../components/Button";
import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";


interface Props {
  page: number;
  setPage: (arg0: number) => void;
}

const SpecialOffer = ({
  page,
  setPage,
}: Props) => {

  const [shop, setShop] = useState(false);

  const pay = () => {
    setShop(true)
    setPage(3)
  }

  return (
    <section className="flex justify-wrap items-center max-xl:flex-col gap-10 max-container">

      {page == 2 && <>
        <div className="flex-1">
          <img
            src="https://m.media-amazon.com/images/I/71Iu8ORdJPL.jpg"
            alt="offer"
            width={773}
            height={687}
            className="object-contain w-full"
          />
        </div>
        <div className="flex flex-1 flex-col">
          <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
            <span className="text-coral-red">Special </span> Offer
          </h2>
          <p className="mt-4 lg:max-w-lg info-text">
          Elevate your World Cup fever with Thumps Up, the ultimate fan companion. From the exhilarating goals to the unforgettable moments, savor every match with a refreshing drink that's your winning ticket to the ultimate cricket experience. 
          </p>
          <p className="mt-6 lg:max-w-lg info-text">
            FirePerks Rewards, your gateway to an array of exciting benefits! 
          </p>
          <p className="mt-6 lg:max-w-lg info-text">
            Redeem your Thums Up Points 🥤
          </p>
          <div className="mt-11 flex flex-wrap gap-4">
            <button onClick={() => setShop(true)}>
              <Button label="Shop now" iconUrl={arrowRight} />
              {/* <Button
              label="Learn more"
              backgroundColor="bg-white"
              borderColor="border-slate-gray"
              textColor="text-slate-gray"
            /> */}
            </button>
          </div>
        </div>
        {shop && <>
          <div className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover" id="modal-id">
            <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
            <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">

              <div className="">

                <div className="text-center p-5 flex-auto justify-center">
                  <img src="https://static.vecteezy.com/system/resources/previews/012/487/823/original/3d-hand-press-pay-button-icon-phone-with-credit-card-float-on-transparent-mobile-banking-online-payment-service-withdraw-money-easy-shop-cashless-society-concept-cartoon-minimal-3d-render-png.png" />

                  <ul className="max-w-md divide-y divide-gray-100 dark:divide-gray-300">
                    <li className="pb-3 sm:pb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <img className="w-8 h-8 rounded-full" src="https://m.media-amazon.com/images/I/71Iu8ORdJPL.jpg" alt="Product Image" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate dark:text-black">
                            Thumps Up Pack of 8
                          </p>
                          {/* <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                              You can avail a discount of max 15%
                            </p> */}
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-black">
                          $ 100
                        </div>
                      </div>
                    </li>
                    <li className="pb-3 sm:pb-4">
                      <div className="mt-4 flex items-center space-x-4">
                        <div className="mt-2 flex-shrink-0">
                          <img className="w-8 h-8 rounded-full" src="https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Thums_Up_logo.svg/1200px-Thums_Up_logo.svg.png" alt="Boat Points" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="mt-2 text-sm font-medium text-gray-900 truncate dark:text-black">
                            Thums Up Points
                          </p>

                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-black">
                          🥤 500
                        </div>
                      </div>
                    </li>

                  </ul>
                  <p className="mt-2 text-sm text-gray-500  dark:text-gray-400">
                    You can maximum redeem 20 Points on this product
                  </p>
                </div>

                <div className="p-3  mt-2 text-center space-x-4 md:block">
                  <button onClick={() => pay()} className="mb-2 md:mb-0 px-5 py-2 text-sm font-medium text-gray-600">
                    <div className="flex max-sm:justify-end items-center max-sm:w-full">
                      <Button label="You Pay $ 80 /-" fullWidth />
                    </div>
                  </button>

                </div>
              </div>
            </div>
          </div>

        </>}
      </>
      }

    </section>
  )
}

export default SpecialOffer