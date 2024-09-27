import DashboardStyle from "../dashboard.module.css";

export default function DashboardButton(){
    return(
        <button className={DashboardStyle.navBar}>
            <div>
                <p>I am your Header</p>
            </div>
        </button>
    )
}