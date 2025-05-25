export default function Home() {
  return (
    <div>
      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto mt-60">
        <div className="flex flex-col gap-4 p-8 rounded-xl bg-black/70 w-4/5 sm:max-w-96 mx-auto text-white">
          <h1 className="text-l font-extrabold">
            Sarraf&apos;s Computer Repair Shop
          </h1>
          <address>
            111 operating-systems
            <br />
            Tech-city, Modern Road
          </address>
          <p>Open Daily : 9am - 5pm</p>
          
        </div>
        <div className="hidden bg-homebg"></div>
      </main>
    </div>
  );
}
