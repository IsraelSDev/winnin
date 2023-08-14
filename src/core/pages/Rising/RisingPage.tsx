import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import { getRisingPost } from "../../services/reggedit.service";

const RisingPage = () => {

  const [listPost, setListPost] = useState([]);
  const [after, setAfter] = useState('');


  const getMoreContent = () => {
    fetchPost(after, false);
  }


  useEffect(() => {
    fetchPost();
  }, []);


  const fetchPost = (after: string = '', first = true) => {
    getRisingPost(after)
      .then((posts: any) => {
        const updatedList: any = [...listPost, ...posts.data.children];
        first ? setListPost(posts.data.children) : setListPost(updatedList)
        setAfter(posts.data.after)
      })
      .catch((err) => console.log(err))
  };

  return <>{
    listPost.length > 0 ? (
      <>{
        listPost?.map((post, i) => <Card post={post} />)
      }
        <div className="col-12 d-flex justify-content-center" style={{ borderRadius: '18px' }}>
          <button onClick={() => getMoreContent()}>+ Ver mais</button>
        </div>
      </>
    ) : <div className="d-flex justify-content-center">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>}
  </>
};

export default RisingPage;
