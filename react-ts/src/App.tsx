import Heading from './components/Heading';
import { Section } from './components/Section';
import Counter from './components/Counter';
import { useState } from 'react';
import List from './components/List';

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <Heading title='vite react typescript' />
      <Section title={'My title'}>This is my Section.</Section>
      <Counter setCount={setCount}>Count is {count}</Counter>
      <List
        items={['☕ Coffee', '🌮 Tacos', '💻 Code']}
        render={(item: string) => <span className='gold bold'>{item}</span>}
      />
    </>
  );
}

export default App;
