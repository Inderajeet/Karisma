import React from "react";

const OralSurgeryProcedure = ({ procedures }) => {
    console.log("procedure", procedures)
  return (
    <div style={styles.container}>
      {procedures?.map((procedure, index) => (
        <div key={index} style={styles.procedure}>
          <h2 className="title" style={styles.title}>{procedure.title}</h2>
          <p style={styles.mainDescription}>{procedure.description}</p>
          {procedure?.subcategories?.map((sub, subIndex) => (
            <div key={subIndex} style={styles.subcategory}>
              <h3 className="title" style={styles.subtitle}>{sub.name}</h3>
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

const styles = {
  container: {
    maxWidth: "1000px",
    margin: "30px auto",
    padding: "20px",
  },
  procedure: {
    marginBottom: "30px",
    padding: "20px",
    borderBottom: "1px solid #ddd",
  },
  title: {
    fontSize: "26px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  mainDescription: {
    fontSize: "18px",
    lineHeight: "1.5",
    marginBottom: "10px",
  },
  subcategory: {
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "20px",
    fontWeight: "600",
    color: "#444",
  },
  description: {
    fontSize: "16px",
    lineHeight: "1.6",
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
  noData: {
    textAlign: "center",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#888",
    marginTop: "20px",
  },
};

export default OralSurgeryProcedure;
