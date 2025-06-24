import Image from "next/image"
const incentives = [
    {
        name: 'Website Design & Development',
        description: "Custom, fast, and mobile-friendly sites using MERN, Next.js, and PHP to showcase your shop or project.",
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce/icons/icon-delivery-light.svg',
    },
    {
        name: 'Graphic Designing',
        description: 'Professional logos, banners, and visuals to elevate your brand identity.',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce/icons/icon-chat-light.svg',
    },
    {
        name: 'Digital Marketing & SEO',
        description: "Targeted ads and search engine optimization to drive traffic and sales.",
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce/icons/icon-fast-checkout-light.svg',
    },
    {
        name: 'Student Project Support',
        description: "Expert guidance and training for college projects to ensure your success.",
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce/icons/icon-gift-card-light.svg',
    },
]

export default function OurService() {
    return (
        <div id="our-services" className="relative isolate py-24 sm:pt-32">
            <div className="md:h-[70%] h-[100%]  bg-gray-900 absolute w-full top-0" />
            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative flex-col flex items-center">
                <div>
                    <div className="h-1 w-[50%] mb-2 mx-auto bg-yellow-500 rounded-full" />
                    <p className="uppercase text-yellow-400">our Services</p>
                </div>
                <div className="mx-auto lg:mx-0 gap-36 text-center">
                    <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl/snug">
                        Explore What We’re Offering
                    </h2>
                    <p className="max-md:mt-8 text-sm font-medium text-pretty text-gray-300 ">
                        We provide tailored solutions to boost your online presence and academic success. From stunning websites to powerful marketing strategies, we’ve got you covered.
                    </p>
                </div>
                <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none ">
                    <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
                            {incentives.map((incentive, index) => (
                                <div key={index} className="bg-white shadow-md group relative ">
                                    {/* <div className="group-hover:bg-yellow-400 w-full h-0 transition-all duration-700 absolute bottom-0 group-hover:h-[100%]" /> */}
                                    <div className="p-4 group-hover:z-10">
                                        <Image width={24} height={24} alt="image" src={incentive.imageSrc} className="h-24 w-auto" />
                                        <h3 className="mt-6 text-sm font-medium text-gray-900">{incentive.name}</h3>
                                        <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

