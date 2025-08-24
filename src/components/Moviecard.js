import { bg_card_img } from "../utils/constants";

const Moviecard = ({pic}) => {
  return (
    <div className="w-52 mr-2 pr-2 hover:cursor-pointer ">
     <img src={bg_card_img+pic} className="rounded-md hover:scale-110" alt="bg_card_image"/>
        
    </div>
  )
}

export default Moviecard;
