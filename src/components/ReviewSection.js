import { Toast } from "react-bootstrap";

const ReviewSection = (props) => {
  let reviewData = props.data;

  const NoReviews = () => {
    return <div className="pl-3">No Reviews</div>;
  };

  const Review = (props) => {
    let data = props.data;

    return (
      <div className="">
        <Toast animation={false}>
          <Toast.Header closeButton={false}>
            {/* <img src={props.img} className="rounded mr-2 h-8 w-8" alt="" /> */}
            <div className="mr-auto font-semibold pr-0">{data.author}</div>
            <strong>{data.rating}/5</strong>
          </Toast.Header>
          <Toast.Body className="px-2 py-1">{data.body}</Toast.Body>
        </Toast>
      </div>
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
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {reviewData.length > 0 ? (
          reviewData.map((review) => <Review data={review} key={review.id} />)
        ) : (
          <NoReviews />
        )}
      </div>
    </div>
  );
};

export default ReviewSection;
