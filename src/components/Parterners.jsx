import image1 from "../assets/patrick-collison-headshot.jpg.svg";
import image2 from "../assets/otto-williams.jpeg.svg";
import image3 from "../assets/michael-siebel-headshot.jpeg.svg";
import stripe from "../assets/Stripe.png.svg";
import visa from "../assets/Visa-_-Color.png.svg";
import y from "../assets/ycombinator-logo.png.svg";

const Parterners = () => {
  return (
    <div className="bg-gray-100 bg-partner-pattern bg-right">
      <div className="py-5 container m-auto">
        <h2 className="font-bold font-Boing text-4xl md:text-5xl py-4 md:w-5/12 ">
          Backed by strong global partners
        </h2>
        <p className="font-Roboto  text-1xl md:text-2xl md:w-7/12 ">
          Paystack is backed by notable investors as well as some of the best
          payments companies on the planet.
        </p>
      </div>
      <div className="flex items-center justify-center gap-4 container m-auto py-8 ">
        <div className="bg-white shadow-xl  rounded-md p-6 h-64 md:w-4/5">
          <img src={stripe} alt="stripe-png" />
          <p className="py-6">
            Paystack is highly technical and fanatically customer oriented.
            We’re excited to back such people in one of the world’s
            fastest-growing regions.
          </p>
          <div className="flex items-center gap-3">
            <img src={image1} alt="patrick-collison-headshot" className="rounded-full" />
            <div>
              <h2 className="font-bold font-Boing">Patrick Collison</h2>
              <p>CEO, Stripe</p>
            </div>
          </div>
           </div>

           <div className="bg-white shadow-xl rounded-md p-3 h-64 md:w-4/5">
          <img src={visa} alt="visa-png" />
          <p className="py-6">
          Our investment in Paystack aligns with the kind of investments we look for - those that will help extend our reach into the global commerce ecosystem
          </p>
          <div className="flex items-center  gap-3">
            <img src={image2} alt="otto-williams"  className="rounded-full"/>
            <div>
              <h2 className="font-bold font-Boing">Otto Williams</h2>
              <p>Head of Strategic Partnerships, Fintech & Ventures CEMEA, Visa</p>
            </div>
          </div>
           </div>
           <div className="bg-white shadow-xl rounded-md p-3 h-64 md:w-4/5">
          <img src={y} alt="y-combinator-png" />
          <p className="py-6">
          As YC's first Nigerian startup Paystack leads the charge of great companies coming out of Africa, powering modern payments for an entire continent.
          </p>
          <div className="flex items-center gap-3">
            <img src={image3} alt="patrick-collison-headshot" className="rounded-full" />
            <div>
              <h2 className="font-bold font-Boing">Michael Seibel
</h2>
              <p>CEO, Partner, Y Combinator
</p>
            </div>
          </div>
           </div>

      </div>
    </div>
  );
};

export default Parterners;
