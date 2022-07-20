import lensLogo from "./lens-logo"

export default function Navbar() {
    return (
        <nav className="flex h-20 bg-lime-400" >
            <div className="pl-1.5">{lensLogo()}</div>

            </nav>
    )
}