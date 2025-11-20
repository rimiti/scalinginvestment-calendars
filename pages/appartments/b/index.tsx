import Head from "next/head";
import Calendar from "../../../components/Calendar";

const calendar = () => {
    return <>
        <Head>
            <title>Calendrier: B</title>
        </Head>
        <Calendar
            url="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Europe%2FParis&showTz=0&showCalendars=0&showPrint=0&showTitle=0&hl=fr_FR&src=ZDg1NTNkODE2ZWJmYmNmNTg5ODc2NGRkOGM4ZTc4YzFmYzk1Yzk0NjU3ZTA0ZmNjMGI2MmVkMTNhMzBkZjBkM0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=M2U4ZTNhYWVhZDRiODM3OGZkNDAzN2E3NGMzZDEwNGJlODA5MzZhZDk3MzY1MGEwZmMwYWEwYjdjYTdhMGM0NEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23ef6c00&color=%23ef6c00"/>
    </>
}

export default calendar;
