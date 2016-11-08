Store = {teachers: []}
const Teacher = (function createTeacher() {
  let id = 0
  return class {
    constructor(name, hometown) {
      this.name = name;
      this.hometown = hometown;
      this.id = ++id
      Store.teachers.push(this)
      var li = $(`<li>Name: ${this.name}, Hometown: ${this.hometown}</li>`).attr("id", `${this.id}`)

      $("#list").append(li)
    }
  }
}())

function submit() {
  let name = $("input[name='teacher[name]']").val()
  let hometown = $("input[name='teacher[hometown]']").val()
  $("input[name='teacher[name]']").val("")
  $("input[name='teacher[hometown]']").val("")
  teacher = new Teacher (name, hometown)


}
