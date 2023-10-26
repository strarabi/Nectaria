import OptionsButton from './OptionsButton'

function Navbar(): JSX.Element {
    return (
        <div className="navbar bg-base-300">
        <div className="navbar-start">
            <a className="btn btn-ghost normal-case text-3xl">Nectaria</a>
        </div>
        <div className="navbar-end">
            <OptionsButton/>
        </div>
        </div>
    )
}

export default Navbar