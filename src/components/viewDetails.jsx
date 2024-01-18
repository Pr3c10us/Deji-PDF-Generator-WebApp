// import {
//   PDFDownloadLink,
//   Page,
//   Text,
//   View,
//   Document,
//   StyleSheet,
// } from "@react-pdf/renderer";

// const styles = StyleSheet.create({
//   page: {
//     flexDirection: "row",
//     backgroundColor: "#E4E4E4",
//   },
//   section: {
//     margin: 10,
//     padding: 10,
//     flexGrow: 1,
//   },
// });

// const MyDoc = ({
//   setDetails,
//   details,
//   setModal,
//   detailValue,
//   setDetailValue,
// }) => (
//   <Document>
//     <Page size="A4" style={styles.page}>
//       <View style={styles.section}>
//         <Text>Section #1</Text>
//       </View>
//       <View style={styles.section}>
//         <Text>Section #2</Text>
//       </View>
//     </Page>
//   </Document>
// );

// function MyDocument({
//   setDetails,
//   details,
//   setModal,
//   detailValue,
//   setDetailValue,
// }) {
//   return (
//     <div className="App">
//       <PDFDownloadLink document={<MyDoc />} fileName="somename.pdf">
//         {({ blob, url, loading, error }) =>
//           loading ? "Loading document..." : "Download now!"
//         }
//       </PDFDownloadLink>
//     </div>
//   );
// }
// export default MyDocument;

import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  head: {
    fontSize: 18,
    marginBottom: 25,
    marginTop: 25,
    paddingLeft: 20,
    paddingVertical: 8,
    borderLeft: "5px solid #1b663e",
    color: "#1b663e",
  },
  detailWrapper: {
    // display: "flex",
    // flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  detailName: {
    fontSize: 10,
    // fontWeight: 600,
    color: "#1b663e",
  },
  detailValue: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1b663e",
  },
});

// Create Document Component
const MyDocument = ({
  setDetails,
  details,
  setModal,
  detailValue,
  setDetailValue,
  title
}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        {/* use custom title */}
        <Text style={styles.head}>{title}</Text>
        <div>
          {detailValue.map((detail, index) => (
            <div style={styles.detailWrapper}>
              <Text style={styles.detailName}>
                • {` `} {` `} {detail.det}:
              </Text>
              <Text style={styles.detailValue}>
                {` `} {` `} {` `}
                {` `} {` `}
                {detail.val}
              </Text>
            </div>
          ))}
        </div>
        
      </View>
    </Page>
  </Document>
);
export default MyDocument;
