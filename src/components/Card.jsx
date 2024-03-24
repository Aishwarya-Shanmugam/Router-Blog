const Card = ({ item }) => {
    // Check if the item's date matches the condition for displaying the "New" tag
    const isNew = item.month === 'June'; // Example condition
  
    return (
      <div className="col-md-3" style={{ marginBottom: "20px" }}>
        <div className="card h-100">
          <div className="h-5">
            <img src={item.image} className="card-img-top" alt="..." />
          </div>
          <div className="card-body">
            <h5 className="card-title">{item.course}</h5>
            <p className="card-text">{item.content}</p>
          </div>
          <div className="card-footer">
            <small className="text-body-secondary">{item.date} {item.month}</small>
            {isNew && <span className="badge bg-primary ms-2">New Update</span>} {/* Conditionally render the "New" tag */}
          </div>
        </div>
      </div>
    );
  };
  
  export default Card;
  