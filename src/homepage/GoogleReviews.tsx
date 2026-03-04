import React from "react";

const Reviews: React.FC = () => {
  return (
    <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2 style={{ marginBottom: "10px", fontSize: "36px", fontWeight: "800", color: "#ffffff" }}>Testimonials</h2>

      <div
        dangerouslySetInnerHTML={{
          __html:
            '<div src="https://cdn.trustindex.io/loader.js?a6ec63266a872407f336452a904"></div>',
        }}
      />

    </section>
  );
};

export default Reviews;