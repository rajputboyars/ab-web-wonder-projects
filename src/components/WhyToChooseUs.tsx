import Image from "next/image"

const stats = [
  { id: 1, name: 'Clients Served', value: '8,000+' },
  { id: 2, name: 'Satisfaction Rate', value: '3%' },
  { id: 3, name: 'Uptime Guarantee', value: '99.9%' },
  { id: 4, name: 'Delivered Value', value: '$70M' },
]

export default function WhyToChooseUsSection() {
  return (
    <div className="relative bg-zinc-300 ">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
        <div className="px-6 md:pr-0 pt-16 pb-24 sm:pt-20 sm:pb-32 lg:col-start-1 lg:pr-8 lg:pt-32">
          <div className="mx-auto max-w-2xl lg:max-w-lg">
            <div>
              <div className="h-1 w-[20%] mb-2 bg-yellow-500 rounded-full" />
              <p className="uppercase text-yellow-500">Our track record</p>
            </div>
            {/* <h2 className="text-base/8 font-semibold text-yellow-600">Our track record</h2> */}
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              Trusted by thousands
            </p>
            <p className="mt-6 text-lg/8 text-gray-600">
              <span className="text-yellow-500 font-semibold">AB WEB WONDER</span> has a proven history of empowering small shop owners and college students with top-tier digital solutions.
            </p>
            <dl className="mt-16 grid max-w-xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 xl:mt-16">
              {stats.map((stat) => (
                <div key={stat.id} className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6">
                  <dt className="text-sm/6 text-gray-600">{stat.name}</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <Image
        width={2850}
        height={2850}
        alt=""
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2850&q=80"
        className="h-56 w-full bg-gray-50 object-cover lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2"
      />
    </div>
  )
}
