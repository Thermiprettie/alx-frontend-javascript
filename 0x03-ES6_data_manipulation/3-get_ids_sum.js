export default function getStudentIdsSum(students) {
  return students.reduce((acmlt, curnt) => acmlt + curnt.id, 0);
}
