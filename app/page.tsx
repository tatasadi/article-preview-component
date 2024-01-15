import Image from "next/image"
import drawersImage from "../public/images/drawers.jpg"

export default function Home() {
  return (
    <main className="flex items-center justify-center">
      <div className="flex flex-col rounded-[0.625rem] bg-white shadow-[0_40px_40px_-10px_rgba(201,213,225,0.50)] md:max-w-[46rem] md:flex-row">
        <div className="relative h-[14rem] w-full overflow-hidden rounded-t-[0.625rem] md:h-auto md:rounded-l-[0.625rem] md:rounded-tr-none">
          <Image
            src={drawersImage}
            objectFit="cover"
            objectPosition="left"
            alt="drawers"
            fill
          />
        </div>
        <div className="flex flex-col gap-3 p-8 md:px-10">
          <h1 className="font-bold leading-6 tracking-[0.0125rem] md:text-xl md:leading-7 md:tracking-[0.01563rem]">
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h1>
          <p className="text-[0.8125rem] font-medium leading-5 tracking-[0.00763rem] text-desaturated-dark-blue">
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete.
          </p>
          <div className="mt-5 flex items-center gap-4 md:mt-2">
            <Image
              width={40}
              height={40}
              alt="avatar"
              src="/images/avatar-michelle.jpg"
              className="rounded-full"
            />
            <div>
              <h2 className="text-[0.8125rem] font-bold leading-5 tracking-[0.00763rem]">
                Michelle Appleton
              </h2>
              <p className="text-[0.8125rem] font-medium leading-5 tracking-[0.00763rem] text-grayish-blue">
                28 Jun 2020
              </p>
            </div>
            <div className="ml-auto h-8 w-8 cursor-pointer rounded-full bg-light-grayish-blue p-2">
              <Image
                layout="responsive"
                width={32}
                height={32}
                alt="share icon"
                src="/images/icon-share.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
