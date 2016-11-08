Store = {teacher: []}
const Teacher = function createTeacher() {
  let id = 0
  return class {
    constructor(name, hometown) {
      this.name = name;
      this.hometown = hometown;
      this.id = ++id
      Store.teacher.push(this)
      var li = $("<li></li>", {id: this.id});
      $(".container ul").append(<li> name: this.name);
    }
  }
}

function submit() {
  let name = $("teacher[name]").val()
  let hometown = $("teacher[hometown]").val()
  teacher = new Teacher (name, hometown )
}
