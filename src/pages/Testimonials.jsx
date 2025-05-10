export default function Testimonials() {
  const reviews = [
    { name: "Alice", role: "IT Manager", company: "TechCorp", msg: "Fast and reliable service, I got paid within hours!" },
    { name: "Bob", role: "Founder", company: "SoftByte", msg: "Their process was simple, and the payment was instant!" }
  ];

  return (
    <section id="testimonials" className="py-5 bg-dark text-white">
      <div className="container text-center">
        <h2 className="mb-4">What Our Customers Say</h2>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {reviews.map((r, i) => (
              <div key={i} className={`carousel-item ${i === 0 ? 'active' : ''}`}>
                <div className="d-block w-100 text-center p-4">
                  <p>"{r.msg}"</p>
                  <small>- {r.name}, {r.role} @ {r.company}</small>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
}