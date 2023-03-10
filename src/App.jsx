
function App() {

  return (
    <div className="flex flex-col max-w-md mx-auto space-y-8 p-4 pb-16 text-neutral-900">
      <img className="block mx-auto" alt="The Beginnings & Endings Project" width="400" src="/header.png" />
      <div className="space-y-4">
        <p>
          <strong>Beginnings & Endings</strong> was a project to celebrate the launch of the 2013 <a href="https://wearebrightly.com">Brightly</a> record of the same name.
        </p>
        <p>It encouraged sharing the single, <a href="https://wearebrightly.bandcamp.com/track/preflight-nerves">Preflight Nerves</a> in exchange for a copy of <a href="https://wearebrightly.bandcamp.com/album/beginnings-endings">the album</a>. It was part of a bunch of little projects we did around the release that felt super exciting and new, and it was a joy to see people get a kick out of them.</p>
        <p>Technology moves quickly, and the underlying architecture that powered this project has undergone so many changes in the last decade that it has been retired.</p>
        <p>Thank you to everyone who participated, and for supporting our music over the years. It means a lot.</p>
      </div>
      <div className="space-y-2">
        <img className="block" width="200" alt="A squiggle of a signature" src="/signature.png" />
        <div className="space-y-0 flex flex-col">
          <p className="text-sm font-bold">Charlie</p>
          <a className="text-xs text-neutral-900/50 self-start" href="https://wearebrightly.com">wearebrightly.com</a>
        </div>
      </div>
    </div>
  )
}

export default App
