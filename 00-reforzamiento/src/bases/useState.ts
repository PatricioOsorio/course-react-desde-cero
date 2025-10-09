export function useState(value: string) {
  const handleNewName = (newValue: string) => {
    console.log(newValue);
  };

  return [value, handleNewName] as const;
}

const [name, setName] = useState('initial value');

console.log(name);
console.log(setName('updated'));
