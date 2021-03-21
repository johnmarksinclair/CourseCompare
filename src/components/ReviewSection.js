import { Toast } from "react-bootstrap";

const ReviewSection = (props) => {
  let reviewData = props.data;

  const NoReviews = () => {
    return <div>No Reviews</div>;
  };

  const Review = (props) => {
    let data = props.data;
    return (
      <Toast animation={false}>
        <Toast.Header closeButton={false}>
          {/* <img src={props.img} className="rounded mr-2 h-8 w-8" alt="" /> */}
          <strong className="mr-auto">
            {data.author} - {data.rating}
          </strong>
          <small>date</small>
        </Toast.Header>
        <Toast.Body className="px-2 py-1">{data.body}</Toast.Body>
      </Toast>
    );
  };

  return (
    <div className="p-8 space-y-4">
      <div className="flex space-x-4">
        <div className="text-2xl pb-2">Reviews</div>
        <button
          className="homebtn bump"
          onClick={() => console.log("clicked add review")}
        >
          New Review
        </button>
      </div>
      {reviewData.length > 0 ? (
        reviewData.map((review) => <Review data={review} key={review.id} />)
      ) : (
        <NoReviews />
      )}
    </div>
  );
};

export default ReviewSection;
