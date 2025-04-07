import Head from "next/head";
import Calendar from "../../../components/Calendar";

const calendar = () => {
    return <>
        <Head>
            <title>Calendrier: A</title>
        </Head>
        <Calendar
            url="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FParis&showTitle=0&showCalendars=0&src=MTRiaGc5bnJ0amFqa2xmYTdpbXY4NjMzajhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=aGhmZnNlNDl0cWFkZWk5aTM1bzY1aTcydW9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%230B8043&color=%230B8043"/>
    </>
}

export default calendar;
