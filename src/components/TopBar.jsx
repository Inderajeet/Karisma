import SampleHeader2 from "./SampleHead";
import MobileHeader from "./SampleMobileHead";
import SampleTabHeader from "./SampleTabHeader";

const TopBar = () => { 
    return(
        <>
        <SampleHeader2/>
        {/* <SampleTabHeader/> */}
        <MobileHeader></MobileHeader>
        </>
    );
}

export default TopBar;