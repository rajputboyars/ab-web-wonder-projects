import Image from "next/image"

const people = [
    {
        name: 'Leonard Krasner',
        role: 'Senior Designer',
        imageUrl:
            'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        xUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'Leonard Krasner',
        role: 'Senior Designer',
        imageUrl:
            'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        xUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'Leonard Krasner',
        role: 'Senior Designer',
        imageUrl:
            'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        xUrl: '#',
        linkedinUrl: '#',
    },

    // More people...
]

export default function OurTeam() {
    return (
        <div className="bg-gray-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
                <div>
                    <div className="h-1 w-[5%] mb-2 mx-auto bg-yellow-500 rounded-full" />
                    <p className="uppercase text-yellow-400">our Team</p>
                </div>
                <div className="mx-auto lg:mx-0 gap-36 text-center">
                    <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl/snug">
                        Meet our team
                    </h2>
                    <p className="max-md:mt-8 text-sm font-medium text-pretty text-gray-300 ">
                        We’re a passionate group of experts dedicated to transforming small shop owners’ online presence and empowering college students with project success. Our skilled developers, marketers, designers, and trainers work tirelessly to deliver outstanding results.
                    </p>
                </div>
                <ul
                    role="list"
                    className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
                >
                    {people.map((person, index) => (
                        <li key={index} className="rounded-2xl bg-gray-800 px-8 py-10">
                            <Image width={1024} height={1024} alt="" src={person.imageUrl} className="mx-auto size-48 rounded-full md:size-56" />
                            <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-white">{person.name}</h3>
                            <p className="text-sm/6 text-gray-400">{person.role}</p>
                            <ul role="list" className="mt-6 flex justify-center gap-x-6">
                                <li>
                                    <a href={person.xUrl} className="text-gray-400 hover:text-gray-300">
                                        <span className="sr-only">X</span>
                                        <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="size-5">
                                            <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-300">
                                        <span className="sr-only">LinkedIn</span>
                                        <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="size-5">
                                            <path
                                                d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                                clipRule="evenodd"
                                                fillRule="evenodd"
                                            />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
