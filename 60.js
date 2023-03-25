const student = ['Rachel', 'John', 'Grace', 'Ducky', 'Loara']
const sortStudent = student.sort();
console.log(sortStudent);

for (let key in sortStudent) {
    console.log(`Order: ${parseInt(key)+1} Name: ${sortStudent[key]}`)
}
