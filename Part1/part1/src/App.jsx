/* Exercise 1.2 Refactored */
const App = () => {
  const course = {
    courseName: 'Half Stack application development',
    parts: [
      {
        partName: 'Fundamentals of React',
        exercises: 10
      },
      {
        partName: 'Using props to pass data',
        exercises: 7
      },
      {
        partName: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header courseName={course.courseName} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const Header = ({courseName}) => {
  return (
      <h1>{courseName}</h1>
  )
}

const Content = ({parts}) => {
  return (
    <div>
      {parts.map((part, index) => (
        <Part key={index} partName={part.partName} exercises={part.exercises} />
      ))}
    </div>
  )
}

const Part = ({partName, exercises}) => {
  return (
    <p>{partName} {exercises}</p>
  )
}

const Total = ({parts}) => {
  var total = 0
  parts.forEach(part => {
    total += part.exercises
  })
  return (
    <p>Number of exercises {total}</p>
  )
}

export default App

/********************************/
/* Exercise 1.2 more refactored */
/********************************/

/*const Header = ({course}) => {
  return (
      <h1>{course}</h1>
  )
}

const Content = ({parts}) => {
  return (
    <div>
      {parts.map((part, index) => (
        <Part key={index} partName={part.partName} exercises={part.exercises} />
      ))}
    </div>
  )
};

const Part = (part) => {
  return (
    <p>{part.partName} {part.exercises}</p>
  )
}

const Total = ({exercises}) => {
  var total = 0
  exercises.forEach(exerciseCount => {
    total += exerciseCount
  })
  return (
    <p>Number of exercises {total}</p>
  )
}

const App = () => {
  const courseName = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const course = {
    parts: [
      {
        partName: part1,
        exercises: exercises1
      },
      {
        partName: part2,
        exercises: exercises2
      },
      {
        partName: part3,
        exercises: exercises3
      }
    ]
  }

  return (
    <div>
      <Header course={courseName} />
      <Content parts={course.parts} />
      <Total exercises={[exercises1, exercises2, exercises3]} />
    </div>
  )
}

export default App */

/****************/
/* Exercise 1.2 */
/****************/

/* const Header = ({course}) => {
  return (
      <h1>{course}</h1>
  )
}

const Content = (partsAndExercises) => {
  return (
    <div>
      <Part part={partsAndExercises.part[0]} exercises={partsAndExercises.exercises[0]} />
      <Part part={partsAndExercises.part[1]} exercises={partsAndExercises.exercises[1]} />
      <Part part={partsAndExercises.part[2]} exercises={partsAndExercises.exercises[2]} />
    </div>
  )
}

const Part = (partAndExercises) => {
  return (
    <p>{partAndExercises.part} {partAndExercises.exercises}</p>
  )
}

const Total = ({exercises}) => {
  var total = 0
  exercises.forEach(exerciseCount => {
    total += exerciseCount
  })
  return (
    <p>Number of exercises {total}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part={[part1, part2, part3]} exercises={[exercises1, exercises2, exercises3]} />
      <Total exercises={[exercises1, exercises2, exercises3]} />
    </div>
  )
}

export default App */

/*****************************************************/
/* Exercise 1.1 - Version 2 Slightly more Refactored */
/*****************************************************/

/*const Header = ({course}) => {
  return (
      <h1>{course}</h1>
  )
}

const Content = (partAndExercises) => {
  return (
    <p>{partAndExercises.part} {partAndExercises.exercises}</p>
  )
}

const Total = ({exercises}) => {
  var total = 0
  exercises.forEach(exerciseCount => {
    total += exerciseCount
  })
  return (
    <p>Number of exercises {total}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part={part1} exercises={exercises1} />
      <Content part={part2} exercises={exercises2} />
      <Content part={part3} exercises={exercises3} />
      <Total exercises={[exercises1, exercises2, exercises3]} />
    </div>
  )
}

export default App */

/******************************/
/* Version 1 Refactored below */
/******************************/

/* const Header = (props) => {
  return (
      <h1>{props.course}</h1>
  )
}

const Content = (partAndExercise) => {
  return (
    <p>{partAndExercise.part} {partAndExercise.exercise}</p>
  )
}

const Total = (exercises) => {
  return (
    <p>Number of exercises {exercises.exercise1 + exercises.exercise2 + exercises.exercise3}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part={part1} exercise={exercises1} />
      <Content part={part2} exercise={exercises2} />
      <Content part={part3} exercise={exercises3} />
      <Total exercise1={exercises1} exercise2={exercises2} exercise3={exercises3} />
    </div>
  )
}

export default App */

/**************************/
/* Notes from Part1 below */
/**************************/

/* const Hello = (props) => { */ /* NOTE: First letter of React component must be capitalized */
/*  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
} */
/* In React, individual things rendered in braces must be primitive values */
/* const App = () => {
  const friends = [
    { name: 'Pete', age: 4 },
    { name: 'May', age: 10}
  ]
  const name = 'Peter'
  const age = 10
  return (
    <> */ /* { */ /* NOTE Content of React component usually requires One root element, even empty element */ /* } */
      /* <h1>Greetings</h1>
      Using static primitive types and primitive objects
      <Hello name='Maya' age={26 + 10} />
      <Hello name={name} age={age} />
      Using object friends which is not a primitive type
      <p>{friends[0].name} {friends[0].age}</p>
      <p>{friends[1].name} {friends[1].age}</p>
    </> */ /* End of Fragment - empty element - no wrapper node */
/*  )
}

export default App */

/* const Hello = () => {
  return (
    <div>
      <p>Hello world</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello />
      <Hello />
      <Hello />
    </div>
  )
}

export default App */

/* const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  console.log(now, a+b)
  return (
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
    </div>
  )
}

export default App */