import Head from "next/head";
import Calendar from "../../../components/Calendar";

const calendar = () => {
    return <>
        <Head>
            <title>Calendrier: A</title>
        </Head>
        <Calendar
            url="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Europe%2FParis&showTz=0&showCalendars=0&showPrint=0&showTitle=0&hl=fr_FR&src=M2M4ZmFlOTU0ZWUxMmRlODM5NmViMDEwMTBlZmQ0OTBkYjI4N2U1M2VjY2FkM2U4YTZmYTZjODUwNzM0MGFkY0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=YzQyM2Y0ZWFjMGMzYTE3M2VlNDY3YWE5NWUyMjFjMmI1YzZkYzFmZDQ2ZTY0MzUyOWY1NmVlZGQwMmZjODhjN0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23e4c441&color=%23e4c441"/>
    </>
}

export default calendar;
