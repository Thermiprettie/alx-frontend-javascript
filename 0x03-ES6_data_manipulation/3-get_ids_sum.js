export default function getStudentIdsSum(arr) {
	  return arr.reduce((acmlt, curnt) => acmlt + curnt.id, 0);
}
