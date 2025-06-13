const links = [
    { name: 'Open roles', href: '#' },
    { name: 'Internship program', href: '#' },
    { name: 'Our values', href: '#' },
    { name: 'Meet our leadership', href: '#' },
]
const stats = [
    { name: 'Offices worldwide', value: '12' },
    { name: 'Full-time colleagues', value: '300+' },
    { name: 'Hours per week', value: '40' },
    { name: 'Paid time off', value: 'Unlimited' },
]

const incentives = [
    {
        name: 'Free Shipping',
        description: "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce/icons/icon-delivery-light.svg',
    },
    {
        name: '24/7 Customer Support',
        description: 'Our AI chat widget is powered by a naive series of if/else statements. Guaranteed to irritate.',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce/icons/icon-chat-light.svg',
    },
    {
        name: 'Fast Shopping Cart',
        description: "Look how fast that cart is going. What does this mean for the actual experience? I don't know.",
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce/icons/icon-fast-checkout-light.svg',
    },
    {
        name: 'Gift Cards',
        description: "Buy them for your friends, especially if they don't like our store. Free money for us, it's great.",
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce/icons/icon-gift-card-light.svg',
    },
]

export default function OurService() {
    return (
        <div className="relative isolate pt-24 sm:pt-32">
            <div className="h-[90%]  bg-gray-900 absolute w-full top-0" />
            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
                <div>
                    <div className="h-1 w-[6%] mb-2 bg-yellow-500 rounded-full" />
                    <p className="uppercase text-yellow-400">our Services</p>
                </div>
                <div className="mx-auto grid grid-cols-2 max-md:grid-cols-1 lg:mx-0 gap-36">
                    <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl/snug">Explore what services
                        we’re offering</h2>
                    <p className="max-md:mt-8 text-sm font-medium text-pretty text-gray-300 ">
                        There are many variations of passages of available but majority alteration in some form, by humou or randomised words.
                    </p>
                </div>
                <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none ">
                    <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
                            {incentives.map((incentive,index) => (
                                <div key={index} className="bg-white shadow-md group relative ">
                                    <div className="group-hover:bg-yellow-400 w-full h-0 transition-all duration-700 absolute bottom-0 group-hover:h-[100%]" />
                                    <div className="p-4 group-hover:z-10">
                                        <img alt="" src={incentive.imageSrc} className="h-24 w-auto" />
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

