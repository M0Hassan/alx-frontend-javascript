export default function getListStudentIds(arrayofobjects) {
    if (!Array.isArray(arrayofobjects)) {
	return [];
    }
    return arrayofobjects.map((obj) => obj.id );
}

