import images from "../../public/images";
import { IoSettingsOutline, IoWalletOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { PiCellSignalFullBold, PiHandWithdraw } from "react-icons/pi";
import { FaWifi } from "react-icons/fa6";
import { LiaMoneyBillWaveSolid, LiaPiggyBankSolid } from "react-icons/lia";
import { LuTicket } from "react-icons/lu";
import { TfiList } from "react-icons/tfi";
import { CiCreditCard1 } from "react-icons/ci";
import { GiSettingsKnobs } from "react-icons/gi";
import { FiLogOut } from "react-icons/fi";

export const statusStyles = {
  success: "text-text-1600",
  failed: "text-red-500",
  pending: "text-yellow-500",
};

export const NavItems = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "About",
    path: "/about",
  },
  {
    id: 3,
    title: "FAQs",
    path: "/faqs",
  },

  {
    id: 4,
    title: "Contact Us",
    path: "/contact-us",
  },
];

export const ServicesData = [
  {
    id: 1,
    title: "Airtime Top Ups",
    image: images.landingPage.servicesAirtimeIcon,
    description:
      "Top up your mobile phone with airtime from your favorite network service providers locally and internationally",
  },
  {
    id: 2,
    title: "Mobile Data Top Up",
    image: images.landingPage.servicesDataIcon,
    description:
      "Top up your mobile devices with your favorite internet subscription plans from all internet network providers",
  },
  {
    id: 3,
    title: "Internets",
    image: images.landingPage.servicesInternetsIcon,
    description:
      "Pay for internet subscriptions from internet routers and network internet cables like Smile, Swift, Mobitel etc.",
  },

  {
    id: 4,
    title: "Savings & Investments",
    image: images.landingPage.servicesSavingsIcon,
    description:
      "Create savings goals and track your progress. Earn attractive interest rates on your savings, and Manage your investment portfolios",
  },

  {
    id: 5,
    title: "Instant Transfers",
    image: images.landingPage.servicesTransferIcon,
    description:
      "Send money to friends and family instantly to any bank or physically through cash pickups. Receive funds quickly and securely.",
  },

  {
    id: 6,
    title: "Instant Virtual Cards",
    image: images.landingPage.servicesCardsIcon,
    description:
      "Create Naira and USD virtual cards for secure online shopping. Set spending limits and track your expenses effortlessly",
  },

  {
    id: 7,
    title: "Flight/Bus Tickets",
    image: images.landingPage.servicesTicketsIcon,
    description:
      "Book bus tickets for intercity travel within Nigeria. Book domestic and international flights at competitive rates.",
  },

  {
    id: 8,
    title: "Healthcare & Insurance",
    image: images.landingPage.servicesInsuranceIcon,
    description:
      "Access healthcare services and purchase insurance plans. Find the best options for your health and insurance needs",
  },

  {
    id: 9,
    title: "Other Bills",
    image: images.landingPage.servicesOthersIcon,
    description:
      "Pay for Movie tickets, TV subscriptions, school fees, WAEC PIN, JAMB registrations, electricity, Govt fees, and many more",
  },
];

export const WcuData = [
  {
    id: 1,
    title: "Fast Transactions",
    description:
      "Nattypay offers a one-stop solution for all your financial needs. our platform is designed to simplify your financial life.",
  },
  {
    id: 2,
    title: "Convenience",
    description:
      "With Natypay, you can manage your finances anytime, anywhere by eliminating the need to visit a bank or service provider.",
  },
  {
    id: 3,
    title: "Security",
    description:
      "We prioritize the security of your financial information, by employing advanced encryption and fraud detection technologies to safeguard your transactions, giving you peace of mind",
  },

  {
    id: 4,
    title: "Customer Support",
    description:
      "Our dedicated support team is always ready to help. Whether you have a question about a transaction or need assistance with our services, we are here to provide prompt and effective solutions.",
  },
];

export const CoreValuesData = [
  {
    id: 1,
    title: "Customer-Centricity",
    image: images.about.coreValues1,
    description:
      "At the heart of everything we do is our commitment to our customers. We listen to their needs, understand their challenges, and tailor our services to provide the best possible solutions",
  },
  {
    id: 2,
    title: "Innovation",
    image: images.about.coreValues2,
    description:
      "We believe in the power of technology to transform lives. Natypay is built on a foundation of continuous innovation, leveraging the latest advancements in fintech to offer cutting-edge services",
  },
  {
    id: 3,
    title: "Integrity",
    image: images.about.coreValues3,
    description:
      "Trust is the cornerstone of our business. We operate with the highest standards of honesty, transparency, and ethical behavior.",
  },

  {
    id: 4,
    title: "Inclusivity",
    image: images.about.coreValues1,
    description:
      "We are dedicated to making financial services accessible to all Nigerians, regardless of their location or economic status",
  },
];

export const SidebarData = [
  {
    id: 1,
    data: [
      {
        id: 1,
        title: "Dashboard",
        path: "/user/dashboard",
        icon: RxDashboard,
      },
      {
        id: 2,
        title: "Send Money",
        path: "/user/send-money",
        icon: IoWalletOutline,
      },
      {
        id: 3,
        title: "Withdraw",
        path: "/user/withdraw",
        icon: PiHandWithdraw,
      },
      {
        id: 4,
        title: "Airtime",
        path: "/user/airtime",
        icon: PiCellSignalFullBold,
      },

      {
        id: 5,
        title: "Internet",
        path: "/user/internet",
        icon: FaWifi,
      },
    ],
  },
  {
    id: 2,
    data: [
      {
        id: 1,
        title: "Bills Payment",
        path: "/user/bills-payment",
        icon: LiaMoneyBillWaveSolid,
      },

      {
        id: 2,
        title: "Wallet",
        path: "/user/wallet",
        icon: LuTicket,
      },
      {
        id: 3,
        title: "Transactions",
        path: "/user/transactions",
        icon: TfiList,
      },

      {
        id: 4,
        title: "Cards",
        path: "/user/cards",
        icon: CiCreditCard1,
      },
    ],
  },
  {
    id: 3,
    data: [
      {
        id: 1,
        title: "Savings",
        path: "/user/savings",
        icon: LiaPiggyBankSolid,
      },
      {
        id: 2,
        title: "Invest",
        path: "/user/invest",
        icon: GiSettingsKnobs,
      },
    ],
  },
  {
    id: 4,
    data: [
      {
        id: 1,
        title: "Settings",
        path: "/user/settings",
        icon: IoSettingsOutline,
      },
      {
        id: 2,
        title: "Logout",
        path: "/logout",
        icon: FiLogOut,
      },
    ],
  },
];

export const DashboardSortList = [
  {
    id: 1,
    label: "All Time",
    value: "all",
  },
  {
    id: 2,
    label: "Today",
    value: "today",
  },
  {
    id: 3,
    label: "Last 7 days",
    value: "week",
  },
  {
    id: 4,
    label: "This Month",
    value: "month",
  },
  {
    id: 5,
    label: "This Year",
    value: "year",
  },
];
