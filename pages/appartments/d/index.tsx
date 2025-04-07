import Head from "next/head";
import Calendar from "../../../components/Calendar";

const calendar = () => {
    return <>
        <Head>
            <title>Calendrier: D</title>
        </Head>
        <Calendar
            url="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FParis&showTitle=0&showCalendars=0&src=cXNjdTIzdGgyM3FlM2VwZmhiMDVqcWFoMDhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=c2ZyYjJ1azQyMmd1ZXRhdDRvbmxoYnVkNzhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23F4511E&color=%23F4511E"/>
    </>
}

export default calendar;
