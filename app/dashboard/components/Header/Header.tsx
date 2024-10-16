import headerStyle from "./header.module.css";

interface Header {

}

export default function Header(){
    return(
        <header className={headerStyle.navBar}>
            <div>
                <p>CV Builder</p>
            </div>
        </header>
    )
}