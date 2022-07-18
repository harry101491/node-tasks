// Part 1
// My Way
// const studentRecord = [
//   {
//     id: '1',
//     name: 'Harry',
//     course: 'computer science',
//     paidStatus: 'Paid',
//     enrollStatus: 'Not Enrolled',
//   },
//   {
//     id: '2',
//     name: 'Jeniffer',
//     course: 'social science',
//     paidStatus: 'Paid',
//     enrollStatus: 'Enrolled',
//   },
//   {
//     id: '3',
//     name: 'Kevin',
//     course: 'chemistry',
//     paidStatus: 'Not Paid',
//     enrollStatus: 'Not Enrolled',
//   },
//   {
//     id: '4',
//     name: 'Kethy',
//     course: 'computer science',
//     paidStatus: 'Not Paid',
//     enrollStatus: 'Not Enrolled',
//   },
// ];

// // printRecords
// function printRecords(idList) {
//   var students = studentRecord.filter(function findStudent(record) {
//     return idList.find(function findInIdList(id) {
//       return id == record.id;
//     });
//   });

//   students.sort();

//   students.forEach(function printRecord(student) {
//     console.log(
//       `Student ${student.name} with course: ${student.course} has paid status: ${student.paidStatus}`
//     );
//   });
// }

// // printStudentsToEnroll
// function printStudentsToEnroll() {
//   var enrolledStudents = studentRecord.filter(function findEnrolledStudents(
//     record
//   ) {
//     return record.enrollStatus == 'Enrolled';
//   });

//   var notEnrolledStudents = studentRecord.filter(
//     function findNotEnrolledButPaidStudents(record) {
//       return (
//         record.enrollStatus == 'Not Enrolled' && record.paidStatus == 'Paid'
//       );
//     }
//   );

//   return [...enrolledStudents, ...notEnrolledStudents];
// }

// // remainedUnpaid
// function remainedUnpaid(idList) {
//   var filteredIds = idList.filter(function filteredIds(id) {
//     return studentRecord.find(function findStudent(record) {
//       return record.id == id && record.paidStatus == 'Not Paid';
//     });
//   });

//   printRecords(filteredIds);
// }

// printRecords(['1', '4']);
// remainedUnpaid(['1', '2', '3']);

// Right Way

const studentRecords = [
  {
    id: 400,
    name: 'Harry',
    paid: true,
  },
  {
    id: 503,
    name: 'Jeniffer',
    paid: false,
  },
  {
    id: 501,
    name: 'Kevin',
    paid: true,
  },
  {
    id: 434,
    name: 'Kethy',
    paid: true,
  },
  {
    id: 435,
    name: 'Suzy',
    paid: true,
  },
  {
    id: 436,
    name: 'Henry',
    paid: false,
  },
  {
    id: 437,
    name: 'Bob',
    paid: false,
  },
];

var currentEnrollment = [434, 435];

// arrow function way; I like it
var getStudentById = (studentId) =>
  studentRecords.find((record) => record.id == studentId);

// function declration way
// function getStudentById(studentId) {
//   // find will get the student for me who matches the student Id
//   return studentRecords.find(function matchId(record) {
//     return studentId == record.id;
//   });
// }

function printRecords(recordIds) {
  var records = recordIds.map(getStudentById);

  // arrow function
  records.sort((record1, record2) => {
    if (record1.name < record2.name) {
      return -1;
    } else if (record1.name > record2.name) {
      return 1;
    } else {
      return 0;
    }
  });

  //   records.sort(function sortByNameAsc(record1, record2) {
  //     if (record1.name < record2.name) {
  //       return -1;
  //     } else if (record1.name > record2.name) {
  //       return 1;
  //     } else {
  //       return 0;
  //     }
  //   });

  // arrow function
  records.forEach((record) =>
    console.log(
      `${record.name} (${record.id}): ${record.paid ? 'Paid' : 'Not Paid'}`
    )
  );
  //   records.forEach(function printRecords(record) {
  //     console.log(
  //       `${record.name} (${record.id}): ${record.paid ? 'Paid' : 'Not Paid'}`
  //     );
  //   });
}

function printStudentsToEnroll() {
  // arrow function
  var idsNotEnrolled = studentRecords
    .filter((record) => record.paid && !currentEnrollment.includes(record.id))
    .map((record) => record.id);

  //   var idsNotEnrolled = studentRecords
  //     .filter(function getStudents(record) {
  //       return record.paid && !currentEnrollment.includes(record.id);
  //     })
  //     .map(function getId(record) {
  //       return record.id;
  //     });

  return [...currentEnrollment, ...idsNotEnrolled];
}

function remindUnpaid(recordIds) {
  // arrow function
  var filteredIds = recordIds.filter((id) => {
    var record = getStudentById(id);
    return !record.paid;
  });

  //     var filteredIds = recordIds.filter(function filterIds(id) {
  //     var record = getStudentById(id);
  //     return !record.paid;
  //   });

  printRecords(filteredIds);
}
