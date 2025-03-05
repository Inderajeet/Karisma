import MainMenu from "./MainMenu";
import MobileMenu from "./MobileMenu";

const TopBar = () => { 
    return(
        <>
        <MainMenu/>
        <MobileMenu></MobileMenu>
        </>
    );
}

export default TopBar;