import { useRef, useLayoutEffect } from 'react';
import { gsap } from "gsap";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const DeliveryTerms = () => {

    const deliveryAnimation = useRef();
    const tl = useRef();

    useLayoutEffect(() => {
    const ctx = gsap.context(() => {
    tl.current = gsap
        .timeline()
        .fromTo(".padding-top", { opacity: 0, scale: 0}, {  delay: 0.3, duration: 1, opacity: 1, scale: 1})
        .fromTo(".padding-topAmount", { opacity: 0, scale: 0}, { duration: 1, opacity: 1, scale: 1});
    }, deliveryAnimation);
    return () => ctx.revert()
}, []);

    return(
        <div>
            <h3 className="center padding">Delivery</h3>
            <div className="line" ref={deliveryAnimation}>
            <div className="column padding-top">
            <HiOutlineDevicePhoneMobile className="delivery-icon" />
            <p className="deliveryTerms-heading">We accept orders</p>
            <p className="delivery-terms">daily, 9 A.M. - 10 P.M.</p>
            </div>
            <div className="column padding-topAmount">
            <HiOutlineShoppingBag className="delivery-icon" />
            <p className="deliveryTerms-heading">Minimum order amount</p>
            <p className="delivery-terms">$30 (with all promos included)</p>
            </div>
        </div>
        </div>
    )
}

export default DeliveryTerms;