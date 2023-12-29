import { HiStar } from "react-icons/hi";
import { HiOutlineStar } from "react-icons/hi";

const Reviews = ({ review }) => {
  return (
    <div className="my-5">
      <p className="text-xl font-semibold mb-2">{review.title}</p>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          {Array.from({ length: review.rating }).map((_, index) => (
            <HiStar key={index} />
          ))}
          {Array.from({ length: 5 - review.rating }).map((_, index) => (
            <HiOutlineStar size={14} key={index} />
          ))}
        </div>
        <p className="text-slate-500 text-sm">{review.name}</p>
      </div>
      <p>{review.critic}</p>
    </div>
  );
}

export default Reviews;