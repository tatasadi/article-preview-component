"use client"
import Image from "next/image"
import drawersImage from "../public/images/drawers.jpg"
import avatar from "../public/images/avatar-michelle.jpg"
import iconFacebook from "../public/images/icon-facebook.svg"
import iconTwitter from "../public/images/icon-twitter.svg"
import iconPintrest from "../public/images/icon-pinterest.svg"
import IconShare from "./components/IconShare"
import { useEffect, useRef, useState } from "react"

export default function Home() {
  const [isShareVisible, setIsShareVisible] = useState(false)
  const shareRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutsideShare(event: MouseEvent) {
      if (
        shareRef.current &&
        !shareRef.current.contains(event.target as Node)
      ) {
        setIsShareVisible(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutsideShare)

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideShare)
    }
  }, [shareRef])

  return (
    <main className="flex items-center justify-center md:p-16">
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
        <div>
          <div className="flex flex-col gap-3 p-8 pb-5 md:px-10">
            <h1 className="font-bold leading-6 tracking-[0.0125rem] md:text-xl md:leading-7 md:tracking-[0.01563rem]">
              Shift the overall look and feel by adding these wonderful touches
              to furniture in your home
            </h1>
            <p className="text-[0.8125rem] font-medium leading-5 tracking-[0.00763rem] text-desaturated-dark-blue">
              Ever been in a room and felt like something was missing? Perhaps
              it felt slightly bare and uninviting. I’ve got some simple tips to
              help you make any room feel complete.
            </p>
          </div>
          <div className="relative">
            <div className="flex items-center gap-4 px-8 py-5 md:py-8">
              <Image
                width={40}
                height={40}
                alt="avatar"
                src={avatar}
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
              <div
                className="ml-auto h-8 w-8 cursor-pointer rounded-full bg-light-grayish-blue p-2"
                onClick={() => setIsShareVisible(true)}
              >
                <IconShare className="fill-desaturated-dark-blue" />
              </div>
            </div>
            {isShareVisible && (
              <div
                className="absolute left-0 top-0 flex h-full w-full items-center gap-5 rounded-b-[0.625rem] bg-very-dark-grayish-blue px-8 py-5 md:-right-[4.35rem] md:-top-[3rem] md:left-auto md:h-auto md:w-auto md:rounded-[0.625rem]"
                ref={shareRef}
              >
                <p className="text-[0.8125rem] font-medium uppercase leading-5 tracking-[0.3125rem] text-grayish-blue">
                  Share
                </p>
                <div className="relative h-5 w-5 cursor-pointer">
                  <Image src={iconFacebook} alt="facebook" />
                </div>
                <div className="relative h-5 w-5 cursor-pointer">
                  <Image src={iconTwitter} alt="twitter" />
                </div>
                <div className="h-5 w-5 cursor-pointer">
                  <Image src={iconPintrest} alt="pintrest" />
                </div>
                <div
                  className="ml-auto flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-desaturated-dark-blue p-2 md:hidden"
                  onClick={() => setIsShareVisible(false)}
                >
                  <IconShare className="fill-white" />
                </div>
                <div className="absolute -bottom-2 left-[50%] hidden h-4 w-4 rotate-45 bg-very-dark-grayish-blue md:block"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
