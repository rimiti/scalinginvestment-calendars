import Head from "next/head";
import Calendar from "../../../components/Calendar";

const calendar = () => {
    return <>
        <Head>
            <title>Calendrier: F</title>
        </Head>
        <Calendar
            url="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Europe%2FParis&showTz=0&showCalendars=0&showPrint=0&showTitle=0&hl=fr_FR&src=MGRiNTJmMjAwMTQ2MjQyNzkxYWFhMDlhMmNjYzM0ZjUxNzViYTUwMDQxYjlmNDQ0NWMwZDc0MjhlYzY3YmUzMEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=NDU0MjE0YmNlYjI4ZTIxY2Y1OTg4MWVhYTg5N2Q3Mjc1ODhkMmFlNDEzOGIyZTUzNGYyZjNiNzhmN2Y0YTZlN0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%238e24aa&color=%238e24aa"/>
    </>
}

export default calendar;
