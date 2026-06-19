import Trusted from "./Trusted";

export default function Hero() {
  return (
    <section className="bg-[url(/assets/images/hero-bg.webp)] bg-no-repeat bg-cover mix-blend-soft-light ">
      <div className="hero  min-h-screen">
        <div className="hero-content max-w-360 mx-auto text-center">
          <div className="max-w-4xl px-5">
            <h1 className="text-6xl font-bold">
              Inbound conversion will never be the same again.
            </h1>
            <p className="py-6 text-lg text-balance">
              Unleash enterprise-grade AI agents to instantly engage, qualify, &
              convert inbound leads into pipeline & revenue.
            </p>
            <form
              data-theme="light"
              className="fieldset max-w-xl mx-auto border-base-300 rounded-full bg-base-100 border p-1.5 "
            >
              <div className="join items-center  ">
                <input
                  required
                  type="email"
                  className="input join-item border-0 shadow-none w-full focus:outline-none focus-within:outline-none "
                  placeholder="abdurrahman@gmail.com"
                />
                <button
                  type="submit"
                  className="btn btn-xl btn-neutral ml-0.5 join-item rounded-full"
                >
                  Talk to Lexend
                </button>
              </div>
            </form>
            <Trusted />
          </div>
        </div>
      </div>
    </section>
  );
}
