import {
  CustomerReviews,
  Hero,
  PopularProducts,
  SuperQuality,
  SpecialOffer,
  Services,
  Subscribe,
  Footer,
} from "./sections";
import { useEffect, useState } from "react";

import Nav from "./components/Nav";



// const sections: {
//   component: JSX.Element;
//   className: string;
// }[] = [
//     // { component: <Hero />, className: "xl:padding-l wide:padding-r padding-b" },
//     // { component: <PopularProducts />, className: "padding" },
//     {
//       component: <SuperQuality isOpen={showTokenDetail}
//                                handleOpenClose={setShowTokenDetail} 
//                   />, className: "padding"
//     },
//     { component: <Services />, className: "padding-x py-10" },
//     { component: <SpecialOffer />, className: "padding" },
//     // { component: <CustomerReviews />, className: "bg-pale-blue padding" },
//     // { component: <Subscribe />, className: "padding-x sm:py-32 py-16 w-full" },
//     { component: <Footer />, className: "bg-black padding-x padding-t pb-8" },
//   ];

const App = () => {

  const [page, setPage] = useState(0);

  return (
    <main className="relative">
      <Nav />
      <section className="padding">
        <SuperQuality
          page={page}
          setPage={setPage}
        />
        <SpecialOffer
          page={page}
          setPage={setPage}
        />
        <Services
          page={page}
          setPage={setPage}
        />
        {/* <CustomerReviews/> */}
      </section>
    </main>
  )
}

export default App;
