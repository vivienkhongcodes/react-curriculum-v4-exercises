export default function SnackList() {
  const snacks = [
    { name: 'Nachos', rank: 5 },

    { name: 'Cereal', rank: 4 },

    { name: 'Fruits', rank: 3 },

    { name: 'Yogurt', rank: 2 },

    { name: 'Potstickers', rank: 1 },
  ];

  const sortedSnacks = snacks.toSorted(
    (snackA, snackB) => snackA.rank - snackB.rank
  );

  return (
    <div>
      <h2>List of Snacks</h2>

      <ul>
        {sortedSnacks.map((item) => (
          <li key={item.rank}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
