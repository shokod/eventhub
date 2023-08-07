 import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">Discover, share and gift events
      <br className="max-md:hidden" />
      <span className="orange_gradient text-center"> with your friends.</span></h1>
      <p className="desc text-center">
        EventsHub is an open-source events exploration and gifting platform for modern world to explore, create and share creative events while spending some quality time with your loved ones!
      </p>

      <Feed />
    </section>
  )
}

export default Home
