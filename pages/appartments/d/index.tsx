import Head from "next/head";
import Calendar from "../../../components/Calendar";

const calendar = () => {
    return <>
        <Head>
            <title>Calendrier: D</title>
        </Head>
        <Calendar
            url="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Europe%2FParis&showTz=0&showCalendars=0&showPrint=0&showTitle=0&hl=fr_FR&src=OWZiY2JjZmRlMjcxOGFhMDI1YTBlYTdlOTg5MjhmZTAyMGI5ZTc0ODc2MmYyMDFjZGZkNDgwYjBjNThjOWQzY0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZmE0ZTdjZGI2OWI0NWJkNTY1ZDhmNmMwNTA5YjFkMTk4NzMyYzA2NzlhMmE4MGNkYWQzM2ZhYjg0ZTk5YWY0ZUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23039be5&color=%23039be5"/>
    </>
}

export default calendar;
