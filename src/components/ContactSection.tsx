import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function ContactSection() {
    return (
        <div className="relative min-h-[80vh] bg-[url('https://php.kodesolution.com/2025/arotech-php/images/icons/pattern-17.jpg')] h-52 w-full bg-cover bg-center bg-no-repeat">
            <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
                <div className=" px-6 py-16 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
                    <div className="mx-auto max-w-lg">
                        <div className="h-1 bg-yellow-400 w-[12%] rounded-2xl" />
                        <h2 className="mt-2 text-yellow-400 tracking-tight text-balance text-lg/8">
                            Get in touch
                        </h2>
                        <p className="mt-2 font-semibold text-4xl text-white sm:text-5xl">Get a free quote today.</p>
                        <dl className="mt-8 text-base text-white">
                            <div>
                                <dt className="sr-only">Postal address</dt>
                                <dd>
                                    <p>742 Evergreen Terrace</p>
                                    <p>Springfield, OR 12345</p>
                                </dd>
                            </div>
                            <div className="mt-6">
                                <dt className="sr-only">Phone number</dt>
                                <dd className="flex">
                                    <PhoneIcon aria-hidden="true" className="size-6 shrink-0 text-white" />
                                    <span className="ml-3">+1 (555) 123-4567</span>
                                </dd>
                            </div>
                            <div className="mt-3">
                                <dt className="sr-only">Email</dt>
                                <dd className="flex">
                                    <EnvelopeIcon aria-hidden="true" className="size-6 shrink-0 text-white" />
                                    <span className="ml-3">support@example.com</span>
                                </dd>
                            </div>
                        </dl>
                        <p className="mt-6 text-base text-white">
                            Looking for careers?{' '}
                            <a href="#" className="font-medium text-white underline">
                                View all job openings
                            </a>
                            .
                        </p>
                    </div>
                </div>
                <div className=" px-6 py-16 lg:col-span-3 lg:px-8 lg:py-24 xl:pl-12">
                    <div className="mx-auto max-w-lg lg:max-w-none">
                        <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
                            <div>
                                <label htmlFor="full-name" className="sr-only">
                                    Full name
                                </label>
                                <input
                                    id="full-name"
                                    name="full-name"
                                    type="text"
                                    placeholder="Full name"
                                    autoComplete="name"
                                    className="block w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-500 shadow-xs focus:border-indigo-500 focus:ring-indigo-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="sr-only">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    autoComplete="email"
                                    className="block w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-500 shadow-xs focus:border-indigo-500 focus:ring-indigo-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="sr-only">
                                    Phone
                                </label>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="text"
                                    placeholder="Phone"
                                    autoComplete="tel"
                                    className="block w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-500 shadow-xs focus:border-indigo-500 focus:ring-indigo-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="sr-only">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    placeholder="Message"
                                    className="block w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-500 shadow-xs focus:border-indigo-500 focus:ring-indigo-500"
                                    defaultValue={''}
                                />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-xs hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
