/**
 * 클래스
 */

let studentA = {
  name: "이연서",
  grade: "A+",
  age: 25,
  study() {
    console.log("열심히 공부함");
  },
  introduce() {
    console.log("안녕하세요!");
  },
};

class Student {
  // 필드
  name;
  grade;
  age;

  // 생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 메서드
  study() {
    console.log("열심히 공부함");
  }

  introduce() {
    console.log(`안녕하세요! ${this.name}입니다!`);
  }
}

// let studentB = new Student("이연서", "A+", 25);
// console.log(studentB);

class StudentDeveloper extends Student {
  // 필드
  //   name;
  //   grade;
  //   age;
  favoriteSkill;

  // 생성자
  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age);
    // this.name = name;
    // this.grade = grade;
    // this.age = age;
    this.favoriteSkill = favoriteSkill;
  }

  // 메서드
  //   study() {
  //     console.log("열심히 공부함");
  //   }

  //   introduce() {
  //     console.log(`안녕하세요! ${this.name}입니다!`);
  //   }

  progamming() {
    console.log(`${this.favoriteSkill}로 프로그래밍함`);
  }
}

const studentDeveloper = new StudentDeveloper("이연서", "B+", 25, "TypeScript");
console.log(studentDeveloper);
studentDeveloper.progamming();

// 클래스를 이용해서 만든 객체 -> 인스턴스
// 스튜던트 인스턴스
// let studentB = new Student("이연서", "A+", 25);
// console.log(studentB);
// studentB.study();
// studentB.introduce();
