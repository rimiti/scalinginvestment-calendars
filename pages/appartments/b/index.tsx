import Head from "next/head";
import Calendar from "../../../components/Calendar";

const calendar = () => {
    return <>
        <Head>
            <title>Calendrier: B</title>
        </Head>
        <Calendar
            url="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FParis&showTitle=0&showCalendars=0&src=ZWloN3VzbTdocjdkcm10YnR2ZWtrajdwYThAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=Z2xncDRkMG5vNmdnZ3Jpc21yZjYzYW0wNzRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%234285F4&color=%234285F4"/>
    </>
}

export default calendar;
