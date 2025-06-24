import Image from "next/image";

export default function AboutSection() {
  return (
    <div id="about-us" className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="max-w-4xl">
          {/* <div>
                    <div className="h-1 w-[50%] mb-2 mx-auto bg-yellow-500 rounded-full" />
                    <p className="uppercase text-yellow-400">our Services</p>
                </div>
                <div className="mx-auto lg:mx-0 gap-36 text-center">
                    <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl/snug">Explore what services
                        we’re offering</h2>
                    <p className="max-md:mt-8 text-sm font-medium text-pretty text-gray-300 ">
                        There are many variations of passages of available but majority alteration in some form, by humou or randomised words.
                    </p>
                </div> */}
          <div>
            <div className="h-1 w-[5%] mb-2 bg-yellow-500 rounded-full" />
            <p className="uppercase text-yellow-400">About us</p>
          </div>
          {/* <p className="text-base/7 font-semibold text-indigo-600">About us</p> */}
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            On a mission to empower remote teams
          </h1>
          <p className="mt-6 text-xl/8 text-balance text-gray-700">
            At <span className="text-yellow-500">AB WEB WONDER,</span> we’re dedicated to transforming businesses and students alike. We help small shop owners establish a strong online presence with custom websites, digital marketing, SEO, graphic design, and video editing. Additionally, we support college students with project development and tailored training to excel in their academic journey.
          </p>
        </div>
        <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
          <div className="lg:pr-8">
            <h2 className="text-2xl font-semibold tracking-tight text-pretty text-gray-900">Our mission</h2>
            <div className="mt-6 text-base/7 text-gray-600">
              <p>
                We believe every small business deserves to thrive online and every student should have the tools to succeed. Our expert team uses cutting-edge technologies like MERN, Next.js, and PHP to build stunning websites, drive traffic with targeted ads, and create engaging content. For students, we offer hands-on project guidance and skill-building workshops to turn ideas into reality.
              </p>
              <ul>
                <li>
                  <span className="font-semibold text-black">For Shop Owners:</span> Affordable, all-in-one digital solutions to grow your brand.
                </li>
                <li>
                  <span className="font-semibold text-black">For Students:</span> Practical project support and training to boost your skills.
                </li>
                <li>
                  <span className="font-semibold text-black">Our Promise:</span> Personalized service with no hidden costs.
                </li>
              </ul>
            </div>
            <div className="mt-8 text-base/7 text-gray-600">
              <p className="text-black font-semibold text-lg">
                Ready to Get Started?
              </p>
              <p>
                Whether you’re a shop owner looking to go digital or a student needing project help, we’re here for you. Contact us today for a free consultation!
              </p>
              <button className="bg-yellow-500 text-black px-4 py-2 mt-4 uppercase font-semibold ">
                Get in Touch
              </button>
            </div>
          </div>
          <div className="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
            <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
              <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                <Image
                  width={560}
                  height={560}
                  alt=""
                  src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?&auto=format&fit=crop&crop=center&w=560&h=560&q=90"
                  className="block size-full object-cover"
                />
              </div>
              <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                <Image
                  width={560}
                  height={560}
                  alt=""
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?&auto=format&fit=crop&crop=left&w=560&h=560&q=90"
                  className="block size-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                <Image
                  width={560}
                  height={560}
                  alt=""
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?&auto=format&fit=crop&crop=left&w=560&h=560&q=90"
                  className="block size-full object-cover"
                />
              </div>
              <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                <Image
                  width={560}
                  height={560}
                  alt=""
                  src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?&auto=format&fit=crop&crop=center&w=560&h=560&q=90"
                  className="block size-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="max-lg:mt-16 lg:col-span-1">
            <p className="md:text-base/7 text-3xl/7 font-semibold text-gray-500">The numbers</p>
            <hr className="mt-6 border-t border-gray-200" />
            <dl className="mt-6 grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-2">
              <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
                <dt className="text-sm/6 text-gray-600">Raised</dt>
                <dd className="order-first text-3xl lg:text-6xl font-semibold tracking-tight">
                  $<span>150</span>M
                </dd>
              </div>
              <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
                <dt className="text-sm/6 text-gray-600">Companies</dt>
                <dd className="order-first text-3xl lg:text-6xl font-semibold tracking-tight">
                  <span>30</span>K
                </dd>
              </div>
              <div className="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-gray-200 max-sm:pb-4">
                <dt className="text-sm/6 text-gray-600">Deals Closed</dt>
                <dd className="order-first text-3xl lg:text-6xl font-semibold tracking-tight">
                  <span>1.5</span>M
                </dd>
              </div>
              <div className="flex flex-col gap-y-2">
                <dt className="text-sm/6 text-gray-600">Leads Generated</dt>
                <dd className="order-first text-3xl lg:text-6xl font-semibold tracking-tight">
                  <span>200</span>M
                </dd>
              </div>
            </dl>
          </div>
        </section>
      </div>
    </div>
  )
}
