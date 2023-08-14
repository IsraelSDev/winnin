import "./card.scss";
import photo from '../../assets/rectangle.jpg';


const Card = ({ post }: { post: any }) => {


    const convertToHoursAgo = (utcDate: number) => {
        let dateYear = new Date(utcDate).toLocaleDateString();
        let dateHour = new Date(utcDate).toLocaleTimeString();
        return 'enviado em ' + dateYear + ' às ' + dateHour.slice(0, 5);
    }

    console.log(post);


    const hoursAgo: string = convertToHoursAgo(post.data.created_utc);

    return (
        <>
            <a href={post.data.url ?? ''} target="_blank" rel="noreferrer">
                <div className="line" />
                <div className="d-flex align-items-center cardContainer">
                    <img src={post.data.thumb ?? photo.url} alt="" className="imgBox" />
                    <div className="descBox">
                        <h4
                            dangerouslySetInnerHTML={{ __html: post.data.title ?? 'Título do post' }}
                        ></h4>
                        <p>
                            {
                                post.data.created_utc ? hoursAgo + ' por ' + post.data.author : 'enviado há 6 horas por' + <span> 'usuário_nome'</span>
                            }
                        </p>
                        <h6>{post.data.domain ?? 'domain.com'}</h6>
                    </div>
                </div>
            </a>
        </>
    );
};

export default Card;
