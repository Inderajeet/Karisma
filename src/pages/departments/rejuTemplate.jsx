import React from "react";

const SkinRejuvenation = ({ data }) => {
  return (
    <div style={styles.container}>
      <h1 className="title" style={styles.mainTitle}>{data?.title}</h1>
      {data.sections && data.sections.map((section, index) => (
        <div key={index} style={styles.section}>
          <h2 className="title" style={styles.title}>{section.name}</h2>
          <p style={styles.description}>{section.description}</p>
          {section.points && (
            <ul style={styles.list}>
              {section.points.map((point, i) => (
                <li key={i} style={styles.listItem}>{point}</li>
              ))}
            </ul>
          )}
          {section.extra && <p style={styles.extra}>{section.extra}</p>}
          {section.subcategories && section.subcategories.map((sub, subIndex) => (
            <div key={subIndex} style={styles.subcategory}>
              <h3  className="title" style={styles.subtitle}>{sub.name}</h3>
              <p style={styles.description}>{sub.description}</p>
              {sub.points && (
                <ul style={styles.list}>
                  {sub.points.map((subPoint, j) => (
                    <li key={j} style={styles.listItem}>{subPoint}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "40px auto",
    padding: "20px",
  },
  mainTitle: {
    fontSize: "32px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "20px",
  },
  section: {
    marginBottom: "30px",
    padding: "20px",
    borderBottom: "1px solid #ddd",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  description: {
    fontSize: "18px",
    lineHeight: "1.6",
    marginBottom: "10px",
  },
  list: {
    paddingLeft: "20px",
  },
  listItem: {
    fontSize: "16px",
    marginBottom: "5px",
  },
  extra: {
    fontStyle: "italic",
    fontSize: "16px",
    marginTop: "10px",
  },
  subcategory: {
    marginTop: "15px",
    paddingLeft: "20px",
  },
  subtitle: {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "5px",
  },
};

export default SkinRejuvenation;
