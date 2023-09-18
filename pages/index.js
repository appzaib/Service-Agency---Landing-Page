import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Service Agency</title>
      </Head>
      <div className="container mx-auto px-5">
        <section className="md:py-16 py-8">
          <div className="mx-auto flex md:flex-row flex-col items-center md:text-start text-center">
            <div className="w-full md:w-7/12 md:mb-0 mb-4">
              <h2 className="text-3xl	md:text-6xl font-semibold text-[#293241]">
                Creative Digital <br /> Marketing Agency
              </h2>
              <p className="text-lg md:text-xl pt-2 md:pt-6 pb-4 md:pb-8 md:pr-4 mb-4 font-extralight">
                Unleash the full potential of your brand online with our
                Creative Digital Marketing Agency's expertise. Elevate your
                digital strategy and stand out in the digital landscape.
              </p>
              <button className="bg-[#2DCA72] text-white px-6 py-4 rounded-full mb-4 md:mb-0">
                Contact Us
              </button>
            </div>
            <div className="w-64 md:w-5/12">
              <img src="Cover Image.png" className="md:ml-auto" alt="" />
            </div>
          </div>
        </section>
        <section className="py-12">
          <div className="divide-x-2">
            <span className="text-lg font-semibold pr-4">Featured In</span>
            <span className="text-[#C7C6D5] text-lg font-semibold pl-4">
              Our Certification
            </span>
          </div>
          <div className="flex flex-wrap md:flex-row pt-8 md:px-2 px-1 text-center mx-auto items-center">
            <div className="w-1/2 md:w-1/5 mb-4 md:mb-0">
              <div className="flex items-center border border-gray-100 w-[160px] h-[70px] md:w-[210px] md:h-[90px] shadow-lg rounded-md">
                <img
                  src="asus-logo.png"
                  className="object-contain mx-auto"
                  alt=""
                />
              </div>
            </div>
            <div className="w-1/2 md:w-1/5 mb-4 md:mb-0">
              <div className="flex items-center border border-gray-100 w-[160px] h-[70px] md:w-[210px] md:h-[90px] shadow-lg rounded-md">
                <img
                  src="allianz-1.png"
                  className="object-contain mx-auto"
                  alt=""
                />
              </div>
            </div>
            <div className="w-1/2 md:w-1/5 mb-4 md:mb-0">
              <div className="flex items-center border border-gray-100 w-[160px] h-[70px] md:w-[210px] md:h-[90px] shadow-lg rounded-md">
                <img
                  src="chase.png"
                  className="object-contain mx-auto"
                  alt=""
                />
              </div>
            </div>
            <div className="w-1/2 md:w-1/5 mb-4 md:mb-0">
              <div className="flex items-center border border-gray-100 w-[160px] h-[70px] md:w-[210px] md:h-[90px] shadow-lg rounded-md">
                <img
                  src="new-york-times.png"
                  className="object-contain mx-auto"
                  alt=""
                />
              </div>
            </div>
            <div className="w-1/2 md:w-1/5 mb-4 md:mb-0 mx-auto md:mx-0">
              <div className="flex items-center border border-gray-100 w-[160px] h-[70px] md:w-[210px] md:h-[90px] shadow-lg rounded-md">
                <img
                  src="linkedin.png"
                  className="object-contain mx-auto"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        <section className="md:py-16 py-8">
          <div className="flex md:flex-row flex-wrap flex-col items-center">
            <div className="md:w-1/4 w-full mb-6">
              <div className="bg-[#F2FFF8] box-border rounded-xl px-7 py-14 w-[280px] h-[230px]">
                <img src="icon.png" alt="" />
                <h3 className="pt-4 font-semibold text-[#293241]">
                  Search <br /> Engine Optimization
                </h3>
              </div>
            </div>
            <div className="md:w-1/4 w-full mb-6">
              <div className="bg-[#F2FFF8] box-border rounded-xl px-7 py-14 w-[280px] h-[230px]">
                <img src="icon (1).png" alt="" />
                <h3 className="pt-4 font-semibold text-[#293241]">
                  Website design & <br /> Development
                </h3>
              </div>
            </div>
            <div className="md:w-2/4 w-full mb-6">
              <div className="w-[90%] pt-2">
                <h3 className="font-bold text-3xl text-[#293241]">
                  Our Digital
                  <br /> Marketing Expertise
                </h3>
                <p className="text-sm pt-2 md:pt-4 font-thin text-[#5E5E5E]">
                  Unleash the full potential of your brand online with our
                  Creative Digital Marketing Agency's expertise. Elevate your
                  digital strategy and stand out in the digital landscape.
                </p>
              </div>
            </div>
            <div className="md:w-1/4 w-full mb-6">
              <div className="bg-[#F2FFF8] box-border rounded-xl  px-7 py-14 w-[280px] h-[230px]">
                <img src="icon (5).png" alt="" />
                <h3 className="pt-4 font-semibold text-[#293241]">
                  Video editing & <br /> Production
                </h3>
              </div>
            </div>
            <div className="md:w-1/4 w-full mb-6">
              <div className="bg-[#F2FFF8] box-border rounded-xl  px-7 py-14 w-[280px] h-[230px]">
                <img src="icon (2).png" alt="" />
                <h3 className="pt-4 font-semibold text-[#293241]">
                  Content <br /> Writing
                </h3>
              </div>
            </div>
            <div className="md:w-1/4 w-full mb-6">
              <div className="bg-[#F2FFF8] box-border rounded-xl  px-7 py-14 w-[280px] h-[230px]">
                <img src="icon (3).png" alt="" />
                <h3 className="pt-4 font-semibold text-[#293241]">
                  Social media <br /> Marketing
                </h3>
              </div>
            </div>
            <div className="md:w-1/4 w-full mb-6">
              <div className="bg-[#F2FFF8] box-border rounded-xl  px-7 py-14 w-[280px] h-[230px]">
                <img src="icon (4).png" alt="" />
                <h3 className="pt-4 font-semibold text-[#293241]">
                  Pay per <br /> click (PPC)
                </h3>
              </div>
            </div>
          </div>
        </section>
        <section className="md:py-12 py-4">
          <div className="mx-auto flex md:flex-row flex-col items-center md:text-start text-center">
            <div className="w-64 md:w-1/2">
              <img src="Section Image.png" alt="" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#293241] mt-4 md:mt-0">
                Why should you <br /> choose Ozone
              </h2>
              <p className="text-lg pt-2 md:pt-4 pb-6 font-extralight">
                Unleash the full potential of your brand online with our
                Creative Digital Marketing Agency's expertise. Elevate your
                digital strategy and stand out in the digital landscape.
              </p>
              <button className="bg-[#2DCA72] text-white px-4 py-3 rounded-full mb-4 md:mb-0">
                Contact Us
              </button>
            </div>
          </div>
        </section>
        <section className="md:py-16 py-8">
          <h2 className="text-3xl text-[#293241] font-semibold">
            Our latest work
          </h2>
          <div className="flex md:flex-row flex-col pt-8">
            <div className="w-full md:w-1/3 mb-6">
              <div>
                <img src="image0.png" alt="" />
                <h3 className="md:text-2xl text-xl text-[#293241] font-semibold pt-5 pb-1 md:pb-4">
                  Artem - Digital Marketing <br /> campaign
                </h3>
                <p className="text-base font-thin text-[#5E5E5E]">
                  Unleash the full potential of your brand online with our
                  Creative Digital Marketing Agency's expertise
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 mb-6">
              <div>
                <img src="Image (1).png" alt="" />
                <h3 className="md:text-2xl text-xl text-[#293241] font-semibold pt-5 pb-1 md:pb-4">
                  Mayhem - Search engine <br /> Optimization
                </h3>
                <p className="text-base font-thin text-[#5E5E5E]">
                  Unleash the full potential of your brand online with our
                  Creative Digital Marketing Agency's expertise
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 mb-6">
              <div>
                <img src="Image (2).png" alt="" />
                <h3 className="md:text-2xl text-xl text-[#293241] font-semibold pt-5 pb-1 md:pb-4">
                  Basic - Pay per click <br />
                  (PPC)
                </h3>
                <p className="text-base font-thin text-[#5E5E5E]">
                  Unleash the full potential of your brand online with our
                  Creative Digital Marketing Agency's expertise
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="bg-[#F2FFF8] py-12 md:my-8">
        <div className="container mx-auto px-5">
          <h2 className="pt-4 text-3xl text-[#293241] font-semibold">
            Testimonials
          </h2>
          <div className="flex md:flex-row flex-col pt-8 items-center">
            <div className="w-full md:w-1/3 mb-4">
              <div className="bg-white shadow-md rounded-md md:w-[360px] h-[190px] font-semibold px-6 py-8">
                <h3 className="text-[#293241]">Zoe Mantis</h3>
                <span className="text-[#5E5E5E] font-thin text-sm">
                  Founder, Alpha Group
                </span>
                <p className="pt-6 text-[#5E5E5E] font-thin text-sm">
                  "This service agency exceeded our expectations and delivered
                  outstanding results."
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 mb-4">
              <div className="bg-white shadow-md rounded-md md:w-[360px] h-[190px] font-semibold px-6 py-8">
                <h3 className="text-[#293241]">Don Joe</h3>
                <span className="text-[#5E5E5E] font-thin text-sm">
                  Founder, Beta Group
                </span>
                <p className="pt-6 text-[#5E5E5E] font-thin text-sm">
                  "This service agency absolutely exceeded all our expectations
                  – an absolute game-changer!"
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 mb-4">
              <div className="bg-white shadow-md rounded-md md:w-[360px] h-[190px] font-semibold px-6 py-8">
                <h3 className="text-[#293241]">Natalie Colin</h3>
                <span className="text-[#5E5E5E] font-thin text-sm">
                  Founder, Alpha Group
                </span>
                <p className="pt-6 text-[#5E5E5E] font-thin text-sm">
                  "Choosing this service agency was a brilliant decision –
                  they've been a game-changer for us!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="md:py-16 py-12 container mx-auto px-5">
        <div className="mx-auto flex md:flex-row flex-col md:text-start text-center">
          <div className="w-full md:w-1/2 md:mb-0 mb-4">
            <h2 className="text-3xl	md:text-6xl font-semibold text-[#293241]">
              Creative Digital <br /> Marketing Agency
            </h2>
            <p className="text-lg md:text-xl pt-2 md:pt-6 pb-4 md:pb-8 font-extralight">
              Unleash the full potential of your brand online with our Creative
              Digital Marketing Agency's expertise. Elevate your digital
              strategy and stand out in the digital landscape.
            </p>
            <div className="md:inline-flex items-center">
              <button className="bg-[#2DCA72] text-white px-6 py-4 rounded-full mb-4 md:mb-0">
                Contact Us
              </button>{" "}
              <span className="px-2 md:px-8">Or</span>
              <div className="inline-flex">
                <img src="Icon-call.png" alt="" />
                <span className="px-4">+0 123 456-789</span>
              </div>
            </div>
            <p className="md:pt-16 pt-4 text-lg">© 2023 Octet Design Studio.</p>
          </div>
          <div className="w-64 md:w-1/2 pt-4">
            <img src="Footer Image.png" className="md:ml-auto" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}
