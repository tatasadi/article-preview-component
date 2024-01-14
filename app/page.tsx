import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center justify-center">
      <div className="rounded-[0.625rem] bg-white shadow-[0_40px_40px_-10px_rgba(201,213,225,0.50)] flex flex-col">
        <div className="max-h-[16rem] overflow-hidden">
          <Image src="/images/drawers.jpg" layout="responsive"  alt="drawers" width={320} height={480} />
        </div>
        <div>

        <h1>Shift the overall look and feel by adding these wonderful touches to furniture in your home</h1>
        <p>Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.</p>
        <div>
          <Image width={40} height={40} alt="avatar" src="/images/avatar-michelle.jpg" />
          <div>
            <h2>Michelle Appleton</h2>
            <p>28 Jun 2020</p>
          </div>
          <Image width={32} height={32} alt="share icon" src="/images/icon-share.svg" />
        </div>
        </div>
      </div>
    </main>
  );
}
