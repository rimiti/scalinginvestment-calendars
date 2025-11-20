import Head from "next/head";
import Calendar from "../../../components/Calendar";

const calendar = () => {
    return <>
        <Head>
            <title>Calendrier: E</title>
        </Head>
        <Calendar
            url="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Europe%2FParis&showTz=0&showCalendars=0&showPrint=0&showTitle=0&hl=fr_FR&src=YzJlMGMxMzk1MGQ1MGM1ZDJmYTAwMzQyMmJmOTQwYzZjYzdhYjIwYWRhZTA4OTM5MzgwYzc2YmVmNjY5ZThiMUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZTQ1MzI2NWRkZTljN2U3N2IxN2E0NTlkYWNiOTFkNGQzZjg1NTViMjcwMTQ5YTdlMDM0ZjAyZWQyNDNlMDBlMUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23d81b60&color=%23d50000"/>
    </>
}

export default calendar;
