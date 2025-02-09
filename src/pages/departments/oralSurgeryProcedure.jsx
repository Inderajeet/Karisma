import React from "react";

const OralSurgeryProcedure = ({ procedures }) => {
    console.log("procedure", procedures)
  return (
    <div style={styles.container}>
      {procedures?.map((procedure, index) => (
        <div key={index} style={styles.procedure}>
          <h2 style={styles.title}>{procedure.title}</h2>
          <p style={styles.mainDescription}>{procedure.description}</p>
          {procedure?.subcategories?.map((sub, subIndex) => (
            <div key={subIndex} style={styles.subcategory}>
              <h3 style={styles.subtitle}>{sub.name}</h3>
              <p style={styles.description}>{sub.description}</p>
            </div>
          ))}
          {procedure.benefits && (<div>
            <h4 style={styles.benefitsTitle}>{procedure?.benefits_title || "Key Benefits:"}</h4>
          <ul style={styles.benefitsList}>
            {procedure?.benefits?.map((benefit, benIndex) => (
              <li key={benIndex} style={styles.benefitItem}>
                {benefit}
              </li>
            ))}
          </ul> </div>)}
        </div>
      ))}
    </div>
  );
};

// Inline Styles
const styles = {
  container: {
    maxWidth: "1200px",
    margin: "40px auto",
    padding: "20px",
    // fontFamily: "Arial, sans-serif",
  },
  procedure: {
    marginBottom: "40px",
    padding: "20px",
    borderBottom: "1px solid #ddd",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    // color: "#333",
    marginBottom: "15px",
  },
  subcategory: {
    marginBottom: "15px",
  },
  subtitle: {
    fontSize: "20px",
    fontWeight: "600",
    color: "#444",
  },
  description: {
    fontSize: "16px",
    lineHeight: "1.6",
    // color: "#555",
    marginBottom: "10px",
  },
  mainDescription: {
    fontSize: "26px",
    lineHeight: "1.6",
    // color: "#555",
    marginBottom: "10px",
  },
  benefitsTitle: {
    fontSize: "18px",
    fontWeight: "600",
    marginTop: "10px",
  },
  benefitsList: {
    paddingLeft: "20px",
  },
  benefitItem: {
    fontSize: "16px",
    color: "#666",
    marginBottom: "5px",
  },
};

export default OralSurgeryProcedure;
