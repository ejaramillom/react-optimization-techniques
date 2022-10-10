# optimization using useMemo

you usually use this hook when you want to avoid resource intensive tasks such as sorting, for example, a list of hard coded numbers in an array (the array always changes because it is on the heap, not on the stack)

for example:

import React, { useMemo } from 'react';

const { items } = props;

const sortedList = useMemo(() => {
  console.log('Items sorted');
  return items.sort((a, b) => a - b);
}, [items]);

and in the App component (main component) one should use useMemo for the array that is being passed as a prop to sorted list component

const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

<DemoList title={listTitle} items={listItems}>