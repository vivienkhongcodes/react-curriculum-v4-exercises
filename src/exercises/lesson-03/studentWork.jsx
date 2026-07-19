//Lesson-03 Component Lifecycle, Hooks, State, and Props
//Exercise: React Bug Hunt – Fix the broken components in this folder
//Import components here
import BugEffectLoop from './BugEffectLoop';
import BugProps from './BugProps';
import BugMutatedState from './BugMutatedState';

export default function StudentWork() {
  return (
    <div>
      {/* add JSX here */}
      <BugEffectLoop />
      <BugMutatedState />
      <BugProps />
    </div>
  );
}

// Select and press Ctrl +/ to comment every line

// import BugEffectLoop from './BugEffectLoop';

// export default function StudentWork() {
//   return (
//     <div>
//       {/* add JSX here */}
//       <BugEffectLoop/>
//     </div>
//   );
// }

// // Select and press Ctrl +/ to comment every line

// import BugProps from './BugProps';

// export default function StudentWork() {
//   return (
//     <div>
//       {/* add JSX here */}
//       <BugProps/>
//     </div>
//   );
// }
