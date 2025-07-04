import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

const features = [
  {
    name: 'Leading in marketing.',
    description:
      'Cutting-edge digital marketing and SEO strategies to grow your online presence, applied daily by our skilled professionals.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Expert developers.',
    description: 'Skilled in MERN, Next.js, and PHP, building custom websites that stand out, with a focus on your success.',
    icon: LockClosedIcon,
  },
  {
    name: 'Comprehensive Support.',
    description: 'From graphic design and video editing to student project guidance and training, we’ve got you covered.',
    icon: ServerIcon,
  },
]

export default function FeatureSection() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className=" lg:pt-4 lg:pl-4">
            <div className="">
              <div>
                <div className="h-1 w-[16%] mb-2 bg-yellow-500 rounded-full" />
                <p className="uppercase text-yellow-400">GET TO KNOW US</p>
              </div>
              <div className="mx-auto lg:mx-0 gap-36">
                <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">The Best Digital Solutions We Provide for You</h2>
                <p className="mt-8 font-medium text-pretty text-gray-600">
                  At <span className='text-yellow-500 font-semibold'>AB WEB WONDER</span>, we’re passionate about helping small shop owners thrive online and supporting college students with their projects. Our expert team delivers top-notch digital services tailored to your needs.
                </p>
              </div>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-indigo-600" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first overflow-hidden">
            <Image
              alt="Product screenshot"
              src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
              width={2432}
              height={500}
              className=" max-w-none max-md:max-h-[400px] rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
