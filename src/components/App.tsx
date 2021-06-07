import { useMemo, useState } from 'react';
import { Box } from './Box';
import { Controls } from './Controls';
import { Result } from './Result';

function App() {
  const [amount, setAmount] = useState(0)

  const renderChildren = useMemo(() => {
    const elementsToRender = []
    for (let i = 0; i < amount; i++) {
      elementsToRender.push(<Box key={i.toString() + Math.random()}/>)
    }
    return elementsToRender
  }, [amount])

  return (
    <div>
      <Controls 
        addButton={{
          onClick: () => setAmount(amount + 1)
        }}
        removeButton={{
          onClick: () => {
            amount > 0 && setAmount(amount - 1)
          }
        }}
      />

      <Result>
        {renderChildren}
      </Result>
    </div>
  );
}

export default App;
