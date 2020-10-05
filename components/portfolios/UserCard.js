import { shortify } from "@/utils/functions";

const UserCard = ({ user }) => {
  return (
    <div className="card subtle-shadow no-border mt-2">
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{user.jobtitle}</h6>
        <p className="card-text fs-2">{shortify(user.stack)}</p>
      </div>
      <div className="userfooter no-border">
        <small className="text-muted card-bottom">Available: Immediately</small>
      </div>
    </div>
  );
};

export default UserCard;
