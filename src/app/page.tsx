export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <nav className="flex items-center justify-between px-6 py-5 border-b border-gray-800">
        <h1 className="text-2xl font-bold text-green-400">
          EarnLanka
        </h1>

        <div className="flex gap-3">
          <button className="px-4 py-2 rounded-lg border border-gray-600">
            Login
          </button>

          <button className="px-4 py-2 rounded-lg bg-green-500 text-black font-semibold">
            Sign Up
          </button>
        </div>
      </nav>

      <section className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-bold max-w-3xl">
          Complete Tasks.
          <span className="text-green-400"> Earn Rewards.</span>
        </h2>

        <p className="mt-6 max-w-xl text-gray-400 text-lg">
          EarnLanka connects people with simple online tasks and
          opportunities to earn rewards.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-3 rounded-xl bg-green-500 text-black font-bold">
            Start Earning
          </button>

          <button className="px-8 py-3 rounded-xl border border-gray-600">
            Advertise With Us
          </button>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6 px-6 pb-16 max-w-6xl mx-auto">
        <div className="p-6 rounded-2xl bg-gray-900 border border-gray-800">
          <h3 className="text-xl font-bold">💰 Earn Rewards</h3>
          <p className="mt-3 text-gray-400">
            Complete available tasks and build your earnings.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-gray-900 border border-gray-800">
          <h3 className="text-xl font-bold">📋 Find Tasks</h3>
          <p className="mt-3 text-gray-400">
            Discover tasks from advertisers and businesses.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-gray-900 border border-gray-800">
          <h3 className="text-xl font-bold">🏢 Advertise</h3>
          <p className="mt-3 text-gray-400">
            Reach users by creating legitimate tasks and campaigns.
          </p>
        </div>
      </section>

      <footer className="border-t border-gray-800 py-6 text-center text-gray-500">
        © 2026 EarnLanka. All rights reserved.
      </footer>
    </main>
  );
}
