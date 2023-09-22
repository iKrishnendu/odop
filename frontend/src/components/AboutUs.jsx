import React from "react";

export const AboutUs = () => {
  return (
    <div className="p-2">
      <div className="row">
        <div className="col-2">
          <h1 className="text-center text-4xl pt-5 ">
            <b>
              <span className="text-orange-500">One</span>{" "}
              <span className="text-gray-600">District</span>
              <span className="text-orange-400"> One</span>
              <span className="text-green-400"> Product</span>
            </b>
          </h1>
          <br />
          <br />
          <p className="you">
            Odop is a one-stop-shop for all ODOP products. From the subtle and
            elegant Chikankari to the vibrant and baroque Jammu, from the
            carefully carved Moradabadi metal craft to the finely detailed
            Bhadohi carpets, find all the beautiful handicrafts of Jammu &
            Kashmir on our website!
          </p>
        </div>
      </div>
      <div className="flex lg:flex-row gap-2 py-10 justify-center items-center">
        <img
          src="https://odopmart.com/pub/media/wysiwyg/Nizamabad_black_clay_pottery.png"
          width="450px"
          alt=""
        />

        <img
          src="https://odopmart.com/pub/media/district/Lucknow/maxresdefault.jpg"
          width="420px"
          alt=""
        />
      </div>
      <div className="row-2">
        <p>
          Odop is an initiative to provide an online platform to small
          businesses and artisans, to enable them to enhance sales by reaching
          out to a wider customer base. It aims to digitally empower the
          handicrafts industry of Uttar Pradesh by providing it with the
          necessary physical and digital infrastructure to cater to a national
          audience. This is a one of a kind marketplace working at the
          intersection of modern logistics and ancient crafts made possible by
          the Jammu & Kashmir Government.
        </p>
        <div className="flex lg:flex-row gap-2 py-10 justify-center items-center">
          <img
            src="https://odopmart.com/pub/media/wysiwyg/Keralas-Beautiful-Eco-friendly-Handicrafts-Coir-and-Cane-Products-1024x768.jpg"
            width="400px"
            alt=""
          />

          <img
            src="https://odopmart.com/pub/media/wysiwyg/Indian-Handicrafts-2.jpg"
            alt=""
            width={531}
            height={299}
          />
        </div>
        <div className="text">
          <p>
            By combining erstwhile tradition with contemporary values of
            sustainability, exclusiveness and slow fashion - Odopmart provides
            you with the opportunity to shop for locally made, handcrafted and
            heritage products. We believe in promoting the continuous tradition
            of our land and supporting the infallible and precious handicrafts
            industry and all those who contribute to it.
          </p>
        </div>
        <div className="flex lg:flex-row gap-2 py-10 justify-center items-center">
          <img
            src="https://odopmart.com/pub/media/wysiwyg/c0676-W-20KG-L-26-H-17.jpg"
            width="400px"
            alt=""
          />

          <img
            src="https://odopmart.com/pub/media/wysiwyg/71iVVOabrTL._SL1500_.jpg"
            width="400px"
            height="400px"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
