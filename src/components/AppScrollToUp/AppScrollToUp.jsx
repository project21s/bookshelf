import React, {useState, useEffect} from "react";
import AppButton from "../AppButton/AppButton";

function AppScrollToUp() {
    
const [showTopBtn, setShowTopBtn] = useState(false);

useEffect(() => {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            setShowTopBtn(true);
        } else {
            setShowTopBtn(false);
        }
    });
}, []);

const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

return (
    <>
        {" "}
        {showTopBtn && (
        <AppButton scrollUp onClick={goToTop} />)}{" "}
    </>
);
}

export default AppScrollToUp;