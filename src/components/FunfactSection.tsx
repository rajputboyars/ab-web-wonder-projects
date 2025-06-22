import Image from "next/image";

const FunfactSection = () => {
  const stats = [
    {
      icon: "<svg className='w-8 h-8 mx-auto' fill='currentColor' viewBox='0 0 24 24'><path d='M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 10.5h-1.5V9H10v4.5H8.5V12c0-.55-.45-1-1-1s-1 .45-1 1v1.5c0 .55.45 1 1 1H10c0 1.1.9 2 2 2h1.5V12h-1.5v1.5z'/></svg>",
      value: 6420,
      label: "Projects Completed",
    },
    {
      icon: "<svg className='w-8 h-8 mx-auto' fill='currentColor' viewBox='0 0 24 24'><path d='M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z'/></svg>",
      value: 9280,
      label: "Satisfied Clients",
    },
    {
      icon: "<svg className='w-8 h-8 mx-auto' fill='currentColor' viewBox='0 0 24 24'><path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z'/></svg>",
      value: 380,
      label: "Expert Teams",
    },
  ];

  return (
    <div className=" text-white min-h-screen flex flex-col items-center justify-center p-6 relative">
      <div className="md:h-[70%] h-[85%] -z-10 bg-gray-900 absolute w-full bottom-0" />
      <div className="relative w-full max-w-6xl">
        <Image
          width={1152}
          height={500}
          src="/images/high-angle-view-cropped-employee-work-with-laptop.jpg"
          alt="Business Image"
          className="w-full h-[300px] md:h-[500px] object-cover rounded-lg grayscale"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="bg-yellow-500 text-white rounded-full w-16 h-16 flex items-center justify-center hover:bg-yellow-600 transition">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.68L9.54 5.98C8.87 5.55 8 6.03 8 6.82z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between max-w-6xl w-full py-20">
        <div className="md:w-[45%]">
          <div>
            <div className="h-1 w-[10%] mb-2 bg-yellow-500 rounded-full" />
            <p className="uppercase text-yellow-400">FUNFACTS</p>
          </div>
          {/* <h2 className="text-yellow-500 text-lg font-semibold">FUNFACTS</h2> */}
          <h1 className="text-3xl sm:text-5xl font-bold mt-2">
            We’re experts in the business
          </h1>
          <p className="mt-6 text-lg/8 text-gray-400">
            There are many variations of passages of available majority
            alteration in some form, by humour or randomised words
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:w-[50%]">
          {stats.map(({ icon, value, label }, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg text-center">
              <div
                className="text-yellow-500 mb-2 mx-auto w-16"
                dangerouslySetInnerHTML={{ __html: icon }}
              />
              <p className="text-2xl font-bold">{value}</p>
              <p className="text-gray-400">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FunfactSection;
