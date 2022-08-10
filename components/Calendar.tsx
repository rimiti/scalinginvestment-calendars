interface IProps {
    url: string
}

const Calendar = (props: IProps) => {
    return <iframe
        src={`${props.url}&hl=fr`}
        style={{borderWidth:0, minHeight: '600px', height: '98vh', width: '100%' }} frameBorder="0" scrolling="no"/>
}

export default Calendar;
