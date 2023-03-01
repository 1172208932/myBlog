# es6

## const 标识常量

```js
const AREA = 10;
const OBJ_MAP = {
  a: 'A',
  A: 'a'
};
const PIPE_LINE = [1, 2, 3, 5, 4];
```

### 1. 不允许重复声明
```js
var arg1 = '云隐';
arg1 = '黄小杨';

// 常量
// *如何定义一个常量?
// ES5
Object.defineProperty(window, 'arg2', {
  value: '云隐',
  writable: false
});
// *会不会报错，能不能修改？
arg2 = '黄小杨';

// ES6
// *能不能被改变？ 会不会报错
const arg3 = '云隐';
arg3 = '黄小杨';

// *const可以分开声明赋值么？
const arg4;
arg4 = '云隐';

var arg5 = '云隐';
var arg5 = '黄小杨';

// const不允许重复声明
const arg5 = '云隐';
const arg5 = '黄小杨';
```

### 2. 块级作用域
```js
const PERMIT = 'true';

if(PERMIT) {
  var arg1 = '云隐';
}
console.log(arg1);

// const
if(PERMIT) {
  const arg2 = '云隐';
}
console.log(arg2);
```

### 3. 无变量提升
```js
console.log(arg3);
var arg3 =  '云隐';

// 无变量提升-先声明再使用
console.log(arg4);
const arg4 = '云隐';


var arg5 = '云隐';
console.log(window.arg5);
// const 不在window中
const arg6 = '云隐';
console.log(window.arg6);
```

### 4. dead zone
```js
const PERMIT = 'true';
if(PERMIT) {
  // 暂时性死区
  console.log(arg1);
  const arg1 = '云隐';
}
```

### 5. let
#### let 和 const 啥时候用
* bad - 优先使用let，常量时候再去使用const
* prefer - 优先使用const

### 面试附加题
```js
  // *引用类型的内部属性值无法被常量化
  const obj = {
    teacher: '云隐',
    leader: '黄小杨'
  }
  obj.teacher = '黄小杨';

  const arr = ['云隐', '黄小杨'];
  arr[0] = '黄小杨';

  // * 引用类型如何冻结 原理 - 指向地址
  // 破局 - Object.freeze();
  Object.freeze(obj); //*可否被修改？会报错么？

  // *进一步追问 - 符合类型的对象可否freeze？
  const obj2 = {
    teacher: '云隐',
    leader: '黄小杨',
    zhuawa: ['部部', '小可']
  };
  Object.freeze(obj2); // freeze无法冻结嵌套引用类型

  // *如何破局
  // freeze如何做deep化。
  // 思路： 嵌套遍历并且逐层freeze
  function deepFreeze(obj = {}) {
    Object.freeze(obj);
    (Object.key(obj) || []).forEach(key => {
      if(type obj[key] === 'object') {
        deepFreeze(obj[key]);
      }
    })
  }
```


## class 助力js更加面向对象了 - 类
```js
//传统对象 - function
function Course(teacher, course) {
  this.teacher = teacher;
  this.course = course;
}
Course.prototype.getCourse = function() {
  return `teacher: ${this.teacher}, course: ${this.course}`;
}

const course = new Course('YY', 'ES6');

// ES6
class Course {
  constructor(teacher, course) {
    this.teacher = teacher;
    this.course = course;
  }
  getCourse() {
    return `teacher: ${this.teacher}, course: ${this.course}`;
  }
}
const course = new Course('YY', 'ES6');
```

## 追问 - class本质是语法糖
### *class 是什么类型？ - function
```js
console.log(typeof Course);
```

### *class是否有prototype? - 一致
```js
console.log(Course.prototype);
```

### *class可以使用对象方法&属性么
```js
console.log(course.hasOwnProperty('teacher'));
```

### 属性定义 两种定义属性的方式： 构造器 & 顶层定义
```js
class Course {
  constructor(teacher, course) {
    this._teacher = teacher;
    this.course = course;
  }
  getCourse() {
    return `teacher: ${this._teacher}, course: ${this.course}`;
  }
  get teacher() {
    return this._teacher;
  }
  set teacher(val) {
    this._teacher = val;
  }
}
const course = new Course('YY', 'ES6');

// 意义何在？
// 1. 建立只读变量， *js如何建立只读变量
class Course1 {
  constructor(teacher, course) {
    this._teacher = teacher;
    this.course = course;
  }
  getCourse() {
    return `teacher: ${this._teacher}, course: ${this.course}`;
  }
  get teacher() {
    return this._teacher;
  }
}
const course1 = new Course1('YY', 'ES6');
course1.teacher = '222';
// 修改只读变量会报错么？ - 无法改变，但不会报错

// 2. *js中如何实现一个私有属性 - 闭包
class Course2 {
  constructor(teacher, course) {
    this._teacher = teacher;
    // 在constructor作用域中定义局部变量，内部通过闭包的形式对外暴露该变量
    let _course = 'es6';

    this.getCourse = () => {
      return _course;
    }
  }
}

class Course3 {
  #course = 'es6';
  constructor(teacher, course) {
    this._teacher = teacher;
    }
  }
  get course() {
    return `${#course}~`;
  }
  set course(val) {
    if (val) {
      this.#course = val;
    }
  }
}

