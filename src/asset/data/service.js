import offerImage from "../images/offer.svg"
import profileImage from "../images/profileImage.jpg"
const brandDetail = {
    logo: "fab fa-react fa-2x",
    name: "RazorPay"
}

const sidebarContent = [
    {
        icon: "fas fa-vector-square",
        name: "Overview"
    },
    {
        icon: "far fa-chart-bar",
        name: "Reports"
    },
    {
        icon: "far fa-credit-card",
        name: "Cards"
    },
    {
        icon: "fas fa-phone-alt",
        name: "Support"
    }
]

const offer = {
    img: offerImage,
    title: "Congratulations",
    content: "You're eligible for Instant life Cover upto 2,00,000 without any medical test for documentation."
}

const profile = {
    name: "Abhishek Shrivastava",
    designation: "Software engineer",
    img: profileImage
}

const getTransactionHistory = async (value) => {
    const response = await fetch("https://464c6c8c-682a-40cf-a704-268cf332525d.mock.pstmn.io/transactionHistory");
    const transactions = response.json();
    // console.log(transactions);
    value(transactions);
    // return transactions;
}
export { brandDetail, sidebarContent, offer, profile, getTransactionHistory };