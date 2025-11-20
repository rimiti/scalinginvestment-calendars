import Head from "next/head";
import Calendar from "../../../components/Calendar";

const calendar = () => {
    return <>
        <Head>
            <title>Calendrier: C</title>
        </Head>
        <Calendar
            url="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Europe%2FParis&showTz=0&showCalendars=0&showPrint=0&showTitle=0&hl=fr_FR&src=NTVhZTQxNjBiZjg2ZGM5YTRlMjY0ZDcxZTQ4ZGI3NmM5MzlkOTliMGQ5ODVmZWQ1MGY5ZmIwODgwNTgwMDYwMkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=NDZjNTQ1Y2ZhYmNlMTgwMjBkMmZmN2IyNDQ4M2M4MGFlMjAzMWVmMDVkYzc2OWJmM2JjNmIyM2NkYWVhMDBhMEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%237986cb&color=%237986cb"/>
    </>
}

export default calendar;
