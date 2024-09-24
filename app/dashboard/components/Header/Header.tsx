import headerStyle from "./header.module.css";

export default function Header(){
    return(
        <header className={headerStyle.navBar}>
            <div>
                <p>I am your Header</p>
            </div>
        </header>
    )
}