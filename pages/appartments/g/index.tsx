import Head from "next/head";
import Calendar from "../../../components/Calendar";

const calendar = () => {
    return <>
        <Head>
            <title>Calendrier: G</title>
        </Head>
        <Calendar
            url="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Europe%2FParis&showTz=0&showCalendars=0&showPrint=0&showTitle=0&hl=fr_FR&src=YTU4ZWU5ZDYyZWRlNjUzYmJlYzE4NDYxYTQ2MGM5ZTI1Mzc3OTVlZGI4OTU4ZjBkNDA4YTAyMjllOGM1NTRmYUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=NzdhNDk5M2I2MjcwYzgxZGY2NTlmMGM1YzIwOThmYmIwOGE3ZDgxZjc1OWE3NjhmMGFjMzc5NDQzOGNmMDU0ZUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%2333b679&color=%2333b679"/>
    </>
}

export default calendar;
