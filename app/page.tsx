export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24">
      <div className="my-10 mx-40 px-10 grid grid-cols-1 font-sm gap-[0.625rem] md:grid-cols-2 md:gap-x-0.75">
        <div>
          <h3 className="my-2 text-2xl">Vietnam Culinary Delight Expedition</h3>
          <h1 className="my-2 text-8xl">Unleash the Flavors of Ho Chi Minh City</h1>
          <p className="my-6 text-lg">
            Exlore the hidden gems of Saigon, discover off-the-beaten-path street food,
            and immerse yourself in the local way of life. Together with my enthusiastic 
            and expertly trained local guides, we'll take you through the back alleys 
            and hidden streets that reveal the true essence of Saigon.
          </p>
        </div>
        <div><p>Reserve for Picture</p></div>
      </div>
    </main>
  );
}
