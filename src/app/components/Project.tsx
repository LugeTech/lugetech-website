

import Link from "next/link"
import Image from "next/image"

interface app {
  title: string
  description: string
  link: string
  c: string
}
export default function Project(app: app) {
  return (
    <div className={`flex shadow-xl items-center justify-center max-w-xs gap-2 rounded-lg overflow-hidden sm:max-w-xs p-4`} style={{ backgroundColor: `${app.c}` }}>
      <div className="flex items-center space-x-4 pl-1">
        <div className="grid gap-1.5">
          <h3 className="text-lg font-bold tracking-tighter">{app.title}</h3>
          <p className="text-sm leading-none/none text-gray-500">{app.description}</p>
          <Link className="inline-flex items-center text-sm font-medium space-x-2 underline" href={app.link}>
            Try it out
          </Link>
        </div>
      </div>
    </div>
  )
}


