import obr1 from '../images/omega.jpg';

export default function BlogPost({title,text,read_time,date,blog_type}) {
    return(
        <div className="grid-container5">
            <div className="item1">
                <img className="obrazok" src={obr1} alt="obrazok" />
            </div>
            <div className="item2">{title}</div>
            <div className="item3">{text}</div>
            <div className="item4">
                <p>{blog_type}</p>
                <p>{date}</p>
                <p>Čas čítania {read_time} min.</p>
            </div>
            <div className="item5"><button className="button2">ČÍTAJ VIAC</button></div>
        </div>
    );
}