// 3. 封装核心 - 适配器模式
// 底层封装好通用core服务
class Utils {
  constructor(core) {
    this._main = core;
    this._name = 'myName';
  }
  get name() {
    ...this._main.name,
    name: ${this._name}
  }
  set name(val) {
    this._name = val;
  }
}
```

### 静态方法 - 直接挂载，无需实例化即可获取
```js
  // ES5
  function Course(teacher, course) {
    this._teacher = teacher;
    this.course = course;
  }
  Course.call = function() {
    console.log('calling');
  }

  // ES6
  class Course {
    constructor(teacher, course) {
      this._teacher = teacher;
    }
    static call () {
      console.log('calling');
    }
  }
```

### 继承 - js如何继承
```js
  // ES5 继承
  function Course(teacher, course) {
    this._teacher = teacher;
    this.course = course;
  }
  Course.call = function() {
    console.log('calling');
  }
  Course.prototype.send = function() {
    console.log('sending');
  }

  // 如何继承
  // 子对象
  function Child() {
    // 初始化父类
    Course.call(this, '云隐', 'ES6');
    this.start = function() {
      console.log('starting');
    }
  }
  Child.prototype = Course.prototype;

  // ES6
  // 父类
  class Course {
    constructor(teacher, course) {
      this._teacher = teacher;
      this.course = course;
    }
    send() {
      console.log('sending');
    }
    static call() {
      console.log('calling');
    }
  }

  // 子类
  class Child extends Course {
    constructor() {
      super('云隐', 'ES6');
    }
    start() {
      console.log('starting');
    }
  }
```


## arrow_function 箭头函数
```js
  // ES5
  // 传统函数
  function sum(a, b) {
    return a + b;
  }
  // 传统函数表达式
  const sum1 = function(a, b) {
    return a + b;
  }
  sum(1, 1);
  sum1(1, 1);
```

### 箭头函数结构
```js
  // ES6
  const sum2 = (a, b) => {
    return a + b;
  }
  const sum3 = (a, b) => a + b;
  const sum4 = x => {
    // 逻辑
  };
```

### 上下文 - this
```js
  const obj2 = {
    teacher: '云隐',
    leader: '黄小杨',
    zhuawa: ['部部', '小可'],
    getTeacher: function() {
      return this.teacher;
    },
    getLeader: () => {
      return this.leader;
    },
  };

  obj2.getTeacher();
  obj2.getLeader();
```
### 追问 为何箭头函数无法get到属性 => this
### 箭头函数上下文场景
#### 1. dom操作cb
```js
  // <button id="btn"></button>
  const btn = document.querySelector('#btn');
  btn.addEventListener('click', function() {
    this.style.width = '100%';
  })
```

#### 2. 类操作
```js
  // 箭头函数无法构造类
  function Obj(teacher, leader) {
    this.teacher = teacher;
    this.leader = leader;
  }
  const Obj = (teacher, leader) => {
    this.teacher = teacher;
    this.leader = leader;
  }

  const o1 = new Obj('云隐', '黄小杨');

  // * 箭头函数可否构造原型方法 - 箭头函数无法构造原型上的方法
  Obj.prototype.course = function() {
    console.log(`${this.teacher}&${this.leader}`);
  }
  Obj.prototype.course2 = () => {
    console.log(`${this.teacher}&${this.leader}`);
  }
```

### 箭头函数的参数 - 箭头函数是没有arguments
```js
  const sum = function (a, b) {
    console.log(arguments);
  }
  const sum1 = (a, b) => {
    console.log(arguments);
  }
```
## 解构 - 解开结构
```js
// 对象型
const zhuawa = {
  teacher: '云隐',
  leader: '黄小杨'
}

const teacher = zhuawa.teacher;
const leader = zhuawa.leader;

// es6
//
const {
  teacher,
  leader
} = zhuawa;

// 数组
const arr = ['', '', '', ''];
const a = arr[0];
const b = arr[1];
// ...
//
const [a, b, c, d] = arr;
```

### 技巧 key解构
```js
  const zhuawa = {
    teacher: {
      name: '云隐',
      age: 30
    },
    leader: '黄小杨',
    name: 'es6'
  }

  // const {
  //   teacher,
  //   leader,
  //   name
  // } = zhuawa;
  //
  // key 别名
  const {
      teacher: {
        name,
        age
      },
      leader,
      name: className
  } = zhuawa;
  // name age className leader
```

### 追问 解构 使用场景/什么情况下使用过
```js
  // 数组传参
  const sum = arr => {
    let res = 0;

    arr.forEach(each => {
      res += each;
    })
  }

  // es6
  const sum = ([a, b, c]) => {
    return a + b +c;
  }

  sum([1, 1, 1]);
```

### 结合初始值
```js
  const course = ({
    teacher,
    leader,
    course = 'zhuawa'
  }) => {
    // ……
  }

  course({
    teacher: 'yy',
    leader: 'hxy',
    // course: 'es6'
  })
```

### 返回值
```js
  const getCourse = () => {
    return {
      teacher: 'yy',
      leader: 'hxy'
    }
  }

  const { teacher, leader } = getCourse();
```

### 变量交换
```js
  let a = 1;
  let b = 2;

  [b, a] = [a, b];
```

### json处理
```js
  const json = '{"teacher": "云隐", "leader": "黄小杨"}';

  const obj = JSON.parse(json);

  const {
    teacher,
    leader
  } = JSON.parse(json);
```

### ajax
```js
  ajax.get(URL).then(res => {
    let code = res.code;
    let data = res.data;
    let msg = res.msg;

    if (code === 0) {
      // ...
    }
  })

  const {
    code,
    data,
    msg
  } = res;
```

