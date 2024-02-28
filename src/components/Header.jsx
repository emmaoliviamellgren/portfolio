
const Header = () => {
  return (
    <nav className="flex justify-center items-center text-white h-16 bg-stone-800">
        <div>

        </div>
        <ul className="flex gap-4 text-base items-center tracking-tight">
            <li className="font-bold text-stone-400">Get in touch with me at</li>
            <li className="bg-stone-900 shadow-white rounded-md px-2 py-1">mellgrenemma0@gmail.com</li>
            <li className="font-bold text-stone-400">or check out my</li>
            <li><a className="border border-stone-500 transition ease-in-out duration-50 hover:opacity-80 rounded-md px-2 py-1" href="https://github.com/emmaoliviamellgren">GitHub</a></li>
            <span>or</span>
            <li><a className="border border-stone-500 transition ease-in-out duration-50 hover:opacity-80 rounded-md px-2 py-1" href="https://github.com/emmaoliviamellgren">LinkedIn</a></li>
        </ul>
    </nav>
  )
}

export default Header