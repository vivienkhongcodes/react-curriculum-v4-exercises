//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  //add variables here
  const name = 'Vivien';
  const age = 'a non-traditional student';
  const hobbies = ['Zumba', 'Reading', 'Languages', 'Birding', 'Movies'];
  return (
    <div>
      <h1>About Me</h1>
      {/* add JSX here */}
      <p>
        {' '}
        Salve! My name is {name}. I am {age} with a background in education and
        e-commerce, and am so excited to be learning React. It is indeed a dream
        come true! Besides coding, I love to explore cultures by learning
        languages as well as new technologies through Code the Dream. In
        addition, my hobbies are:{' '}
      </p>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
